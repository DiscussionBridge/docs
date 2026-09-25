# Astro Comments Display

This page is the Astro-specific configuration companion to
[Presentation Modes](./PRESENTATION_MODES.md). Current public mode names are:

- `simple`
- `full`
- `interactive`

The historical `fullInteractive` value remains an input-only compatibility
alias and normalizes to `interactive`. Do not emit it in new configuration,
frontmatter, examples, or generated output.

## Configure A Default

```js
import discussionBridge from "astro-discussion-bridge";

discussionBridge({
  discourseUrl: "https://forum.example.com",
  siteUrl: "https://docs.example.com",
  comments: {
    enabled: true,
    display: "full",
    credit: {
      enabled: true,
    },
  },
});
```

The current integration requires `discourseUrl`. It does not accept the old
`provider` or `replies.refreshEndpoint` options.

One page may override the configured default:

```yaml
discussionCommentsDisplay: interactive
```

## Simple

Simple renders public replies as sanitized native Astro markup. It is not the
Discourse comments embed.

The first five replies are visible immediately. Additional bounded replies are
behind **Show more comments**, with a hard 50-reply ceiling before the reader
continues on the forum. The build-time snapshot remains a no-JavaScript and
failure fallback; a credential-free browser request can refresh the public
replies without a site rebuild.

The forum must allow the exact Astro origin through CORS. The browser sends no
Content Connection secret and no Discourse session cookie. Replying, liking,
editing, and moderation remain on the forum.

Use Simple when native presentation and a lightweight, read-only comments
surface matter more than in-place interaction.

## Full

Full uses Discourse Core's standard plugin-free comments embed. It is not an
Astro-rendered reply-card mode.

With no stored topic identity, Core resolves the discussion from the exact
canonical Astro page URL. Allowed embed hosts and canonical URL handling must
therefore be correct. Full does not require a Bridge Record, Content Connection
credential, or DiscussionBridge for Discourse.

Discourse Core owns the iframe markup, truncation, **Show more…** behavior,
session behavior, and ordinary embed branding. The independent
DiscussionBridge credit remains outside that surface when enabled.

## Interactive

Interactive uses the plugin-attested comments-only full Discourse application.
It requires one completed Bridge topic mapping. Discourse owns authentication,
composer, replies, quotes, likes, editing, moderation, accessibility, and
persistence; the host page does not reimplement those actions.

The current Astro defaults are a bounded `800px` frame, `360` minimum, and
`dynamicHeight: false`, so a long discussion scrolls inside the application
surface rather than growing the host page without limit:

```js
discussionBridge({
  discourseUrl: "https://forum.example.com",
  comments: {
    display: "interactive",
    embedHeight: "800px",
    embedMinHeight: "360",
    dynamicHeight: false,
  },
});
```

`embedMaxHeight` and the deprecated `embedViewportMaxHeight` must be omitted or
set only to `"none"`; numeric ceiling values fail configuration. Test the real
page on desktop and mobile, signed in and signed out, including cross-origin
cookie behavior, keyboard focus, composer placement, and internal scrolling.

If readiness fails, present an honest diagnostic or fallback. Do not silently
load a different topic, forum, or mode.

## Existing Full Embed Upgrade

A Full page with an exact `discourseTopicId` and `discourseTopicUrl` pair may
upgrade to Interactive without replacing its topic. DiscussionBridge for
Discourse accepts the adoption only when Discourse Core already attests that
the same canonical page URL owns the available unlisted embed topic.

A connection credential cannot claim an arbitrary manually selected topic.
Identity disagreement fails closed and requires reconciliation.

## DiscussionBridge Credit

All three modes can render one independent credit after the complete discussion
surface:

> Connected by [DiscussionBridge](https://discussionbridge.dev/)

It is enabled by default and can be disabled without changing comments or
Discourse branding:

```js
discussionBridge({
  discourseUrl: "https://forum.example.com",
  comments: {
    credit: {
      enabled: true,
      prefix: "Connected by",
      label: "DiscussionBridge",
      href: "https://discussionbridge.dev/",
    },
  },
});
```

`prefix` and `label` are escaped text. `href` must be an absolute HTTP(S) URL.
The stable hooks are:

- `.discussion-bridge-credit`
- `.discussion-bridge-credit__prefix`
- `.discussion-bridge-credit__brand`
- `[data-discussion-bridge-credit]`

The DiscussionBridge credit and Discourse's own branding control are
independent. Disabling one must not disable the other.

## Support Evidence

When reporting a comments issue, include the public mode name, Astro page URL,
forum topic URL when one exists, signed-in state, browser/device, relevant
Discourse embed and cookie settings, CORS result for Simple, and whether the
failure affects the build-time fallback, live refresh, Core embed, or
Interactive frame.
