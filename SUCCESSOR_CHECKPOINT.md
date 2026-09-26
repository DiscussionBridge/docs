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

### Publication follow-up

Phil authorized the reviewed documentation source push. Commit `f1e5c9b`
(`docs-full-review`) was pushed from `main` to `origin/main` on 2026-09-24.
That commit contains the complete 68-file documentation candidate described
above. No manual Cloudflare deployment was performed, and the OBBBA backfill,
product repositories, credentials, and provider configuration remained
untouched. The Adapter Protocol public-license dependency remains a separate
coherent Alpha.21 publication gate.

### Production deployment follow-up

Phil clarified that the reviewed documentation was to be pushed **and
deployed**. The exact pushed `main` candidate (`18fbd64`, containing
`f1e5c9b`) was rebuilt successfully and deployed through the repository's
authoritative Wrangler workflow on 2026-09-24. Cloudflare accepted 122 static
assets, uploaded 66 new or modified assets, retained 23 existing assets, and
activated Worker version `ab33f810-302d-4579-a950-bf6f5df04a49` for the
`docs.discussionbridge.dev` custom domain.

Cache-bypassed public checks returned HTTP 200 for the overview and licensing
page. They confirmed the new Discourse-centered overview and Choose Your Path
material, removal of the stale “The Bridge” flagship wording, WebSynergetics
ownership language, the MIT-default family rule, the
DiscussionBridge-for-Discourse GPL-2.0-or-later exception, and the explicit
Adapter Protocol publication caveat. No OBBBA backfill, product code,
connection scope, DNS, or provider configuration was changed.

## 2026-09-24 — Direction-aware setup and migration docs candidate

Phil identified that the public Human Manual incorrectly presented initial
backfill as a universal installation step. The local candidate on branch
`codex/docs-direction-migration-guides` replaces that model with an explicit
initial-population applicability decision: plugin-free presentation and
new-item To Discourse delivery do not require it; an existing forum corpus may
use an optional From Discourse initial population; and a historical
platform-to-Discourse corpus requires an adapter- and scale-qualified import
path that the current Alpha has not yet proven generically.

The candidate adds current install-and-operate guides for Astro, Ghost, Hugo,
Statamic, and WordPress plus **Change Platforms, Keep The Discussion**. The
Astro guide begins with a conspicuous matrix showing that Simple and Full need
neither DiscussionBridge for Discourse nor a Content Connection. The migration
guide distinguishes To Discourse connection migration from From Discourse
publication cutover, records what receiver tests and OBBBA do and do not prove,
and specifies the live one-item cutover and large platform-import qualification
still owed. Operator manuals, machine records, runbook templates, launch gates,
profiles, operating models, demos, presentation guidance, architecture, and
Known Issues now use the same boundary.

The new pages are canonical sources, synchronized generated pages, and a
visible **Platform Guides** Starlight navigation group. Adapter commands were
checked against each component repository. Final local verification passed:

- `npm run refresh-metadata` synchronized 36 canonical pages;
- `npm run build` rendered 37 routes and passed metadata, attribution,
  protected-path, Pagefind, and sitemap gates;
- `node --test` passed all 8 tests;
- `npm run deploy:dry-run` read 122 assets successfully; and
- `git diff --check` passed with only expected Windows line-ending notices.

This candidate is intentionally uncommitted, unpushed, and undeployed while the
live OBBBA backfill remains in progress. It changes no product source, live
forum, queue, credentials, DNS, provider settings, or running demo.

Phil subsequently clarified the migration model: migration is the publishing
platform replacement, not merely one receiver operation. The guide now covers
Discourse → WordPress becoming Discourse → Astro, WordPress → Discourse
becoming Statamic → Discourse, and a coordinated WordPress ↔ Discourse to
Statamic ↔ Discourse replacement. Each Bridge Record remains directional; the
bidirectional migration moves both directional record sets under one cutover,
acceptance record, retirement decision, and rollback boundary. Demo and Known
Issues language now requires that combined proof. The refreshed 36-page source,
37-route build, all 8 tests, and attribution/protected-path gates pass. The
candidate remains local and undeployed.

## 2026-09-24 — Migration and Discourse Network claims corrected

The working docs candidate now distinguishes three separate evidence tracks:

1. seven adapter-specific 1,000-page native-platform-to-Discourse scale tests;
2. a complete publishing-platform replacement workflow, which remains an
   unbuilt product boundary despite existing record-level prepared connection
   migration primitives; and
3. a planned DiscussionBridge Network for multiple Discourse sites, which is
   neither implemented nor Alpha-qualified.

