# Product Build/Launch Checklists

> **Cumulative historical dashboard.** Completed and superseded checkpoints are
> retained below for provenance. Current package/deployment identities and the
> active Alpha acceptance boundary are in
> [Versions And Live Status](./VERSIONS_AND_LIVE_STATUS.md); current operator
> steps are in [Alpha Installation and Operator Guide](./ALPHA_OPERATOR_GUIDE.md).

Use these checklists as the product dashboard for DiscussionBridge for Astro. They are organized around the operating loop:

publish -> sync -> diagnose -> maintain -> recover -> document

## DiscussionBridge.dev Astro-Family Wrangler Migration

- [ ] Migrate each Astro-family site to reviewed, checked-in Wrangler
      deployment: `discussionbridge.dev`, `docs.discussionbridge.dev`,
      `demo.discussionbridge.dev`, `astro.demo.discussionbridge.dev`,
      `astrostarlight.demo.discussionbridge.dev`, and
      `stockstarlight.demo.discussionbridge.dev`.
- [ ] Treat every site as a separate reversible migration with exact source and
      build identity, current-provider snapshot, rollback target, bindings and
      flags, custom-domain evidence, and post-deploy HTTP/functional acceptance.
- [ ] Do not claim Wrangler ownership from local configuration alone and do not
      cut over the family as one irreversible batch.

## Alpha Readiness Checklist

### Connected Public-Site Release Gate

- [x] Create and Product-review a fresh connected-public-site inventory from
      settled hostnames, current approved repositories, authoritative source
      boundaries, and current deployment evidence. Record each site's intended
      product job, reviewed candidate, public status, DiscussionBridge/forum
      binding, deployment owner, rollback boundary, and exact open acceptance
      gate. Route every repair or cutover as a separate approved site lane. For
      OBBBA, begin from the protected pre-BB2 baseline plus approved clean
      package, credit, and `fullInteractive` behavior; do not reuse quarantined
      BB2 imports, generated navigation, relationships, counts, or repair
      assumptions. Reviewed inventory:
      `docs/evidence/CONNECTED_PUBLIC_SITE_INVENTORY_2026-07-31.md`.
- [ ] Publish branded custom 404 pages on relevant Astro sites and verify both
      the rendered experience and HTTP 404 status for unknown routes.
- [ ] Complete a new connected-forum embed matrix from the settled public
      hostnames. Authorize exact public hosts only, keep `embed any origin`
      disabled by default, and preserve a direct-topic fallback.

### Release-Scope Doctrine

- [x] Lock the cumulative Alpha feature/function set recorded by this checklist.
      After this lock, new work must close an existing promise or gate, fix
      tested behavior, or receive explicit approval as a scope change.
- [x] Treat this dashboard/checklist as the cumulative Alpha scope source of
      truth; new plugin or multi-target gates do not displace prior accepted
      items, and items remain until Phil explicitly removes them.
- [x] Treat Alpha as nearly feature-complete for the declared product promise;
      include known central capabilities or narrow the promise honestly.
- [x] Treat Beta primarily as refinement of tested behavior: usability,
      compatibility, reliability, performance, packaging, docs, installation,
      recovery, support, and presentation.
- [x] Keep long-term roadmap, plugin expansion, and Layer 3 ideas outside Alpha
      when they are not part of the declared product promise.
- [x] Allow Beta feedback to reveal genuinely missing capability without using
      planned feature deferral as the default Beta strategy.
- [x] Keep all three Alpha software tracks free/open source unless a later
      explicit decision changes that: the Astro API/package, DiscussionBridge
      for Discourse, and public docs/community support. Paid value is
      implementation labor, handholding, managed hosting/operations,
      customization, support, and consulting; third-party infrastructure
      remains operator-paid.
- [x] Settle the product architecture: DiscussionBridge is a
      Discourse-centered, adapter-driven orchestration system. The portable
      core owns connections, identities, mappings, policies, jobs,
      comparisons, approvals, retries, provenance, and audit evidence; the
      DiscussionBridge for Discourse plugin is its present operational home
      and natural control plane.
- [x] Treat Astro, Statamic, and future integrations as well-featured adapters,
      not separate control planes. Support one Discourse installation
      connecting concurrently to multiple publishing systems.
- [x] Preserve Tier 1 API-only operation as a useful compatibility capability,
      while no longer describing it as the product's natural operational
      center.
- [x] Keep every offering under one DiscussionBridge product family:
      fully featured free DiscussionBridge for Discourse and Discussion
      Bridge for Astro; paid managed DiscussionBridge SaaS for multi-CMS,
      multi-site, and multi-community orchestration; paid professional
      services; and public community support.
- [x] Require the free products to remain genuinely capable. DiscussionBridge
      SaaS must sell managed operation, scale, governance, convenience, and
      operational relief rather than escape from artificial limitations.
- [ ] Inventory current Astro behavior and classify each item as portable-core
      domain logic, Discourse-host behavior, or Astro-adapter behavior before
      moving or extending it. Product Notes now records the initial behavioral
      classification; complete the module/dependency inventory before code
      migration.
- [ ] Define stable host-neutral core contracts and persistence boundaries so
      the Discourse plugin can operate the core without unnecessarily coupling
      domain logic to Discourse internals.
- [x] Produce the core/adapter migration roadmap from the current Astro
      prototype evidence to portable core, Discourse host, and publishing
      adapters in `docs/CORE_ADAPTER_IMPLEMENTATION_ROADMAP.md`. Preserve
      current working workflows during the transition and do not imply that
      the architectural migration is already implemented. Individual phase
      gates still require their named Product, Code, Manual, Discourse, and
      Bridge reviews.

### DiscussionBridge.dev Two-Direction Dogfood Gate

