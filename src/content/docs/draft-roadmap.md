---
title: "Draft Roadmap"
lastUpdated: 2026-09-03
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/DRAFT_ROADMAP.md"
---

This is an interest-led product roadmap, not a promise or release schedule.
DiscussionBridge will publish and discuss candidate work before investing in
features that operators do not need.

## Current Alpha Family

- **The Bridge** — the unified Discourse plugin and flagship.
- **DiscussionBridge for Astro** — plain Astro and Astro + Starlight.
- **DiscussionBridge for Ghost** — native integration plus hosting-layer
  adapter service.
- **DiscussionBridge for Hugo** — trusted-build adapter.
- **DiscussionBridge for Statamic** — one addon used with Flat, DB, and SSG.
- **DiscussionBridge for WordPress** — native WordPress plugin.
- **The Bridge — Discourse as Publisher** — the same Bridge plugin publishes
  selected forum content through multiple platform connections.

The Alpha release threshold is a working Bridge plugin, all current adapters,
and live demos that exercise both directions and the claimed presentation
modes. Documentation, human installation/configuration testing, pre-production
mirroring, Guided Demo Conversations, and release packaging remain separate
gates.

## Advanced Profiles

These extend existing adapters rather than automatically becoming new product
families:

- Statamic Multi-Site;
- Statamic SSG and additional static deployment arrangements;
- WordPress Multisite;
- multi-origin and multi-site connection operations where policy remains
  explicit and fail-closed.

## Next Platform Adapters

Hugo moved into the Alpha family. Candidate additions after the current Alpha
include:

- Drupal and Drupal CMS;
- Next.js;
- other publishing systems proposed by operators and validated through real
  demand.

## Migration Capability

DiscussionBridge's stable records, bindings, provenance and single-writer rules
already provide a foundation for migrations. Future focused tools may include:

- adopting an existing plugin-free Discourse companion topic without creating
  a duplicate;
- moving a publishing system or canonical origin while preserving the same
  discussion identity;
- migrating existing non-Discourse comments into Discourse with explicit
  authorship, timestamps, moderation, attachment and rollback rules;
- producing auditable migration plans and reconciliation reports.

Migration is not ordinary publishing. It requires its own preview, authority,
collision, provenance and recovery controls.

## Identity Capability

Future login, user and profile synchronization should be separate focused
addons rather than an ever-growing switch inside The Bridge. Platform-to-
Discourse identity has different trust, lifecycle and privacy requirements from
Discourse-to-Discourse identity. Current source-author mapping is publication
authorship, not login or user synchronization.

## DiscussionBridge Network

A future Discourse-to-Discourse family could support one organization with many
brands, chapters or communities without forcing every boundary into categories
on one forum. Read-only presentation or controlled mirroring should come before
writable cross-forum comment relay.

Writable relay is deferred because it introduces identity mapping, moderation
authority, edits, deletion, flags, whispers, private categories, rate limits,
conflicts and failure recovery. It should be a focused Discourse-to-Discourse
product, not hidden complexity in every platform adapter.

## Deployment Capabilities

Deployment helpers may package adapters for environments such as Cloudflare
Workers, managed CMS hosting, static build systems and conventional servers.
They are deployment capabilities, not new content platforms. A helper must not
become a second Bridge control plane.

## Themes And Starter Kits

Stock demos prove native compatibility. Separate showcase profiles can use a
distinctive DiscussionBridge theme or starter kit for Astro, Ghost, Hugo and
Statamic. A full-featured placeholder mode can let operators publish a polished
temporary site while building the final experience. WordPress theming is not a
current commitment. A future special theme for The Bridge may showcase the
family without changing the plugin's platform-neutral contract.

## Guided Demo Conversations

Before Alpha release, selected demo topics can be reset and repopulated with
short, useful conversations from clearly identified demo participants. These
conversations should explain features through realistic questions and replies,
remain readable as product guidance, and never masquerade as independent user
testimonials.

## Product Principle

**Your discussions deserve freedom.** Discussions should be platform-agnostic
by design and connectable by choice. The forum, publishing platform, adapter,
hosting model and presentation may change without treating a proprietary CMS
database or accidental URL as the only possible home of the discussion.

Share priorities and use cases through
[Support And Feedback](/support-and-feedback/) or the
[DiscussionBridge community forum](https://forum.discussionbridge.dev/).
