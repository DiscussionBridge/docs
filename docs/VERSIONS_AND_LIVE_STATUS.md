# Versions And Live Status

- **Last verified:** September 4, 2026
- **Release channel:** Alpha
- **Product-family release candidate:** DiscussionBridge `0.2.0-alpha.19`
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
- [DiscussionBridge on GitHub](https://github.com/DiscussionBridge) for all six
  public product repositories and the shared adapter contract.

The current source and release candidate are public. An ordinary clone of a
repository's `main` branch obtains its current Alpha source. The shared
`v0.2.0-alpha.19` tag identifies the coordinated candidate across all six
product repositories and the adapter contract. Each `main` branch may later
include non-release maintenance; the tag and packaged GitHub release asset are
the immutable installation identities for this gate.

## Current Product Packages

The current public Alpha baseline contains six implementation packages. Statamic uses
one addon in three independently configured profiles.

| Product package | Component version | Public repository | Current public `main` |
| --- | --- | --- | --- |
| The Bridge — unified Discourse plugin | `0.2.0.alpha.19` | [GitHub](https://github.com/DiscussionBridge/discourse-discussion-bridge) | `941120fc97cfa7fdb32862c2ae495efee54626fc` |
| DiscussionBridge for Astro | `0.2.0-alpha.19` | [GitHub](https://github.com/DiscussionBridge/astro-discussion-bridge) | `d36d00eaeaa11a058b500355ac6e13c523090d71` |
| DiscussionBridge for Ghost | `0.2.0-alpha.19` | [GitHub](https://github.com/DiscussionBridge/ghost-discussion-bridge) | `347afcf055ccf4e81d8b9a7149282bbdffc88e76` |
| DiscussionBridge for Hugo | `0.2.0-alpha.19` | [GitHub](https://github.com/DiscussionBridge/hugo-discussion-bridge) | `1d113225f0d89165c8cad8818e4464605750ac4a` |
| DiscussionBridge for Statamic | `0.2.0-alpha.19` | [GitHub](https://github.com/DiscussionBridge/statamic-discussion-bridge) | `f5f90113b4100f4871aa759385b4883b76024437` |
| DiscussionBridge for WordPress | `0.2.0-alpha.19` | [GitHub](https://github.com/DiscussionBridge/wordpress-discussion-bridge) | `fd8c07d554e4a2a71bd5332a46a88c53a69e5b17` |

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

Every product repository also contains `discussionbridge-release.json`, which
records the shared family release, component name and version, Bridge
compatibility line, and canonical repository URL. Beginning with Alpha.19, the
five adapter/addon packages use the family version directly; the Discourse
plugin uses the equivalent Ruby metadata form `0.2.0.alpha.19`. Exact commits
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
they will be refreshed separately for Alpha.19 rather than silently relabeled.

## Versioning Convention

DiscussionBridge needs to communicate three different identities:

1. **Product-family release:** the coordinated Alpha, Beta, or stable release
   users are evaluating.
2. **Bridge compatibility line:** the receiver contract an adapter implements,
   currently `0.2`.
3. **Component build:** the exact commit and artifact hash for the plugin,
   adapter, addon, or consumer installed or deployed.

The family and component identities are now machine-readable in every public
repository. Support reports should include the family version, Bridge
compatibility line, component name, and exact artifact identity, for example:
**DiscussionBridge 0.2.0-alpha.19; The Bridge 0.2; Ghost adapter; artifact
SHA-256 8f23282b…**.

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

## Exact Alpha.19 Candidate Artifacts

These immutable assets are published on each repository's GitHub prerelease.
They are ready for human sandbox installation and configuration testing; they
are not yet claims of development/pre-production or live-demo promotion.

| Package | Artifact | SHA-256 |
| --- | --- | --- |
| The Bridge | `discourse-discussion-bridge-0.2.0-alpha.19.tar.gz` | `cfc847ace069772cfdb8e0ded1cfb59becee4bdc60f56a42baf7efe7d6c433df` |
| Astro | `astro-discussion-bridge-0.2.0-alpha.19.tgz` | `5a332121ca91f8ae4e322a71175626472345fb042b0dec97c0c4ed4501812dec` |
| Ghost | `ghost-discussion-bridge-0.2.0-alpha.19.tgz` | `8f23282b7037e3eeede92018536b87bbf691d29552eaca27f5be995f60a071c3` |
| Hugo | `hugo-discussion-bridge-0.2.0-alpha.19.tgz` | `f98bef80005b3f0a77a626358382190a8d599c4d168a5a14ab96c8498c1094af` |
| Statamic | `statamic-discussion-bridge-0.2.0-alpha.19.zip` | `edbcf27323f3be8f12474d982f493a3e06473e099445c610b322d5d91f54af1f` |
| WordPress | `wordpress-discussion-bridge-0.2.0-alpha.19.zip` | `521bba5f3e3fe7ed1e92a5a282bab0b81e48a43aea2ff222b8271d7bb8b27cc5` |
| Adapter contract | `discussionbridge-adapter-contract-0.2.0-alpha.19.zip` | `e14db3a3002e7c824bf47ae2d6ef36e9238fffc67774c35a9352da7569bf3651` |

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

Public source and immutable Alpha.19 prerelease assets are now established, but
publication is not final Alpha release acceptance. Human sandbox installation
and configuration, unchanged promotion through development/pre-production, and
the remaining release gates are tracked separately. The public live profiles
above continue to report their installed Alpha.18 identities until that
promotion occurs. This page does not claim provider recovery, production, or
product-risk acceptance.

For help, use [Alpha Support](./SUPPORT_AND_FEEDBACK.md). For the complete public
demonstration, use the [Demo chooser](https://demo.discussionbridge.dev/).
