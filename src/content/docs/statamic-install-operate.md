---
title: "Install And Operate DiscussionBridge For Statamic"
lastUpdated: 2026-09-26
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/STATAMIC_INSTALL_OPERATE.md"
---

One Composer addon supports three independent profiles: Statamic Flat,
Statamic DB, and Statamic SSG. They may use the same package bytes, but they
must not share origins, Content Connections, secrets, application users,
databases, state, workers, or rollback packages.

## Install And Bind

Preserve the application, environment, users, content, database as applicable,
addon state, PHP/web service configuration, and deployed static artifact for
SSG. Install the exact tagged Composer package, then run from the Statamic
application root:

```text
php please discussionbridge:install
```

The guided installer configures the forum and site origins, connection ID,
protected secret file, lane, collections, service author, migrations, platform
catalog, and connection verification without creating content. After an addon
update, publish its current Control Panel assets:

```text
php please vendor:publish --tag=statamic-discussion-bridge --force
```

Follow the [component README](https://github.com/DiscussionBridge/statamic-discussion-bridge)
for the exact release and environment keys.

Every supported Statamic integration requires DiscussionBridge for Discourse,
an enabled Content Connection, and the Statamic addon/template integration.
Statamic does not provide Astro's plugin-free Simple or Full path. Presentation
alone does not make an initial population necessary.

## Flat And DB Operation

New Statamic entries going to Discourse are queued from authoritative content
saves and handled by the bounded worker. They do not require an initial
backfill. For an explicitly authorized existing forum corpus becoming native
Statamic entries, run the Control Panel **Synchronize publications** action or
the matching command once, then use:

```text
php please discussionbridge:sync-publication-work --limit=8
```

under the owning application identity on a real root-owned timer. The initial
forum scan is optional From Discourse work; the steady-state worker must not
repeat it.

## SSG Operation

SSG is a separate protected authoring/build profile. Its unattended order is
strict:

```text
php please discussionbridge:refresh-platform-catalog
php please discussionbridge:ssg-prepare-publication-work --limit=8
php please discussionbridge:ssg-prepare
php please ssg:generate
# deploy the exact generated estate
php please discussionbridge:ssg-finalize-publication-work
```

Finalize only after public resource and publication-revision markers verify.
If an undeployed candidate must be abandoned, preserve evidence and run:

```text
php please discussionbridge:ssg-abort-publication-work
```

Never delete or edit the protected journal, run a second prepare over it, or
schedule the Flat/DB worker for SSG.

## Proof Boundary

The existing large-site fixtures measure local reconciliation or native SSG
generation. They do not prove a large Statamic-to-Discourse import. Treat such
an import as unqualified until an explicit corpus, rate, idempotency, recovery,
and forum-result test has passed.
