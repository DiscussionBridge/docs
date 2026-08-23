---
title: "Alpha Setup Guide"
lastUpdated: 2026-08-23
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/ALPHA_SETUP.md"
---

Use this guide to connect an Astro or Starlight site to one Discourse forum with the Tier 1 API-only bridge.

## 1. Confirm the Discourse Target

Choose the forum, category, and tags before publishing.

For each lane, record:

- Discourse URL, such as `https://forum.example.com`
- Astro site URL, such as `https://docs.example.com`
- category ID
- tags
- comments display mode: `simple`, `full`, or `fullInteractive`
- whether companion topics should be listed or unlisted

For Starlight docs, the default source directory is `src/content/docs`. Other lanes can use paths such as `src/content/blog`, `src/content/news`, or `src/content/releases`.

For current plugin-free public production, select `simple` or `full`.
Core-only `fullInteractive` is an Alpha compatibility/development preview. Its
height ceiling cannot remove a long companion first post from the iframe's
document. Production-quality comments-only `fullInteractive` requires the
separate DiscussionBridge for Discourse plugin after installation and live
acceptance; the plugin skeleton alone is not sufficient.

## 2. Configure Discourse

In Discourse admin:

1. Create or choose a category for companion topics.
2. Create the tags the bridge will use, or make sure the API user can create them.
3. Add the Astro host as an allowed embedding host.
4. Choose the forum-owned listing policy. For Core Alpha, prefer unlisted by
   default as an interim discovery delay and forum-review convention.
5. Configure full app embeds when using `comments.display: "fullInteractive"`.

Recommended `fullInteractive` settings:

- `Embed full app`: yes
- `Embed full app signin flow`: yes when the Astro site and Discourse forum are same-site, or when SameSite cookie settings support cross-site iframe sign-in
- `Suppress third party analytics in embed`: yes when Astro owns analytics
- `Embed support markdown`: yes
- `Embed set canonical URL`: yes
- `Embed unlisted`: yes as the conservative Core baseline, with the limitation
  that Discourse may list an imported topic after its first reply; this is not a
  guaranteed manual forum-operator approval workflow
- `Embed any origin`: no unless explicitly needed
- `Embed topics list`: no unless intentionally embedding topic lists

## 3. Create the Bot User and Keys

Create a dedicated Discourse user such as `discussbridge-bot`.

For Alpha testing, the user may need moderator or admin capability depending on the features being tested. Topic creation, first-post updates, tag updates, title updates, unlisting, diagnostics, and reconciliation can require different permissions.

Use the narrowest key that works for routine publishing. Use a broader diagnostics key only for setup checks when granular keys cannot read the required Discourse metadata.

An Astro page or lane may request listed or unlisted treatment, but the forum
operator owns the final discovery policy. Until the optional DiscussionBridge
for Discourse listing-review capability is installed, do not describe
unlisted-until-reply as equivalent to manual approval. Enforceable manual
approval requires that plugin or a separately restricted category that prevents
public replies before approval.

See [KEY_MANAGEMENT.md](/key-management/).

Use this exact granular publishing/runtime key scope set:

```text
categories
  list
  show

tags
  list

topics
  write
  update
  read
  status

posts
  edit
  list

search
  show
```

Use the diagnostics/setup key for `check-discourse`, site settings/capability reads, and reconciliation when the granular publishing key cannot read the required endpoints.

## 4. Install the Package

Copy the exact GitHub prerelease tag, package asset filename, SHA-256, and npm
integrity from the accepted release record. Download the asset, verify it, and
install that same local file. From the Astro project root:

```sh
asset="astro-discussion-bridge-<exact-version>.tgz"
gh release download "<exact-tag>" --repo DiscussionBridge/astro-discussion-bridge --pattern "$asset"
printf '%s  %s\n' '<expected-sha256>' "$asset" | sha256sum -c -
npm install --save-exact "./$asset"
node -e "const p=require('./package-lock.json').packages['node_modules/astro-discussion-bridge']; console.log({resolved:p.resolved,integrity:p.integrity})"
```

Do not use an unversioned package name or npm dist-tag for Alpha. npm registry
publication is a later gate. Stop unless the lockfile resolution names that
verified local asset and its integrity equals the accepted release record. For
local package development, the demo may point to the package directory. Release
testing must use the exact verified tarball attached to the GitHub prerelease.

## 5. Configure Astro

