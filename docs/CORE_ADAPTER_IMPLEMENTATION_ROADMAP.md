# Superseded Core/Adapter Implementation Roadmap

Status: Historical proposal; not current implementation guidance
Original decision date: 2026-07-25
Superseded by the current 0.2 Alpha architecture

This roadmap proposed extracting a portable core, adding a Discourse-hosted
control plane, retaining an API-key compatibility tier, and later moving the
same core into a standalone or SaaS host. That design was not implemented.

The current product is a native DiscussionBridge for Discourse plugin, a small
Adapter Protocol, and platform-native adapters. It does not contain the
portable-core runtime, plan/comparison/approval estate, API-key publishing
tier, deployment broker, or second orchestration authority described by the
earlier phases.

Do not use the phase gates, immediate-work sequence, internal Boss routing, or
configuration vocabulary from the superseded proposal. In particular:

- DiscussionBridge adapters authenticate with a Content Connection ID and
  server-only one-time secret, not a user-created Discourse API key.
- The Discourse plugin is the forum-side runtime authority, but it does not
  centrally deploy or operate platform adapters.
- Each adapter owns its platform-native lifecycle, persistence, retry, build,
  deployment, and recovery boundary.
- The Adapter Protocol is a wire contract and fixture set, not a portable-core
  process or SDK runtime.
- Astro, Ghost, Hugo, WordPress, and Statamic Flat, DB, and SSG are implemented
  Alpha profiles rather than future phases of this roadmap.

Use these current documents instead:

- [Product And Adapter Architecture](./CORE_ADAPTER_ARCHITECTURE.md)
- [Platform Profiles](./PLATFORM_PROFILES.md)
- [Adapter Operating Models](./ADAPTER_OPERATING_MODELS.md)
- [Draft Roadmap](./DRAFT_ROADMAP.md)
- [Versions And Live Status](./VERSIONS_AND_LIVE_STATUS.md)

The original decision text remains available as historical provenance in
[`docs/evidence/DISCUSSION_BRIDGE_DISCOURSE_CENTERED_DOCTRINE_2026-07-25.md`](./evidence/DISCUSSION_BRIDGE_DISCOURSE_CENTERED_DOCTRINE_2026-07-25.md).
Historical provenance does not override current package behavior or authorize
future product scope.