- [x] Implement and review explicit import source selection in `1731547`
      (Code Boss PASS, 72/72): `--source-mode
      discourse-imported|discourse-managed`, imported default, rejected
      `astro-managed`, persistent `discussionSync: false`, and per-manifest-entry
      `sourceMode`.
- [x] Complete the public credential-free dry run for
      `forum.discussionbridge.dev` topic `36` to
      `/guides/how-to-choose-a-discussion-bridge-source-mode/`; verify the
      Discourse-managed frontmatter and deterministic destination preview.
- [x] Complete the credentialed import, exact clean Astro build/deploy, and
      canonical live guide/source/discussion verification in apex commit
      `d68ffc4` (Code Boss PASS), deployed 2026-07-23. See the
      [sanitized dogfood evidence record](https://github.com/DiscussionBridge/astro-discussion-bridge/blob/main/docs/evidence/DISCUSSIONBRIDGE_DEV_TWO_WAY_DOGFOOD_2026-07-23.md).
- [x] Publish an Astro-managed `discussionbridge.dev` blog post to a public
      companion discussion on `forum.discussionbridge.dev`; verify the page,
      topic, declared connection purpose, comments presentation, and
      site-to-forum single-writer direction. Live route
      `/blog/every-connection-has-a-job/` binds independent topic `37`.
- [x] Select a community wiki/how-to on `forum.discussionbridge.dev` and
      deterministically import/refresh it as a durable public guide on
      `discussionbridge.dev`; live topic `36` is a category-6 wiki.
- [x] For the wiki lane, prove `discussionSourceMode: discourse-managed`,
      `discussionSync: false`, explicit source provenance, preserved source
      topic identity, deterministic output, public route, and Astro navigation
      lane.
- [x] Keep the source forum topic as the primary discussion; make comments
      behavior explicit and verify that edits originate in the wiki topic while
      the site republishes reviewed source without site-to-source writeback. A
      deliberate `sync-existing --dry-run` skipped with the
      `discourse-managed` no-writeback reason.
- [x] State clearly that separate topic reply streams are not merged.
- [x] Use the public outcome: “The site starts conversations. The community
      develops durable knowledge. The site publishes what the community
      learns.”

### Brutal Current Split

#### Phil/Ops Prerequisites Before Alpha Can Be Public

- [x] Provision the operational `forum.citizenactivist.network` prerequisite:
      DNS/TLS, public target category, and protected credential records are
      usable for the bounded OBBBA proof. Keep any broader ownership/Cloudflare
      placement decision in Ops; do not expose protected paths or values.

- [ ] Reconfigure DiscussionBridge Cloudflare under the new ownership/account plan: owning account, admin email, DNS, Pages, redirects, Access, Workers, billing boundary, and operator roles.
- [ ] Complete Cloudflare Pages work for `docs.discussionbridge.dev`: canonical
      docs URLs are 200, but raw
      `https://docs-discussionbridge-dev.pages.dev/` still returns 200. Add and
      verify a 301 to `https://docs.discussionbridge.dev/`.
- [x] Create public Discourse Alpha Support category at
      `https://forum.discussionbridge.dev/c/alpha-support/7` (category ID `7`).
- [ ] Route `alphasupport@discussionbridge.dev` into Discourse.
- [x] Enable GitHub Discussions on
      `DiscussionBridge/astro-discussion-bridge`; retain GitHub Issues.
- [ ] Confirm final public support links after the email route exists.

#### Codex/Product Work That Can Continue Now

- [x] Tighten CLI/help text and friendly validation messages.
- [x] Build and publish the paired Human Manual and Machine Manual in the repository and generated Starlight docs site.
- [ ] Route the paired manuals through Manual Boss review for consistency,
      presentation, secrets, usability, accessibility, optional visual
      evidence, and public/private boundaries; resolve Alpha-blocking findings
      before public release.
- [x] Add and live-confirm `check-discourse` examples for global diagnostics
      key, granular publishing key, and explicit configured limits.
- [ ] Finish docs link wiring once Phil/Ops prerequisites produce final URLs.
- [ ] Prepare the repeatable live smoke-pass script/checklist so it is ready when Cloudflare/support wiring is done.
- [x] Document the operator-controlled Alpha recovery path without adding an
      ownership-guessing repair command.

### Publish

- [x] Confirm CLI names/help are clear: `publish-new`, `sync-existing`, `publish-and-sync`, `import-existing`, and `check-discourse`.
- [x] Keep explicit page titles and preflight for Alpha; move configurable title
      templates/prefixes to Beta.
- [ ] Keep local preflight validation working for dry runs and restricted keys.
- [x] Confirm title/body/tag preflight messages are friendly enough for non-package authors.
- [ ] Confirm generated first-post body is reader-facing and does not expose implementation labels.
- [x] Finalize Alpha support and feedback channel model: GitHub Issues for formal product work, GitHub Discussions for repo-bound design/implementation discussion, Discourse Alpha Support plus `alphasupport@discussionbridge.dev` for support discovery/community memory, and cross-links when support becomes tracked work.
- [x] Create the live Discourse Alpha Support category and enable GitHub
      Discussions. Route `alphasupport@discussionbridge.dev` into Discourse and
      wire final channel links into README, package metadata, demo pages, and
      release notes after the email route is verified.
- [x] Product docs URL decided: use `docs.discussionbridge.dev` with Starlight. Keep `discussionbridge.dev/docs` only as a redirect or fallback if needed.
- [x] Deploy the Starlight docs site source for `docs.discussionbridge.dev` into the repo under `sites/docs`, generated from repository `docs/*.md`.
- [ ] Reconfigure DiscussionBridge Cloudflare under the new ownership/account plan before Alpha: owning account, admin email, DNS, Pages, redirects, Access, Workers, billing boundary, and operator roles. Phil/Ops prerequisite.
- [ ] Complete Cloudflare Pages work for `docs.discussionbridge.dev`: canonical
      docs URLs are live; configure the raw
      `docs-discussionbridge-dev.pages.dev` hostname to return 301 to the
      custom domain. Phil/Ops prerequisite.
- [x] Make `discussionbridge.dev` live in a credible public form before showing Alpha outside the working circle.
- [x] Add proper attribution, ownership, and licensing notes to docs where appropriate.

### Sync

- [x] Close the Alpha `sync-existing` and `publish-and-sync` edge-case matrix at
      119/119 package tests.
- [x] Cover Astro title drift.
- [x] Cover Discourse topic title drift.
- [x] Cover active discussion target mismatch handling.
- [x] Cover linked Discourse topic missing/unreadable.
- [x] Cover linked topic with no first post.
- [x] Cover Discourse client network failures.
- [x] Cover publish-new offline failures.
- [x] Block duplicate managed topic IDs or duplicate page URLs before Discourse writes.
- [x] Use curated `discussionSummary` for component-heavy MDX in Alpha; move
      automatic JSX/component summarization to Beta.
- [x] Document when to use `discussionSummary`.
- [ ] Document and test the distinction between Astro/template content tags and Discourse `discussionTags`.
- [ ] Run the repeatable live smoke pass before Alpha and before each release candidate. It covers publish/sync; docs, releases, blog, news, and comments demo routes; `simple`, `full`, and `fullInteractive` comments modes; full-app embed Discourse settings; and `forum.discussionbridge.dev` category, tags, and permissions.
- [ ] Re-review every forum using `SiteSetting.same_site_cookies = "None"`
      before Alpha, before each release candidate, and after Discourse/browser
      cookie-policy or embed-host changes. Confirm the cross-site
      `fullInteractive` requirement still exists; verify HTTPS/Secure cookies,
      narrow Embeddable Hosts with `Embed any origin` disabled, top-level
      authentication, a CSRF-protected forum write, iframe session recognition,
      and an authorized embedded reply. Preserve the recorded prior value and
      use a separately authorized rollback when the exception is no longer
      required or acceptance fails.
- [x] Enforce source modes before Alpha: `import-existing` persists
      `discussionSourceMode: discourse-imported` and `discussionSync: false`;
      sync preflight protects `discourse-imported` and `discourse-managed`
      source targets from writeback.

### Import

- [x] Add strict explicit manifest input for curated production imports,
      preserving caller-supplied topic order and providing validated, atomic
      staging/write/rollback behavior (`a646c6b`, reviewed package suite 49/49).
- [x] Implement read-only `discover-imports` category listing/selection by exact
      ID, slug, or name, with optional descendant subcategories.
- [x] Implement deterministic "next in selected category" behavior: oldest
      Discourse `created_at` first, with topic ID as the stable tie-breaker.
- [x] Add discovery filters for tags, created-date range, open/closed status,
      and limit.
- [x] Add oldest/newest `created_at` ordering and natural topic-title ordering
      for numbered source collections.
- [x] Enforce that import discovery never sequences by `bumped_at`, last reply,
      or latest activity.
- [x] Preview candidates and recursively exclude locally imported
      `discourseTopicId` and target-binding topic IDs.
- [x] Add optional non-overwriting `--manifest-out` for a new strict v1
      manifest, with selectable source mode/comments display and JSON output.
- [x] Complete Code Boss review for import discovery after three correction
      rounds: PASS, package suite 84/84. Final coverage includes validation
      before dereference/filesystem/network work, strict opening-frontmatter
      exclusions, direct deduplicated descendant fetches, and full-UTC-day
      handling for date-only `created-to`.
- [x] Add optional imported-page hero placement and require non-empty alt text
      whenever a hero image is configured (`729d85f`, reviewed package suite
      38/38); reject missing, empty, whitespace-only, or unpaired values before
      write.

### Diagnose

- [ ] Confirm minimal Discourse granular scopes needed for existing-topic collision reconciliation.
- [ ] Use the two-key model when granular diagnostics/read scopes are available or confirmed.
- [x] Document current fallback: global/admin-capable diagnostics key for setup checks; granular publishing key where it can perform create/update/tag/read actions.
- [x] Add and live-confirm `check-discourse` examples for global diagnostics
      key, granular publishing key, and explicit configured limits.
- [ ] Consider reading Discourse title/body/tag constraints from the target instance in `check-discourse`.

### Maintain

- [x] Document maintenance sync as a repeatable test: package version, `--dry-run --details`, live sync, verify Discourse/Astro/cache.
- [ ] Add or update demo npm scripts for lane-specific dry runs using `--details`.
- [ ] Decide whether `--details` should also apply to `import-existing` output.
- [x] Document the demo build warning: `Entry docs -> 404 was not found`.
- [x] Prepare a Starlight GitHub issue write-up for the stock Starlight `Entry docs -> 404 was not found` finding; include the likely `getEntry('docs', '404')` source, `disable404Route: true` confirmation, and custom `docs/404.md` route-conflict result.
- [ ] Reproduce against the current Starlight release and file the prepared GitHub issue.
- [x] Keep the local package demo dependency pointed at the package directory unless a release-packaging test specifically needs a tarball.

### Recover

- [x] Define explicit recovery for a deleted topic and deleted first post.
- [x] Keep Alpha recovery as Discourse restore or reviewed relink/recreate;
      defer a dedicated repair command rather than guessing ownership.
- [x] Keep automatic recreate disabled unless the user explicitly chooses it.
- [ ] Document when to clear Cloudflare cache versus when to treat a sync/deploy as failed.

### Document

- [x] Add paired entry-point manuals: `docs/HUMAN_MANUAL.md` for operators and `docs/MACHINE_MANUAL.md` for exact reusable implementation facts and site-specific runbook generation.
- [x] Include the paired manuals in the generated `sites/docs` Starlight site and verify both routes build.
- [ ] Complete Manual Boss Alpha quality review of the paired manuals and record or resolve findings.
- [x] Add paired reusable site-specific Human and Machine Runbook templates that consume settled Machine Manual inputs.
- [x] Create the first paired OBBBA runbooks for `onebigbeautifulbill.us` and `forum.repealobbba.org`, preserving topic `434`, `discourse-imported`, and `discussionSync: false` while exposing unresolved implementation inputs.
- [x] Replace screenshot/video placeholders with complete text-only desktop,
      mobile, and real-user verification guidance. Visual captures remain
      optional sanitized evidence rather than unfinished manual content.
- [x] Add a concise Alpha setup guide.
- [x] Add a key-management guide.
- [x] Add a comments-display guide covering `simple`, `full`, and `fullInteractive`.
- [x] Add a content-lanes guide for docs, releases, blog, news, and Starlog-style release notes.
- [x] Add a discussion-safe Markdown guide.
- [x] Add troubleshooting entries for title validation, body length, tag limits, duplicate embed URLs, stale Cloudflare cache, missing topic, missing first post, and Discourse offline.
- [x] Finalize support and feedback guide with Alpha channel model.
- [ ] Update public support links after the Alpha Support category and email route are live.
- [x] Complete one-time Alpha attribution/ownership/licensing pass across public docs.
- [x] Implement the automated full attribution/licensing gate in
      `scripts/check-attribution.mjs`, backed by
      `docs/THIRD_PARTY_PROVENANCE.json` and reviewed khroma 2.1.0 MIT
      evidence. Package regression proves a fresh checkout regenerates the
      rendered attribution source before checking it; Code Boss final PASS,
      package suite 73/73.
- [x] Run the bounded docs-scope attribution gate before the readable docs
      build. Require the exact distinctions `PASS (docs scope)` and
      `npm package contents: SKIPPED (requires built release candidate)`.
- [x] Obtain Manual Boss semantic attribution/licensing review for the exact
      candidate through `b09dbce` atop `7127eb1` + `462b3ae`. Result:
      `Attribution and Licensing: PASS`; reviewed paths and corrections are in
      the [sanitized exact-candidate record](https://github.com/DiscussionBridge/astro-discussion-bridge/blob/main/docs/evidence/ATTRIBUTION_LICENSING_REVIEW_B09DBCE_2026-07-23.md).
      Automated 73/73 and docs 20/21 remain separate results.

## Alpha Demo Checklist

- [x] Verify the independent Starlight demo builds from
  `DiscussionBridge/astrostarlight-demo-discussionbridge-dev`.
- [x] Verify live Astro and Starlight demos deploy from the canonical `astro-discussion-bridge` example source trees.
- [ ] Include demo routes, comments modes, full-app embed settings, and forum category/tag/permission checks in the repeatable live smoke pass before Alpha and every release candidate.
- [x] Test with Cloudflare CDN in place on Discourse. Production field evidence
      from `forum.repealobbba.org` confirms the tested diagnostics/API,
      import, reconciliation/source-link, `fullInteractive`, signed-in reply,
      source-disclosure, and no-writeback workflows work through this
      Cloudflare-CDN-backed forum. This is not a guarantee for every CDN/WAF/
      cache-rule configuration.
- [ ] Verify topic creation so pages from different Astro hosts do not collide or create confusing duplicate topics.
- [ ] Confirm `embed_url` maps each Astro page to the correct companion topic across hosts.
- [ ] Verify public Alpha demo domains use the settled hostnames:
      `demo.discussionbridge.dev`, `astro.demo.discussionbridge.dev`,
      `astrostarlight.demo.discussionbridge.dev`,
      `stockstarlight.demo.discussionbridge.dev`, and future reviewed
      integration hosts. Keep `astrostarlightdemo.discussionbridge.dev`
      compatibility-only as a permanent path- and query-preserving redirect;
      never serve duplicate canonical content or blanket-redirect to the
      homepage.
- [x] Add and build clean stock Starlight control site to compare framework warnings and upgrades.
- [x] Apply demo topic lifecycle policy in Discourse: tagged old/transitional topics `20`, `21`, `24`, and `28` as `historical-reference`; reserve deletion/permanent deletion for true mistakes or sensitive/unsafe content.
- [x] Retire or clearly mark transitional demo deploy copies under `discussionbridge.dev` after public demo projects build from `astro-discussion-bridge`.

## Release/Upgrade Checklist

- [ ] Record the Code Boss pass/fail result against the exact release candidate; complete all blocking edits and obtain re-review where required before Product Boss approval.
- [ ] Confirm Bridge Boss technical verification and Manual Boss quality review are complete before Product Boss approval.
- [ ] For every Alpha, Beta, release candidate, patch, and Current release, confirm the Human and Machine Manuals are ready for the exact release; treat this as a release blocker.
- [ ] Record Product Boss documentation sign-off for every release before publishing; code completion alone is not release readiness.
- [ ] Record separate Product Boss release approval for every release, covering intended scope, operator readiness, known limitations, and the coherent release package; this does not replace Bridge Boss technical verification or Manual Boss quality review.
- [x] Verify exact package installs/builds on Astro 6.4.8 + Starlight 0.40.0 and
      Astro 7.2.4 + Starlight 0.41.7.
- [ ] Test demo installs after Astro core and official integration releases, especially `@astrojs/cloudflare`.
- [ ] Add a `doctor` or `check-upgrade` command.
- [x] Document the exact GitHub-release-asset upgrade, downgrade/rollback,
      verification, stop, recovery, and supersession sequence in the Human and
      Machine Manuals.
- [ ] Keep Starlight optional.
- [ ] Before any Alpha tag/release, run package tests, local demo build, dry-run CLI checks, and at least one live smoke sync.
- [x] Alpha release channel decided: GitHub prerelease plus one exact attached
      tarball built from the accepted Astro-package commit. npm registry
      publication remains a later, separately authorized gate.
- [ ] Select the exact GitHub prerelease tag and accepted source commit.
- [ ] Pack from that exact commit; record the asset filename, bytes, SHA-256,
      npm integrity, and complete file inventory.
- [ ] Clean-install that same immutable tarball in every supported Astro and
      Starlight compatibility consumer and rerun builds.
- [ ] Verify exports, public Astro components, CLI bin/help, import/sync,
      comments modes, source disclosure, and multi-target helpers from the
      consumer installs.
- [ ] Verify LICENSE, README, repository, bugs, and homepage metadata.
- [ ] Prove credentials, fixtures, local paths, and unintended files are absent.
- [ ] Record Code Boss PASS and Manual Boss installation/docs review for the
      exact package candidate.
- [ ] Retain the exact candidate's full automated attribution result from
      73/73 and its separate Manual Boss semantic
      `Attribution and Licensing: PASS / FAIL / N/A` review record.
- [ ] Prove the GitHub prerelease tag, source commit, attached tarball, recorded
      hash, installed local tarball, and lockfile resolution/integrity all
      correspond.
- [x] Document upgrade, downgrade/rollback, verification, stop conditions,
      recovery, and supersession. Never replace or delete an asset in place;
      issue a corrected prerelease under a new tag. Do not run automatic
      `npm audit fix`.
- [ ] Confirm release pages, README, package metadata, and demo pages point to the same support and feedback channels after the Alpha Support category and email route are live.
- [ ] Publish the immutable DiscussionBridge for Discourse plugin candidate with
      exact tag/SHA and public single-container plus two-container installation
      instructions.
- [ ] Receive and disposition human Discourse administrator installations of
      that exact published plugin candidate using only the public instructions:
      the standard single-container `app` install on
      `sandbox-forum.discussionbridge.dev` and the official split `data` +
      `web_only` install on `dev-forum.discussionbridge.dev`. Require separate
      rollback identity, installed SHA, migrations, safe-default startup,
      ordinary forum health,
      enable/configure, and disable/rollback/removal evidence for each.
      Plugin-backed `fullInteractive` release acceptance cannot close without
      both PASS records; a failure gets a new prerelease identity.
      `forum.repealobbba.org` is not a substitute or third current proof; any
      later independent real-world install there requires separate OBBBA
      authorization and recovery acceptance.

## OBBBA Law As Amended Checklist

- [x] Record the 2026-07-27 clean-room reset: the inherited Law pipeline is
      abandoned as an implementation base and retained only as inert
      lessons-learned provenance.
- [x] Establish an empty OBBBA-specific site/adapter evidence boundary with
      zero legacy imports, artifacts, or salvaged assets. Do not place the
      replacement in DiscussionBridge Core or the reusable Astro package.
- [ ] Admit a legacy asset only through a separate path-specific, hash-bound,
      evidence-backed salvage decision with Code Boss and appropriate
      Product/Manual review. Current legacy implementation salvage is not
      authorized.
- [ ] Establish scope and legal state from authoritative external official
      sources before reading or joining optional forum context.
- [ ] Preserve only optional verbatim forum titles, organization
      (tags/category/authored index), legislative-drafting context, topic
      identity, and discussion bindings. Reject forum bodies, OBBBA Text,
      diagnostics, derivatives, caches, and historical generated evidence as
      legal body, scope, or cardinality authority.
- [ ] Keep the historical 309 count limited to forum identity/discussion
      inventory. It must not constrain official-source discovery.
- [ ] Enforce settled section facts independently: Section 20009 is mandatory;
      Section 70310 does not exist and targeted searching stays closed;
      Section 71119 requires official-source-first binding. Contradictory
      controlling evidence stops work as
      `BLOCKED - DOCTRINE/EVIDENCE CONFLICT`.
- [ ] Define and review the new official-source acquisition, neutral parsing,
      evidence, presentation, navigation, correction, and accessibility
      contracts in small clean-room increments.
- [ ] Obtain separate Product, Code Boss, Manual Boss, and Boss approvals at
      their named gates before publication, Gate 2 work, deployment, or
      portable adoption.

## Product Roadmap Checklist

- [x] Keep Tier 1 API-only and useful without a Discourse plugin.
- [x] Complete implementation and Code Boss review for Alpha multi-target pages
      (`60e41e1`, package suite 62/62) and the bounded OBBBA → Citizen Activist
      live proof (`36df91c`).
- [x] Keep multiple content lanes first-class through config and frontmatter.
- [x] Keep one package with two clear presets: `starlight` and `astro`.
- [x] Keep the Starlight preset focused on Starlight conventions.
- [x] Provide multi-Discourse target names, frontmatter, presentation helpers,
      and the public `astro-discussion-bridge/targets` export.
- [x] Implement and review accessible Discourse source disclosure (`a9d2097`,
      68/68), including safe URL selection, multi-target protected-source
      provenance, canonical Astro/Starlight placement, and public component/
      helper/type exports.
- [x] Install reviewed artifact
      `astro-discussion-bridge-0.1.0-alpha-a9d2097-f3fbb73e.tgz` into OBBBA,
      wire the canonical source notice near the article start, clean-build and
      deploy adoption commit `aa7846d`, and verify exactly one correct source
      notice/link on all five live Title I routes independently from comments.
- [x] Add the unobtrusive, configurable `Connected by DiscussionBridge` comments-boundary credit; verify its canonical link, operator disable control, accessibility, reduced-motion behavior, and placement after `simple`, `full`, and `fullInteractive`.
- [ ] Requalify `fullInteractive` dynamic iframe sizing after the Alpha.5 human
      pass proved that the adapter's competing 70vh CSS ceiling clipped
      topic-progress/composer content. Corrected adapter commit `476c581` leaves
      height updates to qualified Core and rejects a non-`none` legacy
      `embedViewportMaxHeight`; verify topic progress, lower-frame scrolling,
      composer open/close, credit placement, desktop, and mobile states.
- [ ] Consider optional mapping from Astro/template content tags to Discourse topic tags.
- [ ] Package the setup/diagnostics/docs workflow for self-serve users and paid assisted setup.
- [x] Use the OBBBA implementation lane as a real-world Discourse-to-Astro
      proof path: the reviewed manifest imported/pruned five
      `forum.repealobbba.org` topics into `onebigbeautifulbill.us`, preserved
      `discourse-imported` plus no-writeback, and passed clean build, deployment,
      and canonical live route/topic verification.
- [ ] Preserve the Citizen Activist structured-document path: Discourse wiki topics as source material, Astro as polished public act/section pages, with status, last-edit context, source topic links, comments, and no accidental writeback.
- [ ] Preserve the OBBBA many-to-one topology: `onebigbeautifulbill.us` / `OBBBA.us`, `repealobbba.org`, `repealobbbaact.us`, and possibly `repealobbbapledge.us` can all connect to `forum.repealobbba.org`, with source direction varying by site or lane.
- [x] Explicitly verify selected `onebigbeautifulbill.us` pages remain bound to
      `forum.repealobbba.org` as the first edge of the topology matrix.
- [x] Use canonical hostname `forum.citizenactivist.network` and public
      description “A community of activists”; keep Cloudflare/account ownership
      placement as a separate Ops decision.
- [x] Configure that forum as an explicit DiscussionBridge target and select
      clearly labeled `onebigbeautifulbill.us` proof pages without changing the
      production OBBBA lanes on `forum.repealobbba.org`.
- [x] Prove the same selected `onebigbeautifulbill.us` page uses an explicit
      ordered target list for `forum.repealobbba.org` and
      `forum.citizenactivist.network`.
- [x] Run target-specific diagnostics and dry-run, build, deploy, and verify
      each live page/topic binding; prove source-target no-writeback and no
      unintended writes to any other target. Post-proof interaction also
      confirmed Citizen Activist topic 9 accepted public post 2 while the Astro
      page continued to render primary Repeal OBBBA topic 434.
- [ ] Add one or two clearly labeled DiscussionBridge demo/credit pages on `onebigbeautifulbill.us` whose companion discussions live on `forum.discussionbridge.dev`; keep the production OBBBA source lane on `forum.repealobbba.org` and use the cross-forum pages as part of the bounded many-to-many proof without claiming a general administration plane.
- [x] Persist each target's topic ID/URL, source hash, sync state, sanitized
      error, and attempt time independently in target-keyed bindings.
- [ ] Complete any per-target display-policy model beyond the implemented
      explicit primary discussion and accessible additional-target links.
- [x] Define primary rendered discussion versus additional linked
      targets; never silently choose one target.
- [ ] Implement “Every connection has a job”: ensure every connection declares
      its audience/purpose and its visible label/call to action communicates the role (public community,
      chapter/regional, internal review, subject-matter feedback, advocacy
      coordination, syndication, or another approved purpose). Never silently
      merge independent reply streams.
- [ ] Review and finalize configuration vocabulary corresponding to the reader
      model—candidate `role`/`purpose`, `audience`, `callToAction`, `description`,
      visibility/context, direction/source ownership, and primary/additional
      presentation. Do not mark this implemented until design and tests pass.
- [ ] Prove CAN bidirectional operation with separate page/topic pairs and
      explicit source ownership; prevent loops by prohibiting the same item from
      being writable in both directions simultaneously.
- [ ] Design the future governed chapter↔national pattern under “Local
      ownership. National reach.” Include source/chapter identity, parent/child
      relationship, mapped categories, region/chapter tags, promotion approval,
      privacy eligibility, attribution/return links, target-specific copy,
      one-way first-post direction, independent replies, target-specific retry,
      and moderation ownership. Do not claim current general forum-to-forum
      orchestration.
- [x] Implement and test recoverable partial success: retain successful
      bindings, report the failed target, and retry idempotently without
      duplicate topics.
- [x] Record the completed Alpha proof as one-page multi-forum capability plus
      multiple-sites-to-one-forum convergence, without claiming the future
      general many-to-many administration plane. The bounded live OBBBA/CAN
      proof, independent bindings, retry behavior, source no-writeback, and
      additional-discussion interaction are recorded in Product Notes and the
      paired OBBBA runbooks.
- [x] Prove import layers sequentially before Alpha end-stage: no image/no
      prune (`747`), image only (`751`), prune only (`752`), then image plus
      prune (`753`); the reviewed four-case manifest passed source comparison,
      production-shaped build, deployment, and live verification.
- [x] Review and dry-run the next OBBBA Title I batch manifest for topics
      `754`, `755`, `756`, `757`, `758`, `759`, `761`, `762`, `763`, and `764`
      in natural numbered-title order with uniform
      source/comments/tag/hero/alt/prune policy; strict v1 validation passed,
      dry-run reported 0 imported / 0 skipped / 10 dry-run, and
      `generatedPages=0`.
- [x] Complete the approved live import for the exact ten-topic OBBBA Title I
      batch, clean build, corrected deployment, and per-route verification:
      content commit `5cfc99a`, cleanup commit `a5f5df9`, 17-file clean build,
      ten live HTTP-200 routes, and three stock routes verified 404.
- [x] Record the raw-post permission boundary: topic 754 is readable at
      `/t/754.json`, but its first post lacks raw Markdown. Fetching that first
      post by post ID at `/posts/761.json` returns 403 with the granular key;
      controlled `import-existing` source reads may use the protected
      diagnostics/global key in memory while CI/build/runtime publishing and
      deployment use remain prohibited.
- [ ] Use `repealobbbaact.us` as an Alpha end-stage package-installed test for Discourse-source structured pages, source-mode safety, comments rendering, and Cloudflare deployment.
- [x] Phil confirmed the optional Discourse plugin vertical slice belongs in
      cumulative Alpha scope.
- [ ] Build `DiscussionBridge for Discourse` v0.1 Alpha in bounded phases:
      contract and inert skeleton; authenticated forum-authorized
      create-or-resolve under a configured non-`system` identity; then
      production-quality comments-only `fullInteractive`. Keep Tier 1 API-only
      and fully usable without plugin installation.
- [ ] On CAN, evaluate/install the existing Discourse Mermaid theme component
      as the immediate normal-topic baseline, then build the bounded optional
      plugin slice for Mermaid in full-app embeds, table presentation parity,
      embed-context detection, and tests. Do not make Tier 1 depend on it.
- [x] Correct Mermaid terminology: Discourse Mermaid is the official
      **theme component** documented at Meta topic `218242` and repository
      `discourse/discourse-mermaid-theme-component`, never the DiscussionBridge
      plugin.
- [x] Choose the separate `DiscussionBridge for Discourse` plugin for the
      forum-governed control plane and production comments-only full-app embed.
      Retain the official theme component as a distinct normal-topic option.
- [ ] Build the plugin as a separate Boss-routed product/repository; prove it is
      installable and removable with rollback docs on supported stock/current
      Discourse, has no ordinary-topic regression, and passes live CAN full-app
      embed verification. Astro-package release-channel decisions do not apply
      to Discourse plugin installation.
- [ ] Complete human-admin installs of the exact published plugin candidate in
      both supported topologies as a product release gate: single-container
      `app` on `sandbox-forum.discussionbridge.dev` and split `data` +
      `web_only` on `dev-forum.discussionbridge.dev`, with a separate acceptance
      record for each host/topology. Automated/local installations are
      qualification evidence, not a substitute for those human install proofs.
      `forum.repealobbba.org` remains a later, separately authorized independent
      real-world proof and is not one of these two current release-gate installs.
- [ ] Preserve `v0.1.0-alpha.5` as immutable **REJECTED — DO NOT INSTALL**
      evidence. Its human gate proved that Core exposes no embedded Log Out
      control and that the paired adapter's 70vh ceiling clipped lower-frame
      content. A superseding gate must use actual rendered controls, separately
      induced Core-owned session loss, and the corrected uncapped adapter; never
      use a synthetic logout button or **Open discussion** as a substitute.
- [ ] Keep arbitrary post-as-user, PM automation, existing-topic migration,
      and broad many-to-many administration out of the first v0.1 boundary.
      Forum-policy, mapping, audit, and fail-closed creation interfaces are in.
- [x] Use logical/workspace path
      `DiscussionBridge/plugins/discourse-discussion-bridge`; the local physical
      development root is
      `C:\CodeProjects\Products\DiscussionBridge\plugins\discourse-discussion-bridge`.
- [x] Implement and document preferred request actor controls: `--post-as`,
      `DISCOURSE_POST_AS`, and lane/default `postAs`/`postAsEnv`, with legacy
      API-username controls as fallbacks and the resolved actor sent as
      `Api-Username`. A real CLI execution regression covers `--post-as` and
      dry-run actor output. Current package suite 79/79.
- [x] Document independent Discourse key User Level and Scope behavior:
      `All Users` may act for supplied `Api-Username`; `Single User` is bound
      to its selected user; Scope controls endpoints separately.
- [ ] Create and inventory `special-admin` on each connected forum; verify
      separately assigned admin/category/API authority because group membership
      grants none.
- [ ] Finalize and availability-check collision-safe role+origin identities.
      Current candidates: `editorbridgeforum` / DiscussionBridge Forum Editor
      and `editorcanforum` / CAN Forum Editor. Preserve `obbba-bot`.
- [ ] Complete topic-36 editor-ownership acceptance: transfer first-post
      ownership from `discourseadmin`, edit as the selected editor, overwrite
      refresh the Discourse-managed guide, build/deploy/live verify, and prove
      no Astro writeback.
- [x] Persist Discourse first-post author username/name during import and
      explicit overwrite refresh; render safe same-forum source-author profile
      attribution while preserving the forum's subfolder base, source mode,
      no-writeback, and topic ID.
- [x] Persist `discussionSourceCategoryId` and report source-category changes
      from opening frontmatter only. Overwrite refreshes WHEREFROM metadata
      without moving the Astro file, public route, or navigation lane; direct
      and strict atomic-manifest coverage includes LF, CRLF, BOM, and body/code
      lookalikes. Package suite 79/79; Code Boss PASS.
- [ ] Design an explicit existing-topic owner-transfer operation separately
      from `postAs` and normal sync; neither may silently change ownership.
- [x] Document category authority: configured categories are authoritative for
      Astro-managed topics and sync corrects drift; absent configuration
      preserves manual placement; Discourse-source categories are protected;
      target categories are independent.
- [x] Declare navigation authority per lane. Forum-authored lanes may use
      reviewed Discourse categories, hierarchy tags, and index topics;
      official-source lanes derive scope, hierarchy, order, labels, routes, and
      body from the controlling official source before optional forum joins.
- [x] Permit local pages and organizational groups without a Discourse topic
      when they have a local URL or children. Require `topicId` and `sourceUrl`
      together for every claimed forum connection, fail closed on partial
      bindings, and prohibit synthetic topics created only for navigation.
- [x] Preserve source tags as provenance while explicitly excluding workflow
      tags from automatic public navigation. Do not require redundant Title
      tags on index topics or reshape a sound forum taxonomy for the bridge.
- [x] Implement the package/demo complete-structure/progressive-presentation model:
      show lenses and Titles globally; expand the active lens, Title, and
      Subtitle/Chapter/Subchapter/Part branch; leave other branches collapsed
      but user-expandable; use index pages as the complete browse surface.
      OBBBA adoption completed at `dd9c100` and case-safe refresh at `5a455f1`.
- [ ] Provide breadcrumbs, index-authored previous/next, and search. Avoid
      rendering hundreds of inactive Title VII section links on every page,
      preferably including avoidance of unnecessary inactive DOM content.
- [x] Verify the current full OBBBA hierarchy on desktop 1440 and mobile 390:
      deep Title VII opens progressively, 87 summary nodes remain collapsed,
      mobile navigation is usable with body-scroll lock, and no overflow/page
      errors occur.
- [x] Generate and review Starlight and plain Astro presentation adapters from
      the canonical manifest. Treat progressive/complete/compact as candidate
      concepts only. Starlight adapter and plain Astro static demo passed;
      browser checks passed on desktop/mobile without horizontal overflow.
- [ ] Broaden Title VII responsive/accessibility proof across laptop/tablet,
      keyboard, and screen-reader use as additional content is imported.
- [x] Freeze the official-source-first OBBBA Text candidate from GovInfo
      PLAW-119publ21 USLM: 310 enacted sections and local Text routes, followed
      by 307 optional complete forum joins. Sections 1, 20009, and 71119 remain
      authoritative local pages without forum bindings; Section 70310 is absent;
      the 309 forum inventory is not enacted-law cardinality.
- [x] Verify all 310 official Text routes plus the preserved 15 Impact routes
      are canonical local navigation members; the clean sitemap has exactly 331
      unique URLs and no encoded-space or quarantined route.
- [x] Record the bounded Section 10101 comparison: topic 34/post 40 matched
      USLM `/us/pl/119/21/tI/stA/s10101`; bounded normalization produced 608
      tokens and 3,148 characters on both sides with zero substantive
      differences; cite 139 Stat. 80–81. Do not generalize to all OBBBA topics.
- [x] Design, implement, and review a reusable official-source enrichment profile that separately
      renders the community Discourse content source and authoritative public
      record, with identity, locator, citation, URLs, checked time, source
      hash, and comparison result. Strict `us-public-law` uses manifest v2.
- [x] For Public Law 119-21, use USLM XML for hierarchy/text, official TXT for
      page-marker/fallback evidence, PDF for visual verification, and the
      Congress.gov page as overview. Cite Statutes at Large pages, not PDF
      file-page numbers. Enforce HTTPS Congress.gov hosts through final redirect.
- [x] Fail closed or require review when official matching is missing,
      duplicated, or ambiguous. Never silently rewrite community text.
- [ ] Classify Impact topics before population. Do not publish an Astro Impact
      page while its source topic still contains the canonical placeholder
      prompt (reference: Section 82001/topic 1002). Retain its `sectionId` and
      protected Discourse topic URL so OBBBA Text can link to that forum topic.
      Freeze the reference as a dated, versioned normalized-content snapshot
      with topic/post identity and SHA-256; do not use future edits to topic
      1002 as a moving baseline. The dry-run report must list
      placeholder-suppressed, publication-candidate, and review-required Impact
      topics separately. A nonmatching hash is not automatic publication
      approval; partial, mixed, or uncertain matches require review.
- [x] Quarantine the BB2 GET-only Impact population planner, generated config,
      reports, credential detour, and tests as superseded historical provenance.
      They have no active implementation, release, publication, or population
      authority. Preserve the independently reviewed 15 existing Impact routes;
      any future Impact population requires a clean, separately approved lane.
- [x] Generate reciprocal Related links from stable `sectionId` values across
      OBBBA Text, Law as Amended, Impact, and future Stories. Keep
      provenance/authority separate from Related navigation.
- [x] Support an aggregate many-to-many Stories graph: one section can list
      many Stories, and one Story can reference many section IDs; regeneration
      plus Astro build must update all related pages without body reimport or
      manual per-page links.
- [x] Render accessible Content source, Official text, and Related actions in
      Starlight and plain Astro demo evidence from one adapter-neutral manifest.
- [x] Build and exact-review the official navigation candidate with package
      `astro-discussion-bridge-0.1.0-alpha-official-nav-19f3066a.tgz`, package
      tests 113/113, 307 Text pages with one package credit, three unbound Text
      pages with no discussion credit, and zero legacy site-owned marks.
- [ ] Authorize and perform the exact official-source OBBBA Text deployment,
      then complete live route, sitemap, navigation, discussion, source-link,
      and rollback acceptance. Candidate publication and deployment remain
      unauthorized until that separate gate passes.
- [x] Preserve legal case in official comparison. Classify capitalization-only
      differences as `substantive-difference` and require the normal
      review/explicit-override path; regression covers `IN GENERAL` versus
      `In general`.
- [x] Handle public Discourse tag-group 429s sequentially: retry only 429,
      maximum three retries, bounded `Retry-After` seconds/date or fallback,
      rejected-body cancellation within 50 ms, and never retry 403.
- [ ] Review OBBBA npm findings (1 low, 1 moderate, 6 high) without automatic
      `npm audit fix`.
- [x] Implement verified docs update metadata at `02206f7`: title row shows
      Last updated plus `Applies to: DiscussionBridge Alpha`; footer repeats
      only Last updated and links the exact canonical GitHub source. Desktop
      1440 and mobile 390 visual/DOM checks passed.
- [x] Track exact synchronized-source membership, `lastUpdated`, and SHA-256 in
      `docs/DOCS_PAGE_METADATA.json`; normal builds fail closed on missing,
      stale, or hash-mismatched metadata without deriving dates from Git.
- [x] Require explicit `npm run refresh-metadata` after canonical docs edits;
      preserve unchanged dates, update changed pages, initialize new entries,
      and rebuild exact ledger membership. Metadata tests passed 2/2.
- [ ] For each release docs candidate, run metadata refresh, metadata tests,
      readable build, source/rendered checks, and Manual Boss review. Do not
      report Last updated as a build/deploy timestamp.
- [ ] Design future integration lanes for Statamic and other frameworks.
