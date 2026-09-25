# DiscussionBridge Docs Successor Checkpoint

Updated: 2026-09-24

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

## 2026-09-24 adapter operating models and licensing rationale

The canonical public documentation now includes
`docs/ADAPTER_OPERATING_MODELS.md`, synchronized to the stable route
`/adapter-operating-models/` and exposed in the Start sidebar. It explains the
shared From Discourse queue lifecycle, the difference between initial backfill
and steady-state work, why claims are bounded, native objects and storage,
create/update/withdrawal/idempotency behavior, dynamic versus static
acknowledgement, operator states, recovery paths, and prohibited blind actions
for Astro/Starlight, Ghost, Hugo, Statamic Flat, Statamic DB, Statamic SSG, and
WordPress. The Statamic SSG section records the exact eight-topic protected
transaction, complete site regeneration/deployment, public-revision
verification, finalize/abort boundary, and current OBBBA ten-minute throughput
without misrepresenting eight claims as eight generated files.

The overview, Platform Profiles, Alpha Installation and Operator Guide, sync
manifest, metadata ledger, and Starlight navigation link the new guide. The
attribution page now records the settled relationship explicitly:
DiscussionBridge is the product brand, CodeWorksLabs is the maker/studio,
WebSynergetics is the current owner and operating umbrella, and Phil Henry is
the human maintainer. It explains why MIT is a practical permissive license for
an integration product, what MIT does and does not grant, and why the current
copyright notice names WebSynergetics without asserting an unverified corporate
form.

Metadata refresh and tests, canonical/generated synchronization, attribution
and protected-path checks, the 31-page production build, Pagefind, sitemap,
Wrangler deployment dry run, rendered-content checks, and `git diff --check`
passed. Nothing was committed, pushed, or deployed. The pre-existing
line-ending-only modified status on
`src/content/docs/versions-and-live-status.md` was not treated as part of this
change.

## 2026-09-24 component licensing correction and platform standard

The earlier licensing rationale has been refined into the settled family rule:
DiscussionBridge components are MIT unless their repository explicitly states
otherwise. DiscussionBridge for Discourse is GPL-2.0-or-later; the Adapter
Protocol, Astro, Ghost, Hugo, Statamic, WordPress, and this documentation are
MIT. Each repository's `LICENSE` file is authoritative. The previously missing
Adapter Protocol MIT license has been added locally in its product repository,
but it must be committed and pushed before this documentation is deployed so
the new public license link resolves.

`docs/ATTRIBUTION_OWNERSHIP_LICENSE.md` now contains the complete component
matrix, repository links, the GPL exception explanation, WordPress's current
MIT posture, and the corrected naming boundary: **The Bridge** refers to the
dedicated demo, while **DiscussionBridge for Discourse** is the generic plugin
name. `docs/ADAPTER_OPERATING_MODELS.md` now also records the shared target for
real demos: platform-visible names, usable return navigation on every detail
page, restrained Repeal OBBBA styling, DiscussionBridge/CodeWorksLabs/
WebSynergetics footer attribution, and Matomo plus Umami using one identity per
apex domain with host/path/title/referrer retained for segmentation. Analytics
and crawler policy are documented as independent controls.

Metadata refresh/tests, synchronization, attribution/protected-path checks,
the 31-page Astro/Starlight build, Pagefind, sitemap, and Wrangler dry run pass.
Nothing was committed, pushed, or deployed. The pre-existing
line-ending-only `src/content/docs/versions-and-live-status.md` status remains
outside this change.

The Adapter Protocol worktree is already one commit ahead of public `main` and
contains additional uncommitted Alpha.21 contract work. Do not publish the
license through a detached or history-diverging shortcut. Include it in the
next coherent protocol candidate, publish that candidate first, and deploy the
documentation afterward.

## 2026-09-24 full documentation review and repair

Phil requested a page-by-page repair after finding that every sampled page
needed work. Three bounded audit lanes covered operator/runbook material,
platform/adapter material, and information architecture/current-versus-history
classification. Their findings were integrated into one local candidate.

The 30 canonical pages now describe the current 0.2 Discourse-centered model:
Content Connections and connection secrets, receiver-owned publication work,
bounded claims and leases, dynamic versus static acknowledgement, durable
identity, safe retry, native platform outcomes, and protected static
transactions. Current pages no longer instruct operators to use the rejected
portable-core/control-plane model, direct Discourse API-key publication, or
removed 0.1 commands. Legacy tokens remain only where a page explicitly says
they are historical, prohibited, or compatibility aliases.

The platform guides now agree on Simple, Full, and Interactive presentation,
the exact Statamic SSG prepare/build/deploy/verify/finalize sequence, adapter
batch and lease boundaries, the 256 KiB attention boundary, and the prohibition
on blind Retry for identity, ownership, collision, over-limit, or unresolved
deployment failures. The demo presentation standard records the settled site
name/product descriptor split, navigation expectations, exact ownership footer,
provenance separation, restrained Repeal OBBBA treatment, one analytics
identity per apex domain, cookieless/no-user-ID Matomo policy, CSP and Umami
host boundaries, provider receipt checks, and crawler-policy independence.

The information architecture now separates current operating guidance, current
product reference, Astro-specific reference, the legacy Astro 0.1 migration
notice, and genuine historical records. Human/Machine manuals and both runbook
templates are platform-neutral current guidance. The Demo Guide, Product
Concepts and Terminology, and Build/Launch Checklists are current pages rather
than Archive entries. Every generated page renders Last updated, Status,
Audience, and Applies to metadata so readers can see its authority boundary.

Licensing now follows the settled family rule: MIT unless the component's
repository says otherwise, with DiscussionBridge for Discourse explicitly
GPL-2.0-or-later. The Adapter Protocol MIT decision is documented as reviewed
but not public-release-complete until the reviewed `LICENSE` ships in the next
coherent Alpha.21 protocol candidate. Do not deploy public documentation that
implies the missing public file already exists.

Preventive checks were added for documentation-relative links and balanced
fenced code blocks. The metadata test was made precise enough to read only the
canonical synchronization list rather than treating classification lists as
duplicate pages.

Final local verification passed:

- `npm run refresh-metadata` synchronized all 30 canonical pages;
- `npm run build` passed metadata, synchronization, attribution, protected-path,
  Astro/Starlight, 31-page rendering, Pagefind, and sitemap gates;
- `node --test` passed all 8 tests, including link and fence integrity;
- `npm run deploy:dry-run` read 122 generated assets successfully;
- `git diff --check` passed, with only expected Windows line-ending notices.

Nothing was committed, pushed, or deployed. No product source, running OBBBA
backfill, credentials, provider settings, or live environment was changed by
this documentation repair.
