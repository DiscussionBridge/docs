# Attribution, Ownership, And Licensing

This page is the public family-level summary for DiscussionBridge ownership,
attribution, and component licensing. Each component repository's `LICENSE` file
is the authority for that component and overrides any inconsistent summary.

## Public Summary

DiscussionBridge is an independent product brand owned and operated within the
WebSynergetics umbrella. It is made by CodeWorksLabs, the WebSynergetics
maker/studio, and maintained by Phil Henry.

DiscussionBridge for Discourse is the Discourse plugin and receiver. Focused
platform components connect Astro, Ghost, Hugo, Statamic, and WordPress through
the DiscussionBridge Adapter Protocol. **The Bridge** is only the name of the
dedicated public demonstration at `bridge.demo.discussionbridge.dev`.

Recommended short public attribution:

```text
DiscussionBridge is made by CodeWorksLabs, a WebSynergetics property.
```

## Ownership

WebSynergetics is the current owner and operating umbrella unless a later
controlling agreement or repository record says otherwise. CodeWorksLabs is the
maker/studio; that role does not replace the owner or the distinct
DiscussionBridge product identity.

Phil Henry is the current human maintainer/operator. AI tools, including Codex,
may assist with development and documentation, but they are not listed as
copyright owners, legal authors, maintainers, or inventors.

The human operator and organization remain responsible for review, testing,
security, licensing, publication, and maintenance.

## Component Licenses

DiscussionBridge components use the MIT License except where a component
explicitly states otherwise. DiscussionBridge for Discourse is the
GPL-2.0-or-later exception.

| Component | License | Authoritative record |
| --- | --- | --- |
| DiscussionBridge Adapter Protocol | MIT | The Alpha.21 working candidate contains the license; the public repository `LICENSE` becomes authoritative when that candidate is published |
| DiscussionBridge for Discourse | GPL-2.0-or-later | [Repository license](https://github.com/DiscussionBridge/discourse-discussion-bridge/blob/main/LICENSE) |
| DiscussionBridge for Astro | MIT | [Package license](https://github.com/DiscussionBridge/astro-discussion-bridge/blob/main/packages/astro-discussion-bridge/LICENSE) |
| DiscussionBridge for Ghost | MIT | [Repository license](https://github.com/DiscussionBridge/ghost-discussion-bridge/blob/main/LICENSE) |
| DiscussionBridge for Hugo | MIT | [Repository license](https://github.com/DiscussionBridge/hugo-discussion-bridge/blob/main/LICENSE) |
| DiscussionBridge for Statamic | MIT | [Repository license](https://github.com/DiscussionBridge/statamic-discussion-bridge/blob/main/LICENSE) |
| DiscussionBridge for WordPress | MIT | [Repository license](https://github.com/DiscussionBridge/wordpress-discussion-bridge/blob/main/LICENSE) |
| DiscussionBridge documentation | MIT | [Documentation repository license](../LICENSE) |

The Adapter Protocol must not be described as a downloadable MIT-licensed
Alpha.21 release until its coherent tag, artifact, and authoritative public
`LICENSE` are published.

See also the public [third-party provenance inventory](./THIRD_PARTY_PROVENANCE.json).

## Copyable Attribution Templates

Use the exact component license in repository and package metadata. Do not copy
a family-wide “MIT except...” statement into a component that should name one
license precisely.

### MIT Components

```text
Copyright (c) 2026 WebSynergetics
License: MIT
SPDX-License-Identifier: MIT
Maintainer: Phil Henry
Development: Human-directed, AI-assisted development using Codex and related tools.
```

### DiscussionBridge For Discourse

```text
Copyright (c) 2026 WebSynergetics
License: GPL-2.0-or-later
SPDX-License-Identifier: GPL-2.0-or-later
Maintainer: Phil Henry
Development: Human-directed, AI-assisted development using Codex and related tools.
```

These templates supplement rather than replace the complete license text that
must ship with the component.

## Why MIT Is The Default

MIT is a practical fit for integration components intended to be installed,
audited, modified, and combined with independently licensed publishing
platforms. Its enduring conditions are deliberately small: copies or substantial
portions must retain the copyright notice and permission text, and the software
is supplied without warranty.

MIT does not transfer ownership of DiscussionBridge, grant rights to its name or
branding, require publication of modifications, or promise support, fitness,
security, or compatibility.

## Why DiscussionBridge For Discourse Is GPL

DiscussionBridge for Discourse is distributed under GPL-2.0-or-later, so its
source and redistribution obligations follow that repository's license. That
component license does not silently relicense separately distributed adapters or
the public Adapter Protocol merely because they communicate through the shared
contract.

DiscussionBridge for WordPress remains MIT. The official
[WordPress.org Detailed Plugin Guidelines](https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/#1-plugins-must-be-compatible-with-the-gnu-general-public-license)
require directory-hosted plugins and included material to use a GPL-compatible
license and strongly recommend GPLv2-or-later. MIT is GPL-compatible. Changing
the WordPress component to GPL would therefore be a deliberate licensing
decision, not a correction required for compatibility with that policy. Policy
wording was checked September 24, 2026; recheck it before a future
WordPress.org submission.

## Copyright Notice

The current ownership record supports:

```text
Copyright (c) 2026 WebSynergetics
```

The name does not by itself assert a particular corporate form. If the legal
owner name, trade-name form, or ownership agreement changes, update the
controlling governance record, repository licenses, package metadata, and
public attribution together.

## AI-Assisted Development

DiscussionBridge uses human-directed, AI-assisted development. The public
transparency convention does not change copyright ownership or license terms.
Code, documentation, dependencies, generated material, and release artifacts
still require ordinary human review and verification.

Never place secrets, credentials, private account values, personal data, or
protected operational details in public attribution or provenance records.

## Third-Party Names And Non-Affiliation

Astro, Starlight, Discourse, Ghost, Hugo, Statamic, and WordPress belong to their
respective owners. DiscussionBridge is not affiliated with, sponsored by,
endorsed by, or officially connected to those projects unless a future written
agreement says otherwise.

When referencing a third-party project or example:

- link to the source;
- describe it as a reference rather than an endorsement;
- avoid copying substantial text, imagery, branding, or proprietary material;
  and
- prefer original DiscussionBridge examples.

## Demo And Media Provenance

Demo content is original project material unless its source says otherwise.
For new examples and media:

- do not use customer, private, or personal content;
- cite specifically adapted public sources;
- confirm rights before distributing logos, screenshots, fonts, images, data,
  or other non-code assets;
- record public, non-sensitive provenance in
  `docs/THIRD_PARTY_PROVENANCE.json`; and
- retain any confidential purchase receipt, permission, or legal evidence in
  the protected governance record referenced by the public inventory.

The public inventory should identify what ships and its usable provenance
without exposing private agreements, credentials, or personal data.
