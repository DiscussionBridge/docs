---
title: "Historical Discourse Field Notes"
lastUpdated: 2026-09-25
status: "Historical record — not current operating guidance"
audience: "Maintainers and product-history readers"
appliesTo: "Dated DiscussionBridge Alpha development record"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/DISCOURSE_FIELD_NOTES.md"
---

> **Status: archived.** These observations were collected in July 2026 while testing an earlier Astro prototype. They are retained as evidence, not as a current setup guide or product contract.

The prototype used Discourse API keys, direct topic writes, URL-search reconciliation, and commands such as `check-discourse`, `publish-new`, `sync-existing`, `publish-and-sync`, and `import-existing`. Those commands and that authentication model are not part of DiscussionBridge 0.2.

The current product uses the DiscussionBridge for Discourse plugin and Content Connections. Adapters authenticate with a Content Connection and use the published adapter contract. The public display mode is `interactive`; `fullInteractive` survives only as an input compatibility alias.

Use these current documents instead:

- [Core Adapter Architecture](/core-adapter-architecture/)
- [Adapter Operating Models](/adapter-operating-models/)
- [Content Lanes](/content-lanes/)
- [Comments Display Modes](/comments-display/)
- [Preparing Astro Content For Discussion](/discussion-safe-markdown/)

## Durable Observations

Several findings remain useful even though their implementation changed:

- Discourse topic IDs are durable even when a title or slug changes.
- An integration must fail closed when it cannot prove the exact source-to-topic relationship.
- Full-app embedding depends on forum embed settings, allowed origins, authentication, cookies, CSRF behavior, and websocket access.
- A CDN or WAF in front of Discourse must preserve the plugin, JSON, embed, full-app, authentication, cookie, and websocket paths used by the deployment.
- Source-site rendering features do not automatically become useful cooked forum content. Verify both surfaces.
- Discourse edit history is useful evidence when checking managed first-post changes.

## Historical Cross-Site Sign-In Evidence

The OBBBA trial proved a signed-in full-app discussion across different registrable domains only after an authorized Discourse operator changed the relevant cookie policy and re-ran the end-to-end checks. That result was specific to the tested forum, browser, origins, HTTPS configuration, and forum version.

It is not a universal installation recipe. Do not copy old Rails-console commands or cookie values from historical notes into a new deployment. A current operator must:

- record the deployed forum and browser versions
- authorize exact embeddable origins and keep arbitrary origins disabled
- verify HTTPS and secure-cookie behavior
- test top-level sign-in and sign-out
- test iframe recognition and an authorized write
- confirm CSRF protections remain effective
- document a deterministic rollback

Re-test after forum upgrades, browser privacy changes, hostname changes, CDN/WAF changes, or a change in the need for cross-site interactive discussion.

## Historical CDN Evidence

Testing through Cloudflare showed that a CDN-backed Discourse installation can support the integration. It did not establish a portable Cloudflare configuration. When behavior differs between the edge and origin, inspect cache rules, request filtering, cookies, websocket forwarding, and the exact plugin routes before changing DiscussionBridge.

## What Is Intentionally Not Preserved Here

The old page contained live-looking hostnames, account names, category IDs, API-key strategies, endpoint probes, and command output. Those details belonged to the removed prototype and could mislead an operator into bypassing the current Content Connection contract.

The complete historical record remains available in repository history when forensic comparison is necessary. New documentation and deployment evidence should use the current 0.2 vocabulary, commands, security boundary, and licensing model.
