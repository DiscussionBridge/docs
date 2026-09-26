---
title: "Demo Guide"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/DEMO_PLAN.md"
---

DiscussionBridge demos show how the same Discourse-centered publication model
fits different publishing platforms without erasing each platform's native
content, routes, presentation, or operating model.

Start at the [demo chooser](https://demo.discussionbridge.dev/). Exact component
versions, rollout state, and current acceptance boundaries are recorded in
[Versions And Live Status](/versions-and-live-status/).

## What To Explore

### DiscussionBridge For Discourse

[The Bridge](https://bridge.demo.discussionbridge.dev/) is the dedicated
DiscussionBridge for Discourse demonstration. **The Bridge is the demo name, not
the generic name of the plugin or receiver.**

Use it to inspect Content Connections, Bridge Records, publication policy, and
Discourse-owned content selected for publication to connected platforms.

### Platform Demonstrations

The chooser links maintained demonstrations for Astro, Ghost, Hugo, Statamic,
and WordPress. Statamic is shown through its independently configured Flat, DB,
and SSG profiles.

On a platform demo, look for:

- a native platform content object and canonical route;
- a visible source or discussion relationship;
- a clear route back to the demo home or publication index;
- the presentation mode used for discussion; and
- platform-native presentation with restrained, consistent DiscussionBridge
  identification.

The OBBBA demonstrations are a real-world Alpha exercise and may be processing
an active backfill. They demonstrate platform behavior; they are not templates
for a forum's politics, editorial policy, or visual identity.

They also do not yet demonstrate a complete publishing-platform replacement.
The planned **Change Platforms, Keep The Discussion** proof will migrate one
representative record in each direction between two bidirectional platform
connections. It will preserve both Bridge resources, topics, replies, and
moderation histories; cut over the From Discourse destination; transfer the To
Discourse source binding; verify old URL redirects and new canonical routes;
deny the retired connection; and exercise coordinated rollback. The acceptance
plan and current evidence boundary are in
[Change Platforms, Keep The Discussion](/change-platforms-keep-discussion/).

The demos likewise do not yet prove a DiscussionBridge Network. The planned
qualification uses dedicated categories on three existing live forums—one hub
and two spokes—to demonstrate one-to-many fanout, explicit spoke-to-hub
publication, independent directional records, category-only scope, and loop
prevention. It is a separate planned capability, not an eighth CMS scale-test
site and not evidence of synchronized replies or moderation across forums.

## Publication Directions

DiscussionBridge keeps the direction explicit:

- **To Discourse:** a publishing platform owns the article or page and connects
  it to a Discourse topic.
- **From Discourse:** an authorized Discourse topic is materialized as native
  content on a connected publishing platform.

One direction does not imply unrestricted synchronization in the other.
Single-writer rules protect the owning source, and exact retries should reuse
the same durable identities instead of creating duplicate topics or pages.

## Presentation Modes

Depending on the platform and route, a demo may use Simple, Full, or Interactive
discussion presentation. These modes have different rendering, availability,
and authentication boundaries. See
[Presentation Modes](/presentation-modes/) before comparing them.

## What A Demo Proves

A reachable demo is evidence for the exact public surface and installed state
that was verified. It does not by itself prove:

- the latest component release is installed;
- every publication direction or presentation mode was exercised;
- every platform version is compatible;
- upgrade, rollback, or provider recovery is complete; or
- product-family Alpha acceptance.

A demo estate populated From Discourse is not evidence that a large existing
platform corpus can be imported To Discourse. That direction still requires an
adapter-specific scale qualification.

Use the dated status record rather than inferring those claims from appearance
alone.

## Demo Ownership

Each deployable demo application owns its site-specific source, configuration,
and deployment record. The corresponding component repository owns the plugin,
adapter, addon, tests, and release lifecycle. The DiscussionBridge site and docs
own the chooser, public explanation, and links.

Do not copy a component implementation or demo application into another
repository merely for deployment convenience. A separate deployable repository
should be an explicit, documented boundary.

## Common Presentation Standard

Maintained public demos should provide:

- visible platform and DiscussionBridge naming;
- a usable route out of every detail page without relying on the browser Back
  button;
- correct DiscussionBridge, CodeWorksLabs, and WebSynergetics attribution;
- restrained branding that preserves the platform's recognizable native
  experience; and
- analytics configured by the owning site's deployment policy, without
  silently changing the adapter or protocol contract.

The detailed cross-platform standard and each adapter's recovery behavior are
documented in [Adapter Operating Models](/adapter-operating-models/).

## Problems Or Feedback

If a demo is unavailable, stale, misidentified, or difficult to navigate, use
[Support And Feedback](/support-and-feedback/). Include the demo URL, time of
observation, expected behavior, observed behavior, and non-secret browser or
runtime details.
