---
title: "DiscussionBridge Core/Adapter Implementation Roadmap"
lastUpdated: 2026-07-31
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/CORE_ADAPTER_IMPLEMENTATION_ROADMAP.md"
---

Status: Current Product roadmap; every discrete implementation step requires separate approval
Architecture: [`CORE_ADAPTER_ARCHITECTURE.md`](/core-adapter-architecture/)  
Source decision: [`DISCUSSION_BRIDGE_DISCOURSE_CENTERED_DOCTRINE_2026-07-25.md`](/evidence-discussion-bridge-discourse-centered-doctrine-2026-07-25/)

## Migration Strategy

This is an incremental extraction, not a big-bang cutover. The current Astro
package is the reviewed Alpha reference adapter and API-only compatibility
surface. Existing accepted behavior remains available while portable behavior
is classified, contracted, and moved behind compatible interfaces.

Quarantined Bridge Boss 2 OBBBA comparisons, Impact population work, generated
content, navigation, relationships, caches, and Law artifacts are historical
provenance only. They are not fixtures, requirements, migration inputs, or
implementation authority for this roadmap. OBBBA-specific behavior becomes a
portable contract only through separate Product and architecture review.

Every migration change must answer:

1. Is this portable core behavior, Discourse-host behavior, or adapter behavior?
2. What current evidence proves its expected behavior?
3. What compatibility surface must remain during the transition?
4. What review and acceptance evidence closes the change?

## Phase 0 — Establish The Current Product Baseline

Outcome: a trustworthy, current inventory before portable contracts or code
moves are proposed.

- Bind the settled Product, architecture, brand, API-key authority, source
  authority, forum-governance, and adapter boundaries.
- Inventory the current reviewed Astro package, public documentation, demos,
  discussion modes, operator controls, and deployment responsibilities.
- Classify each active behavior as portable Core, Discourse-host/plugin,
  publishing-adapter, site-specific, or historical provenance.
- Identify mixed modules that need seams rather than wholesale movement.
- Define the current API-only compatibility behavior that must remain supported.
- Record explicit exclusions so quarantined or site-specific work cannot enter
  Core merely through proximity, naming, or prior use.

Gate: Product Boss confirms the behavior and exclusion classifications; Code
Boss confirms dependency and migration boundaries; Manual Boss confirms the
terms and operator implications; Bridge Boss approves the exact next discrete
step.

## Phase 1 — Define The Portable Contract Package

Outcome: host-neutral types and behavior can be tested without Astro or
Discourse runtime objects.

- Define versioned contracts for connections, identities, mappings, direction,
  changesets, comparisons, approvals, jobs, evidence, and capabilities.
- Define deterministic serialization, hashes, validation, and error taxonomy.
- Define host, adapter, credential-reference, queue, persistence, and audit
  interfaces.
- Establish compatibility/version negotiation between host and adapters.
- Port the safest pure logic first: normalization boundaries, comparison
  classification, source policies, deterministic planning, and evidence rules.

Gate: contract fixtures pass independently; no Astro or Discourse model is
required for core tests; Code Boss approves dependency direction.

## Phase 2 — Establish The Discourse Plugin Host

Outcome: Discourse can host the core and operate a no-write vertical slice.

- Coordinate repository placement and plugin skeleton with Discourse Boss.
- Implement plugin settings, migrations, permissions, connection inventory,
  identity records, credential references, and audit storage.
- Implement job lifecycle, queue integration, progress, bounded retry,
  cancellation, and recovery states.
- Build an operator UI for connection health, plan requests, progress,
  comparison results, approvals, and evidence.
- Add a server-enforced connected-topic listing review: new topics remain
  unlisted by default, site/adapter listing intent is recorded as a request,
  and only the forum operator or an explicit forum-owned trust policy can
  approve listing. Record requester, connection, topic/category, reviewer,
  timestamp, and outcome.
- Do not use Discourse Core's unlisted-until-first-reply behavior as a substitute
  for forum approval; a reply is engagement, not an authorization decision.
- Run the first vertical slice as GET-only and zero-write against newly reviewed
  neutral fixtures that exercise the portable contracts without importing an
  OBBBA-specific source, cardinality, comparison, or publication assumption.

Gate: Discourse Boss approves platform fit and compatibility; Code Boss
approves security and job semantics; Product and Manual Bosses approve the
operator workflow; the zero-write evidence matches the reviewed portable
contract.

## Phase 3 — Refactor Astro Into The Reference Adapter

