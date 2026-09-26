---
title: "Adapter Operating Models"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/ADAPTER_OPERATING_MODELS.md"
---

This page explains how each current DiscussionBridge adapter turns an
authorized source item into a durable publication. It complements
[Platform Profiles](/platform-profiles/), which describes what must be
installed, and the
[Alpha Installation and Operator Guide](/alpha-operator-guide/), which
describes the end-to-end setup and acceptance sequence.

## The Shared Publication Lifecycle

For **From Discourse** publication, DiscussionBridge for Discourse remains the
control plane:

1. The forum administrator enables a Content Connection and maps eligible
   categories and tags to a real destination on the publishing platform.
2. Eligible topics enter a receiver-owned publication queue. A topic edit,
   mapping change, explicit topic override, or loss of eligibility can create
   new work for the same durable identity.
3. The adapter claims a bounded set of work under a lease. A claim is not a
   successful publication.
4. The adapter creates, updates, or withdraws the platform-native item while
   preserving its Bridge resource, source topic, and destination identity.
5. Dynamic adapters acknowledge after the native write succeeds. Static
   adapters build and deploy the site, verify the exact public revision, and
   only then acknowledge.
6. DiscussionBridge for Discourse marks the work current, retries a bounded
   recoverable failure, or exposes a terminal attention item for an operator.

When an operator deliberately materializes an existing eligible forum corpus,
the optional initial population and steady-state synchronization are
deliberately different. Initial population discovers that corpus. After it
completes, adapters consume only changed or withdrawn topics from the durable
queue; they do not repeatedly crawl the complete forum. Sites using
presentation only, or sending only new platform publications To Discourse, do
not require this forum-corpus step.

For **To Discourse** publication, the source platform owns the publication
lifecycle. An explicitly opted-in native item sends a bounded content snapshot
and stable external identity to DiscussionBridge for Discourse. The receiver
creates or resolves one forum topic and returns the same durable resource/topic
tuple on exact retries.

That per-publication lifecycle is not a qualified large historical import.
The current Alpha has not yet proven a generic large platform-to-Discourse
backfill; each adapter needs a separate bounded corpus qualification before
making that claim.

## Why Work Is Bounded

A batch limit is a safety and recovery boundary, not a claim about the number
of files generated or the total capacity of a site. Smaller claims limit:

- receiver request pressure and rate-limit exposure;
- the amount of work held by one lease;
- the number of native mutations that may need rollback;
- static build and deployment collisions;
- response and log size; and
- the scope an operator must reconcile after interruption.

The exact limit and schedule belong in the installation runbook. The current
OBBBA demonstration intentionally uses conservative eight-topic scheduled
claims for the non-Astro lanes. That demonstration setting is evidence of a
safe operating profile, not a universal maximum for every installation.

## At A Glance

| Profile | Adapter license | Native publication | Runtime shape | Steady-state boundary |
| --- | --- | --- | --- | --- |
| Astro / Starlight | MIT | Markdown or MDX content entry | Trusted build, full static build and deploy | Bounded build transaction; site runbook records the configured claim limit |
| Ghost | MIT | Ghost post or page | Dynamic companion service beside Ghost | At most 8 receiver items under a 5-minute lease |
| Hugo | MIT | Markdown content file | Trusted two-phase static build and deploy | At most 8 receiver items under a 1-hour deployment lease |
| Statamic Flat | MIT | Native Statamic entry; content remains file-backed | Dynamic addon worker | At most 8 receiver items under a 5-minute lease |
| Statamic DB | MIT | Native Statamic entry in database-backed content | Dynamic addon worker | At most 8 receiver items under a 5-minute lease |
| Statamic SSG | MIT | Native Statamic entry plus generated static estate | Journaled two-phase static build and deploy | At most 8 receiver items per protected transaction in the current Alpha profile |
| WordPress | MIT | Native post in the mapped public post type | Dynamic native plugin through real WP-Cron | Package supports bounded queue claims; the current OBBBA profile uses 8 per scheduled cycle |

The table describes From Discourse native publication. Comments-only
presentation can have a different execution path and does not authorize native
materialization.

The reviewed Adapter Protocol license decision is MIT, but the public claim is
not release-complete until its public repository contains that reviewed
`LICENSE` file. DiscussionBridge for Discourse is the explicit
GPL-2.0-or-later exception. See
[Attribution, Ownership, And Licensing](/attribution-ownership-license/) for
the authoritative component matrix and repository license links.

## Platform Presentation And Analytics Standard

Licensing, analytics, and site presentation are separate concerns. An adapter
license governs the adapter package. Analytics and branded navigation belong to
the configured publishing site and its deployment runbook; they are not secret
receiver behavior and are not silently injected by the Adapter Protocol.

Real DiscussionBridge demonstrations follow this common standard:

- **Visible name:** use `OBBBA <Platform> Demo` as the site name. Present
  `DiscussionBridge for <Platform>` as a separate product descriptor; a natural
  browser title is `OBBBA <Platform> Demo — DiscussionBridge for <Platform>`.
  Adapt profile names such as Statamic Flat, DB, and SSG without turning the
  descriptor into one long site name. Reserve **The Bridge** for the dedicated
  demonstration at `bridge.demo.discussionbridge.dev`.
