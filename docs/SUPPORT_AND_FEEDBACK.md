# Support And Feedback

DiscussionBridge Alpha needs one understandable path from a question to a
useful answer and, when necessary, to tracked product work. This guidance
applies to DiscussionBridge for Discourse and every current publishing profile—not only Astro.

## Alpha Support Model

For Alpha help, start in the
[Alpha Support category](https://forum.discussionbridge.dev/c/alpha-support/7).
It covers DiscussionBridge for Discourse, Astro, Ghost, Hugo, WordPress, Statamic Flat, Statamic
DB, Statamic SSG, and Discourse as Publisher.

Channel roles:

- [Discourse Alpha Support](https://forum.discussionbridge.dev/c/alpha-support/7): installation, configuration, Content Connections, adapters and addons, presentation modes, demos, field reports, screenshots, recovery questions, and community help.
- [DiscussionBridge on GitHub](https://github.com/DiscussionBridge): formal product work in the repository that owns the affected plugin, adapter, addon, site, documentation, or shared asset.
- Repository GitHub Discussions: design or implementation conversation when repository context matters and that repository has Discussions enabled.
- **Request Operator service:** where the forum administrator has enabled the
  optional service capability, the separate request action submits the bounded
  service request. Enabling the capability alone neither sends a request nor
  activates paid service.

`alphasupport@discussionbridge.dev` is **not an active intake channel** until an
end-to-end test proves that it creates the intended support topic. Do not send
support requests or sensitive material to that address based on this roadmap
note.

There is not yet a published private security-intake address. Do not post
credentials, private data, or exploit details in the public forum or a public
GitHub issue. Post only a non-sensitive request for private follow-up and wait
for a verified private channel before sharing details. Establishing a formal
private vulnerability-reporting route remains a release-readiness gap.

Handoff rule:

- Discourse preserves the support question, discovery, and community answer.
- GitHub Issues are the formal product-work ledger.
- When a support topic becomes confirmed product work, create or link the issue in the repository that owns the affected component.
- Cross-link the support topic and GitHub Issue so the original context and engineering record remain connected.
- Release notes should reference the owning GitHub Issue or pull request when applicable.

The public canonical support page is
[discussionbridge.dev/support](https://discussionbridge.dev/support/).
It shows the current availability of each intake path.

## What Users Should Include

Include only what applies. A short reproducible report is more useful than a
large unsorted log.

- DiscussionBridge product and version: receiving plugin, platform adapter or addon, demo/site package, or documentation.
- Publishing profile: DiscussionBridge for Discourse, Astro, Ghost, Hugo, WordPress, Statamic Flat, Statamic DB, Statamic SSG, or Discourse as Publisher.
- Publishing-platform, framework, runtime, and Discourse versions when known.
- Direction and presentation involved: To Discourse, From Discourse, Simple, Full, or Interactive.
- The affected connection, lane, page, canonical URL, topic, or Bridge Record using only non-secret identifiers and public URLs.
- The exact action or command that produced the result.
- What was expected and what happened instead.
- Whether the problem occurs during install, configuration, first publish, retry, reconciliation, retrieval, rendering, upgrade, disable, or rollback.
- Sanitized error text, relevant log excerpts, screenshots, and a minimal reproduction when available.
- Whether the behavior is consistent or intermittent and whether an exact retry changes it.

Never include API keys, connection secrets, passwords, tokens, cookies,
private server addresses, private content, database exports, personal data,
unredacted configuration files, or raw logs that may contain credentials.

The Alpha Support category is public. If email-to-forum intake opens later,
messages sent through it will also be intended to become public support topics.
Assume the subject, body, links, and attachments may become publicly visible.

## Triage

Users do not need to choose the project's complete maintainer taxonomy. Name
the affected component, direction, presentation mode, and whether the request
is a bug, documentation problem, setup question, recovery problem, or
enhancement. Maintainers apply the repository's detailed labels after triage.

## Alpha Response Policy

During Alpha:

- documentation defects are product defects;
- reproducible publishing, retrieval, identity, retry, or presentation failures should become tests when practical;
- platform and Discourse configuration discoveries should become field notes or operator documentation;
- repeated support questions should become documentation, examples, diagnostics, or safer defaults;
- public support must never request protected credentials as evidence; and
- private implementation help must not replace public documentation for common setup paths.

Alpha support is best effort. No response-time or resolution-time service level
is promised unless a separate written agreement says otherwise.

## Keep The Support Boundary Current

Before a release is accepted, keep support-channel facts synchronized across:

- the public Support page;
- product and adapter READMEs;
- operator documentation;
- package metadata;
- demo pages;
- release notes; and
- the Discourse Alpha Support category.

Every maintained release should answer four questions clearly: where does a
user ask for help, report a problem, request a capability, and obtain private
implementation assistance?
