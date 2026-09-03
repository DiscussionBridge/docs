# DiscussionBridge Docs Successor Checkpoint

Updated: 2026-09-03

## Current publication boundary

- Repository: `DiscussionBridge/docs`
- Public site: `https://docs.discussionbridge.dev/`
- Canonical editable documents: `docs/`
- Generated Starlight content: `src/content/docs/`
- Deployment: Cloudflare Worker `docs-discussionbridge-dev`

## 2026-09-01 suite-wide support guidance

`docs/SUPPORT_AND_FEEDBACK.md` was rewritten from its Astro-era support
checklist into current product-family guidance. It now covers The Bridge,
Astro, Ghost, Hugo, WordPress, Statamic Flat, Statamic DB, Statamic SSG, and
Discourse as Publisher. The report checklist distinguishes receiving plugin,
platform adapter/addon, site/demo package, direction, presentation mode,
connection identity, publish/retry/reconciliation/retrieval/rendering, and
install/upgrade/disable/rollback boundaries.

The live Alpha Support category remains the primary intake. The canonical
public support page is `https://discussionbridge.dev/support/`. Email intake at
`alphasupport@discussionbridge.dev` remains **being connected** and must not be
described as active until an end-to-end message creates the intended forum
topic. Public-support secret and privacy warnings remain explicit.

The supported generation workflow was used: `npm run refresh-metadata`
updated `docs/DOCS_PAGE_METADATA.json` and regenerated
`src/content/docs/support-and-feedback.md`. Metadata tests, synchronization,
the attribution/protected-path gate, the 25-page production build, Pagefind,
the sitemap, and the Wrangler dry run passed. Local browser replay at the exact
`#what-users-should-include` anchor found the full profile list, no old
Astro-only key-scope checklist, and no horizontal overflow.

Source commit `eac2a95` is pushed to `origin/main` and deployed as Cloudflare
Worker version `2432e3cc-dddc-4e23-a871-05a561ec8841`.

## 2026-09-03 Versions and live-status documentation

`docs/VERSIONS_AND_LIVE_STATUS.md` is the dated public identity anchor for the
Alpha product family. It records the six exact implementation packages, eight
independently exercised profiles, public demo destinations, Bridge runtime
census, candidate artifact hashes, static-consumer deployment identities, and
the distinct roles of the public Bridge, public demos, build sandbox,
development/pre-production forum, and community forum.

The page reports existing component version strings exactly. It does not claim
they are already normalized. It identifies The Bridge `0.2` compatibility line
and documents the intended future separation of product-family release,
Bridge-contract compatibility, and component-build identity.

The docs overview now describes the complete product family and links Versions
and Live Status first. Starlight navigation exposes the page under Start and
adds external links to the main site, live demos, The Bridge, and community
support. The canonical-to-generated sync list and metadata ledger include the
new page.

Metadata, generated-content synchronization, attribution/protected-path
checks, the 26-page production build, Pagefind, sitemap generation, and scoped
diff checking passed before publication. Source commit
`c08280576e55d2099cc2895861e7185b3bfd4443` is pushed to `origin/main` and
deployed as Cloudflare Worker version
`43f8e7d8-af9e-4bb0-9564-d8972f50c3a3`.
