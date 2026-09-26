# DiscussionBridge Documentation

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
  [Alpha Installation and Operator Guide](./ALPHA_OPERATOR_GUIDE.md), then use
  the install-and-operate guide for
  [Astro](./ASTRO_INSTALL_OPERATE.md), [Ghost](./GHOST_INSTALL_OPERATE.md),
  [Hugo](./HUGO_INSTALL_OPERATE.md),
  [Statamic](./STATAMIC_INSTALL_OPERATE.md), or
  [WordPress](./WORDPRESS_INSTALL_OPERATE.md).
- **Understanding what an adapter creates and how it recovers:** read
  [Adapter Operating Models](./ADAPTER_OPERATING_MODELS.md).
- **Choosing the reader experience:** compare
  [Presentation Modes](./PRESENTATION_MODES.md).
- **Checking releases and demonstrations:** use
  [Versions and Live Status](./VERSIONS_AND_LIVE_STATUS.md) and the
  [Demo Guide](./DEMO_PLAN.md).
- **Diagnosing an installation:** begin with
  [Troubleshooting](./TROUBLESHOOTING.md) and
  [Known Issues](./KNOWN_ISSUES.md).
- **Running a repeatable installation:** use the platform-neutral
  [Human Operator Manual](./HUMAN_MANUAL.md),
  [Machine Operator Manual](./MACHINE_MANUAL.md), and runbook templates.
- **Moving to another publishing platform without losing the discussion:** use
  [Change Platforms, Keep The Discussion](./CHANGE_PLATFORMS_KEEP_DISCUSSION.md).
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
[Attribution, Ownership, and Licensing](./ATTRIBUTION_OWNERSHIP_LICENSE.md) for
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

- [Alpha Installation and Operator Guide](./ALPHA_OPERATOR_GUIDE.md)
- [Platform Profiles](./PLATFORM_PROFILES.md)
- [Adapter Operating Models](./ADAPTER_OPERATING_MODELS.md)
- [Presentation Modes](./PRESENTATION_MODES.md)
- [Human Operator Manual](./HUMAN_MANUAL.md)
- [Machine Operator Manual](./MACHINE_MANUAL.md)
- [Human Runbook Template](./SITE_RUNBOOK_HUMAN_TEMPLATE.md)
- [Machine Runbook Template](./SITE_RUNBOOK_MACHINE_TEMPLATE.md)
- [Key Management](./KEY_MANAGEMENT.md)
- [Troubleshooting](./TROUBLESHOOTING.md)
- [Known Issues](./KNOWN_ISSUES.md)
- [Support and Feedback](./SUPPORT_AND_FEEDBACK.md)

### Platform Guides

- [Install and Operate DiscussionBridge for Astro](./ASTRO_INSTALL_OPERATE.md)
- [Install and Operate DiscussionBridge for Ghost](./GHOST_INSTALL_OPERATE.md)
- [Install and Operate DiscussionBridge for Hugo](./HUGO_INSTALL_OPERATE.md)
- [Install and Operate DiscussionBridge for Statamic](./STATAMIC_INSTALL_OPERATE.md)
- [Install and Operate DiscussionBridge for WordPress](./WORDPRESS_INSTALL_OPERATE.md)
- [Change Platforms, Keep The Discussion](./CHANGE_PLATFORMS_KEEP_DISCUSSION.md)

### Astro Deep Reference

- [Legacy Astro 0.1 Migration Notice](./ALPHA_SETUP.md)
- [Comments Display](./COMMENTS_DISPLAY.md)
- [Content Lanes](./CONTENT_LANES.md)
- [Presets and Placement](./PRESETS_AND_PLACEMENT.md)
- [Discussion-Safe Markdown](./DISCUSSION_SAFE_MARKDOWN.md)

### Product Reference

- [Core/Adapter Architecture](./CORE_ADAPTER_ARCHITECTURE.md)
- [Product Concepts and Terminology](./PRODUCT_NOTES.md)
- [Product Build and Launch Checklists](./BUILD_LAUNCH_CHECKLISTS.md)
- [Draft Roadmap](./DRAFT_ROADMAP.md)
- [Attribution, Ownership, and Licensing](./ATTRIBUTION_OWNERSHIP_LICENSE.md)

### Historical Records

- [Core/Adapter Implementation Roadmap](./CORE_ADAPTER_IMPLEMENTATION_ROADMAP.md)
- [Discourse Field Notes](./DISCOURSE_FIELD_NOTES.md)

Historical records explain how decisions were reached. They do not supersede
the current operator guide, component README, tagged release notes, or the
authoritative `LICENSE` file in each repository.
