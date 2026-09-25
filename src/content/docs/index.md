---
title: "DiscussionBridge Documentation"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/README.md"
---

DiscussionBridge connects publishing systems with Discourse while preserving
the publishing platform's native content, URLs, presentation, and operating
model. DiscussionBridge for Discourse owns Content Connections, Bridge Records,
publication policy, and the cross-platform work queue. Focused adapters connect
Astro, Ghost, Hugo, Statamic, and WordPress through the shared Adapter Protocol.

DiscussionBridge is currently **Alpha software**. Use an exact tagged component
release, preserve a rollback path, and verify both the publishing site and the
forum after every installation or upgrade. A moving `main` branch is source
code, not an immutable deployment identity.

## Choose Your Path

- **Installing or operating the product family:** start with the
  [Alpha Installation and Operator Guide](/alpha-operator-guide/), then choose
  a [Platform Profile](/platform-profiles/).
- **Understanding what an adapter creates and how it recovers:** read
  [Adapter Operating Models](/adapter-operating-models/).
- **Choosing the reader experience:** compare
  [Presentation Modes](/presentation-modes/).
- **Checking releases and demonstrations:** use
  [Versions and Live Status](/versions-and-live-status/) and the
  [Demo Guide](/demo-plan/).
- **Diagnosing an installation:** begin with
  [Troubleshooting](/troubleshooting/) and
  [Known Issues](/known-issues/).
- **Running a repeatable installation:** use the platform-neutral
  [Human Operator Manual](/human-manual/),
  [Machine Operator Manual](/machine-manual/), and runbook templates.
- **Working specifically with Astro or Starlight:** use the Astro deep-reference
  placement, comments, content-lane, and authoring guides. Those pages are not
  the generic setup path for Ghost, Hugo, Statamic, WordPress, or
  DiscussionBridge for Discourse.

## Product Components

- [DiscussionBridge for Discourse](https://github.com/DiscussionBridge/discourse-discussion-bridge)
- [DiscussionBridge for Astro](https://github.com/DiscussionBridge/astro-discussion-bridge)
- [DiscussionBridge for Ghost](https://github.com/DiscussionBridge/ghost-discussion-bridge)
- [DiscussionBridge for Hugo](https://github.com/DiscussionBridge/hugo-discussion-bridge)
- [DiscussionBridge for Statamic](https://github.com/DiscussionBridge/statamic-discussion-bridge)
- [DiscussionBridge for WordPress](https://github.com/DiscussionBridge/wordpress-discussion-bridge)
- [DiscussionBridge Adapter Protocol](https://github.com/DiscussionBridge/discussionbridge-adapter-contract)

The family license is **MIT unless a component explicitly says otherwise**.
DiscussionBridge for Discourse is GPL-2.0-or-later. See
[Attribution, Ownership, and Licensing](/attribution-ownership-license/) for
the authoritative component matrix.

## Demonstrations

The [demo chooser](https://demo.discussionbridge.dev/) links the maintained
public demonstrations. [The Bridge](https://bridge.demo.discussionbridge.dev/)
is the name of the dedicated DiscussionBridge demo; it is not the generic name
for the Discourse plugin.

See [Adapter Operating Models](/adapter-operating-models/#platform-presentation-and-analytics-standard)
for the shared demo navigation, branding, attribution, analytics, and crawler
standards.

## Documentation Map

### Operate

- [Alpha Installation and Operator Guide](/alpha-operator-guide/)
- [Platform Profiles](/platform-profiles/)
- [Adapter Operating Models](/adapter-operating-models/)
- [Presentation Modes](/presentation-modes/)
- [Human Operator Manual](/human-manual/)
- [Machine Operator Manual](/machine-manual/)
- [Human Runbook Template](/site-runbook-human-template/)
- [Machine Runbook Template](/site-runbook-machine-template/)
- [Key Management](/key-management/)
- [Troubleshooting](/troubleshooting/)
- [Known Issues](/known-issues/)
- [Support and Feedback](/support-and-feedback/)

### Astro Deep Reference

- [Legacy Astro 0.1 Migration Notice](/alpha-setup/)
- [Comments Display](/comments-display/)
- [Content Lanes](/content-lanes/)
- [Presets and Placement](/presets-and-placement/)
- [Discussion-Safe Markdown](/discussion-safe-markdown/)

### Product Reference

- [Core/Adapter Architecture](/core-adapter-architecture/)
- [Product Concepts and Terminology](/product-notes/)
- [Product Build and Launch Checklists](/build-launch-checklists/)
- [Draft Roadmap](/draft-roadmap/)
- [Attribution, Ownership, and Licensing](/attribution-ownership-license/)

### Historical Records

- [Core/Adapter Implementation Roadmap](/core-adapter-implementation-roadmap/)
- [Discourse Field Notes](/discourse-field-notes/)

Historical records explain how decisions were reached. They do not supersede
the current operator guide, component README, tagged release notes, or the
authoritative `LICENSE` file in each repository.