Outcome: Astro remains fully featured while no longer carrying the control
plane.

- Put Astro discovery, frontmatter, collections, routes, navigation,
  components, build hooks, and deployment behavior behind adapter contracts.
- Retain a local/API-only compatibility runner over the same contracts.
- Add capability discovery and adapter health reporting.
- Prove plan/comparison parity between the compatibility runner and
  Discourse-hosted execution.
- Move orchestration policy out of Astro-specific entry points only after
  parity evidence exists.

Gate: existing Astro tests and live acceptance cases pass; no loss of Tier 1
capability; rollback to the prior compatibility surface is documented.

## Phase 4 — Add Reviewed Write Execution

Outcome: authorized operators can safely approve and run routine Bridge jobs
from Discourse.

- Add frozen-plan approvals tied to actor, connection, scope, and hashes.
- Implement adapter write operations with idempotency and ambiguous-outcome
  recovery.
- Preserve source authority and no-writeback rules.
- Add per-operation audit evidence and human-readable summaries.
- Exercise one bounded create/update workflow before enabling batch writes.

Gate: explicit Product, Code, Manual, and Bridge acceptance; recovery and
rollback drills pass; no write is possible from an unapproved or stale plan.

## Phase 5 — Build The Statamic Adapter

Outcome: one Discourse installation controls real connections to both Astro and
Statamic, proving that the architecture is not Astro-shaped.

- Implement Statamic content discovery, mappings, metadata projection,
  rendering hooks, writes, and deployment/cache integration.
- Reuse the portable contracts without Statamic conditionals in the core.
- Demonstrate concurrent Astro and Statamic connections with separate
  direction policies, identities, jobs, and evidence.

Gate: shared conformance suite passes for both adapters; Discourse remains the
single operational control plane.

## Phase 6 — Harden The Adapter Ecosystem

Outcome: additional adapters can be developed without inventing another Bridge.

- Publish an adapter SDK, conformance suite, compatibility policy, and sample
  adapter.
- Define supported deployment topologies and remote-agent trust boundaries.
- Add migrations and version-compatibility procedures.
- Measure job throughput, queue behavior, evidence retention, and recovery.
- Document the criteria for considering a standalone host in the future.

Gate: a new adapter can implement the contract without importing Astro or
Discourse host internals.

## Phase 7 — DiscussionBridge SaaS

Outcome: the same portable core operates as a paid, managed standalone control
plane for multiple CMSs, sites, adapters, and Discourse communities.

- Replace the Discourse host layer with a managed SaaS host while retaining the
  same portable contracts and domain semantics.
- Provide centralized connection inventory, scheduling, monitoring, alerts,
  approvals, audit retention, recovery, and adapter fleet management.
- Support organization and team governance across multiple publishing systems
  and Discourse installations.
- Preserve exportable identities, mappings, evidence, and configuration so
  managed convenience does not undermine customer autonomy.
- Keep the free Discourse plugin and Astro adapter genuinely capable; do not
  create SaaS demand by withholding normal local functionality.

Gate: SaaS proves real multi-system operational value and a documented
migration/export path without forking the DiscussionBridge Core or trust
model.

## Immediate Work Sequence

1. Complete the current BB2 cleanup and retention decisions without restoring
   quarantined implementation inputs.
2. Freeze a reviewed current-product module and behavior inventory spanning the
   Astro adapter, API-only compatibility surface, discussion modes, demos, and
   separately owned Discourse operations.
3. Draft the portable connection, identity, direction-policy, capability,
   planning, approval, evidence, and adapter contracts without moving runtime
   code.
4. Convene Bridge Boss and Discourse Boss on the separately approved plugin
   scope: repository placement, supported Discourse versions, forum-owned
   listing governance, and the first neutral GET-only vertical slice.
5. Route the exact contract proposal to Product, Code, Manual, Discourse, and
   Bridge review before implementation.
6. Implement only the next separately authorized, dependency-complete slice;
   retain the Astro/API-only compatibility surface until reviewed parity and
   rollback evidence exist.

## Explicitly Deferred

- Replacing user-created Discourse API keys as Bridge authority.
- Per-run key creation and revocation as normal operation.
- A second policy/control plane inside Astro, Statamic, or another adapter.
- A standalone host before the Discourse-hosted core proves its boundaries.
- Detailed DiscussionBridge SaaS packaging, pricing, tenancy, and service
  levels until the portable core and adapter contracts are proven.
- General Discourse core changes without Discourse Boss/upstream routing.
