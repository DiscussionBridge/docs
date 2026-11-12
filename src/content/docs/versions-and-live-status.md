---
title: "Versions And Live Status"
lastUpdated: 2026-11-12
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/VERSIONS_AND_LIVE_STATUS.md"
---

- **Release channel:** Alpha
- **Current source line:** V4
- **Source tags verified:** November 11, 2026

## V4 Alpha source tags

These GitHub tags identify the exact source revisions that passed CI. Each
component has its own tag. Use its README for package and setup instructions.
Check GitHub Releases for separately published downloads.

| Component | V4 Alpha source tag | CI |
| --- | --- | --- |
| [DiscussionBridge for Discourse](https://github.com/DiscussionBridge/discourse-discussion-bridge) | [`v0.4.0-alpha.1.receiver.2`](https://github.com/DiscussionBridge/discourse-discussion-bridge/tree/v0.4.0-alpha.1.receiver.2) | [Passed](https://github.com/DiscussionBridge/discourse-discussion-bridge/actions/runs/43107197348) |
| [DiscussionBridge Ghost Connector](https://github.com/DiscussionBridge/discourse-discussion-bridge-ghost) | [`v0.4.0-alpha.1.ghost.3`](https://github.com/DiscussionBridge/discourse-discussion-bridge-ghost/tree/v0.4.0-alpha.1.ghost.3) | [Passed](https://github.com/DiscussionBridge/discourse-discussion-bridge-ghost/actions/runs/43107194478) |
| [DiscussionBridge for Ghost](https://github.com/DiscussionBridge/ghost-discussion-bridge) | [`v0.4.0-alpha.1.ghost-adapter.1`](https://github.com/DiscussionBridge/ghost-discussion-bridge/tree/v0.4.0-alpha.1.ghost-adapter.1) | [Passed](https://github.com/DiscussionBridge/ghost-discussion-bridge/actions/runs/43107196322) |
| [WordPress](https://github.com/DiscussionBridge/wordpress-discussion-bridge) | [`v0.4.0-alpha.1.wp.3`](https://github.com/DiscussionBridge/wordpress-discussion-bridge/tree/v0.4.0-alpha.1.wp.3) | [Passed](https://github.com/DiscussionBridge/wordpress-discussion-bridge/actions/runs/43107195692) |
| [Astro and Starlight](https://github.com/DiscussionBridge/astro-discussion-bridge) | [`v0.4.0-alpha.1.astro.3`](https://github.com/DiscussionBridge/astro-discussion-bridge/tree/v0.4.0-alpha.1.astro.3) | [Passed](https://github.com/DiscussionBridge/astro-discussion-bridge/actions/runs/43107201438) |
| [Hugo](https://github.com/DiscussionBridge/hugo-discussion-bridge) | [`v0.4.0-alpha.1.hugo.4`](https://github.com/DiscussionBridge/hugo-discussion-bridge/tree/v0.4.0-alpha.1.hugo.4) | [Passed](https://github.com/DiscussionBridge/hugo-discussion-bridge/actions/runs/43107195213) |
| [Statamic Flat, DB, and SSG](https://github.com/DiscussionBridge/statamic-discussion-bridge) | [`v0.4.0-alpha.1.statamic.4`](https://github.com/DiscussionBridge/statamic-discussion-bridge/tree/v0.4.0-alpha.1.statamic.4) | [Passed](https://github.com/DiscussionBridge/statamic-discussion-bridge/actions/runs/43107195149) |

The [V4 R7 Adapter Protocol](https://github.com/DiscussionBridge/discussionbridge-adapter-contract/tree/09d77c0209835c2d996aad294d161f167c7bd838)
defines the shared wire contract and its 36 Content Connection routes.

## Sandbox and public demos

The [sandbox chooser](https://sandbox.discussionbridge.dev/) leads to
installation and configuration test environments. V4 R7 sandbox checks
covered publication and edits in both directions on Astro, Astro with
Starlight, Ghost via DiscussionBridge Ghost Connector, Hugo, WordPress, and Statamic
Flat, DB, and SSG. The source table includes later commits that passed CI. Confirm
the exact installed package or source commit when recording a sandbox result.

The [public demo chooser](https://demo.discussionbridge.dev/) links the hosted
examples. [The Bridge](https://bridge.demo.discussionbridge.dev/) is the
Discourse demonstration. Each site has its own deployment and installed
version. The September 2026 record below gives the versions observed at that
time.

## September 2026 Alpha releases and OBBBA rollout

The following release list and OBBBA installation snapshot describe the 0.2
Alpha line as recorded on September 24, 2026.

| Component | Release at the time | Availability at the time | Role |
| --- | --- | --- | --- |
| [DiscussionBridge for Discourse](https://github.com/DiscussionBridge/discourse-discussion-bridge) | [`v0.2.0-alpha.50`](https://github.com/DiscussionBridge/discourse-discussion-bridge/releases/tag/v0.2.0-alpha.50) | Published release | Receiver, Content Connections, Bridge Records, publication policy, operator UI, and cross-platform work queue |
| [DiscussionBridge for Astro](https://github.com/DiscussionBridge/astro-discussion-bridge) | [`v0.2.0-alpha.34`](https://github.com/DiscussionBridge/astro-discussion-bridge/releases/tag/v0.2.0-alpha.34) | Published release | Astro and Starlight publishing, retrieval, and comments presentation |
| [DiscussionBridge for Ghost](https://github.com/DiscussionBridge/ghost-discussion-bridge) | [`v0.2.0-alpha.36`](https://github.com/DiscussionBridge/ghost-discussion-bridge/releases/tag/v0.2.0-alpha.36) | Published release | Ghost integration plus bounded hosting-layer publication worker |
| [DiscussionBridge for Hugo](https://github.com/DiscussionBridge/hugo-discussion-bridge) | [`v0.2.0-alpha.32`](https://github.com/DiscussionBridge/hugo-discussion-bridge/releases/tag/v0.2.0-alpha.32) | Published release | Hugo content materialization and two-phase static deployment |
| [DiscussionBridge for Statamic](https://github.com/DiscussionBridge/statamic-discussion-bridge) | [`v0.2.0-alpha.46`](https://github.com/DiscussionBridge/statamic-discussion-bridge/releases/tag/v0.2.0-alpha.46) | Published release | One addon used in independently configured Flat, DB, and SSG profiles |
| [DiscussionBridge for WordPress](https://github.com/DiscussionBridge/wordpress-discussion-bridge) | [`v0.2.0-alpha.42`](https://github.com/DiscussionBridge/wordpress-discussion-bridge/releases/tag/v0.2.0-alpha.42) | Published release | Native WordPress publication, retrieval, retry, and comments presentation |
| [DiscussionBridge Adapter Protocol](https://github.com/DiscussionBridge/discussionbridge-adapter-contract) | [`v0.2.0-alpha.20`](https://github.com/DiscussionBridge/discussionbridge-adapter-contract/releases/tag/v0.2.0-alpha.20) | Published release | Shared contract and conformance fixtures; no runtime installation |

### OBBBA deployment snapshot

| Visible name | Public site | Installed adapter at the time | Rollout state at the time |
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

## How to identify a version

Record the component tag for the source, the filename and checksum for a
package, and the exact version or commit observed in the environment. The
contract revision identifies the receiver and adapter compatibility boundary.
Component tags can advance independently on that contract revision.

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
Use the exact component and environment record when choosing installation instructions.

## Licensing

DiscussionBridge components use MIT unless a repository explicitly states
otherwise. DiscussionBridge for Discourse is GPL-2.0-or-later. See
[Attribution, Ownership, And Licensing](/attribution-ownership-license/) and
the authoritative `LICENSE` file in each component repository.
