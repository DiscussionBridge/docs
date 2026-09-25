# Historical Source Evidence: Discourse-Centered Product Doctrine

- **Recorded:** July 25, 2026
- **Source provenance:** Phil through the task then named Bridge Boss
- **Status:** historical source evidence for a settled product direction

This page preserves the original statement that informed the product model. It
is not current installation guidance, release evidence, or an assertion that
every described boundary was implemented on the recorded date. Historical task
names identify provenance only; they are not current owners or routing
destinations.

For the current interpretation and implementation boundary, use
[Product Concepts And Terminology](../PRODUCT_NOTES.md),
[Core/Adapter Architecture](../CORE_ADAPTER_ARCHITECTURE.md),
[Adapter Operating Models](../ADAPTER_OPERATING_MODELS.md), and
[Versions And Live Status](../VERSIONS_AND_LIVE_STATUS.md).

## Preserved Source Statement

> Bridge Boss / Phil settled product doctrine:
>
> Discussion Bridge is a Discourse-centered, adapter-driven content and discussion orchestration system whose portable core connects Discourse with one or more external publishing systems while preserving authority, provenance, policy, and auditability.
>
> Discourse is the present operational home and control plane. This is a sound marriage: committed enough to use Discourse’s users, permissions, jobs, UI, database, APIs, and operational machinery, while preserving an architectural path to independence.
>
> The human outcome of that architectural independence is autonomy: authorized people can operate, understand, govern, and move their system without being trapped by a particular CMS adapter or by accidental implementation boundaries.
>
> Settled implications:
> - The Discourse plugin should host and operate Discussion Bridge Core and be Boss for almost all Bridge orchestration and policy.
> - The portable core owns connections, identities, mappings, policies, jobs, comparisons, approvals, retries, provenance, and audit evidence.
> - Astro, Statamic, and future integrations are well-featured adapters, not separate control planes.
> - One Discourse installation may connect concurrently to multiple publishing systems.
> - Tier 1 API-only operation remains useful compatibility capability, but is not the product’s natural operational center.
> - Preserve portability by avoiding unnecessary dependence of core domain logic on Discourse internals, allowing a later standalone host without reinventing the product.
> - Current Astro work is valuable prototype/domain evidence to classify into portable core versus Astro adapter behavior; it is not wasted work.
>
> This is now a deliberate product and architecture decision discovered through the work—the WebSynergetics way. Please route it into the appropriate durable product doctrine, architecture, manuals, roadmap, and other Boss lanes.

The quotation retains its historical `Discussion Bridge` wording. Current
product styling is `DiscussionBridge`.
