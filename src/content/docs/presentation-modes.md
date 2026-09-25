---
title: "Presentation Modes"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/PRESENTATION_MODES.md"
---

DiscussionBridge separates content direction from comments presentation. A
page may originate on a platform or in Discourse, while its discussion can be
shown in any mode supported by that adapter.

## Simple

Simple renders comments as native host-platform markup. It is lightweight,
accessible, and contains no Discourse application shell or receiver secret.

The first bounded batch is shown immediately. **Show more comments** reveals
additional bounded batches up to the adapter's hard ceiling, then the reader
continues in DiscussionBridge for Discourse. Static profiles may ship a sanitized build-time
fallback. Depending on the adapter, current replies are refreshed through a
credential-free browser request or a bounded server-side cache, so the refresh
path must be documented and tested for that platform.

Simple should show:

- a `Comments` heading;
- an `Open discussion` route;
- `No comments yet.` when the topic has no public replies;
- author, date, content, and stable reply link for each displayed comment;
- the official locally bundled Discourse wordmark linked to
  `https://www.discourse.org/powered-by` when forum policy enables it;
- an independent, centered **Connected by DiscussionBridge** credit unless the
  adapter operator disables that credit.

The Discourse and DiscussionBridge credits are independent. Disabling one must
not automatically disable the other.

## Full

Full uses Discourse Core's standard plugin-free comments embed. Discourse owns
the rendered comments, truncation and **Show more…** behavior. The Core setting
`embed_truncate` defaults to enabled; operators should document whether they
retain that default or show all supported embedded comments.

Full does not require a Bridge Record or receiver credential. It resolves from
the exact canonical page URL, so allowed embed hosts and canonical identity
must be correct. It is an important product path for operators who want
Discourse comments without installing DiscussionBridge for Discourse.

Full should still present the independent DiscussionBridge credit when the
adapter's credit option is enabled. It may also present the forum's ordinary
Discourse branding according to forum policy.

## Interactive (`interactive`)

Interactive is the Bridge-backed, comments-only Discourse application
surface. DiscussionBridge for Discourse attests the exact record/topic mapping and omits the
companion first post from the iframe so the host article is not duplicated.
Discourse owns sign-in, session, composer, replies, quotes, likes, editing,
moderation, accessibility, and application behavior.

The default product viewport is bounded and scrolls internally instead of
growing the host page without limit. Exact dimensions are adapter configuration,
not Discourse content policy. Verify desktop and mobile layout, signed-in and
signed-out behavior, cross-origin cookies, focus, and internal scrolling.

If readiness fails, show an honest bounded diagnostic or fallback. Do not
silently load another forum, topic, or presentation mode.

During the compatibility window, adapters also accept the historical
`fullInteractive` input and normalize it to `interactive`. New configuration,
examples, interfaces, and generated output must use `interactive`. The legacy
input will be removed only at a separately announced breaking boundary.

## From Discourse Content Plus Discussion

When Discourse supplies the article, the adapter renders the sanitized first
post once as platform content. The associated discussion then shows replies to
that same topic. A `Continue/Open discussion` link is useful, but it does not
replace the comments surface when the profile claims comments.

Source/provenance belongs after the article content and before the discussion,
not as unexplained machine JSON or a detached footer. Transport fields,
revision markers, adapter versions, and source IDs may be retained in durable
state without being dumped into reader-facing prose.

## Rich Content And Navigation

Every supported profile should verify headings and table of contents, tables,
code blocks, links, images, Mermaid diagrams, inline and block math, and
responsive media in both directions.

Package capability and deployed qualification are separate claims. Do not call
a renderer supported merely because the adapter ships an asset: the asset must
be installed by the consumer and the exact deployed profile must pass a real
fixture. In particular, math support needs an actual mathematical-expression
fixture rather than a source-code or escaped-text match.

Platform navigation and forum topic navigation are independent. A platform
adapter may build an **On this page** navigation from rendered `h2`/`h3`
headings. For To Discourse topics, a connection's **Generate topic table of
contents** option adds the DiscoTOC marker only when enough source headings
exist and the official DiscoTOC component is installed. Changing the setting
does not silently rewrite existing topics.

Mermaid and math need presentation support on both sides. DiscussionBridge for Discourse uses the
appropriate Discourse components/settings; platform adapters bundle or provide
their own safe renderer rather than depending on an arbitrary third-party CDN.

## Branding And Ownership

Comments remain Discourse-owned even when rendered natively. The host platform
owns its article layout. DiscussionBridge owns the declared connection,
identity, transformation, retry, provenance, and presentation boundary.

Site naming, long-page navigation, footer ownership, crawler policy, and
analytics are deployment concerns rather than comments modes. Apply the shared
target in [Adapter Operating Models](/adapter-operating-models/) without
making presentation-mode code responsible for Matomo, Umami, or site chrome.

This is not user synchronization. A transported source author may be credited
or mapped to a selected Discourse user, but that mapping does not create shared
login, permissions, or cross-platform identity.
