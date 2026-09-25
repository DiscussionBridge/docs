---
title: "Troubleshooting Guide"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/TROUBLESHOOTING.md"
---

This guide covers the current DiscussionBridge 0.2 receiver and platform
adapters. Use the exact installed component's README and site runbook for
commands. Do not use legacy Astro API-only commands from the 0.1 line.

## First Checks

1. Record the exact DiscussionBridge for Discourse, adapter, runtime, and
   deployment identities.
2. Verify the forum, platform application, native item, public page, and direct
   topic independently.
3. Confirm the exact Content Connection is enabled and permits the origin,
   direction, lane, source policy, and destination mapping.
4. Confirm the adapter can read its protected secret without printing it.
5. Compare the receiver Publishing row with the adapter's native state or
   journal.
6. Preserve logs, state, journals, leases, and deployment identity before
   changing configuration.
7. Separate transport, authentication, policy, native write, build, deployment,
   public verification, presentation, analytics, and cache failures.

Report only sanitized versions, timestamps, public URLs, source/resource IDs,
queue state, and bounded errors. Never include a credential.

## Read The Queue Correctly

| State | Meaning | Operator action |
| --- | --- | --- |
| Queued | Eligible work awaits a lease | Wait for the documented worker; check scheduling if it does not advance |
| Claimed, Synchronizing, or Delivering | A bounded lease is active | Do not press Retry |
| Current | Exact source, mapping, and publication revisions were acknowledged | Verify presentation only if needed |
| Retrying | Automatic attempts remain | Observe the bounded retry policy |
| Held or Unpublished | Current eligibility was applied while identity was retained | Confirm policy; do not recreate |
| Needs attention or Failed | Automatic recovery is exhausted or unsafe | Diagnose and preserve evidence before action |

The Publishing view and Bridge Records answer different questions. A failure
before a Bridge Record exists can appear only in Publishing. A healthy record
does not erase failed publication work.

## Work Remains Queued

Check:

- the worker/service/timer is enabled and ran at the expected cadence;
- the platform catalog and destination mapping are current;
- another worker does not hold a live lease;
- the receiver is not rate-limiting a competing backfill;
- WordPress uses a real scheduler for WP-Cron; and
- a static adapter does not have an unresolved transaction.

During a backfill, a large queued count can be normal. Judge progress by
bounded successful cycles, not by expecting the queue to empty immediately.

## A Claimed Item Appears Stuck

Record the lease owner and expiry. If the owning process stopped, allow the
documented lease recovery path to make the same identity eligible again. Do not
delete queue state or create a replacement publication.

For a static adapter, also inspect its candidate deployment and journal. Slow
provider propagation may mean finalization should retry against the existing
candidate and lease.

## Retry Is Unsafe Or Ineffective

Manual Retry is appropriate only after the error is known to be transient or
the underlying cause has been corrected. Do not blindly retry:

- destination identity drift or ownership conflict;
- a native slug/path collision;
- content above the supported 256 KiB source-publication boundary;
- authentication failure before credential state is verified;
- a withdrawal whose public item is already absent but retained identity
  disagrees;
- a static deployment whose public state is unknown; or
- a persistent Statamic SSG transaction.

Retry must preserve the same topic, Bridge resource, destination, and
publication identity.

## Authentication Failed

Confirm the connection ID belongs to this installation and the adapter reads
the intended protected secret store. Check ownership and read permissions
without printing the value. Confirm the receiver endpoint and connection are
enabled and that system clocks are reasonable where signed payloads require
them.

Do not paste a replacement into a command line or log. Follow
[Key Management](/key-management/). If the exact release does not explicitly
support overlapping secrets, treat rotation as bounded maintenance rather than
claiming zero downtime.

## Origin, Direction, Or Lane Was Rejected

Compare the actual HTTPS origin, request direction, and lane to the selected
Content Connection. Correct policy only after confirming the request belongs to
that installation. Do not broaden origin or lane policy to make an unexplained
request pass.

## Platform Catalog Or Mapping Is Stale

The receiver rejects claims made under a stale platform catalog or mapping.
Refresh the installed adapter's catalog through its documented operation,
review the resulting native destinations, update mappings deliberately, and
then retry the same work identity. Do not bypass catalog identity checks.

## Source Content Is Too Large

Current publication source bodies are bounded at 256 KiB. Larger content must
be shown as operator attention rather than truncated into a false-success
record.

Confirm the source size and whether the content can be responsibly reduced or
split under editorial control. Do not raise bounds ad hoc, omit content
silently, or acknowledge a partial native item.

## Native Destination Collision

