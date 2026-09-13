---
title: "Versions And Live Status"
lastUpdated: 2026-09-13
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/VERSIONS_AND_LIVE_STATUS.md"
---

- **Last verified:** September 13, 2026
- **Release channel:** Alpha
- **Product-family release candidate:** DiscussionBridge `0.2.0-alpha.20`
- **Compatibility line:** The Bridge `0.2`

This page is the current public inventory of the DiscussionBridge product
family. It distinguishes product packages, live platform profiles, public demo
deployments, and environments that are not part of the public release boundary.

DiscussionBridge is one family of focused tools. **The Bridge — DiscussionBridge
for Discourse** is the flagship Discourse plugin. Platform adapters and addons
connect publishing systems through the DiscussionBridge Adapter Protocol
without turning the product into a generic control plane.

## Downloads And Release Records

- [Download DiscussionBridge](https://discussionbridge.dev/download/) for the
  current public-package status and installation path.
- [Versions and releases on The Bridge](https://bridge.demo.discussionbridge.dev/t/discussionbridge-versions-and-live-status/62)
  for the public release record and discussion.
- [DiscussionBridge on GitHub](https://github.com/DiscussionBridge) for all seven
  release-member repositories, including the DiscussionBridge Adapter Protocol.

The current source and release candidate are public. An ordinary clone of a
repository's `main` branch obtains its current Alpha source. The shared
`v0.2.0-alpha.20` tag identifies the coordinated candidate across all seven
release-member repositories. Each `main` branch may later
include non-release maintenance; the tag and packaged GitHub release asset are
the immutable installation identities for this gate.

## Current Product Packages

The current public Alpha baseline contains six implementation packages plus
the shared Adapter Protocol. Statamic uses one addon in three independently
configured profiles.

| Product package | Component version | Public repository | Current public `main` |
| --- | --- | --- | --- |
| The Bridge — DiscussionBridge for Discourse | `0.2.0.alpha.20` | [GitHub](https://github.com/DiscussionBridge/discourse-discussion-bridge) | `606774f6535d9c9ef15710cb9683072f7306051a` |
| DiscussionBridge for Astro | `0.2.0-alpha.20` | [GitHub](https://github.com/DiscussionBridge/astro-discussion-bridge) | `f0610945beedc4cca54c11440d4794ce92b17ff5` |
| DiscussionBridge for Ghost | `0.2.0-alpha.20` | [GitHub](https://github.com/DiscussionBridge/ghost-discussion-bridge) | `3260ab967a668d39837bc3fbf75997576d50951e` |
| DiscussionBridge for Hugo | `0.2.0-alpha.20` | [GitHub](https://github.com/DiscussionBridge/hugo-discussion-bridge) | `51c077dc587c6b18064577b3a209ce20f82d0f46` |
| DiscussionBridge for Statamic | `0.2.0-alpha.20` | [GitHub](https://github.com/DiscussionBridge/statamic-discussion-bridge) | `671cd9e85ab2470b60def159d3798718ced1d023` |
| DiscussionBridge for WordPress | `0.2.0-alpha.20` | [GitHub](https://github.com/DiscussionBridge/wordpress-discussion-bridge) | `9653eca16feb87e2b19910e63d8f6be88ac02b11` |
| DiscussionBridge Adapter Protocol | `0.2.0-alpha.20` | [GitHub](https://github.com/DiscussionBridge/discussionbridge-adapter-contract) | `27197b7472cb2486993c8b01b4a4282d8697f478` |

### Public Roles

- **The Bridge** receives platform publications, owns Content Connections and
  Bridge Records, presents native administration, and can publish
  Discourse-owned content outward.
- **Astro** supplies Astro and Astro + Starlight publishing, retrieval, and
  comments presentation.
- **Ghost** combines a native Ghost integration with a hosting-layer adapter
  service for publishing, retrieval, and comments presentation.
- **Hugo** supplies build integration, durable publication state, retrieval,
  and comments presentation.
- **Statamic** is one native addon tested independently with Flat, DB, and
  SSG.
- **WordPress** is a native plugin for publishing, retrieval, retry, and
  comments presentation.

Every implementation repository also contains `discussionbridge-release.json`, which
records the shared family release, component name and version, Bridge
compatibility line, and canonical repository URL. The five adapter/addon
packages use the family version directly; the Discourse plugin uses the
equivalent Ruby metadata form `0.2.0.alpha.20`. Exact commits
and artifact hashes still distinguish the independently built packages.

## Built in Public

**Last measured:** September 3, 2026

Project Census measured the six current implementation repositories from their
exact Git-tracked files. The separate categories keep generated or packaged
output from being presented as work written by the product team.

| Category | Files | Physical lines | Nonblank lines |
| --- | ---: | ---: | ---: |
| First-party product source | 157 | 15,073 | 13,554 |
| Tests | 49 | 6,877 | 6,168 |
| Product documentation | 28 | 2,455 | 1,984 |
| Configuration | 15 | 589 | 584 |
| Other counted text | 20 | 222 | 203 |

The census excludes dependencies, generated browser bundles and site output,
lockfiles, vendored code, archives, source maps, and binary assets. It records
exact repository commits and refuses to create a release census from a dirty
package. These September 3 figures describe the Alpha.18 predecessor baseline;
they are not silently relabeled as an Alpha.20 measurement.

## Versioning Convention

DiscussionBridge needs to communicate three different identities:

1. **Product-family release:** the coordinated Alpha, Beta, or stable release
   users are evaluating.
2. **Bridge compatibility line:** The Bridge contract an adapter implements,
   currently `0.2`.
3. **Component build:** the exact commit and artifact hash for the plugin,
   adapter, addon, or consumer installed or deployed.

The family and component identities are now machine-readable in every public
repository. Support reports should include the family version, Bridge
compatibility line, component name, and exact artifact identity, for example:
**DiscussionBridge 0.2.0-alpha.20; The Bridge 0.2; Ghost adapter; artifact
SHA-256 66e3cec6…**.

## Platform Compatibility And Test Targets

Package compatibility and observed installation evidence are different claims.
The ranges below are what each Alpha.20 package currently declares. The exact
targets are the platform versions exercised by its present test or sandbox
evidence; they do not imply testing of every version inside a declared range.

| DiscussionBridge package | Declared platform/runtime compatibility | Exact current Alpha.20 test or sandbox target |
| --- | --- | --- |
| The Bridge — DiscussionBridge for Discourse | Discourse `3.3.0` or newer | Alpha.20 CI lint, backend RSpec, annotations, and Ember build passed against pinned Discourse Core `36698aae084678151dffa875d49c8d59216d2733`. The official Core system-test job stopped at its MinIO installation step before plugin system tests ran; Alpha.20 human sandbox installation remains pending. |
| DiscussionBridge for Astro | Astro `6.x` or `7.x`; optional Starlight `0.35.0` or newer | Package tests use Astro `7.2.4` and Starlight `0.41.7`; clean sandbox baselines use Astro `7.3.1` and Starlight `0.42.0`. |
| DiscussionBridge for Ghost | Node.js `22` or newer; no broader Ghost CMS range is declared yet | Ghost `6.59.0` with Node.js `22.23.2`. |
| DiscussionBridge for Hugo | Node.js `22` or newer; no broader Hugo generator range is declared yet | Hugo `0.165.0`. |
| DiscussionBridge for Statamic | PHP `8.3` or newer within PHP `8.x`; Statamic `6.x` | Alpha.20 package verification resolved Statamic `6.31.0`; the three clean sandbox profiles also use Statamic `6.31.0`. |
| DiscussionBridge for WordPress | WordPress `6.6` or newer; PHP `8.1` or newer | WordPress `7.1` on PHP `8.3`. |

Ghost and Hugo intentionally have narrow evidence statements at this point.
Their packages declare the execution runtime they require, but do not yet make
an unsupported broad CMS/generator compatibility promise. Broader ranges should
be published only after a deliberate version matrix is tested.

## Live Profiles

All links below are public demonstrations. A `Live` label means the profile is
deployed and reachable; it is not a promise of production support or final
release acceptance.

<div class="db-profile-grid">
  <article class="db-profile-card">
    <header><h3>The Bridge — Discourse as Publisher</h3><span class="db-live-badge">Live</span></header>
    <dl>
      <div><dt>Platform</dt><dd>Discourse Core <code>7dfd824b…</code></dd></div>
      <div><dt>DiscussionBridge</dt><dd>The Bridge <code>0.2.0.alpha.18</code></dd></div>
    </dl>
    <p>Receives connected publications and publishes Discourse-owned material to selected platforms.</p>
    <p class="db-profile-links"><a href="https://bridge.demo.discussionbridge.dev/">Open The Bridge →</a></p>
  </article>
  <article class="db-profile-card">
    <header><h3>Astro</h3><span class="db-live-badge">Live</span></header>
    <dl>
      <div><dt>Platform</dt><dd>Plain Astro <code>7.1.1</code>; Astro <code>7.2.4</code> + Starlight <code>0.41.2</code></dd></div>
      <div><dt>DiscussionBridge</dt><dd>Astro adapter <code>0.1.0-alpha.20260903.7</code></dd></div>
    </dl>
    <p>To/From The Bridge; Simple, Full, and Interactive.</p>
    <p class="db-profile-links"><a href="https://astrostarlight.demo.discussionbridge.dev/">Astro + Starlight →</a><a href="https://astro.demo.discussionbridge.dev/">Plain Astro →</a></p>
  </article>
  <article class="db-profile-card">
    <header><h3>Ghost</h3><span class="db-live-badge">Live</span></header>
    <dl>
      <div><dt>Platform</dt><dd>Ghost <code>6.59.0</code></dd></div>
      <div><dt>DiscussionBridge</dt><dd>Ghost adapter <code>0.1.0-alpha.38</code></dd></div>
    </dl>
    <p>To/From The Bridge; Simple, Full, and Interactive through a Ghost integration plus hosting-layer service.</p>
    <p class="db-profile-links"><a href="https://ghost.demo.discussionbridge.dev/">Open Ghost demo →</a></p>
  </article>
  <article class="db-profile-card">
    <header><h3>Hugo</h3><span class="db-live-badge">Live</span></header>
    <dl>
      <div><dt>Platform</dt><dd>Hugo <code>0.165.0</code></dd></div>
      <div><dt>DiscussionBridge</dt><dd>Hugo adapter <code>0.1.0-alpha.17</code></dd></div>
    </dl>
    <p>To/From The Bridge; Simple, Full, and Interactive.</p>
    <p class="db-profile-links"><a href="https://hugo.demo.discussionbridge.dev/">Open Hugo demo →</a></p>
  </article>
  <article class="db-profile-card">
    <header><h3>Statamic Flat</h3><span class="db-live-badge">Live</span></header>
    <dl>
      <div><dt>Platform</dt><dd>Statamic <code>6.28.0</code></dd></div>
      <div><dt>DiscussionBridge</dt><dd>Statamic addon <code>0.1.0-alpha.25</code></dd></div>
    </dl>
    <p>To/From The Bridge; Simple, Full, and Interactive with file-backed Statamic content.</p>
    <p class="db-profile-links"><a href="https://statamic-flat.demo.discussionbridge.dev/">Open Flat demo →</a></p>
  </article>
  <article class="db-profile-card">
    <header><h3>Statamic DB</h3><span class="db-live-badge">Live</span></header>
    <dl>
      <div><dt>Platform</dt><dd>Statamic <code>6.28.0</code></dd></div>
      <div><dt>DiscussionBridge</dt><dd>Statamic addon <code>0.1.0-alpha.25</code></dd></div>
    </dl>
    <p>To/From The Bridge; Simple, Full, and Interactive with database-backed Statamic content.</p>
    <p class="db-profile-links"><a href="https://statamic-db.demo.discussionbridge.dev/">Open DB demo →</a></p>
  </article>
  <article class="db-profile-card">
    <header><h3>Statamic SSG</h3><span class="db-live-badge">Live</span></header>
    <dl>
      <div><dt>Platform</dt><dd>Statamic <code>6.30.0</code> + Statamic SSG <code>4.1.0</code></dd></div>
      <div><dt>DiscussionBridge</dt><dd>Statamic addon <code>0.1.0-alpha.25</code></dd></div>
    </dl>
    <p>Trusted-build publishing and retrieval; static Simple output and embedded live modes.</p>
    <p class="db-profile-links"><a href="https://statamic-ssg.demo.discussionbridge.dev/">Open SSG demo →</a></p>
  </article>
  <article class="db-profile-card">
    <header><h3>WordPress</h3><span class="db-live-badge">Live</span></header>
    <dl>
      <div><dt>Platform</dt><dd>WordPress <code>7.1</code></dd></div>
      <div><dt>DiscussionBridge</dt><dd>WordPress plugin <code>0.1.0-alpha.17</code></dd></div>
    </dl>
    <p>To/From The Bridge; Simple, Full, and Interactive through a native WordPress plugin.</p>
    <p class="db-profile-links"><a href="https://wordpress.demo.discussionbridge.dev/">Open WordPress demo →</a></p>
  </article>
</div>

Explore the cross-platform examples and shared-topic presentation matrix at
the [Demo chooser](https://demo.discussionbridge.dev/).

## The Bridge Runtime

As verified on **September 4, 2026**, the public Bridge runs:

- The Bridge — DiscussionBridge for Discourse plugin `0.2.0.alpha.18`;
- Discourse Core commit `7dfd824b151fc5b206812e72f3aca6078a71b75f`;
- seven configured Content Connections; and
- 30 Bridge Records with 30 durable bindings at the last verified census.

The runtime was installed from the exact Alpha.18 candidate artifact. Installed
plugin files matched that artifact at verification time.

## Exact Alpha.20 Candidate Artifacts

These immutable assets are published on each repository's GitHub prerelease.
They are ready for human sandbox installation and configuration testing; they
are not yet claims of development/pre-production or live-demo promotion.

| Package | Artifact | SHA-256 |
| --- | --- | --- |
| The Bridge | `discourse-discussion-bridge-0.2.0-alpha.20.tar.gz` | `9f5693d70778d90cf22fd9290c70e24e5a89c3d319c9641e8dc272116837064b` |
| Astro | `astro-discussion-bridge-0.2.0-alpha.20.tgz` | `b63b62a40a1283d9b333f1a35c7b44da3976f029c8b2b9548ad2e0388d5f82f9` |
| Ghost | `ghost-discussion-bridge-0.2.0-alpha.20.tgz` | `66e3cec6b9e14a2cc6a6711e323359c7118a9fb69f63dd7e5501a81ee35cab5b` |
| Hugo | `hugo-discussion-bridge-0.2.0-alpha.20.tgz` | `c5eaba1400e3eec05f96759d583c431687af90641ac8e93643d3c752e436b23c` |
| Statamic | `statamic-discussion-bridge-0.2.0-alpha.20.zip` | `23b6e9e6df39c58ee658db18d0c679ad45b6baafab5ce58b91791b0df6e0a011` |
| WordPress | `wordpress-discussion-bridge-0.2.0-alpha.20.zip` | `2fcede298e816be3c99d194668ee295bade95202b3caaf90b667103c0d8088f6` |
| Adapter Protocol | `discussionbridge-adapter-contract-0.2.0-alpha.20.zip` | `8f56c67fd0fffdd55c9515be86c5d7dbda7d85d53257ddcfbfe4169ad71bf53f` |

## Public Deployment Identities

Static consumers are independently versioned from their adapters. The latest
verified source/deployment bindings are:

| Consumer | Source commit | Cloudflare Worker deployment |
| --- | --- | --- |
| Astro + Starlight | `0ea78db85dc776f985c181ff37cd4e8119fb6ef8` | `8230d951-dc5e-456e-ad97-1d05022041e1` |
| Plain Astro | `ac304ab6aacc61b692372310af6d3204a1f4b1b5` | `6f9581e6-e3e6-4176-abd9-a2829f878a3d` |
| Hugo | `6d647b85f39e317e3faf43b28839b70761329c00` | `97838edf-04fd-4ec2-ab9f-3984924665e1` |
| Statamic SSG | `b73dc8f13d82e22b706de73e5f9f1344db91083c` | Generated assets remained unchanged during the Alpha.25 rebind; no replacement Worker was required. |

Ghost, WordPress, Statamic Flat, and Statamic DB are live application profiles;
their adapter identity is reported above, while their hosting configuration and
protected operational identifiers are intentionally not published here.

## Environment Roles

- `bridge.demo.discussionbridge.dev` is the public flagship and Discourse-as-
  Publisher demonstration.
- The seven platform destinations above are public Alpha demo profiles.
- `sandbox-forum.discussionbridge.dev` is a build and installation test
  environment. It is not a public demo or release-candidate dependency.
- `dev-forum.discussionbridge.dev` is development/pre-production. It is not a
  public Alpha acceptance profile.
- `forum.discussionbridge.dev` is the community and support forum, not the
  public publishing demo.

## Current Acceptance State

Public source and immutable Alpha.20 prerelease assets are now established, but
publication is not final Alpha release acceptance. Human sandbox installation
and configuration, unchanged promotion through development/pre-production, and
the remaining release gates are tracked separately. The public live profiles
above continue to report their installed Alpha.18 identities until that
promotion occurs. This page does not claim provider recovery, production, or
product-risk acceptance.

For help, use [Alpha Support](/support-and-feedback/). For the complete public
demonstration, use the [Demo chooser](https://demo.discussionbridge.dev/).
