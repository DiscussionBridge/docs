---
title: "Presentation Modes"
lastUpdated: 2026-09-03
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/PRESENTATION_MODES.md"
---

DiscussionBridge separates content direction from comments presentation. A
page may originate on a platform or on The Bridge, while its discussion can be
shown in any mode supported by that adapter.

## Simple

Simple renders comments as native host-platform markup. It is lightweight,
accessible, and contains no Discourse application shell or receiver secret.

The first bounded batch is shown immediately. **Show more comments** reveals
additional bounded batches up to the adapter's hard ceiling, then the reader
continues on The Bridge. Static profiles may ship a sanitized build-time
fallback, but the current browser enhancement refreshes public comments so a
new reply does not require a new site build.

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
Discourse comments without installing The Bridge.

Full should still present the independent DiscussionBridge credit when the
adapter's credit option is enabled. It may also present the forum's ordinary
Discourse branding according to forum policy.

## fullInteractive

fullInteractive is the Bridge-backed, comments-only Discourse application
surface. The Bridge attests the exact record/topic mapping and omits the
companion first post from the iframe so the host article is not duplicated.
Discourse owns sign-in, session, composer, replies, quotes, likes, editing,
moderation, accessibility, and application behavior.

The default product viewport is bounded and scrolls internally instead of
growing the host page without limit. Exact dimensions are adapter configuration,
not Discourse content policy. Verify desktop and mobile layout, signed-in and
signed-out behavior, cross-origin cookies, focus, and internal scrolling.

If readiness fails, show an honest bounded diagnostic or fallback. Do not
silently load another forum, topic, or presentation mode.

## From Discourse Content Plus Discussion

When The Bridge supplies the article, the adapter renders the sanitized first
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

Platform navigation and forum topic navigation are independent. A platform
adapter may build an **On this page** navigation from rendered `h2`/`h3`
headings. For To Discourse topics, a connection's **Generate topic table of
contents** option adds the DiscoTOC marker only when enough source headings
exist and the official DiscoTOC component is installed. Changing the setting
does not silently rewrite existing topics.

Mermaid and math need presentation support on both sides. The Bridge uses the
appropriate Discourse components/settings; platform adapters bundle or provide
their own safe renderer rather than depending on an arbitrary third-party CDN.

## Branding And Ownership

Comments remain Discourse-owned even when rendered natively. The host platform
owns its article layout. DiscussionBridge owns the declared connection,
identity, transformation, retry, provenance, and presentation boundary.

This is not user synchronization. A transported source author may be credited
or mapped to a selected Discourse user, but that mapping does not create shared
login, permissions, or cross-platform identity.
