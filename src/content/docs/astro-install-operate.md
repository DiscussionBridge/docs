---
title: "Install And Operate DiscussionBridge For Astro"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/ASTRO_INSTALL_OPERATE.md"
---

DiscussionBridge for Astro can be used in two materially different ways. Pick
the smaller path that meets the site's needs.

| Astro job | DiscussionBridge for Discourse required? | Content Connection required? |
| --- | --- | --- |
| Simple public replies for an existing public topic | No | No |
| Full Discourse Core comments embed | No | No |
| Interactive comments-only Discourse application | Yes | Yes |
| Astro content creates or resolves a governed Discourse topic | Yes | Yes |
| Forum topics become native Astro content | Yes | Yes |

**Installing the Astro package does not require installing the Discourse
plugin.** Simple and Full are deliberately plugin-free. Full needs only
Discourse Core's ordinary Embeddable Host configuration. Simple needs the
public topic plus an exact CORS policy for the Astro origin. Neither mode uses
a Content Connection secret.

## Install An Exact Package

Use the immutable artifact and hash named by the selected release. Install it
with an exact dependency binding; do not deploy a moving workspace or `main`
branch. Preserve `package-lock.json`, the prior build artifact, and the last
known-good deployment before changing the package.

The package's authoritative configuration and component examples are in the
[DiscussionBridge for Astro README](https://github.com/DiscussionBridge/astro-discussion-bridge/tree/main/packages/astro-discussion-bridge).

## Plugin-Free Simple Or Full

Configure the Astro integration with comments enabled and select `simple` or
`full`. Leave `publishOnBuild` disabled. Do not add
`DISCUSSIONBRIDGE_CONNECTION_ID` or a connection secret merely to display
comments.

For Full, add the exact Astro origin under Discourse **Embeddable Hosts** and
test an ordinary Core comments embed. For Simple, verify the public topic is
readable, the forum permits the exact Astro origin through CORS, and the
bounded no-JavaScript fallback plus browser refresh both work.

There is no initial publication backfill in this path. The Astro page remains
the article and Discourse remains the discussion.

## Connected Publishing Or Interactive Discussion

Install and enable DiscussionBridge for Discourse only when the site needs
Interactive, governed To Discourse topic creation, or From Discourse content.
Create one Astro Content Connection, then place its ID and secret only in the
protected build environment:

```dotenv
DISCUSSIONBRIDGE_CONNECTION_ID=dbc_000000000000000000000000
DISCUSSIONBRIDGE_CONNECTION_SECRET_FILE=/protected/discussionbridge/astro-secret
```

Use `publishOnBuild` only for explicitly eligible Astro content. Preserve each
page's stable external identity; a path change must not invent a new identity.
Prove one create, unchanged rebuild, update, and disable/recovery cycle before
using the connection for real content.

## Optional Forum-To-Astro Initial Population

Run a forum-scale operation only when an existing eligible Discourse corpus is
supposed to become native Astro content. This is **From Discourse** work, not a
required installation step:

```text
discussionbridge-astro sync-publications \
  --docs-dir src/content/docs \
  --site-url https://site.example.com
```

After that optional initial population, use the protected two-phase queue:

```text
discussionbridge-astro prepare-publication-work \
  --docs-dir src/content/docs \
  --state-file /protected/discussionbridge/astro-publication-work.json \
  --site-url https://site.example.com/ \
  --limit 20

# Build and deploy the exact candidate, then:
discussionbridge-astro finalize-publication-work \
  --docs-dir src/content/docs \
  --state-file /protected/discussionbridge/astro-publication-work.json \
  --site-url https://site.example.com/
```

Finalize only after the exact public resource and publication revision are
visible. A controlled initial run may use a larger documented bound, but it is
still a bounded static transaction, not an unbounded loop.

The package's 1,000-page build verifier proves bounded Astro build behavior. It
does **not** prove 1,000 live platform-to-Discourse writes.

## Routine Operation

- Plugin-free Simple/Full: monitor public topic access, CORS/embed policy, and
  page presentation; there is no receiver queue to drain.
- To Discourse: monitor build-owned delivery state and the same Bridge Record;
  do not replace stable IDs after an interrupted build.
- From Discourse: monitor prepared leases, build/deployment identity, public
  revision verification, and finalization.
- Back up source, lockfile, protected state, and deployment identity together.

