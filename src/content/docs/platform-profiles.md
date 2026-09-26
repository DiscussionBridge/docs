---
title: "Platform Profiles"
lastUpdated: 2026-09-26
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/PLATFORM_PROFILES.md"
---

This page describes what is installed for each current Alpha profile. It is a
product-boundary guide, not a substitute for the exact package README or a
site-specific rollback runbook.

For the queue, batch, lease, build/deploy, acknowledgement, and recovery
behavior behind these profiles, see
[Adapter Operating Models](/adapter-operating-models/).

For step-by-step installation and operation, use the dedicated guide for
[Astro](/astro-install-operate/), [Ghost](/ghost-install-operate/),
[Hugo](/hugo-install-operate/),
[Statamic](/statamic-install-operate/), or
[WordPress](/wordpress-install-operate/).

The family rule is **MIT unless a component explicitly states otherwise**.
The five publishing-platform adapter repositories publish MIT licenses;
DiscussionBridge for Discourse publishes GPL-2.0-or-later. The Adapter
Protocol is intended to be MIT, but that claim is not release-complete until
its public repository contains the reviewed `LICENSE` file. Each repository's
published `LICENSE` file is authoritative. See
[Attribution, Ownership, And Licensing](/attribution-ownership-license/).

## Astro and Astro + Starlight

