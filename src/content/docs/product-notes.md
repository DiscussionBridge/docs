---
title: "Product Concepts And Terminology"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/PRODUCT_NOTES.md"
---

DiscussionBridge connects publishing systems with Discourse while preserving
authority, provenance, native presentation, and recoverable operations.

Current releases and live environments are documented in
[Versions And Live Status](/versions-and-live-status/). Installation behavior
belongs in the [Alpha Installation and Operator Guide](/alpha-operator-guide/)
and each component's README. This page explains the product model and shared
language; it is not release evidence or an implementation checklist.

## Mission

> Between people and institutions.
>
> Communities and their knowledge.
>
> Published information and living discussion.
>
> Local autonomy and broader coordination.
>
> Systems that should cooperate but no longer do.
>
> Discussion Bridge is simply that mission made concrete in software.

The historical source wording is preserved in
[DiscussionBridge Mission Source Evidence](/evidence-discussion-bridge-mission-2026-07-25/).
Current product styling is `DiscussionBridge`.

## Product Model

DiscussionBridge is a Discourse-centered, adapter-driven publication and
discussion system.

- **DiscussionBridge for Discourse** owns Content Connections, Bridge Records,
  publication policy, authorization, audit, and the cross-platform work queue.
- **DiscussionBridge Adapter Protocol** defines the shared contract and
  conformance fixtures. It is not a deployed adapter or control plane.
- **Platform components** translate that contract into Astro, Ghost, Hugo,
  Statamic, and WordPress-native content, routes, rendering, persistence,
  build, deployment, and recovery behavior.

The detailed boundary lives in
[Core/Adapter Architecture](/core-adapter-architecture/). How each adapter
creates, updates, withdraws, retries, and recovers a publication is documented
in [Adapter Operating Models](/adapter-operating-models/).

## Naming

Use these names consistently:

- **DiscussionBridge** — the product family.
- **DiscussionBridge for Discourse** — the Discourse plugin and receiver.
- **DiscussionBridge for Astro**, **Ghost**, **Hugo**, **Statamic**, or
  **WordPress** — the focused platform component.
- **DiscussionBridge Adapter Protocol** — the shared contract.
- **The Bridge** — only the dedicated public demonstration at
  `bridge.demo.discussionbridge.dev`, never the generic plugin name.

Use a platform's native package term where useful: plugin for Discourse and
WordPress, addon for Statamic, and adapter as the family-wide generic term.

## Publication Directions

- **To Discourse** means a publishing platform owns the article or page and
  connects it to a Discourse topic.
- **From Discourse** means an authorized Discourse topic is materialized as
  native content on a connected publishing platform.

Direction is an authority decision, not merely a transport direction. A page can
present discussion without granting either side permission to overwrite the
other's source.

## Single-Writer Ownership

Each connected resource has one declared source of truth for the fields under
management. The source may be the publishing platform or Discourse, but it must
not be both at once.

DiscussionBridge preserves source identity, destination identity, revision and
mapping state, policy, and sanitized failure information. Exact retries reuse
that durable state. A failed retry must not silently create another topic or
native page.

## Connections, Records, And Work

- A **Content Connection** identifies one authorized relationship between
  DiscussionBridge for Discourse and a publishing platform installation.
- A **Bridge Record** preserves the durable relationship between a Discourse
  topic and an external resource.
- A **publication work item** represents bounded work for one destination and
  revision. Its lease, acknowledgement, retry, and recovery rules prevent
  unbounded or duplicate processing.

Credentials authorize operations but are not publication identities. Public
documentation and support reports should use non-secret connection and record
identifiers, never keys or tokens.

## Native Outcomes

An adapter should create the platform's real content object rather than a
generic foreign page. That means native entries, posts, pages, routes,
permalinks, revision behavior, visibility, and deployment semantics remain
meaningful to that platform's operator.

Platform differences are intentional. Ghost drafts, Hugo files, Statamic Flat,
DB, and SSG profiles, WordPress posts, and Astro content entries do not need the
same internal implementation to honor the same DiscussionBridge contract.

## Presentation Modes

Simple, Full, and Interactive describe the reader's discussion experience.
They do not change source ownership or silently authorize publication. See
[Presentation Modes](/presentation-modes/) for rendering, authentication,
availability, and rich-content boundaries.

## Product Maturity

DiscussionBridge is Alpha software. Component releases may advance
independently on the same compatibility line. A tagged component release, a
successful installation, a reachable demo, and product-family acceptance are
different facts.

Planned work is labeled in the [Draft Roadmap](/draft-roadmap/). It is not
current product behavior until the owning component documents and releases it.

## Product Principle

**Your discussions deserve freedom.** The publishing platform, forum, adapter,
hosting model, and presentation may change without making an accidental URL or
proprietary CMS database the only possible home of the discussion.
