---
title: "Preparing Astro Content For Discussion"
lastUpdated: 2026-09-25
status: "Astro-specific Alpha reference"
audience: "Astro and Starlight operators"
appliesTo: "DiscussionBridge for Astro Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/DISCUSSION_SAFE_MARKDOWN.md"
---

DiscussionBridge for Astro publishes the rendered article body, not a second hand-written summary. Astro remains authoritative for the article. The adapter sanitizes and bounds the rendered HTML; the Discourse plugin validates and translates it, creates or updates the managed first post, and relies on Discourse's normal cooking and sanitization before appending the source attribution.

The current adapter does not support a `discussionSummary` frontmatter field. It also does not provide the retired `publish-new` or preflight commands described by older prototypes.

## Content That Travels Well

These Markdown features are good defaults for an article that will also be discussed in Discourse:

- headings and paragraphs
- emphasis and links
- blockquotes
- ordered and unordered lists
- inline code and fenced code blocks
- small tables
- public images with absolute HTTPS URLs

For example:

```md
## Release Notes

This release improves publication diagnostics and discussion behavior.

- Adds an explicit publication lifecycle.
- Keeps Astro authoritative for article content.
- Preserves the source-to-topic identity after publication.

See the [setup guide](https://docs.example.com/setup/) for details.
```

## Content That Needs Deliberate Treatment

Astro components, MDX JSX, imported assets, interactive widgets, client-side charts, iframes, and page-local scripts are application features rather than portable discussion content. They may build and render on the source site without producing useful standalone HTML for a forum post.

Do not assume the adapter will invent a summary when an MDX component cannot render. Unsupported MDX or missing component inputs should fail the Astro build and be repaired at the source.

For a rich page:

1. Put the essential argument and conclusions in ordinary Markdown.
2. Add concise text around diagrams, equations, tables, or widgets.
3. Link to the authoritative source page when interaction or source-site styling matters.
4. Verify the cooked Discourse post as well as the source-site page.

## Images And Media

Prefer public, absolute HTTPS URLs:

```md
![Architecture diagram](https://docs.example.com/images/bridge-flow.png)
```

Relative paths, local Astro image imports, and image components are not automatically uploaded to Discourse. A plain video URL may be expanded by Discourse Onebox when that host is supported; arbitrary iframe markup is not portable.

## Mermaid And Math

A fenced Mermaid block can be transported as content, but destination rendering depends on the deployed platform and forum configuration. Always include enough prose to understand the point without the rendered diagram.

Treat math support the same way: qualify it with a real source fixture and the cooked destination result. The current OBBBA evidence does not yet prove math parity across the platform estate.

## Tables

Small tables can work well in both the article and discussion:

```md
| Setting | Recommended |
|---|---|
| Interactive discussion | when the forum is intended to be used in-page |
| Arbitrary embed origins | no |
```

For wide or complex tables, precede the table with the conclusion in prose and verify the mobile and email-digest result.

## Current Limits

The current To Discourse contract accepts:

- a UTF-8 title of at most 1,024 bytes
- sanitized article HTML of at most 49,152 bytes

The adapter and plugin fail closed when those bounds are exceeded. Test the production build with `publishOnBuild` set explicitly, then inspect the publication result and the cooked first post. Do not use removed command names or prototype environment variables as a substitute for current validation.

## Frontmatter Example

```yaml
title: Understanding the Impact Model
description: A plain-language guide to the model and its assumptions.
authors:
  - name: Jane Example
discussionCommentsDisplay: interactive
discussionSync: true
```

Use `discussionCommentsDisplay: interactive` for the public mode name. The legacy `fullInteractive` value is accepted only as an input compatibility alias and should not appear in new content.

DiscussionBridge appends the source article attribution to the managed first post, so do not repeat a generic source-link boilerplate at the top of every article. Add links in the body only when they help the reader.

## Publication Check

Before releasing a page, verify all of the following:

- the Astro production build succeeds
- the source URL is final and public
- images and linked assets resolve without local build context
- title and sanitized HTML are within the contract limits
- the forum post preserves the essential meaning
- diagrams, math, tables, and media have useful text fallbacks
- the managed topic points back to the correct source URL

That keeps the source page rich without making the companion discussion depend on source-only behavior.
