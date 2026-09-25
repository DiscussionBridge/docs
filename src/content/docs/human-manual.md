---
title: "DiscussionBridge Human Operator Manual"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/HUMAN_MANUAL.md"
---

This manual is the platform-neutral operating path for DiscussionBridge 0.2.
Use it with the exact component release notes, the selected
[Platform Profile](/platform-profiles/), and the
[Adapter Operating Models](/adapter-operating-models/). Do not copy commands
from an older Astro 0.1/API-only guide into a current installation.

DiscussionBridge for Discourse is the forum-side receiver and control surface.
Each publishing installation has its own Content Connection, protected secret,
destination mappings, native state, worker or build path, and rollback
boundary. **The Bridge** names only the dedicated public demonstration at
`bridge.demo.discussionbridge.dev`.

## 1. Define The Connection

Record these decisions before installing anything:

| Decision | Required value |
| --- | --- |
| Forum | Exact HTTPS origin and environment role |
| Publishing installation | Exact HTTPS origin, platform, and environment |
| Direction | To Discourse, From Discourse, or both |
| Source eligibility | Categories, tags, content types, collections, or explicit opt-in |
| Destination mapping | Real platform-native section, collection, taxonomy, or post type |
| Visible author policy | Fixed destination author or mapped source author |
| Presentation | Simple, Full, or Interactive |
| Native publication | Presentation-only or explicitly authorized materialization |
| Operator ownership | Forum administrator, platform operator, and recovery owner |

One Content Connection represents one publishing installation. Do not reuse a
connection secret across sites, environments, or platform modes.

Use `interactive` in new configuration. The historical `fullInteractive` value
is accepted only as a compatibility input where the exact adapter release says
so; it normalizes to `interactive` and is not a separate mode.

## 2. Establish Recovery First

Do not treat a successful build, container rebuild, or HTTP 200 as rollback
evidence. Before installation or upgrade, preserve:

- the exact component tag, commit, artifact, hash, and dependency binding;
- receiver container configuration plus database/uploads recovery appropriate
  to the Discourse topology;
- platform application content, database, configuration, integration records,
  adapter state, and service/timer units as applicable;
- the last known-good static artifact and deployment identity for Astro, Hugo,
  and Statamic SSG;
- protected credential locations and ownership/modes, but never secret values
  in the runbook; and
- a tested restore sequence with an identified recovery owner.

For a static adapter, native source state and deployed public state are separate
recovery boundaries. Preserve both.

## 3. Install Exact Components

Resolve the intended release through
[Versions And Live Status](/versions-and-live-status/) and the component's
own release record. Stop if the tag, commit, artifact, hash, package metadata,
or supported runtime disagrees.

Install DiscussionBridge for Discourse into the correct Discourse application
container. A standard single-container installation normally rebuilds `app`; a
split installation rebuilds only the web/application container identified by
its own runbook. Never copy a container command across topologies.

Install the selected platform adapter from its exact immutable release. Record
the installed path, package-manager binding, runtime identity, and service or
build entry point. A moving branch is not a deployment identity.

After installation, verify ordinary forum and platform behavior while new
DiscussionBridge capabilities remain disabled.

## 4. Configure Forum Policy

In Discourse administration, configure the receiver's endpoint and product
settings, default visible author, category/tag policy, optional author mapping,
and presentation requirements. The service identity that executes an
authorized operation is distinct from the public content author.

Create one Content Connection for the exact publishing installation. Set its:

- adapter identity and allowed HTTPS origin;
- permitted direction and lane;
- source eligibility and destination mappings;
- author and visibility policy; and
- enabled state.

The connection secret is shown once. Transfer it directly to the adapter's
protected server-side store. Never put it in browser JavaScript, platform
content, a public environment file, a URL, Git, logs, screenshots, or support
material. Follow [Key Management](/key-management/).

For Full or Interactive discussion, add the exact public publishing origin to
Discourse's Embeddable Hosts. A verified Content Connection does not create an
embed-host rule. Keep broad any-origin embedding disabled unless the forum
operator has deliberately accepted that policy.

## 5. Prepare The Destination

Create the destination's real native structure before a forum-scale
publication: sections, collections, categories, tags, post types, indexes, and
navigation. Verify empty routes honestly. Do not invent placeholder
publications or counts.

Every published detail page needs a durable route back to its section or full
publication index. Long pages should also provide useful local navigation and
an end-of-content route onward. Record analytics and crawler policy separately;
neither setting implies the other.

## 6. Prove One Canary

Use newly created or deliberately selected test content so old state cannot
hide an identity collision.

For To Discourse:

