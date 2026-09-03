---
title: "Platform Profiles"
lastUpdated: 2026-09-03
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/PLATFORM_PROFILES.md"
---

This page describes what is installed for each current Alpha profile. It is a
product-boundary guide, not a substitute for the exact package README or a
site-specific rollback runbook.

## Astro and Astro + Starlight

**Product:** DiscussionBridge for Astro, one package used by plain Astro and
Astro + Starlight.

The package supports publishing to The Bridge, retrieving authorized From
Discourse records, and Simple, Full, and fullInteractive presentation. An
operator may begin with plugin-free comments and later adopt the same canonical
topic into The Bridge when Discourse Core independently attests that identity.

Install an exact local package artifact with `--save-exact`, preserve the
package-lock binding, and keep the connection secret in the build/runtime
secret store. Astro + Starlight needs an explicit content-component placement;
plain Astro places the component in its own layout. The package must not be
hard-coded to one demo forum, origin, topic, author, or receiver credential.

The Astro product is useful without The Bridge for plugin-free Simple and Full
comments. The same package enables Bridge-backed publishing, retrieval,
fullInteractive presentation, durable identity, retry, and reconciliation when
an operator later adds The Bridge.

## Ghost

**Product:** DiscussionBridge for Ghost, consisting of a native Ghost custom
integration plus a small hosting-layer adapter service.

Ghost Admin creates the integration and signed `post.published` webhook. The
adapter service verifies Ghost's HMAC, runs under a dedicated OS identity,
binds only to loopback, stores credentials and durable state outside Ghost's
version-owned tree, and is exposed only through narrow reverse-proxy routes.
The theme uses an explicit `[data-discussionbridge-comments-host]` or
resource placeholder; it must not borrow Ghost Members' `.gh-comments`
container.

Ghost Admin alone cannot install the execution component. Self-hosted
operators need server access. A managed Ghost provider must agree to install
and operate the service, protected credentials, state, systemd unit, proxy
routes, and theme integration.

## Hugo

**Product:** DiscussionBridge for Hugo, a trusted-build adapter.

Hugo emits a deterministic manifest. The adapter validates the complete corpus,
resolves authorized publications, retrieves selected From Discourse records,
and writes nonsecret data atomically for the final static build. A durable
state file preserves stable identity, attempt, result, and abandoned-build
recovery. The secret exists only in the protected build environment.

Simple pages contain a sanitized static fallback and refresh public comments
in the browser. Full and fullInteractive use credential-free Discourse
presentation. Native From Discourse materialization requires explicit authority
and writes an ordinary Hugo content record without placing a receiver secret
in source or output.

## Statamic Flat and Statamic DB

**Product:** DiscussionBridge for Statamic, one native Composer addon installed
independently in both profiles.

The addon adds opt-in/presentation fields, durable delivery state, bounded
worker and reconciliation commands, native tags, source-author reporting, all
three comments modes, To Discourse, and authorized From Discourse native
materialization. A root-owned timer should invoke the worker under the owning
Statamic application user; content saves enqueue locally and do not make an
unbounded forum request.

Flat and DB use the same addon bytes but separate origins, connection IDs,
secrets, application users, databases, content identities, workers, and
rollback packages. Flat keeps platform content file-backed while addon
operational state uses its own table. DB keeps authoritative content and addon
state in the database without overloading Statamic's own tables.

## Statamic SSG

**Product:** the same DiscussionBridge for Statamic addon, used in a third
protected authoring/build profile.

The required order is:

```shell
php please discussionbridge:ssg-prepare
php please ssg:generate
```

Do not deploy when preparation fails. The generated public site contains no
PHP runtime, queue worker, connection secret, or protected adapter endpoint.
Simple includes a generated fallback and can refresh public comments in the
browser; Full and fullInteractive retain credential-free Discourse surfaces.
The protected authoring application and the static deployment are separate
recovery and evidence boundaries.

## WordPress

**Product:** DiscussionBridge for WordPress, a native WordPress plugin.

The plugin has native settings, publishing opt-in, durable post metadata,
status/retry controls, a dynamic From Discourse block and compatibility
shortcode, native materialization, source-author reporting, and all three
comments modes. It publishes only explicitly eligible content and must not run
network delivery from ordinary public page rendering.

Store the connection secret outside the webroot and WordPress database. WP
Discourse is a separate product. If it is fully configured or otherwise able
to publish the same post, DiscussionBridge must fail closed unless an
independently enforced coexistence rule prevents duplicate publication.

## The Bridge — Discourse As Publisher

The same downloadable Bridge plugin performs both receiving and publishing
jobs. There is no separate Publisher plugin.

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
they are not hidden switches in The Bridge.

When proposing one of these profiles, include the platform and version, site
topology, authoritative content source, desired To/From direction, presentation
modes, user/author model, hosting constraints, build or publishing lifecycle,
and the specific outcome DiscussionBridge should preserve. Share that evidence
through [Support And Feedback](/support-and-feedback/) or the
[DiscussionBridge community forum](https://forum.discussionbridge.dev/).
