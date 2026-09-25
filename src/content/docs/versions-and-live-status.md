---
title: "Versions And Live Status"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/VERSIONS_AND_LIVE_STATUS.md"
---

- **Last reviewed:** September 24, 2026
- **Release channel:** Alpha
- **Adapter compatibility line:** `0.2`

This page separates four facts that are easy to confuse:

1. a public source branch can move;
2. a tagged release is immutable;
3. an installed demo can intentionally run a different exact version; and
4. a successful installation is not the same as complete product-family
   acceptance.

Use the exact tag and artifact recorded for the component you install. Do not
use an unversioned `main` checkout as a production identity.

## Current Validated Component Line

The table records the latest exact component candidates validated for the
current OBBBA rollout. It is not a promise that every older sandbox or classic
demo has already been upgraded to the same tag.

| Component | Validated tag | Availability | Current role |
| --- | --- | --- | --- |
| [DiscussionBridge for Discourse](https://github.com/DiscussionBridge/discourse-discussion-bridge) | [`v0.2.0-alpha.50`](https://github.com/DiscussionBridge/discourse-discussion-bridge/releases/tag/v0.2.0-alpha.50) | Published release | Receiver, Content Connections, Bridge Records, publication policy, operator UI, and cross-platform work queue |
| [DiscussionBridge for Astro](https://github.com/DiscussionBridge/astro-discussion-bridge) | [`v0.2.0-alpha.34`](https://github.com/DiscussionBridge/astro-discussion-bridge/releases/tag/v0.2.0-alpha.34) | Published release | Astro and Starlight publishing, retrieval, and comments presentation |
| [DiscussionBridge for Ghost](https://github.com/DiscussionBridge/ghost-discussion-bridge) | [`v0.2.0-alpha.36`](https://github.com/DiscussionBridge/ghost-discussion-bridge/releases/tag/v0.2.0-alpha.36) | Published release | Ghost integration plus bounded hosting-layer publication worker |
| [DiscussionBridge for Hugo](https://github.com/DiscussionBridge/hugo-discussion-bridge) | [`v0.2.0-alpha.32`](https://github.com/DiscussionBridge/hugo-discussion-bridge/releases/tag/v0.2.0-alpha.32) | Published release | Hugo content materialization and two-phase static deployment |
| [DiscussionBridge for Statamic](https://github.com/DiscussionBridge/statamic-discussion-bridge) | [`v0.2.0-alpha.46`](https://github.com/DiscussionBridge/statamic-discussion-bridge/releases/tag/v0.2.0-alpha.46) | Published release | One addon used in independently configured Flat, DB, and SSG profiles |
| [DiscussionBridge for WordPress](https://github.com/DiscussionBridge/wordpress-discussion-bridge) | [`v0.2.0-alpha.42`](https://github.com/DiscussionBridge/wordpress-discussion-bridge/releases/tag/v0.2.0-alpha.42) | Published release | Native WordPress publication, retrieval, retry, and comments presentation |
| [DiscussionBridge Adapter Protocol](https://github.com/DiscussionBridge/discussionbridge-adapter-contract) | [`v0.2.0-alpha.20`](https://github.com/DiscussionBridge/discussionbridge-adapter-contract/releases/tag/v0.2.0-alpha.20) | Published release; Alpha.21 working candidate is not published | Shared contract and conformance fixtures; no runtime installation |

The Adapter Protocol Alpha.21 work is not a public release yet. Its pending
candidate includes the clarified MIT license and current publication-work
contract. Documentation must not present it as downloadable until its coherent
tag and artifact are published.

## OBBBA Demonstration Rollout

The forum-scale OBBBA rollout is a real-world Alpha exercise. Status below was
verified September 24, 2026. The non-Astro backfill is still processing, so
publication counts change while the platform pages remain available for
inspection.

| Visible name | Public site | Installed adapter | Rollout state |
| --- | --- | --- | --- |
| OBBBA Astro Demo with DiscussionBridge for Astro | [Open](https://obbba-astro.demo.discussionbridge.dev/) | `v0.2.0-alpha.34` | Backfill complete; steady-state synchronization |
| OBBBA Ghost Demo with DiscussionBridge for Ghost | [Open](https://obbba-ghost.demo.discussionbridge.dev/) | `v0.2.0-alpha.36` | Backfill in progress |
| OBBBA Hugo Demo with DiscussionBridge for Hugo | [Open](https://obbba-hugo.demo.discussionbridge.dev/) | `v0.2.0-alpha.32` | Backfill in progress |
| OBBBA Statamic Flat Demo with DiscussionBridge for Statamic | [Open](https://obbba-statamic-flat.demo.discussionbridge.dev/) | `v0.2.0-alpha.46` | Backfill in progress |
| OBBBA Statamic DB Demo with DiscussionBridge for Statamic | [Open](https://obbba-statamic-db.demo.discussionbridge.dev/) | `v0.2.0-alpha.46` | Backfill in progress |
| OBBBA Statamic SSG Demo with DiscussionBridge for Statamic | [Open](https://obbba-statamic-ssg.demo.discussionbridge.dev/) | `v0.2.0-alpha.46` | Backfill in progress; protected static transaction model |
| OBBBA WordPress Demo with DiscussionBridge for WordPress | [Open](https://obbba-wordpress.demo.discussionbridge.dev/) | `v0.2.0-alpha.42` | Backfill in progress |

The OBBBA source forum is the
[Repeal OBBBA Forum](https://forum.repealobbba.org/). These demonstrations are
evidence of platform behavior, not templates for a forum's politics, content
policy, or visual identity.

## Other Public Demonstrations

The [demo chooser](https://demo.discussionbridge.dev/) is the stable entry point
for maintained public examples. The dedicated demo at
[The Bridge](https://bridge.demo.discussionbridge.dev/) demonstrates
DiscussionBridge for Discourse. “The Bridge” is the demo name, not the generic
name of the plugin or receiver.

A `Live` page proves that the stated public surface is reachable. It does not,
by itself, prove the latest tag, every publishing direction, every presentation
mode, rollback readiness, or completion of the current OBBBA backfill.

## How To Read Version Numbers

DiscussionBridge exposes three related identities:

1. **Release channel:** Alpha, Beta, or stable product-family maturity.
2. **Adapter compatibility line:** the receiver/protocol boundary an adapter
   implements, currently `0.2`.
3. **Component release:** the exact plugin, adapter, addon, or protocol tag and
   artifact installed in one environment.

Components can advance independently while remaining on the same compatibility
line. A newer component number does not imply a new family-wide release, and
matching component numbers do not prove matching source bytes.

## Installation And Support Evidence

Record all of the following for an installation or support report:

- component repository and exact tag;
- installed version reported by the component;
- artifact filename and checksum when a packaged artifact is used;
- platform/framework and runtime versions;
- Content Connection identity without its secret;
- publishing direction and presentation mode;
- environment role: demo, sandbox, preproduction, or production; and
- the exact public page and forum topic used for verification.

Historical releases, checksums, and source commits remain available in each
repository's GitHub Releases and in the public
[versions discussion](https://bridge.demo.discussionbridge.dev/t/discussionbridge-versions-and-live-status/62).
They are release evidence, not current installation instructions.

## Licensing

DiscussionBridge components use MIT unless a repository explicitly states
otherwise. DiscussionBridge for Discourse is GPL-2.0-or-later. See
[Attribution, Ownership, And Licensing](/attribution-ownership-license/) and
the authoritative `LICENSE` file in each component repository.