- **Navigation:** every published detail page provides a visible route to the
  demo home and **All topics** or the full publication index. A breadcrumb or
  section route belongs near the title; the end of the article provides the
  section/index route and previous/next navigation where the platform supports
  it. Long pages provide a table of contents or **Back to top** control. Where
  appropriate, the page also links to the source discussion. A visitor must not
  need the browser Back button to leave a publication.
- **Brand treatment:** retain the platform's recognizable native theme while
  applying restrained Repeal OBBBA colors and consistent DiscussionBridge
  identity. Use a separate publication-provenance line for DiscussionBridge and
  the source forum. The ownership footer reads
  `© 2026 CodeWorksLabs, a WebSynergetics property.`
- **Analytics:** public demos participate in Matomo and Umami. Use one Matomo
  site ID and one Umami website UUID per apex domain, and retain the full host,
  path, page title, and referrer so each platform and demo can be segmented in
  reporting without creating a site-ID sprawl. Matomo uses the approved
  cookieless, no-user-ID privacy profile. Self-hosted analytics origins must be
  admitted by the site's Content Security Policy, and Umami's approved-host
  `data-domains` boundary must include the exact demo hosts. Acceptance includes
  confirming receipt in both providers, not merely finding script tags in
  generated HTML.
- **Crawler policy:** indexing and analytics are independent choices. A public
  demo may be indexable and measured. A sandbox can remain non-indexable while
  still being measured, or can be unmeasured, according to its explicit
  environment policy; `noindex` never silently decides analytics policy.

This is the target presentation standard, not a claim that every current demo
already conforms. Record each site's implementation and acceptance evidence in
its runbook before calling the platform tune-up complete.

## How The Astro Adapter Works