Stop if another object owns the intended path, slug, marker, or native ID.
Determine whether it is the same durable DiscussionBridge publication, a
legitimate platform-owned object, or an unrelated collision. Use the exact
migration/adoption workflow only when ownership is proven. Never overwrite or
delete an unrelated native item to clear the error.

## Source Became Ineligible

Expected withdrawal behavior preserves identity:

- Ghost and WordPress normally move the managed item to draft;
- dynamic Statamic applies the mapped unpublished state;
- Hugo acknowledges only after the former public URL is verified absent; and
- static profiles deploy and verify the withdrawal before acknowledgement.

Do not manually delete local state or recreate the item on later eligibility.

## Astro

Use `discussionbridge-astro publication-status` with the configured protected
state file to inspect the durable ledger. Re-run the same recorded operation
after a recoverable build or network failure. Do not delete the state file,
invent a new external identity, or move a managed URL without the approved URL
migration and permanent redirect.

An Astro build is not publication proof. Verify the exact deployed resource and
revision markers before acknowledging static work.

## Ghost

Use the protected Ghost operator page for mappings, totals, attention state,
and bounded failures. The documented full synchronization action is distinct
from receiver Retry.

Do not remove internal identity tags, apply the outbound opt-in tag to an
imported item, or blindly repeat revocation identity drift. If a withdrawn URL
already returns 404, preserve that evidence and diagnose the retained identity
before another attempt.

## Hugo

Preparation writes native Markdown under a static deployment lease. Local file
existence or a successful build is not acknowledgement evidence. Verify the
exact public resource and revision markers. For withdrawal, verify the former
public URL returns 404.

If propagation is slow, retry finalization against the existing deployed
candidate. Do not claim another batch or discard the state file.

## Statamic Flat And DB

Use the addon status and Control Panel utility to compare native entry state
with receiver work. The steady-state worker must not overlap another run. Use
the documented one-item retry only after diagnosing a To Discourse failure.

Do not bypass a destination collision, replace stable identity, or use the
dynamic worker for an SSG installation.

## Statamic SSG

A `prepared` or `finalizing` journal during an active build/deploy cycle is
normal. A journal that persists beyond the expected window requires diagnosis.

1. Preserve the journal, service log, unit/timer identity, native state, and
   candidate deployment identity.
2. Determine whether the exact candidate was publicly deployed.
3. If public markers are correct, use the documented
   `discussionbridge:ssg-finalize-publication-work` path.
4. If it was not deployed and must be rolled back, use the documented
   `discussionbridge:ssg-abort-publication-work` path after evidence capture.

Never delete or hand-edit the journal, acknowledge unverified output, or claim
another batch over it.

## WordPress

**Queued** and **Delivering** are active states. Do not press **Retry** while
either is present. Retry only a diagnosed **Attention** or **Failed** item.

Confirm a real scheduler invokes WP-Cron at the recorded cadence. A source or
mapping revision must update the same post; a transport interruption must reuse
the pending draft.

## Discussion Does Not Load

For all modes, verify the direct topic and host page independently.

- **Simple:** confirm the exact topic mapping and public-reply access.
- **Full:** confirm the canonical page URL and exact Embeddable Host rule.
- **Interactive:** confirm receiver readiness, full-app embedding, sign-in
  flow, CSP/frame policy, cookies, and the exact topic mapping.

Do not change a forum-wide SameSite policy from this generic guide. First
confirm the topology, browser symptom, supported Discourse procedure, security
impact, prior value, recovery path, and operator approval in the site runbook.
After any authorized change, verify top-level login, a CSRF-protected write,
iframe authentication, and an embedded reply. Otherwise retain the direct
**Open discussion** fallback.

## Public Page Is Stale

Compare source revision, native state, build identity, deployment identity, and
public revision marker before clearing cache. A cache-bypassing request can
separate deployment from CDN behavior. Clear only the affected cache after the
underlying publication is proven correct.

## Rich Content Is Broken

An HTTP 200 is not presentation success. Inspect the DOM and verify headings,
tables, links, attribution, Mermaid, and an actual math fixture. Literal escaped
HTML indicates a rendering boundary failure, not a transport success.

Do not patch generated output. Correct the platform template/materializer and
republish the same durable identities.

## Analytics Or Crawler Policy Is Wrong

Treat analytics and indexing separately. Verify each governed hostname sends
exactly the intended page view without credentials, personal data, source
authors, forum usernames, or internal IDs. Confirm sandbox noindex policy with
an actual header or page directive; a root robots disallow is not an indexing
control.

## Receiver Or Platform Is Offline

Workers should fail closed and preserve retryable state. Static adapters must
not acknowledge from local output. Reader-facing pages should retain usable
content and a known direct discussion link where possible.

After recovery, resume the same stable identities and reconcile queue/native
state before declaring the incident closed.