**Product:** DiscussionBridge for Astro, one package used by plain Astro and
Astro + Starlight. [Source and installation](https://github.com/DiscussionBridge/astro-discussion-bridge).

The package supports publishing to DiscussionBridge for Discourse, retrieving authorized From
Discourse records, and Simple, Full, and Interactive presentation. An
operator may begin with plugin-free comments and later adopt the same canonical
topic into DiscussionBridge for Discourse when Discourse Core independently attests that identity.

Install an exact local package artifact with `--save-exact`, preserve the
package-lock binding, and keep the connection secret in the build/runtime
secret store. Astro + Starlight needs an explicit content-component placement;
plain Astro places the component in its own layout. The package must not be
hard-coded to one demo forum, origin, topic, author, or receiver credential.

The Astro product is useful without DiscussionBridge for Discourse for plugin-free Simple and Full
comments. The same package enables Bridge-backed publishing, retrieval,
Interactive presentation, durable identity, retry, and reconciliation when
an operator later adds DiscussionBridge for Discourse.

## Ghost

**Product:** DiscussionBridge for Ghost, consisting of a native Ghost custom
integration plus a small hosting-layer adapter service.
[Source and installation](https://github.com/DiscussionBridge/ghost-discussion-bridge).

Ghost Admin creates the integration and signed `post.published` webhook. The
adapter service verifies Ghost's HMAC, runs under a dedicated OS identity,
binds only to loopback, stores credentials and durable state outside Ghost's
version-owned tree, and is exposed only through narrow reverse-proxy routes.
The theme uses an explicit `[data-discussionbridge-comments-host]` or
resource placeholder; it must not borrow Ghost Members' `.gh-comments`
container.

Ghost's DiscussionBridge integration is receiver-backed. It requires
DiscussionBridge for Discourse and an enabled Content Connection; it does not
provide Astro's plugin-free Simple or Full path.

When DiscussionBridge owns the article discussion surface, set Ghost Admin
**Settings → Membership → Who can comment on posts?** to **Nobody**. Ghost's
native Members comments are a separate identity and reply system; leaving them
enabled produces a second comment section beneath the DiscussionBridge frame
and can falsely imply that Ghost membership is synchronized with Discourse.

Ghost Admin alone cannot install the execution component. Self-hosted
operators need server access. A managed Ghost provider must agree to install
and operate the service, protected credentials, state, systemd unit, proxy
routes, and theme integration.

The hosting-layer service also provides a separately authenticated operator
page. It shows the last durable synchronization result, Ghost-to-Discourse
mappings, Discourse-to-Ghost publications, attention states and bounded failure
reasons, and offers an exact-origin **Synchronize publications** action. Its
credential is distinct from the Ghost Admin key, webhook secret and Bridge
connection secret. The operator page is part of the companion service rather
than Ghost Admin. Any future remote-hosted service remains roadmap work and is
not a current Alpha installation profile.

Ghost 6.59 permits a custom-integration token to read Code Injection but may
deny writes. In that case the installer reports `manual_required: true` and
supplies the exact versioned bootstrap for **Ghost Admin → Settings → Advanced
→ Code injection → Site Footer**. Operators should not broaden the Admin key or
modify an upgrade-owned stock theme to bypass that Ghost boundary.

## Hugo

**Product:** DiscussionBridge for Hugo, a trusted-build adapter.
[Source and installation](https://github.com/DiscussionBridge/hugo-discussion-bridge).

Hugo emits a deterministic manifest. The adapter validates the complete corpus,
resolves authorized publications, retrieves selected From Discourse records,
and writes nonsecret data atomically for the final static build. A durable
state file preserves stable identity, attempt, result, and abandoned-build
recovery. The secret exists only in the protected build environment.

Hugo's supported presentation and publication paths are receiver-backed and
require DiscussionBridge for Discourse plus an enabled Content Connection.
Reader-facing output may remain credential-free, but that does not make the
installation plugin-free. Native From Discourse materialization requires
explicit authority and writes an ordinary Hugo content record without placing
a receiver secret in source or output.

## Statamic Flat and Statamic DB

**Product:** DiscussionBridge for Statamic, one native Composer addon installed
independently in both profiles.
[Source and installation](https://github.com/DiscussionBridge/statamic-discussion-bridge).

The addon adds opt-in/presentation fields, durable delivery state, bounded
worker and reconciliation commands, native tags, source-author reporting, all
three comments modes, To Discourse, and authorized From Discourse native
materialization. A root-owned timer should invoke the worker under the owning
Statamic application user; content saves enqueue locally and do not make an
unbounded forum request.

All three Statamic profiles require DiscussionBridge for Discourse and an
enabled Content Connection. They do not provide Astro's plugin-free Simple or
Full path.

Flat and DB use the same addon bytes but separate origins, connection IDs,
secrets, application users, databases, content identities, workers, and
rollback packages. Flat keeps platform content file-backed while addon
operational state uses its own table. DB keeps authoritative content and addon
state in the database without overloading Statamic's own tables.

## Statamic SSG

**Product:** the same DiscussionBridge for Statamic addon, used in a third
protected authoring/build profile.

For an initial or legacy standalone static build, preparation still precedes
generation. For the current unattended publication queue, the complete order
is:

```shell
php please discussionbridge:refresh-platform-catalog
php please discussionbridge:ssg-prepare-publication-work --limit=8
php please discussionbridge:ssg-prepare
php please ssg:generate
# deploy the exact generated estate
php please discussionbridge:ssg-finalize-publication-work
```

Do not deploy when either preparation step fails, and do not finalize until
the exact public resource and publication-revision markers are visible. If a
prepared candidate will not be deployed, preserve evidence and run
`php please discussionbridge:ssg-abort-publication-work`; never delete or edit
the protected transaction journal by hand. The generated public site contains
no PHP runtime, queue worker, connection secret, or protected adapter endpoint.
Generated presentation may contain no receiver credential, but every supported
Statamic SSG integration remains bound to the receiver plugin and its Content
Connection.
The protected authoring application and the static deployment are separate
recovery and evidence boundaries.

## WordPress

**Product:** DiscussionBridge for WordPress, a native WordPress plugin.
[Source and installation](https://github.com/DiscussionBridge/wordpress-discussion-bridge).

The plugin has native settings, publishing opt-in, durable post metadata,
status/retry controls, a dynamic From Discourse block and compatibility
shortcode, native materialization, source-author reporting, and all three
comments modes. It publishes only explicitly eligible content and must not run
network delivery from ordinary public page rendering.

Every supported WordPress integration requires DiscussionBridge for Discourse
and an enabled Content Connection. WordPress does not provide Astro's
plugin-free Simple or Full path.

Prefer a protected server constant or secret file outside the webroot. Where
server-file access is unavailable, WordPress administrators may paste the
one-time secret in the plugin settings; it is encrypted with the installation
authentication salts, stored as a non-autoloaded option, and never redisplayed.
WP Discourse is a separate product. If it is fully configured or otherwise able
to publish the same post, DiscussionBridge must fail closed unless an
independently enforced coexistence rule prevents duplicate publication.

To Discourse delivery runs through WordPress Cron. **Queued** and
**Delivering** are active states, not failures; refresh after a short wait and
use **Retry** only when a delivery reports **Attention** or **Failed**.

## Discourse As Publisher

The same downloadable Bridge plugin performs both receiving and publishing
jobs. There is no separate Publisher plugin.
[Source and installation](https://github.com/DiscussionBridge/discourse-discussion-bridge).

An administrator selects an existing Discourse topic, one Content Connection,
the platform's stable identity and exact destination, then creates a From
Discourse Bridge Record. The selected adapter retrieves it. Explicit
**Authorize native materialization** is required before an adapter may create
or update a genuine platform record. Presentation-only access never implies
creation authority.

One topic may be published through multiple independent connections at the
same time. Each destination retains its own binding, adapter state, presentation
mode, retry history, and platform-native page.

## Not Yet Current Profiles

Hugo is included in the current Alpha. These additional profiles remain future
work:

- **Statamic Multi-Site** — determine whether each Statamic site, locale,
  region, section, or brand needs its own Content Connection and author policy,
  and how shared entries retain distinct canonical identities. Statamic's
  Multi-Site feature is intended for variations or sections of one site, not
  unrelated multi-tenant estates.
- **WordPress Multisite** — determine network activation versus per-site
  activation, per-site connection and credential isolation, canonical identity
  across domain- or path-based sites, and network-admin responsibilities.
- **Additional static deployment profiles** — establish how a trusted build,
  preview environment, scheduled regeneration, cache refresh, and rollback work
  for the operator's actual Astro, Hugo, or Statamic SSG pipeline.

Drupal/Drupal CMS and Next.js are candidate adapters, not current product
claims. Cross-forum DiscussionBridge Network concepts, comment migration, and
identity/login capabilities are separate future products or capability lanes;
they are not hidden switches in DiscussionBridge for Discourse.

When proposing one of these profiles, include the platform and version, site
topology, authoritative content source, desired To/From direction, presentation
modes, user/author model, hosting constraints, build or publishing lifecycle,
and the specific outcome DiscussionBridge should preserve. Share that evidence
through [Support And Feedback](/support-and-feedback/) or the
[DiscussionBridge community forum](https://forum.discussionbridge.dev/).
