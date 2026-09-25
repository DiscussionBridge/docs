---
title: "DiscussionBridge Product And Adapter Architecture"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/CORE_ADAPTER_ARCHITECTURE.md"
---

Status: Current 0.2 Alpha product architecture
Updated: 2026-09-24

DiscussionBridge is a family of focused integrations. DiscussionBridge for
Discourse is the forum-side plugin and runtime authority. Small
platform-native adapters translate a publishing system's real lifecycle into a
shared, bounded wire contract. There is no separate portable-core runtime,
deployment broker, signed-plan estate, or second orchestration control plane.

The 2026-07-25 portable-core proposal was not implemented. It is historical
decision provenance, not current configuration or extension guidance. The
current package and profile census is in
[Platform Profiles](/platform-profiles/).

## Product Boundary

The Alpha family has six implementation packages exercised as eight profiles:

1. DiscussionBridge for Discourse, including the Discourse-as-Publisher
   profile;
2. DiscussionBridge for Astro, used by plain Astro and Astro + Starlight;
3. DiscussionBridge for Ghost;
4. DiscussionBridge for Hugo;
5. DiscussionBridge for Statamic, installed independently for Flat, DB, and
   SSG; and
6. DiscussionBridge for WordPress.

The same Discourse plugin receives platform-authored publications and exposes
forum-authored publications. There is no separate Publisher plugin. Statamic
SSG is a distinct protected build/deployment profile, not a second addon.

## DiscussionBridge For Discourse Owns

The plugin owns forum-side product behavior:

- independently scoped Content Connections, one-time secrets, allowed origins,
  directions, lanes, adapter identity, and enabled state;
- durable Bridge Records, topic identity, active and historical bindings, and
  URL-migration history;
- authenticated create-or-resolve for authoritatively published external
  content;
- forum-owned category, tag, visibility, author, and publication policy;
- From Discourse records, destination mappings, the publication-work queue,
  bounded leases, retry/attention state, and audit evidence;
- native Discourse administration, reconciliation, and topic-level publication
  controls; and
- exact record/topic attestation for Interactive presentation.

Discourse Core remains authoritative for users, sessions, authorization,
topics, posts, moderation, composer behavior, replies, likes, mail, backups,
and ordinary embed behavior.

The plugin does not install adapters, push into a CMS, deploy a site, or infer
authority from a public URL. Adapters pull only work visible to their own
connection and acknowledge only after their platform lifecycle has succeeded.

## The Adapter Protocol

The Adapter Protocol is a small, platform-neutral wire contract and conformance
fixture set. It is not a shared runtime or control plane.

Every authenticated adapter request uses one Content Connection:

```text
X-DiscussionBridge-Connection: dbc_...
X-DiscussionBridge-Secret: ...
```

The current contract covers:

- To Discourse create-or-resolve with a stable platform external ID, exact
  canonical URL, bounded published-content snapshot, adapter identity, and
  optional lane and source-author data;
- connection-scoped From Discourse record retrieval;
- destination-catalog and forum-publication feeds;
- bounded publication-work claim, lease, failure, and acknowledgement; and
- exact source or presentation URL migration proof where supported.

The connection secret is server-only. It must not enter browser JavaScript,
public HTML, URLs, content metadata, logs, exceptions, or support output.
Current adapters do not publish with user-created Discourse API keys.

## Publishing Adapters Own

Each adapter owns its platform boundary:

- the platform's authoritative publish event and stable native content ID;
- platform credentials, hooks, installation, and operator UI;
- canonical public URL and platform-native destination validation;
- bounded source-author and published-content translation;
- durable local identity, attempt, retry, lease, and reconciliation state;
- platform-native creation, update, withdrawal, cache invalidation, build, and
  deployment behavior;
- Simple, Full, and Interactive presentation where that profile supports them;
  and
- truthful platform-local status and recovery controls.

The adapters are deliberately native. WordPress ships as a WordPress plugin.
Statamic ships as one Composer addon. Ghost uses a custom integration plus a
loopback-only companion service. Astro and Hugo operate at trusted build
boundaries. None becomes a second forum policy authority.

## Direction, Identity, And Publication

Direction belongs to each Bridge Record:

- **To Discourse** begins only after the publishing platform establishes an
  authoritative published item. The adapter sends the same stable external ID
  on every retry. The plugin creates or resolves one durable topic and returns
  the same resource/topic tuple.
- **From Discourse** begins with an existing topic and an explicit forum-owned
  record or publication rule. The adapter creates, updates, or withdraws the
  mapped platform-native item and preserves its topic, resource, destination,
  source revision, and publication revision.

One topic may be published through several independent platform connections.
Each connection retains its own credentials, binding, platform state, retry
history, and native destination. Reply streams are not merged.

Initial backfill and steady-state work are separate. A backfill discovers the
eligible corpus. Later workers claim only changed or withdrawn topics from the
durable receiver queue. Dynamic adapters acknowledge after a successful native
write. Static adapters acknowledge only after build, deployment, and exact
public-marker verification. See
[Adapter Operating Models](/adapter-operating-models/).

## Presentation Boundary

Content direction and comments presentation are independent:

- **Simple** is a bounded native-platform rendering of public replies.
- **Full** is Discourse Core's plugin-free standard comments embed.
- **Interactive** is the plugin-attested comments-only full application frame.

Interactive does not move authentication, moderation, composer, reply, edit,
like, or session authority into an adapter. The historical
`fullInteractive` input is accepted only as a compatibility alias and is
normalized to `interactive`; new configuration and output use `interactive`.
See [Presentation Modes](/presentation-modes/).

## Explicit Exclusions

The current product does not include:

- the rejected v1 portable-core/control-plane architecture, signed plans,
  receipt chains, or deployment brokerage;
- a second policy engine inside Astro, Ghost, Hugo, Statamic, or WordPress;
- direct Discourse Core topic-creation fallback by an adapter;
- automatic generic platform deployment or provider administration;
- cross-forum writable comment relay, user synchronization, login federation,
  account provisioning, or CMS migration; or
- future SaaS, standalone-host, or DiscussionBridge Network behavior merely
  because current identities could support later migration.

## Licensing And Site Presentation

The family rule is MIT unless a component explicitly states otherwise. The
five publishing-platform adapter repositories publish MIT licenses.
DiscussionBridge for Discourse publishes GPL-2.0-or-later. The Adapter
Protocol is intended to be MIT, but its public license claim remains gated
until the reviewed `LICENSE` file is present in that public repository. Each
repository's published `LICENSE` file is authoritative.

Analytics, demo naming, branded navigation, and footer ownership belong to the
publishing site and its deployment runbook; they are not injected by the
Adapter Protocol. See [Attribution, Ownership, And Licensing](/attribution-ownership-license/)
and [Adapter Operating Models](/adapter-operating-models/).

## Historical Decision Record

The original proposal remains available as provenance in
[`docs/evidence/DISCUSSION_BRIDGE_DISCOURSE_CENTERED_DOCTRINE_2026-07-25.md`](/evidence-discussion-bridge-discourse-centered-doctrine-2026-07-25/).
Where that proposal conflicts with this page, current package behavior and the
current Alpha product-family contract control.
