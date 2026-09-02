# Support And Feedback

DiscussionBridge Alpha needs one understandable path from a question to a
useful answer and, when necessary, to tracked product work. This guidance
applies to The Bridge and every current publishing profile—not only Astro.

## Alpha Support Model

For Alpha help, start in the
[Alpha Support category](https://forum.discussionbridge.dev/c/alpha-support/7).
It covers The Bridge, Astro, Ghost, Hugo, WordPress, Statamic Flat, Statamic
DB, Statamic SSG, and Discourse as Publisher.

Channel roles:

- [Discourse Alpha Support](https://forum.discussionbridge.dev/c/alpha-support/7): installation, configuration, Content Connections, adapters and addons, presentation modes, demos, field reports, screenshots, recovery questions, and community help.
- [DiscussionBridge on GitHub](https://github.com/DiscussionBridge): formal product work in the repository that owns the affected plugin, adapter, addon, site, documentation, or shared asset.
- Repository GitHub Discussions: design or implementation conversation when repository context matters and that repository has Discussions enabled.
- `alphasupport@discussionbridge.dev`: email intake being connected to the Alpha Support category. It is not active until an end-to-end message is verified to create the intended forum topic.
- Private implementation help: installation, migration, customization, and hands-on work that cannot be handled safely in a public support topic.

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
- Publishing profile: The Bridge, Astro, Ghost, Hugo, WordPress, Statamic Flat, Statamic DB, Statamic SSG, or Discourse as Publisher.
- Publishing-platform, framework, runtime, and Discourse versions when known.
- Direction and presentation involved: publishing through The Bridge, From The Bridge, Simple, Full, or fullInteractive.
- The affected connection, lane, page, canonical URL, topic, or Bridge Record using only non-secret identifiers and public URLs.
- The exact action or command that produced the result.
- What was expected and what happened instead.
- Whether the problem occurs during install, configuration, first publish, retry, reconciliation, retrieval, rendering, upgrade, disable, or rollback.
- Sanitized error text, relevant log excerpts, screenshots, and a minimal reproduction when available.
- Whether the behavior is consistent or intermittent and whether an exact retry changes it.

Never include API keys, connection secrets, passwords, tokens, cookies,
private server addresses, private content, database exports, personal data,
unredacted configuration files, or raw logs that may contain credentials.

The Alpha Support category is public. Once email intake opens, messages sent to
it are intended to become forum support topics. Assume the subject, body,
links, and attachments may be publicly visible.

## Triage Labels

Useful labels include:

- `bug`
- `docs`
- `setup`
- `plugin`
- `adapter`
- `addon`
- `discourse`
- `astro`
- `ghost`
- `hugo`
- `wordpress`
- `statamic`
- `ssg`
- `simple`
- `full`
- `fullinteractive`
- `publishing`
- `retrieval`
- `reconciliation`
- `recovery`
- `enhancement`

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
