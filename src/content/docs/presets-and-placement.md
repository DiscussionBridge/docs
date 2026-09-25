---
title: "Astro And Starlight Placement"
lastUpdated: 2026-09-25
status: "Astro-specific Alpha reference"
audience: "Astro and Starlight operators"
appliesTo: "DiscussionBridge for Astro Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/PRESETS_AND_PLACEMENT.md"
---

DiscussionBridge for Astro is one package for plain Astro and Astro +
Starlight. The current 0.2 integration has no `preset` option. The site chooses
its natural content hook and places the discussion explicitly after the article
body.

## Configure The Integration

```js
import { defineConfig } from "astro/config";
import discussionBridge from "astro-discussion-bridge";

export default defineConfig({
  integrations: [
    discussionBridge({
      discourseUrl: "https://forum.example.com",
      siteUrl: "https://docs.example.com",
      comments: {
        display: "full",
      },
    }),
  ],
});
```

Supported public modes are `simple`, `full`, and `interactive`. The historical
`fullInteractive` value is an input-only compatibility alias; new
configuration uses `interactive`.

## Starlight

Starlight owns its page model, routes, schema, and component slots. For a docs
page, use a `MarkdownContent` override so the discussion follows the page body
but remains above Starlight's real footer:

```astro
---
import DefaultMarkdownContent from "@astrojs/starlight/components/MarkdownContent.astro";
import Discussion from "astro-discussion-bridge/Discussion.astro";

const entry = Astro.locals.starlightRoute.entry;
---

<DefaultMarkdownContent>
  <slot />
</DefaultMarkdownContent>
<Discussion frontmatter={entry.data} />
```

Do not use Starlight's `Footer` override as the primary comments hook. The
discussion belongs to page content; pagination, edit links, and metadata remain
footer responsibilities.

If the site's Starlight version exposes route data differently, adapt only the
frontmatter handoff. Do not invent adapter options to compensate for a
site-template difference.

## Plain Astro

Astro core does not provide Starlight's `MarkdownContent` component. Place the
same component in the layout or route template that renders the content entry:

```astro
---
import Discussion from "astro-discussion-bridge/Discussion.astro";
---

<article>
  <slot />
</article>
<Discussion frontmatter={Astro.props.frontmatter} />
```

The component also accepts the current explicit props `display`, `heading`,
`sourceUrl`, `topicId`, and `topicUrl`. It does not accept the historical
`embedUrl` prop.

## Custom Content Types

Blog, news, release, or other custom routes can use ordinary Astro layouts even
inside a Starlight site. The placement rule stays the same: render the article
once, then render DiscussionBridge, then continue with page navigation and site
chrome.

Publishing configuration and visual placement are separate. `publishOnBuild`
selects the protected content root, route base, lane, and durable state file;
the template decides where readers see the comments surface. See
[Content Lanes](/content-lanes/) and
[Presentation Modes](/presentation-modes/).
