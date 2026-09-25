---
title: "Product Build And Launch Checklists"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/BUILD_LAUNCH_CHECKLISTS.md"
---

These are current 0.2 release and installation checklists. They are templates,
not a claim that a component, installation, or release has passed. Bind every
completed item to an exact candidate and evidence record.

Current identities and observed deployments are listed in
[Versions And Live Status](/versions-and-live-status/). Operating behavior is
defined in [Adapter Operating Models](/adapter-operating-models/).

## 1. Scope And Identity

- [ ] Name the exact release gate: source, runtime, artifact, consumer,
      installation, deployment, or product release.
- [ ] List every included component and active consumer.
- [ ] Record repository, branch, commit, tree, tag, artifact, hash, dependency
      lock, runtime, and generated-output identity as applicable.
- [ ] Record existing uncommitted or unrelated work and its exclusion.
- [ ] Freeze the candidate or declare the exact live-delta boundary.
- [ ] List known queued changes and unresolved evidence.
- [ ] Confirm documentation describes the same candidate.

## 2. Component Family

- [ ] DiscussionBridge for Discourse is included when receiver behavior changes.
- [ ] The Adapter Protocol is included when the wire or conformance contract
      changes.
- [ ] Every affected adapter is included: Astro, Ghost, Hugo, Statamic, and/or
      WordPress.
- [ ] Every affected Statamic mode is exercised independently: Flat, DB, and
      SSG.
- [ ] Consuming demo/site packages are bound to the intended exact artifacts.
- [ ] Dormant or disabled behavior is identified separately from active runtime.

## 3. License And Attribution

- [ ] Apply the family rule: MIT except where explicitly noted otherwise.
- [ ] Confirm Adapter Protocol, Astro, Ghost, Hugo, Statamic, WordPress, and
      documentation carry their authoritative MIT license.
- [ ] Confirm DiscussionBridge for Discourse identifies GPL-2.0-or-later.
- [ ] Treat each repository's `LICENSE` file as authoritative.
- [ ] Verify package metadata, release metadata, README, and public attribution
      agree with the repository license.
- [ ] Verify DiscussionBridge is the product, CodeWorksLabs is the maker, and
      WebSynergetics is the owner.
- [ ] Reserve **The Bridge** for the dedicated public demonstration.
- [ ] Scan packages and generated output for private paths, credentials, and
      unreviewed third-party material.

## 4. Source And Test Gate

- [ ] Run the component's complete test, lint, type, syntax, schema, and build
      gates against the exact candidate.
- [ ] Inspect what the tests prove; record untested material behavior.
- [ ] Cover malformed, missing, oversized, duplicated, and unexpected inputs.
- [ ] Cover authentication, authorization, origin, lane, mapping, and catalog
      failures.
- [ ] Cover stable identity, retries, concurrency, interrupted execution, and
      duplicate prevention.
- [ ] Cover create, unchanged retry, update, withdrawal, restore, and migration.
- [ ] Cover the exact 256 KiB source-publication boundary and one-byte rejection.
- [ ] Cover secret redaction and bounded error output.
- [ ] Run dependency and supply-chain checks without automatic repair commands.

## 5. Reproducible Package Gate

- [ ] Build from the exact source identity.
- [ ] Record artifact filename, bytes, SHA-256, inventory, and package metadata.
- [ ] Rebuild independently and compare the expected reproducible properties.
- [ ] Install the produced artifact into a clean supported consumer.
- [ ] Confirm the consumer resolves that exact artifact and dependency lock.
- [ ] Prove development dependencies, credentials, fixtures, local paths, and
      unintended files are absent.
- [ ] Verify upgrade and downgrade from the last accepted release.
- [ ] Never replace a published artifact in place; corrections get a new
      identity.

## 6. Receiver Installation Gate

- [ ] Identify the Discourse topology and exact application container.
- [ ] Preserve protected container configuration and database/uploads recovery.
- [ ] Install one pinned tag/commit; never a moving branch.
- [ ] Rebuild only the intended application container.
- [ ] Protect raw launcher output as credential-bearing.
- [ ] Verify installed commit, clean checkout, migrations, PostgreSQL, Redis,
      web processes, HTTPS, and ordinary forum behavior.
- [ ] Confirm new product switches start disabled.
- [ ] Test disable, re-enable, rollback, and removal without deleting durable
      records or ordinary forum content.

## 7. Content Connection Gate

- [ ] Create one connection for one publishing installation and environment.
- [ ] Verify exact allowed origin, direction, lanes, category/tag eligibility,
      destination mappings, author policy, and materialization policy.
- [ ] Transfer the one-time secret directly into a protected adapter store.
- [ ] Verify the secret never enters browser output, logs, screenshots, support,
      analytics, generated output, or Git.
- [ ] Confirm Embeddable Hosts separately for Full or Interactive presentation.
- [ ] Verify disabled and wrong-origin requests fail closed.
- [ ] Record the nonsecret connection ID and recovery owner.

## 8. Destination Readiness Gate

- [ ] Create real platform-native sections, collections, taxonomies, post types,
      indexes, and routes before backfill.
- [ ] Verify empty routes without inventing publications or counts.
- [ ] Confirm every detail page has a durable route to its section or complete
      publication index.
- [ ] Verify destination collisions fail closed.
- [ ] Record the native object and stable identity markers.

## 9. Canary Gate

- [ ] Use one deliberately selected test item.
- [ ] Create/materialize once.
- [ ] Repeat unchanged with no duplicate.
- [ ] Update the source and preserve destination identity.
- [ ] Withdraw eligibility and preserve durable identity.
- [ ] Recover one controlled interruption.
- [ ] Verify receiver queue, Bridge Record, native state, and public page agree.
- [ ] Verify rollback can restore the pre-canary boundary.

