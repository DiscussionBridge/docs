---
title: "Versions And Live Status"
lastUpdated: 2026-11-12
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/VERSIONS_AND_LIVE_STATUS.md"
---

## Sandbox and public demos

The [sandbox chooser](https://sandbox.discussionbridge.dev/) leads to
installation and configuration test environments. V4 R7 sandbox checks
covered publication and edits in both directions on Astro, Astro with
Starlight, Ghost via DiscussionBridge Ghost Connector, Hugo, WordPress,
and Statamic Flat, DB, and SSG. Record the exact installed package or source
commit for each sandbox result.

The [public demo chooser](https://demo.discussionbridge.dev/) links the hosted
examples. [The Bridge](https://bridge.demo.discussionbridge.dev/) is the
Discourse demonstration. Each site has its own deployment and installed
version.

## V4 releases and OBBBA rollout

The V4 Alpha source tags below passed CI on November 11, 2026. Use the
component README for setup and check GitHub Releases for packaged downloads.

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

The [OBBBA demo hub](https://obbba.demo.discussionbridge.dev/) lists the
public OBBBA sites. Their V4 deployment status is unverified.

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
