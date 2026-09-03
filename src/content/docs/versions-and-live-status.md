---
title: "Versions And Live Status"
lastUpdated: 2026-09-03
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/VERSIONS_AND_LIVE_STATUS.md"
---

- **Last verified:** September 3, 2026
- **Release channel:** Alpha
- **Compatibility line:** The Bridge `0.2`

This page is the current public inventory of the DiscussionBridge product
family. It distinguishes product packages, live platform profiles, public demo
deployments, and environments that are not part of the public release boundary.

DiscussionBridge is one family of focused tools. **The Bridge** is the unified
Discourse plugin and flagship. Platform adapters and addons connect publishing
systems to that same Bridge contract without turning the product into a generic
control plane.

## Downloads And Release Records

- [Download DiscussionBridge](https://discussionbridge.dev/download/) for the
  current public-package status and installation path.
- [Versions and releases on The Bridge](https://bridge.demo.discussionbridge.dev/t/discussionbridge-versions-and-live-status/62)
  for the public release record and discussion.
- [DiscussionBridge on GitHub](https://github.com/DiscussionBridge) for source
  repositories as they are published.

The reviewed Alpha package is still being prepared for public download. Older
GitHub prereleases are historical candidates, not substitutes for the versions
listed below.

## Current Product Packages

The current Alpha candidate contains six implementation packages. Statamic uses
one addon in three independently configured profiles.

| Product package | Current version | Source commit |
| --- | --- | --- |
| The Bridge — unified Discourse plugin | `0.2.0.alpha.18` | `b4698f6e4ad1b5afe04b4af8939258c8eea50b3b` |
| DiscussionBridge for Astro | `0.1.0-alpha.20260903.7` | `474685a3dc45613df74a85fc89c2e709e497be9b` |
| DiscussionBridge for Ghost | `0.1.0-alpha.38` | `3439abdab380a6e1fae0dd27161f19d4f7db3f53` |
| DiscussionBridge for Hugo | `0.1.0-alpha.17` | `a56bf9939a7e61509ca61ae26b70663c9c6066fe` |
| DiscussionBridge for Statamic | `0.1.0-alpha.25` | `c6c6a7b5da2b90feb44e574e1a5702a936671f63` |
| DiscussionBridge for WordPress | `0.1.0-alpha.17` | `c28ab205a256722eb2c5b70965c3eca6472a30c0` |

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
- **Statamic** is one native addon exercised independently with Flat, DB, and
  SSG.
- **WordPress** is a native plugin for publishing, retrieval, retry, and
  comments presentation.

These are exact Alpha candidate versions, not floating package names. The
adapter version strings are still independently incremented. The public
compatibility statement is therefore **compatible with The Bridge 0.2**, not an
invented claim that every package already shares one identical version string.

## Versioning Convention

DiscussionBridge needs to communicate three different identities:

1. **Product-family release:** the coordinated Alpha, Beta, or stable release
   users are evaluating.
2. **Bridge compatibility line:** the receiver contract an adapter implements,
   currently `0.2`.
3. **Component build:** the exact plugin, adapter, addon, or consumer artifact
   installed or deployed.

The current Alpha predates a single normalized family-version field, so this
page reports the existing component strings exactly and supplies the Bridge
compatibility line separately. The next coordinated packaging pass should make
both identities machine-readable: one shared product-family release value plus
one component build value. A component must never imply compatibility merely
because two unrelated counters happen to match.

Until that packaging change is implemented, support reports should include both
values, for example: **The Bridge 0.2; Ghost adapter 0.1.0-alpha.38**.

## Live Profiles

All links below are public demonstrations. A `Live` label means the profile is
deployed and reachable; it is not a promise of production support or final
release acceptance.

| Profile | Status | Package | Directions and presentation | Live destination |
| --- | --- | --- | --- | --- |
| The Bridge — Discourse as Publisher | Live | The Bridge `0.2.0.alpha.18` | Receives connected publications and publishes Discourse-owned material to selected platforms. | [The Bridge](https://bridge.demo.discussionbridge.dev/) |
| Astro | Live | Astro `0.1.0-alpha.20260903.7` | To/From The Bridge; Simple, Full, and fullInteractive. Two consumers demonstrate plain Astro and Astro + Starlight. | [Astro + Starlight](https://astrostarlight.demo.discussionbridge.dev/) · [Plain Astro](https://astro.demo.discussionbridge.dev/) |
| Ghost | Live | Ghost `0.1.0-alpha.38` | To/From The Bridge; Simple, Full, and fullInteractive through a Ghost integration plus hosting-layer service. | [Ghost](https://ghost.demo.discussionbridge.dev/) |
| Hugo | Live | Hugo `0.1.0-alpha.17` | To/From The Bridge; Simple, Full, and fullInteractive. | [Hugo](https://hugo.demo.discussionbridge.dev/) |
| Statamic Flat | Live | Statamic `0.1.0-alpha.25` | To/From The Bridge; Simple, Full, and fullInteractive with file-backed Statamic content. | [Statamic Flat](https://statamic-flat.demo.discussionbridge.dev/) |
| Statamic DB | Live | Statamic `0.1.0-alpha.25` | To/From The Bridge; Simple, Full, and fullInteractive with database-backed Statamic content. | [Statamic DB](https://statamic-db.demo.discussionbridge.dev/) |
| Statamic SSG | Live | Statamic `0.1.0-alpha.25` | Trusted-build publishing and retrieval; static Simple output and embedded live modes. | [Statamic SSG](https://statamic-ssg.demo.discussionbridge.dev/) |
| WordPress | Live | WordPress `0.1.0-alpha.17` | To/From The Bridge; Simple, Full, and fullInteractive through a native WordPress plugin. | [WordPress](https://wordpress.demo.discussionbridge.dev/) |

Explore the cross-platform examples and shared-topic presentation matrix at
the [Demo chooser](https://demo.discussionbridge.dev/).

## The Bridge Runtime

The public Bridge currently runs:

- unified receiver/publisher plugin `0.2.0.alpha.18`;
- Discourse Core commit `7dfd824b151fc5b206812e72f3aca6078a71b75f`;
- seven configured Content Connections; and
- 30 Bridge Records with 30 durable bindings at the last verified census.

The runtime was installed from the exact Alpha.18 candidate artifact. Installed
plugin files matched that artifact at verification time.

## Exact Candidate Artifacts

These hashes identify the reviewed Alpha candidate bytes. They are verification
identities, not download links. Use the
[Download page](https://discussionbridge.dev/download/) for current public
package availability.

| Package | Artifact | SHA-256 |
| --- | --- | --- |
| The Bridge | `discourse-discussion-bridge-0.2.0-alpha.18.tar` | `8dbd064e1851a84db655d80a2941cea7212f87aa4999be66948ae928e0d48a3e` |
| Astro | `astro-discussion-bridge-0.1.0-alpha.20260903.7.tgz` | `3d44fdc3da4fe64ef098c845b252a88d3ff843f79a3fb1108c55f910a95b3bc3` |
| Ghost | `ghost-discussion-bridge-0.1.0-alpha.38.tgz` | `c09d7fc21d209bfb7bcf4a5b73fd6c94735c6f10f15f96b8bdddd2d81a687907` |
| Hugo | `hugo-discussion-bridge-0.1.0-alpha.17.tgz` | `bd278f980964a3b3750400bf181bd091a37df438c061a94d26d665bf09a66477` |
| Statamic | `statamic-discussion-bridge-0.1.0-alpha.25.tar` | `b758e696b04e21c30f09d6aa6bdf1ca6155a4e6da33b5a9c88afd6d6fe75af59` |
| WordPress | `wordpress-discussion-bridge-0.1.0-alpha.17.zip` | `000ea023059b0390dcdf9ee1bcf4484a300aeef420fda766b1a229b46b3770b1` |

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

The exact candidate above completed the paired product-family code review with
no P0 or P1 findings. Four nonblocking P2 findings remain recorded for later
engineering work: mutable first-post snapshot binding, receiver feed query
scaling, whole-feed validation before four consumers materialize pages, and
precise identification of the monitored Statamic advisory.

Documentation completion and human installation/configuration testing remain
separate gates. This page does not claim final release, provider recovery,
pre-production, production, or product-risk acceptance.

For help, use [Alpha Support](/support-and-feedback/). For the complete public
demonstration, use the [Demo chooser](https://demo.discussionbridge.dev/).