1. Opt in one native platform item through the supported control.
2. Run the documented adapter delivery path.
3. Verify one Bridge Record and one forum topic.
4. Verify title, content, attribution, author, category, tags, visibility, and
   canonical source URL.
5. Retry the same stable identity and prove no duplicate record or topic is
   created.

For From Discourse:

1. Make one topic eligible through connection policy or an explicit topic
   decision.
2. Preview its exact destination mapping.
3. Run the adapter's bounded materialization path.
4. Verify the platform-native item, Bridge Record, source attribution, and
   discussion identity.
5. Update the source once and verify the same destination identity changes.
6. Remove eligibility once and verify the documented held, draft, unpublished,
   or removed public state without destroying durable identity.

Do not proceed to a backfill until the exact canary passes create, unchanged
retry, update, withdrawal, and recovery checks appropriate to the adapter.

## 7. Run The Initial Backfill

Preview the eligible population and all destination mappings. Record the stable
high-water or equivalent bounded starting point. Then run the platform's
documented initial synchronization.

The receiver owns the publication queue. A claim is not success:

- **Queued** is eligible work waiting for a lease.
- **Claimed**, **Synchronizing**, or **Delivering** is active leased work.
- **Current** means the exact source, mapping, and publication revisions were
  acknowledged.
- **Retrying** means bounded automatic recovery remains.
- **Held** or **Unpublished** is a successful policy outcome that preserves
  identity.
- **Needs attention** or **Failed** requires diagnosis before operator action.

Dynamic adapters acknowledge after the native write succeeds. Static adapters
must build, deploy, and verify the exact public revision before acknowledging.
Use the receiver Publishing view and the platform's native state together.

## 8. Operate Steady State

After backfill, adapters consume only changed or withdrawn queue items. Record
the installed worker/service/timer, cadence, batch limit, lease duration, state
location, expected empty-cycle output, and alert owner in the site runbook.

Do not press Retry while work is queued, claimed, synchronizing, or delivering.
Retry only a diagnosed recoverable attention item. Never blindly retry identity
drift, ownership conflict, destination collision, known over-limit content, or
an unresolved static transaction.

The current receiver accepts source publication bodies up to 256 KiB. Larger
content becomes bounded operator attention; it must not be truncated into a
false-success Bridge Record.

## 9. Recover Static Transactions

For Astro, Hugo, or Statamic SSG, preserve state and deployment evidence before
recovery. Slow public propagation may require finalizing the existing deployed
candidate, not claiming another batch.

For Statamic SSG, an in-flight `prepared` or `finalizing` journal can be normal.
If it persists beyond the expected window, determine whether the candidate was
publicly deployed. Use the documented finalize path only for a publicly verified
candidate. Preserve evidence and use the documented abort path only when the
candidate was not deployed and prior native state must be restored. Never
delete or hand-edit the journal.

## 10. Verify Presentation And Public Policy

Test every claimed presentation on desktop and mobile. Verify source content,
headings, tables, code, links, images, Mermaid, actual math fixtures,
attribution, discussion route, signed-in and signed-out behavior, keyboard
focus, contrast, and fallback behavior.

Use restrained platform-native branding. Public demos may be indexable;
sandboxes and preproduction normally require an explicit noindex policy.
Analytics, when enabled, must not send credentials, forum usernames, email
addresses, source-author identity, or internal Bridge identifiers.

## 11. Disable, Re-enable, Upgrade, And Remove

Test lifecycle operations against controlled data:

- disable a connection and verify requests fail closed;
- re-enable it and verify the same durable identities resume;
- stop the worker or build hook and verify work remains honestly queued;
- upgrade from one exact immutable component to another;
- restore the prior component and state using the recorded rollback; and
- remove presentation wiring without deleting native content or Bridge records.

Disablement is not deletion. Data retention, native-item removal, connection
removal, and credential revocation are separate operator decisions.

## 12. Operator Service Boundary

Enabling the local DiscussionBridge Operator service capability does not send a
request. **Request Operator service** is a separate explicit action. A paid or
delegated entitlement cannot remotely enable the capability.

A bound Operator identity may receive only the enumerated publication health,
status, policy, retry/sync, resolution, and approved URL-migration permissions
granted by its current entitlement. It receives no connection, credential,
global-setting, user, or forum-administration authority. Forum administrators
retain control, and ordinary publishing does not depend on paid service state.

## 13. Acceptance Record

Record the exact component identities, runtime and deployment identities,
connection ID, directions, source policy, mappings, native object types,
worker/timer, batch and lease limits, protected state references, backup and
rollback result, canary identities, queue census, presentation results,
analytics/crawler policy, known exclusions, and recovery owner.

For help, use [Support And Feedback](/support-and-feedback/). Never include a
connection secret or other credential in a support request.