Do not start a forum-scale backfill until the canary passes.

## 10. Dynamic Adapter Gate

Applies to Ghost, Statamic Flat/DB, and WordPress.

- [ ] Record worker/service/timer, cadence, claim limit, lease, state, and
      concurrency control.
- [ ] Verify a bounded cycle mutates the exact native identity.
- [ ] Acknowledge only after the native write succeeds.
- [ ] Verify automatic retry is bounded and terminal failures reach attention.
- [ ] Verify withdrawal uses the documented draft/held/unpublished behavior.
- [ ] Confirm overlapping workers are excluded.
- [ ] For WordPress, use a real scheduler for WP-Cron rather than reader traffic.

## 11. Static Adapter Gate

Applies to Astro, Hugo, and Statamic SSG.

- [ ] Record build command, claim limit, deployment lease, state/journal,
      provider project, and last known-good deployment.
- [ ] Preserve prior native and public deployment state.
- [ ] Claim one bounded transaction.
- [ ] Write native source atomically.
- [ ] Build and deploy one exact candidate.
- [ ] Verify exact public resource and revision markers.
- [ ] Acknowledge only verified leases.
- [ ] Test slow propagation by finalizing the existing candidate, not claiming a
      second batch.
- [ ] Verify interrupted recovery without deleting state.

For Statamic SSG:

- [ ] Confirm the journal records leases and exact prior native state.
- [ ] Confirm one transaction may regenerate the complete static site.
- [ ] Finalize only a publicly verified candidate.
- [ ] Abort only an undeployed candidate after preserving evidence.
- [ ] Never hand-edit/delete the journal or run the Flat/DB worker on SSG.

## 12. Backfill And Steady-State Gate

- [ ] Preview the complete eligible population and destination mappings.
- [ ] Record the stable high-water or equivalent starting identity.
- [ ] Verify changes during backfill are caught without duplication.
- [ ] Monitor queued, active, current, retrying, held/unpublished, and attention
      counts.
- [ ] Confirm bounded cycles respect receiver rate limits and static cadence.
- [ ] Verify steady state consumes only changed or withdrawn topics.
- [ ] Diagnose terminal attention before using Retry.
- [ ] Never blindly retry identity drift, ownership conflict, collision,
      over-limit content, or unresolved static deployment state.

## 13. Presentation And Accessibility Gate

- [ ] Use Simple, Full, and/or canonical Interactive names accurately.
- [ ] Treat historical `fullInteractive` only as normalized compatibility input.
- [ ] Verify source attribution and the exact discussion identity.
- [ ] Verify headings, tables, code, links, images, Mermaid, and a real math
      fixture when support is claimed.
- [ ] Verify desktop, mobile, keyboard, focus, contrast, signed-in, signed-out,
      empty, unavailable, and long-content states.
- [ ] Verify long pages expose section/index navigation and a useful end route.
- [ ] Preserve recognizable platform-native presentation with restrained shared
      branding.
- [ ] Use the agreed DiscussionBridge, CodeWorksLabs, and WebSynergetics footer
      roles.

## 14. Analytics And Crawler Gate

- [ ] Admit each deployed site into the governed site/deployment registry.
- [ ] Bind provider identities without recording credentials.
- [ ] Use one Matomo site ID and one Umami website UUID per apex domain where
      that policy applies.
- [ ] Retain hostname, path, page title, and referrer for segmentation.
- [ ] Send no source authors, forum usernames, email addresses, credentials, or
      internal Bridge IDs.
- [ ] Verify exactly one intended page view per navigation and provider receipt.
- [ ] Set crawler policy independently: public demos may be indexable; sandbox
      or preproduction uses an explicit noindex header or page directive.
- [ ] Do not treat root robots disallow as an indexing control.

## 15. Security And Recovery Gate

- [ ] Inventory connection, deployment, database, service, API, and signing
      credentials separately.
- [ ] Verify least privilege, protected storage, owner/mode, and consumer list.
- [ ] Confirm operational state and journals are secret-free.
- [ ] Exercise credential rotation using the exact release's supported process.
- [ ] Do not claim zero-downtime rotation without verified overlap behavior.
- [ ] Treat raw Discourse launcher output as credential-bearing.
- [ ] Exercise backup restore, disable/re-enable, upgrade, rollback, and removal.
- [ ] Preserve evidence before finalize, abort, retry, or incident containment.

## 16. Documentation And Support Gate

- [ ] Current operator, platform, operating-model, troubleshooting, key, and
      runbook pages agree.
- [ ] No current page sends operators to legacy Astro 0.1 commands.
- [ ] Versions/status names exact releases and distinguishes historical records.
- [ ] License and ownership language matches the component matrix.
- [ ] Commands are copied from exact installed releases and use placeholders
      safely.
- [ ] Support routes are live and request sanitized evidence only.
- [ ] Rendered docs pass link, mobile, accessibility, and secret-output checks.

## 17. Final Release Record

- [ ] Identify the accepting authority and exact accepted candidate.
- [ ] List all passed and failed gates with evidence.
- [ ] List residual risks, exclusions, unresolved attention items, and recovery
      owners.
- [ ] Confirm published tags, artifacts, hashes, docs, and consumer bindings
      agree.
- [ ] Verify the public result after deployment.
- [ ] Record the next separately authorized gate; release approval does not
      authorize unrelated deployment, provider, credential, or data changes.
