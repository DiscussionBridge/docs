---
title: "Alpha Setup Guide"
lastUpdated: 2026-09-25
status: "Legacy Astro 0.1 migration notice"
audience: "Operators maintaining a 0.1 Astro estate"
appliesTo: "DiscussionBridge for Astro 0.1 to 0.2 migration"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/ALPHA_SETUP.md"
---

> **Historical Astro API-only reference — 0.1 line.** The former setup flow on
> this page does not describe the current 0.2 multi-platform adapters,
> receiver-owned publication queue, or connection-secret workflow. Do not use
> old `publish-new`, `sync-existing`, `publish-and-sync`, `import-existing`, or
> `check-discourse` commands for a new installation.

Use the current documentation instead:

1. [Alpha Installation and Operator Guide](/alpha-operator-guide/) for the
   end-to-end installation and acceptance sequence.
2. [Platform Profiles](/platform-profiles/) for platform-specific package and
   runtime requirements.
3. [Adapter Operating Models](/adapter-operating-models/) for native objects,
   claim limits, leases, worker cadence, acknowledgement, and recovery.
4. [Presentation Modes](/presentation-modes/) for Simple, Full, and
   Interactive presentation.
5. [Key Management](/key-management/) for connection secrets and other
   protected credentials.
6. [Troubleshooting](/troubleshooting/) for current queue and adapter triage.

## Existing 0.1 Astro Estates

An already-installed 0.1 estate may still require its matching immutable
release documentation. Before operating it, record the exact package version,
source commit, artifact hash, lockfile binding, forum, public origin, and
rollback point. Use only the documentation shipped with that exact artifact.

The former `import-existing` command belongs to that legacy toolchain. On the
reviewed legacy line it wrote source-mode metadata and `discussionSync: false`.
Verify the generated guard before any later write; do not assume that a current
0.2 adapter exposes the command.

Use `interactive` in all new configuration. During the compatibility window,
adapters may accept the historical `fullInteractive` value and normalize it to
`interactive`. It is not a separate current presentation mode.

Never paste an API key, connection secret, provider token, or database
credential into a public command, page, support request, screenshot, or Git.