In `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import discussionBridge from "astro-discussion-bridge";

export default defineConfig({
  integrations: [
    starlight({
      title: "Docs",
      components: {
        PageFrame: "./src/components/PageFrame.astro",
      },
    }),
    discussionBridge({
      provider: "discourse",
      preset: "starlight",
      discourseUrl: "https://forum.example.com",
      siteUrl: "https://docs.example.com",
      comments: {
        display: "full",
      },
      publishOnBuild: {
        enabled: false,
      },
    }),
  ],
});
```

For Starlight, add `Discussion` through a layout override so existing Markdown files do not need to import it individually:

```astro
---
import Default from "@astrojs/starlight/components/PageFrame.astro";
import Discussion from "astro-discussion-bridge/Discussion.astro";
---

<Default>
  <slot />
  <Discussion />
</Default>
```

## 6. Configure Credentials

Set credentials in the shell, CI secret store, or hosting provider environment. Do not commit keys.

PowerShell:

```powershell
$env:DISCOURSE_POST_AS="discussbridge-bot"
$env:DISCOURSE_API_KEY="paste-publishing-key-here"
$env:DISCOURSE_DIAGNOSTICS_API_KEY="paste-diagnostics-key-here"
```

Shell:

```sh
export DISCOURSE_POST_AS="discussbridge-bot"
export DISCOURSE_API_KEY="paste-publishing-key-here"
export DISCOURSE_DIAGNOSTICS_API_KEY="paste-diagnostics-key-here"
```

`DISCOURSE_DIAGNOSTICS_API_KEY` is optional. If it is absent, `check-discourse` uses the publishing key.
`DISCOURSE_API_USERNAME` remains available as a legacy actor fallback.

## 7. Run Setup Diagnostics

Before publishing:

```sh
DISCOURSE_DIAGNOSTICS_API_KEY=diagnostics-key \
npx astro-discussion-bridge check-discourse \
  --discourse-url https://forum.example.com \
  --api-username discussbridge-bot \
  --category-id 5 \
  --tags discussionbridge,docs \
  --page-url https://docs.example.com/example-page/
```

To test the normal granular publishing key, omit the diagnostics key. If that
key cannot read site-wide settings or capabilities, pass the forum's reviewed
limits explicitly; warnings remain evidence of what the key could not prove.

```sh
DISCOURSE_API_KEY=granular-publishing-key \
npx astro-discussion-bridge check-discourse \
  --discourse-url https://forum.example.com \
  --api-username discussbridge-bot \
  --category-id 5 \
  --tags discussionbridge,docs \
  --min-topic-title-length 15 \
  --max-topic-title-length 255 \
  --max-post-length 32000 \
  --max-tags-per-topic 6 \
  --max-tag-length 30
```

## 8. Publish Missing Topics

Dry run first:

```sh
npx astro-discussion-bridge publish-new src/content/docs \
  --discourse-url https://forum.example.com \
  --site-url https://docs.example.com \
  --category-id 5 \
  --tags discussionbridge,docs \
  --dry-run \
  --details
```

Then publish:

```sh
npx astro-discussion-bridge publish-new src/content/docs \
  --discourse-url https://forum.example.com \
  --site-url https://docs.example.com \
  --category-id 5 \
  --tags discussionbridge,docs
```

The command writes `discourseTopicId`, `discourseTopicUrl`, `discussionSourceHash`, and `discussionLastSyncedAt` to frontmatter.

## 9. Sync Existing Topics

Use `sync-existing` when pages already have `discourseTopicId`.

```sh
npx astro-discussion-bridge sync-existing src/content/docs \
  --discourse-url https://forum.example.com \
  --site-url https://docs.example.com \
  --category-id 5 \
  --tags discussionbridge,docs \
  --dry-run \
  --details
```

Remove `--dry-run` after the preview looks correct.

Use `--force` when the page content is unchanged but the companion-topic template or metadata should be rewritten.

## 10. Verify

After publishing or syncing:

- confirm the Astro page builds
- confirm the Discourse topic exists
- confirm the topic title, category, tags, and listed/unlisted state
- confirm the first post starts with reader-facing content
- confirm comments render on the Astro page
- confirm failures are visible in CLI/build output
- if `--notify-on-failure` is enabled, confirm expected recipients receive a Discourse PM

When a deployed Astro page appears stale behind a CDN, verify the CLI output first, then consider clearing Cloudflare cache or testing with a cache-bypassing request.

## 11. Support Channel

Before Alpha release, publish the support path in README, docs, package metadata, demo pages, and release notes.

Recommended Alpha split:

- GitHub issues: reproducible bugs and feature requests
- Discourse category/topic: setup questions, community discussion, examples, and operational notes
- paid help path: private setup, migration, and implementation assistance
