# DiscussionBridge Docs

This repository independently owns the product-family documentation and support
publication at `docs.discussionbridge.dev`. Editable source lives in `docs/`;
generated Starlight content lives in `src/content/docs/` and is verified before
builds.

## Local Commands

```powershell
npm run refresh-metadata
npm run sync-content
npm run build
npm run preview
```

Run `refresh-metadata` after editing any canonical file under `docs/`. It
updates `docs/DOCS_PAGE_METADATA.json`. Normal builds verify each source hash
and fail instead of publishing stale metadata.

## Cloudflare Worker

```text
Worker name: docs-discussionbridge-dev
Repository: DiscussionBridge/docs
Production branch: main
Root directory: repository root
Build command: npm run build
Build output directory: dist
Custom domain: docs.discussionbridge.dev
```

`wrangler.jsonc` is the deployment authority. Cloudflare Pages is retired for
this site and must not be recreated as a parallel deployment lane.

The Astro adapter remains independently owned by
[`DiscussionBridge/astro-discussion-bridge`](https://github.com/DiscussionBridge/astro-discussion-bridge).
This repository may document that package but does not own its implementation
or release lifecycle.
