# Content Lanes

A content lane is an optional, connection-scoped route for applying forum-owned
publication policy to a group of platform content. It can distinguish docs,
blog posts, releases, or another editorial stream without turning the
publishing adapter into a second policy authority.

This page describes the current 0.2 Astro boundary. Earlier API-key commands,
source modes, multi-forum target fields, and portable-core lane proposals are
historical and are not accepted by the current package.

## Authority Boundary

For **To Discourse** content:

- the publishing platform owns the authoritative published item, stable native
  identity, canonical URL, body, and source-author data;
- the adapter may send one configured `lane` with that item;
- the Content Connection decides which lanes are allowed; and
- DiscussionBridge for Discourse owns the resulting category, tags,
  visibility, forum author, and topic identity.

An Astro page does not select a Discourse category or tags through current
frontmatter. Old fields such as `discourseCategoryId` and `discussionTags` are
not current 0.2 configuration.

For **From Discourse** content, the forum's category/tag rules and the
connection's destination mapping decide which native platform destination is
eligible. Initial backfill and later queue processing are adapter operations,
not Astro frontmatter lanes. See
[Adapter Operating Models](./ADAPTER_OPERATING_MODELS.md).

## Configure One Astro Lane

DiscussionBridge for Astro accepts one content root and optional lane per
integration configuration:

```js
import { defineConfig } from "astro/config";
import discussionBridge from "astro-discussion-bridge";

export default defineConfig({
  integrations: [
    discussionBridge({
      discourseUrl: "https://forum.example.com",
      siteUrl: "https://docs.example.com",
      comments: {
        display: "interactive",
      },
      publishOnBuild: {
        enabled: true,
        docsDir: "src/content/blog",
        routeBase: "blog",
        lane: "blog",
        stateFile: ".discussionbridge/astro-publication-state.json",
      },
    }),
  ],
});
```

`publishOnBuild` is default-off. The build environment must supply the exact
Content Connection ID and secret. The secret is server-only and must not enter
Astro public configuration, generated content, browser code, URLs, logs, or
support output.

The current integration does not accept `provider`, `preset`, or a
`publishOnBuild.lanes` array. If a site needs several independently configured
roots, define and verify each actual integration/build boundary rather than
copying the removed array syntax.

## Current Page Contract

A new platform-authored page may opt in with current public names:

```yaml
title: Content Lanes
discussionCommentsDisplay: interactive
discussionSync: true
authors:
  - id: astro:editor-42
    name: Example Editor
    profileUrl: https://docs.example.com/authors/example-editor/
primaryAuthor: astro:editor-42
```

Only exact boolean `discussionSync: true` authorizes To Discourse work.
`draft: true` or `published: false` prevents it. Interactive publication also
requires the page to be part of the configured published content root.

After resolution, the adapter preserves the complete durable tuple:

- `discussionbridgeExternalId`;
- `discussionbridgeResourceId`;
- `discourseTopicId`; and
- `discourseTopicUrl`.

Do not delete, regenerate, partially copy, or hand-reassign that tuple. A
canonical URL move is a separately verified migration that retains the same
external ID, Bridge Record, topic, and replies.

The historical `fullInteractive` value is accepted only as an input alias.
New frontmatter and generated output use `interactive`.

## Route Base And Canonical Identity

`routeBase` must match the route the site actually publishes. For example,
`src/content/blog/community.md` with `routeBase: "blog"` is expected to own
`/blog/community/` under the configured `siteUrl`.

The canonical public URL is part of the durable Bridge identity. Review it
before the first authenticated build. Do not use a different route base merely
to obtain a desired forum category; category policy belongs to the Content
Connection.

## Existing Full Embed Adoption

A plugin-free Full page may later upgrade to Interactive without creating a
replacement topic. If its frontmatter contains an exact
`discourseTopicId`/`discourseTopicUrl` pair and no Bridge tuple, the adapter may
ask DiscussionBridge for Discourse to adopt it. Adoption succeeds only when
Discourse Core already attests that the same canonical page URL owns that
available unlisted embed topic.

A manually selected Simple topic is not automatically adoptable. A connection
credential is not authority to claim an arbitrary topic.

## From Discourse Native Pages

`discussionbridge-astro sync-publications` creates or updates explicitly
authorized native Astro pages. Generated records use `discussionSync: false`,
retain the source resource/topic/revision identity, and use Interactive for the
same topic's replies. They are not converted into writable To Discourse pages
by changing one boolean.

After the initial backfill, use the protected two-phase queue commands:

```shell
discussionbridge-astro prepare-publication-work \
  --docs-dir src/content/docs \
  --state-file /protected/discussionbridge/astro-publication-work.json \
  --site-url https://docs.example.com/ \
  --limit 20

# Build and deploy the exact prepared source, then:
discussionbridge-astro finalize-publication-work \
  --docs-dir src/content/docs \
  --state-file /protected/discussionbridge/astro-publication-work.json \
  --site-url https://docs.example.com/
```

Finalization acknowledges only the exact publicly verified revision or verified
absence. Preserve the protected state file while leases exist.

## Several Destinations

One Discourse topic may be published through several independent Content
Connections. Each destination keeps its own credential, stable platform ID,
canonical URL, presentation mode, queue state, and retry history. This is not a
single Astro page writing to an ordered list of forums, and replies from those
destinations are not merged.

Removed fields such as `discussionTargets`, `discussionPublishTargets`,
`discussionSourceTarget`, `discussionTargetBindings`, and
`discussionPrimaryTarget` are not current 0.2 inputs.

## Platform Tags And Discussion Policy

Astro content tags remain site/template metadata. DiscussionBridge does not
assume a universal Astro taxonomy or automatically turn those tags into forum
tags. Forum tags and categories belong to the receiving Content Connection and
its lane policy.

## Verification Checklist

For each current lane:

1. verify the exact `docsDir`, `routeBase`, `siteUrl`, and canonical page URL;
2. verify the Content Connection allows the lane and owns the intended forum
   policy;
3. run a production build with `publishOnBuild` still default-off first;
4. protect the connection credential and durable state file;
5. enable only the intended lane and verify the returned resource/topic tuple;
6. verify the platform page, source attribution, and selected comments mode;
7. verify an exact retry is idempotent; and
8. use the documented URL-migration workflow rather than changing identity
   fields after a route move.
