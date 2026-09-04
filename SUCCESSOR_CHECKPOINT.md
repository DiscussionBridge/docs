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

## 2026-09-03 current Alpha operator documentation

The primary documentation navigation now reflects the implemented product
family rather than presenting the earlier Astro/API-only phase as current.
Four canonical pages were added:

- `ALPHA_OPERATOR_GUIDE.md` — end-to-end recovery, Bridge installation,
  forum policy, Content Connection, adapter binding, both-direction exercise,
  presentation verification, disable/re-enable, removal and rollback;
- `PLATFORM_PROFILES.md` — current Astro/Astro + Starlight, Ghost, Hugo,
  Statamic Flat/DB/SSG, WordPress and Discourse-as-Publisher boundaries;
- `PRESENTATION_MODES.md` — Simple, Full and fullInteractive behavior,
  branding, rich content, authorship, TOC, sessions and ownership;
- `DRAFT_ROADMAP.md` — advanced profiles, candidate adapters, migration,
  identity, DiscussionBridge Network, deployment capabilities, themes and
  Guided Demo Conversations.

The overview and key-management/known-issues/attribution pages were reconciled
with the current Alpha. Earlier Astro manuals, templates, setup, comments,
lanes, roadmap, demo and cumulative product records remain available, but now
carry explicit current/historical scope notices. Their sidebar group is named
`Astro Deep Reference` so an operator is not directed into stale setup first.

Metadata covers all 29 synchronized pages. Metadata tests, source/generated
synchronization, the attribution/protected-path gate, the 30-page production
build, Pagefind and sitemap generation passed. Live browser verification found
the four new primary routes and Versions page present, correctly titled,
linked from the overview/sidebar, and free of page-level horizontal overflow.

Source commit `ac97db7d7b229e801a1211b7ccf71cd51e769768` is pushed to
`origin/main`. The deployed Cloudflare Worker version is
`41ac8a26-709b-462a-ae28-facaf7538fdb`.

## 2026-09-03 release routing and package-role readability

Versions and Live Status now opens with direct routes to the product Download
page, the public Releases topic on The Bridge and the GitHub organization. It
states that the reviewed Alpha package is not yet a public download and that
older prereleases are historical candidates.

The cramped four-column package table was split into a compact identity table
and a separately readable Public Roles list. Candidate hashes remain explicitly
verification identities rather than download links. Metadata refresh and tests,
canonical/generated synchronization, attribution and protected-path checks,
the 30-page build, Pagefind, sitemap and Wrangler dry run passed. Source commit
`78b1f4a` is pushed to `origin/main` and deployed as Cloudflare Worker version
`cddd9bd7-11bf-4e2f-b645-e8efeee93abd`.

## 2026-09-03 operator wording and future-profile clarification

The Alpha Operator Guide now explains why plugin installation uses two Git
steps: clone obtains the repository, while checkout pins the exact immutable
reviewed commit. The checkout must not be omitted or replaced with a moving
branch. Testing instructions now use `test` rather than `exercise` throughout
the canonical documentation set.

Platform Profiles now uses sentence-case conjunctions in the Astro and
Statamic headings and platform-native terminology: Statamic `Multi-Site` and
WordPress `Multisite`. The future-profile section distinguishes Statamic
site/locale/region/section/brand variants, WordPress network/site activation
and isolation choices, and additional trusted static deployment arrangements.
Its feedback invitation now lists the topology, authority, direction, mode,
authorship, hosting, lifecycle, and preservation evidence needed for a useful
request.

Metadata tests, canonical/generated synchronization, attribution and
protected-path checks, the 30-page production build, Pagefind, sitemap,
Wrangler dry run, and scoped diff checking passed. Source commit `54cdb15` is
pushed to `origin/main` and deployed as Cloudflare Worker version
`7e41e6e0-cc64-459e-87ab-62b30c29c337`.

## 2026-09-03 Built in public census detail

Versions and Live Status now contains the authoritative dated detail behind
the product homepage's `Built in public` card. It reports physical and nonblank
line counts plus file counts for source, tests, documentation, configuration,
and other counted text across the six current implementation repositories.

The measurement was produced by the local reusable Project Census tool from
the exact clean package commits already named on the page. The superseded
standalone Discourse publisher repository is excluded because publishing is
now part of the unified Bridge plugin. Dependencies, generated browser bundles
and site output, lockfiles, vendored code, archives, source maps, and binary
assets are also excluded.

Metadata refresh and tests, canonical/generated synchronization, attribution
and protected-path checks, the 30-page production build, Pagefind, sitemap,
Wrangler dry run, and scoped diff checking passed. Source commit `9598123` is
pushed to `origin/main` and deployed as Cloudflare Worker version
`bdfef112-26e6-4884-af76-b4849ae3d21f`.

## 2026-09-04 installation-guide title clarification

The primary guide is now titled **Alpha Installation and Operator Guide** in
its canonical source, synchronized Starlight content, documentation references,
overview and sidebar. Its stable route remains `/alpha-operator-guide/` so
existing links and bookmarks do not break.

Metadata tests, canonical/generated synchronization, attribution and protected-
path checks, the 30-page production build, Pagefind, sitemap and scoped diff
checking passed. Source commit `38ae830` is pushed to `origin/main` and deployed
as Cloudflare Worker version `8ab75579-4253-467f-89ed-1dc2471a544a`.

## 2026-09-04 public source distribution baseline

The documentation now records **DiscussionBridge 0.2.0-alpha.18** as the
coordinated public source baseline. Versions and Live Status links all six
public product repositories and records their exact public `main` / shared-tag
commits. It distinguishes cloneable source from packaged GitHub release assets,
which remain a separate release action.

The Alpha Installation and Operator Guide now uses the single ordinary
Discourse plugin installation entry requested by Phil:
`git clone https://github.com/DiscussionBridge/discourse-discussion-bridge.git`.
Exact tag and commit identities remain visible evidence, not a second operator
command. The guide and Platform Profiles link each public adapter/addon
repository directly.

Metadata refresh and tests, canonical/generated synchronization, attribution
and protected-path checks, the 30-page production build, and scoped diff
checking passed. Source commit `f68fe13` is pushed to `origin/main` and deployed
as Cloudflare Worker version `f90867af-e06e-4c3a-8560-2c6e1421bf03`.

After The Bridge's annotation-only CI repair advanced its public `main`, the
Versions page was refreshed to distinguish current `main` from the immutable
coordinated release tag. Source commit `1f35819` is pushed to `origin/main` and
deployed as Cloudflare Worker version
`bd84759e-2eea-491e-b0c8-c76e6676f77e`.
