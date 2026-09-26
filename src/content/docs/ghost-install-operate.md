---
title: "Install And Operate DiscussionBridge For Ghost"
lastUpdated: 2026-09-26
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/GHOST_INSTALL_OPERATE.md"
---

DiscussionBridge for Ghost has two installation parts: a native Ghost custom
integration and a loopback-only Node service operated beside Ghost. Ghost Admin
cannot install the companion service by itself.

## Hosting Requirement

Confirm that the server operator or managed host will provide the exact Node
runtime, dedicated OS identity, root-owned service definition, protected
credentials and state, narrow reverse-proxy routes, and supported theme or Code
Injection placement. If the provider cannot operate those pieces, the complete
two-direction profile is not installable on that plan.

Use the exact release identified in
[Versions And Live Status](/versions-and-live-status/) and follow the
[component README](https://github.com/DiscussionBridge/ghost-discussion-bridge)
and [managed-hosting contract](https://github.com/DiscussionBridge/ghost-discussion-bridge/blob/main/docs/MANAGED_HOSTING.md).

## Install And Bind

1. Preserve Ghost's database, `content`, configuration, theme, integration and
   webhook records, proxy configuration, service unit, and adapter state.
2. Install the exact companion-service release outside Ghost's version-owned
   tree under a dedicated OS identity.
3. Create the Ghost custom integration and signed `post.published` webhook.
4. Store the Bridge secret, Ghost webhook secret, Ghost Admin key, and operator
   password in separate protected files.
5. Bind the service to loopback and expose only the documented webhook,
   presentation, and operator routes through the reverse proxy.
6. Run `npm run install:rich-content`; if Ghost reports
   `manual_required: true`, install the returned versioned Site Footer snippet
   through Ghost Admin instead of broadening the Admin key.
7. Verify one published Ghost post reaches exactly one Discourse topic and an
   unchanged retry creates no duplicate.

When DiscussionBridge owns the article discussion, set Ghost's native Members
comments to **Nobody** so readers do not see two unrelated comment systems.

## Choose The Work

- New Ghost publications going to Discourse use signed publish webhooks. They
  do not require an initial corpus backfill.
- Ghost's DiscussionBridge presentation modes are receiver-backed. Install
  DiscussionBridge for Discourse and bind an enabled Content Connection before
  presenting or synchronizing discussion through this adapter.
- Existing Discourse topics becoming Ghost Posts or Pages use the optional
  From Discourse synchronization described below.
- A large existing Ghost corpus being imported into Discourse is not currently
  demonstrated at forum scale. Do not describe webhook canaries as that proof.

## Optional Forum-To-Ghost Initial Population

Only when the connection deliberately publishes an existing forum corpus into
Ghost, run:

```text
npm run sync:publications
```

Preview category/tag mappings first. The operation creates or adopts one
topic-marked native item, preserves its Bridge identity, updates in place, and
returns a revoked item to draft. After the optional initial pass, steady state
must use:

```text
npm run sync:publication-work
```

The steady-state worker claims at most the installed release's documented
bound and does not rescan the whole forum.

## Routine Operation

Verify the systemd service, loopback listener, proxy routes, signed webhook,
state directory, operator page, last durable summary, and expected empty worker
cycle. Record the exact version and Node runtime. Retry only diagnosed
recoverable attention; do not repeatedly run the full synchronization to hide
a failed incremental item.
