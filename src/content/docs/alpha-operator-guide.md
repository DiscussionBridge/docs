---
title: "Alpha Installation and Operator Guide"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/ALPHA_OPERATOR_GUIDE.md"
---

This is the current operator path for the DiscussionBridge Alpha. Start here,
then use the platform-specific notes in [Platform Profiles](/platform-profiles/)
and the exact deployed identities in
[Versions And Live Status](/versions-and-live-status/).

DiscussionBridge is a family of focused tools. **DiscussionBridge for
Discourse** is the unified receiver plugin. A platform adapter or addon
connects one publishing installation to that receiver; it does not become a
second control plane. **The Bridge** is reserved for the dedicated public demo.

## 1. Choose The Systems And Job

Record the exact Discourse forum and publishing installation before installing
anything. One Content Connection represents one installation, not an entire
platform brand and not an arbitrary collection of origins.

Choose which jobs the connection may perform:

- **To Discourse** creates or resolves one forum-governed discussion for an
  authoritatively published platform item.
- **From Discourse** exposes a selected forum topic to that platform for safe
  presentation or, only when separately authorized, native materialization.
- A connection may permit either direction or both. Each Bridge Record still
  has one direction and one stable identity.

Also choose the allowed canonical origin, lane, category, tags, visibility,
comments presentation, visible author policy, and whether new To Discourse
topics should receive a DiscoTOC marker.

## 2. Establish Recovery Before Installation

Do not use a successful build or container rebuild as rollback evidence.

- For Discourse, preserve the protected container configuration and a
  database/uploads or whole-server recovery point. A launcher rebuild reuses
  persistent data.
- For WordPress, preserve the database and `wp-content`.
- For Ghost, preserve the database, `content`, protected config, theme,
  integration/webhook records, adapter state, service unit, and proxy config.
- For Statamic Flat, preserve the application, content, users, environment,
  addon database, and web/PHP service configuration.
- For Statamic DB, also preserve an authoritative database dump.
- For Statamic SSG, preserve the protected authoring application and generated
  deployment identity separately.
- For Astro and Hugo, preserve lockfiles, adapter state, generated binding
  data, deployment identity, and the last known-good artifact.

Record paths, byte counts, hashes, ownership/modes, and the restore sequence.
Secrets may be referenced by protected location; never copy their values into
the runbook.

## 3. Install DiscussionBridge For Discourse

Install DiscussionBridge for Discourse from its public GitHub repository in the
intended Discourse container. Copy the exact published tag from
[Versions And Live Status](/versions-and-live-status/) and confirm it against
the component's release notes. Stop if those sources disagree. For the standard
`app` layout, add one pinned clone command to `app.yml` and rebuild only that
container:

```yaml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - git clone --branch <exact-release-tag> --depth 1 https://github.com/DiscussionBridge/discourse-discussion-bridge.git
```

Replace the placeholder with the exact tag; do not paste it literally. This is
one clone command and needs no separate checkout. Record the installed tag,
commit, and artifact in the site runbook. A moving `main` checkout is not an
immutable deployment identity.

```bash
cd /var/discourse
./launcher rebuild app
```

For a two-container installation, change only the container that owns the
Discourse application/plugin build. Follow the installation's own runbook;
do not copy a single-container command blindly.

After the rebuild, verify the installed plugin commit, migration state,
PostgreSQL, Redis, web processes, HTTPS, and ordinary forum behavior while the
DiscussionBridge switches remain disabled.

## 4. Configure Forum Policy

In Discourse admin, open **Plugins → DiscussionBridge** and the native
DiscussionBridge settings.

Configure and verify:

- plugin and endpoint switches;
- a privileged service identity used only to execute authorized operations;
- a non-system default visible author;
- default category, tags, and visibility;
- optional lane policy;
- comments-only Interactive support;
- the ordinary Discourse embedding and CORS settings required by the selected
  presentation modes.

Choose who may see per-topic publication badges and controls: administrators,
staff, or a dedicated DiscussionBridge Editors group. Use the narrower group
for paid or delegated publishing work instead of granting general staff access.
The optional **DiscussionBridge Operator service** capability and the
**Request Operator service** action are separate steps: enabling local
capability does not submit a service request or activate a paid service.
An enrolled operator identity is narrowly bound to DiscussionBridge inspection
and approved publication mutations. It does not receive connection-secret,
global-setting, user-management, credential, or general forum-administration
authority.