[DiscussionBridge for Astro](https://github.com/DiscussionBridge/astro-discussion-bridge)
serves plain Astro and Astro + Starlight. A native
From Discourse publication is an atomically written Markdown or MDX content
entry at the exact authorized route. Its frontmatter retains the resource,
topic, source revision, author, and publication identity needed for later
idempotent updates.

The adapter runs in a trusted build environment. It retrieves or claims
authorized work, validates the complete local corpus and destination
collisions, writes nonsecret source files, performs the Astro production build,
deploys the generated site, verifies the public resource and revision markers,
and then acknowledges the receiver work. An exact retry reuses the same file
and identity. A different resource attempting to claim that path fails closed.

The current Astro defaults admit 20 records per bounded operation, allow an
operator-configured maximum of 200, and use a one-hour publication lease.
Preparation and finalization remain distinct operations: use the adapter's
`prepare-publication-work` operation to claim and materialize the bounded
candidate, then use `finalize-publication-work` only after the exact deployed
resource and publication-revision markers have been verified. A larger limit
does not weaken the build, deployment, or public-verification boundary.

Use `discussionbridge-astro publication-status` to inspect the durable local
ledger. Re-run the same recorded operation after a recoverable build or network
failure. Do not delete the state file, invent a new external identity, or move
a managed URL without the explicit migration and permanent-redirect workflow.

Astro backfill throughput depends on the configured bounded build batch and the
cost of a complete site build/deploy. Steady state normally contains only the
small set of topics whose source or mapping revision changed.

## How The Ghost Adapter Works

[DiscussionBridge for Ghost](https://github.com/DiscussionBridge/ghost-discussion-bridge)
uses a loopback-only companion service and Ghost's
Admin API. It creates a topic-marked draft before reserving the Bridge Record,
then publishes the Ghost post or page only after the resource, topic, and
destination tuple is durable. Internal identity tags let an interrupted create
adopt the same item instead of producing a duplicate.

The explicit initial synchronization discovers the approved corpus. The
steady-state worker claims at most eight changed or withdrawn topics under an
exact five-minute lease. It updates the same Ghost item when the first post
changes. If the topic becomes ineligible, it returns the native item to draft
and reports it as held rather than deleting its identity.

The protected Ghost operator page shows current mappings, latest totals,
attention states, and bounded failure reasons. Use its authenticated
**Synchronize publications** action for the documented full synchronization.
Use DiscussionBridge for Discourse's authenticated Retry action only after the
failure is known to be retryable. Do not remove identity tags, reuse the outbound opt-in tag on an
imported item, or blindly repeat a terminal identity-drift failure.

## How The Hugo Adapter Works

[DiscussionBridge for Hugo](https://github.com/DiscussionBridge/hugo-discussion-bridge)
materializes a native Markdown file. Preparation
uploads the site's bounded destination catalog, validates the complete corpus,
claims authorized work, and writes content atomically. It does not report
success merely because the file exists locally.

The steady-state command claims at most eight topics under a one-hour static
deployment lease. The operator or service then performs the ordinary Hugo
build and deployment. Finalization checks the exact public resource and
publication-revision markers before acknowledging each lease. A withdrawal is
acknowledged only after the old public URL returns 404. Exact retries preserve
the same native file and identity.

If deployment propagation is slow, retry finalization against the existing
lease and deployed candidate; do not claim a second batch. Preserve the state
file and build evidence. Do not acknowledge from local output alone or change a
managed URL without the migration and verified permanent-redirect workflow.

## How The Statamic Flat And DB Adapters Work

Both profiles use the same
[DiscussionBridge for Statamic](https://github.com/DiscussionBridge/statamic-discussion-bridge)
native addon and create or update genuine
Statamic entries. Flat keeps the authoritative content file-backed; DB stores
authoritative content in the configured database. Each installation still has
its own Content Connection, secret, operational table, application identity,
worker, and rollback boundary.

An ordinary Statamic save performs only a local idempotent enqueue for To
Discourse delivery. It does not call the forum during the editor request. For
From Discourse publication, the initial `discussionbridge:sync-publications`
operation materializes authorized entries. The steady-state
`discussionbridge:sync-publication-work --limit=8` command claims only the
identified topics or withdrawals under five-minute leases, writes the native
entry, invalidates affected caches, and acknowledges the exact lease.

The Statamic Control Panel exposes the same synchronization boundary under
**Utilities → DiscussionBridge**. It reports created, updated,
already-current, skipped, and failed totals and prevents concurrent runs. Use
the documented `discussionbridge:retry` command for one diagnosed To Discourse
delivery. Do not bypass a destination collision, replace stable identity, or
run overlapping workers.

## How The Statamic SSG Adapter Works

Statamic SSG uses the same
[DiscussionBridge for Statamic](https://github.com/DiscussionBridge/statamic-discussion-bridge)
addon and native entries, but publication is a
protected transaction because a local content write is not yet a public static
publication. One current Alpha scheduled transaction:

1. refreshes the receiver platform catalog;
2. runs `discussionbridge:ssg-prepare-publication-work --limit=8` to claim at
   most eight topic publications;
3. records their leases and exact prior native state in an atomically replaced,
   protected journal;
4. updates only those native Statamic entries;
5. passes the `discussionbridge:ssg-prepare` delivery gate;
6. regenerates the complete static site with `ssg:generate`;
7. deploys the generated estate;
8. verifies each exact resource and publication revision on the public site;
9. runs `discussionbridge:ssg-finalize-publication-work` to acknowledge only
   the verified leases; and
10. clears the journal after the transaction is complete.

Eight is the number of source-topic mutations admitted to one transaction, not
the number of files generated. Every cycle may rebuild and deploy the complete
site. The conservative boundary limits response size, lease exposure,
deployment collision, and recovery scope. At the current OBBBA ten-minute
cadence, eight claims equal a theoretical maximum of about 48 source-topic
publications per hour during backfill. After backfill, most cycles are empty or
contain only a few real changes.

A `prepared` or `finalizing` journal during an in-flight cycle is normal. A
journal that persists across the expected deployment/finalization window needs
diagnosis. If the candidate is publicly correct, use
`discussionbridge:ssg-finalize-publication-work`. If it was not deployed and
must be rolled back, preserve evidence first and use
`discussionbridge:ssg-abort-publication-work` to restore every unacknowledged
native change. Never delete or hand-edit the journal, acknowledge unverified
pages, schedule the dynamic Flat/DB worker for SSG, or claim another batch over
an unresolved transaction.

## How The WordPress Adapter Works

[DiscussionBridge for WordPress](https://github.com/DiscussionBridge/wordpress-discussion-bridge)
creates a native post in the destination post
type selected by the forum mapping. It stores the stable topic, resource,
revision, destination, and retry state in protected post metadata. A transport
interruption reuses the pending draft on retry, and a source or mapping revision
updates the same post. Loss of eligibility moves the managed post to draft
rather than silently deleting its identity.

The initial synchronization processes the signed source feed one bounded page
at a time. Steady-state work is claimed from the receiver's durable queue by
WP-Cron. The package supports bounded queue claims; the current OBBBA profile
uses eight items per externally scheduled cycle to share receiver capacity with
the other adapters. A successful native write acknowledges the exact lease. A
native failure is reported centrally and reaches operator attention after
bounded automatic attempts.

**Queued** and **Delivering** are active states. Do not press **Retry** while
either is shown. Retry only a diagnosed **Attention** or **Failed** item. A
durable installation must run WP-Cron from a real scheduler; reader traffic is
not an acceptable queue runner for a backfill or production operation.

## Reading Queue State

- **Queued** means eligible work exists but is not leased. It is normal during
  a backfill.
- **Claimed** or **Delivering** means an adapter owns a bounded lease. It is not
  yet proof of public success.
- **Current** means the adapter acknowledged the exact source, mapping, and
  publication revisions.
- **Retrying** means a bounded automatic attempt remains. One transient cycle
  is not automatically an incident.
- **Unpublished** or **Held** means the adapter successfully applied the
  current eligibility decision without destroying durable identity.
- **Needs attention** or **Failed** means automatic recovery is exhausted or
  unsafe. Preserve the reason and evidence before using Retry.

DiscussionBridge for Discourse's Publishing views are the cross-platform
census. Platform-native status pages and ledgers explain what happened locally.
Use both; a public HTTP 200 alone does not prove that the expected revision was
published.