Change Platforms, Keep The Discussion now opens with an explicit Alpha warning
that the full bulk migration/cutover/redirect/retirement/rollback workflow is
not a supported tool. It also separates the future Discourse Network from CMS
migration. Draft Roadmap and Demo Guide now require one hub plus at least two
independent spokes to prove one-to-many fanout and separately authorized
spoke-to-hub publication, with explicit directional records and loop
prevention. They do not imply synchronized replies, flags, whispers,
moderation, users, private content, or trust state.

The detailed non-public qualification plan is
`C:\CodeProjects\Products\DiscussionBridge\planning\DISCOURSE_NETWORK_SCALE_QUALIFICATION.md`.
It uses 1,000 hub-owned topics fanned out to two spokes plus independent
1,000-topic cohorts from each spoke back to the hub: 3,000 source topics and
4,000 directional destination presentations after canaries.

After the controlled metadata refresh, the complete docs build passes both
metadata tests, content synchronization, attribution/protected-path checks,
37 generated pages, Pagefind, sitemap, Wrangler dry run over 141 assets with no
bindings, and `git diff --check`. These changes remain local on branch
`codex/docs-direction-migration-guides`; they are not committed, pushed, or
deployed by this clarification.

### Existing-live-forum Network categories

Phil selected existing live forums for the later DiscussionBridge Network
qualification: `forum.discussionbridge.dev` as hub, with
`forum.citizenactivist.network` and `forum.repealobbba.org` as spokes. The
qualification plan now requires one dedicated, clearly labeled Network
category on each forum. Connections and credentials are category-only;
unrelated community content remains out of scope, and category configuration
must contain synthetic scale content away from normal community discovery,
notifications, and activity surfaces while retaining acceptance visibility.

The public migration guide, Demo Guide, and Draft Roadmap now use the same
existing-forum/category model. The controlled metadata refresh and full docs
verification pass: two metadata tests, content synchronization,
attribution/protected-path gate, 37-page build, Pagefind, sitemap, Wrangler dry
run over 141 assets with no bindings, and `git diff --check`. No live forum,
category, connection, credential, or deployment was changed.

## 2026-09-26 — Plugin requirement and service-identity correction

Phil clarified the supported product boundary: Astro Simple and Full are the
only current platform integrations that work without DiscussionBridge for
Discourse. The undeployed docs candidate had correctly described the Astro
exception but had incorrectly generalized plugin-free Simple/Full behavior to
Ghost, Hugo, Statamic, and WordPress.

The canonical operator guide, four affected platform guides, Platform Profiles,
Presentation Modes, Core Adapter Architecture, and Machine Manual now state
one consistent rule. Ghost, Hugo, Statamic, and WordPress require the unified
receiver plugin and an enabled Content Connection for every supported
DiscussionBridge presentation or publishing path. Reader-facing output may be
credential-free without making the installation plugin-free. Presentation by
itself still does not make an initial population necessary.

The operator guide also distinguishes the current architecture from the legacy
bot model. The receiver uses the constrained `discussionbridge` service account
because Discourse writes require an authenticated user identity; that operating
identity is separate from visible topic authorship. New connections must not be
built around the historical `discussbridge-bot` user.

`npm run refresh-metadata` synchronized all 36 canonical pages, and `npm run
build` passed both metadata tests, content synchronization, the attribution and
protected-path boundary, 37 generated routes, Pagefind, and sitemap generation.
The complete Node suite passed 8/8, and Wrangler's dry run read 141 assets with
no bindings.
`git diff --check` reports no content error (only the repository's expected
Windows line-ending notices). The correction remains local, uncommitted,
unpushed, and undeployed on `codex/docs-direction-migration-guides`.

## 2026-09-26 — Broader docs candidate published

Phil authorized the broader documentation deployment. The exact candidate was
committed as `20dddf91dbbabee3a843b390378c28c06e3b1405` on
`codex/docs-direction-migration-guides` and pushed to the matching origin
branch. Before publication, `npm run build` passed both metadata tests, the
36-page canonical-content synchronization, attribution and protected-path
checks, 37 generated routes, Pagefind, and sitemap generation. Wrangler 4.123.0
then passed its dry run over 141 assets with no bindings.

After renewing Wrangler's expired local OAuth session through Cloudflare's
normal browser authorization flow, `npm run deploy` uploaded 64 new or changed
assets to the existing `docs-discussionbridge-dev` Worker and custom domain.
The deployed Cloudflare Worker version is
`dcba29dc-3aa2-498d-8859-d75a1762718d`. The live homepage, Change Platforms
guide, Astro guide, and Statamic guide each returned HTTP 200. The deployed
Statamic guide visibly contains the corrected plugin requirement, Flat/DB and
SSG operating boundaries, and the large-import proof limitation.