Before testing an embedded discussion, add the publishing site's exact public
HTTPS origin in Discourse's **Embeddable Hosts**. Keep **Embed any origin**
disabled unless the forum operator has deliberately chosen that broader policy.
For Interactive mode, also enable **Embed full app** and its sign-in flow. A
Content Connection's allowed origin authorizes Bridge requests; it does not
itself create a Discourse Embeddable Host.

The operating identity and visible author are deliberately separate. Choosing
a visible author does not grant that user service authority.

## 5. Create A Content Connection

Under **Connections**, create one connection for the exact platform
installation. Set:

- a clear name and adapter identity;
- exact allowed origin or origins;
- permitted direction or directions;
- allowed lane or lanes;
- fixed-author or mapped-source-author policy;
- optional **Generate topic table of contents** behavior;
- enabled state.

After saving, inspect the origin's readiness label in **Connections**.
**Embed host ready** means Discourse Core allows that exact origin;
**Embeddable Host missing** means embedding is not ready even if the adapter
credential verifies. Correct the host rule before the first iframe test.

The new secret is shown once. Transfer it directly to the adapter's protected
server-side store. Never put it in page content, browser JavaScript, a public
environment file, a URL, a support bundle, or Git.

Use the selected connection's **Authors** tab after the adapter reports real
source identities. Map a source author to an existing Discourse user only when
that mapping is desired. A connection may instead use one fixed Discourse
author for all platform content. Mapping changes affect future topics and do
not silently rewrite prior ownership.

## 6. Install And Bind The Platform Adapter

Obtain the appropriate adapter or addon from its public repository, follow that
component's installation instructions, and bind it to:

- [DiscussionBridge for Astro](https://github.com/DiscussionBridge/astro-discussion-bridge)
- [DiscussionBridge for Ghost](https://github.com/DiscussionBridge/ghost-discussion-bridge)
- [DiscussionBridge for Hugo](https://github.com/DiscussionBridge/hugo-discussion-bridge)
- [DiscussionBridge for Statamic](https://github.com/DiscussionBridge/statamic-discussion-bridge)
- [DiscussionBridge for WordPress](https://github.com/DiscussionBridge/wordpress-discussion-bridge)

Configure the installed component with:

- the DiscussionBridge for Discourse HTTPS origin;
- the `dbc_…` connection ID;
- the platform's protected connection-secret store;
- the exact publishing-site origin;
- the allowed lane;
- the platform's durable state location;
- the intended content types, collections, tags, or opt-in fields.

See [Platform Profiles](/platform-profiles/) for each platform's native
installation and execution boundary. See
[Adapter Operating Models](/adapter-operating-models/) for each adapter's
native object, initial-backfill and steady-state behavior, claim limit, lease,
acknowledgement, and recovery boundary.

For WordPress installations without server-file access, paste the one-time
secret under **Settings → DiscussionBridge**. The plugin encrypts it with the
installation's authentication salts, stores only a non-autoloaded ciphertext,
and never redisplays it. Protected server configuration remains the preferred
override when available.

> **Allow time for delivery.** WordPress schedules DiscussionBridge delivery in
> the background. Depending on WordPress Cron and network timing, a post may
> remain **Queued** or **Delivering** briefly. Refresh the DiscussionBridge
> settings page after a short wait. Do not select **Retry** while either status
> is shown. Retry only after the delivery reports **Attention** or **Failed**.

### Establish destination structure before forum-scale publication

Install the destination's native navigation and content structure before the
first preview or backfill. Create the intended section routes, collections,
categories, tags, or indexes and verify that every public route works while it
is still empty. This gives operators stable URLs and understandable navigation
before synchronized content arrives.

The initial state must be truthful:

- an empty index says that no synchronized publications exist yet;
- navigation may link to an empty native route, but must not invent entries,
  counts, authors, or synchronization status;
- do not copy forum posts manually merely to make a destination look populated;
- do not replace the forum-scale preview and backfill with topic-by-topic
  authorization.

After the structure is verified, configure the connection's category and tag
selection plus its destination mappings. The preview shows which eligible
forum topics will populate each native destination. The resumable backfill then
creates those entries, and later synchronization updates the same durable
identities without duplicates.

Before starting the full backfill, publish one representative topic as a
canary. Verify its native identity, public URL, content, authorship, source
credit, discussion link, update-in-place behavior, and rollback path. Then use
the adapter-specific bounded batch and unattended worker described in
[Adapter Operating Models](/adapter-operating-models/); do not convert a
successful one-topic canary into an unbounded loop.

An empty but working native section is readiness evidence, not a failed
publication. Record its route and rollback boundary before starting the
backfill. Platform-specific empty states differ: a WordPress category can exist
without posts, while a Ghost integration may need an explicit route until its
first tagged publication exists. Use the native mechanism documented in
[Platform Profiles](/platform-profiles/); do not fabricate placeholder
content to hide the distinction.

## 7. Test The Workflow

Use newly created demo content so existing content cannot hide an identity or
collision error.

For **To Discourse**:

1. opt in one draft through the platform's native control;
2. publish it through the authoritative platform lifecycle;
3. run the adapter worker/build where the platform requires one;
4. verify one Bridge Record and one topic;
5. verify meaningful content, canonical source attribution, selected author,
   category, tags, visibility, and optional TOC;
6. retry the exact identity and prove no duplicate topic or record is created;
7. verify ordinary edits do not claim synchronization the adapter does not
   implement.

For **From Discourse**:

1. make the topic eligible through the connection's category/tag policy or an
   explicit per-topic decision;
2. open the topic wrench menu and choose **DiscussionBridge Status**;
3. review each connection independently and choose its default, include, or
   exclude state plus the exact mapped destination;
4. preview the eligible population and destination mappings before starting a
   forum-scale backfill;
5. choose presentation-only or explicitly authorize native materialization;
6. run the bounded adapter retrieval/materialization or backfill path;
7. confirm the Publishing queue moves through Queued/Delivering to Current and
   that no terminal attention condition is hidden by record-health filters;
8. verify the source first post appears once, source attribution is clear, and
   replies/comments remain attached to the same topic;
9. retry one genuinely recoverable item unchanged, then test one authorized
   source revision update.

Do not use generic Retry for terminal identity drift, ownership conflicts, or
known over-limit content. Diagnose and correct the cause first; a blind retry
does not change the unsafe input.

For either direction, verify reconciliation is clean and a credential never
appears in HTML, JSON intended for browsers, logs, URLs, screenshots, or error
messages.

The current native From Discourse source-body boundary is 256 KiB. Content
above the admitted adapter limit must become a truthful operator-attention item;
it must not be silently truncated into a misleading publication.

## 8. Verify Presentation

Test every mode the profile claims on desktop and mobile. The current
modes are defined in [Presentation Modes](/presentation-modes/).

Check source content, headings/TOC, tables, code, links, images, Mermaid, math,
author/provenance, the open-discussion route, Discourse branding, the
DiscussionBridge credit, reply visibility, Show more behavior, iframe height
and internal scroll, signed-in and signed-out behavior, and keyboard focus.

Do not infer support from a route returning 200. Confirm the visible product
behavior.

## 9. Disable, Re-enable, Remove, And Roll Back

Before relying on the connection, test these operations against test data:

- disable the connection and verify adapter requests fail closed;
- re-enable it and verify the same identity resolves without duplication;
- disable the forum-wide endpoint and verify no adapter can bypass it;
- stop the adapter worker/build hook and verify platform publishing still
  fails or queues honestly rather than blocking ordinary page rendering;
- remove presentation wiring and verify the host page remains usable;
- restore the pre-install package and verify the documented rollback.

Disabling DiscussionBridge does not delete topics, posts, users, categories,
tags, platform content, or Bridge records. Removal and data retention are
separate operator decisions. Never delete durable data merely to make a test
look clean.

## 10. Record The Acceptance Boundary

Record exact source commits, artifacts and hashes, installed paths, lockfile or
Composer binding, runtime/service identity, public deployment identity,
connection ID, directions, modes, test content and topic/resource IDs, backup,
rollback result, and known exclusions.

Alpha demos prove working implementation profiles. They do not by themselves
prove a managed host will install a companion service, that provider recovery
has been rehearsed, that mail is accepted, or that a production release has
been approved.

For help, use [Support And Feedback](/support-and-feedback/). Never include a
connection secret or other credential in a support request.
