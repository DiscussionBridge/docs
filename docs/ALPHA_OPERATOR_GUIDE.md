# Alpha Installation and Operator Guide

This is the current operator path for the DiscussionBridge Alpha. Start here,
then use the platform-specific notes in [Platform Profiles](./PLATFORM_PROFILES.md)
and the exact deployed identities in
[Versions And Live Status](./VERSIONS_AND_LIVE_STATUS.md).

DiscussionBridge is a family of focused tools. **The Bridge** is the unified
Discourse plugin and flagship. A platform adapter or addon connects one
publishing installation to The Bridge; it does not become a second control
plane.

## 1. Choose The Systems And Job

Record the exact Discourse forum and publishing installation before installing
anything. One Content Connection represents one installation, not an entire
platform brand and not an arbitrary collection of origins.

Choose which jobs the connection may perform:

- **To Discourse** creates or resolves one forum-governed discussion for an
  authoritatively published platform item.
- **From Discourse** exposes a selected forum topic to that platform for safe
  presentation or, only when separately authorized, native materialization.
- A connection may permit either direction or both. Each Bridge Record still
  has one direction and one stable identity.

Also choose the allowed canonical origin, lane, category, tags, visibility,
comments presentation, visible author policy, and whether new To Discourse
topics should receive a DiscoTOC marker.

## 2. Establish Recovery Before Installation

Do not use a successful build or container rebuild as rollback evidence.

- For Discourse, preserve the protected container configuration and a
  database/uploads or whole-server recovery point. A launcher rebuild reuses
  persistent data.
- For WordPress, preserve the database and `wp-content`.
- For Ghost, preserve the database, `content`, protected config, theme,
  integration/webhook records, adapter state, service unit, and proxy config.
- For Statamic Flat, preserve the application, content, users, environment,
  addon database, and web/PHP service configuration.
- For Statamic DB, also preserve an authoritative database dump.
- For Statamic SSG, preserve the protected authoring application and generated
  deployment identity separately.
- For Astro and Hugo, preserve lockfiles, adapter state, generated binding
  data, deployment identity, and the last known-good artifact.

Record paths, byte counts, hashes, ownership/modes, and the restore sequence.
Secrets may be referenced by protected location; never copy their values into
the runbook.

## 3. Install The Bridge

Install The Bridge from its public GitHub repository in the intended Discourse
container. For the standard `app` layout, add the repository to `app.yml` and
rebuild only that container:

```yaml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - git clone https://github.com/DiscussionBridge/discourse-discussion-bridge.git
```

That single ordinary clone is the operator installation entry. The current
family tag and exact commit are recorded on
[Versions And Live Status](./VERSIONS_AND_LIVE_STATUS.md) for evidence and
support; they are not a second command the operator must add to `app.yml`.

```bash
cd /var/discourse
./launcher rebuild app
```

For a two-container installation, change only the container that owns the
Discourse application/plugin build. Follow the installation's own runbook;
do not copy a single-container command blindly.

After the rebuild, verify the installed plugin commit, migration state,
PostgreSQL, Redis, web processes, HTTPS, and ordinary forum behavior while the
DiscussionBridge switches remain disabled.

## 4. Configure Forum Policy

In Discourse admin, open **Plugins → DiscussionBridge** and the native
DiscussionBridge settings.

Configure and verify:

- plugin and endpoint switches;
- a privileged service identity used only to execute authorized operations;
- a non-system default visible author;
- default category, tags, and visibility;
- optional lane policy;
- comments-only fullInteractive support;
- the ordinary Discourse embedding and CORS settings required by the selected
  presentation modes.

The operating identity and visible author are deliberately separate. Choosing
a visible author does not grant that user service authority.

## 5. Create A Content Connection

Under **Connections**, create one connection for the exact platform
installation. Set:

- a clear name and adapter identity;
- exact allowed origin or origins;
- permitted direction or directions;
- allowed lane or lanes;
- fixed-author or mapped-source-author policy;
- optional **Generate topic table of contents** behavior;
- enabled state.

The new secret is shown once. Transfer it directly to the adapter's protected
server-side store. Never put it in page content, browser JavaScript, a public
environment file, a URL, a support bundle, or Git.

Use the selected connection's **Authors** tab after the adapter reports real
source identities. Map a source author to an existing Discourse user only when
that mapping is desired. A connection may instead use one fixed Discourse
author for all platform content. Mapping changes affect future topics and do
not silently rewrite prior ownership.

## 6. Install And Bind The Platform Adapter

Obtain the appropriate adapter or addon from its public repository, follow that
component's installation instructions, and bind it to:

- [DiscussionBridge for Astro](https://github.com/DiscussionBridge/astro-discussion-bridge)
- [DiscussionBridge for Ghost](https://github.com/DiscussionBridge/ghost-discussion-bridge)
- [DiscussionBridge for Hugo](https://github.com/DiscussionBridge/hugo-discussion-bridge)
- [DiscussionBridge for Statamic](https://github.com/DiscussionBridge/statamic-discussion-bridge)
- [DiscussionBridge for WordPress](https://github.com/DiscussionBridge/wordpress-discussion-bridge)

Configure the installed component with:

- The Bridge HTTPS origin;
- the `dbc_…` connection ID;
- the protected connection-secret file;
- the exact publishing-site origin;
- the allowed lane;
- the platform's durable state location;
- the intended content types, collections, tags, or opt-in fields.

See [Platform Profiles](./PLATFORM_PROFILES.md) for each platform's native
installation and execution boundary.

## 7. Test The Workflow

Use newly created demo content so existing content cannot hide an identity or
collision error.

For **To Discourse**:

1. opt in one draft through the platform's native control;
2. publish it through the authoritative platform lifecycle;
3. run the adapter worker/build where the platform requires one;
4. verify one Bridge Record and one topic;
5. verify meaningful content, canonical source attribution, selected author,
   category, tags, visibility, and optional TOC;
6. retry the exact identity and prove no duplicate topic or record is created;
7. verify ordinary edits do not claim synchronization the adapter does not
   implement.

For **From Discourse**:

1. select the source topic in The Bridge;
2. create a From Discourse record for one connection and exact destination;
3. choose presentation-only or explicitly authorize native materialization;
4. run the adapter retrieval/materialization path;
5. verify the source first post appears once, source attribution is clear, and
   replies/comments remain attached to the same topic;
6. retry unchanged, then test one authorized source revision update.

For either direction, verify reconciliation is clean and a credential never
appears in HTML, JSON intended for browsers, logs, URLs, screenshots, or error
messages.

## 8. Verify Presentation

Test every mode the profile claims on desktop and mobile. The current
modes are defined in [Presentation Modes](./PRESENTATION_MODES.md).

Check source content, headings/TOC, tables, code, links, images, Mermaid, math,
author/provenance, the open-discussion route, Discourse branding, the
DiscussionBridge credit, reply visibility, Show more behavior, iframe height
and internal scroll, signed-in and signed-out behavior, and keyboard focus.

Do not infer support from a route returning 200. Confirm the visible product
behavior.

## 9. Disable, Re-enable, Remove, And Roll Back

Before relying on the connection, test these operations against test data:

- disable the connection and verify adapter requests fail closed;
- re-enable it and verify the same identity resolves without duplication;
- disable the forum-wide endpoint and verify no adapter can bypass it;
- stop the adapter worker/build hook and verify platform publishing still
  fails or queues honestly rather than blocking ordinary page rendering;
- remove presentation wiring and verify the host page remains usable;
- restore the pre-install package and verify the documented rollback.

Disabling DiscussionBridge does not delete topics, posts, users, categories,
tags, platform content, or Bridge records. Removal and data retention are
separate operator decisions. Never delete durable data merely to make a test
look clean.

## 10. Record The Acceptance Boundary

Record exact source commits, artifacts and hashes, installed paths, lockfile or
Composer binding, runtime/service identity, public deployment identity,
connection ID, directions, modes, test content and topic/resource IDs, backup,
rollback result, and known exclusions.

Alpha demos prove working implementation profiles. They do not by themselves
prove a managed host will install a companion service, that provider recovery
has been rehearsed, that mail is accepted, or that a production release has
been approved.

For help, use [Support And Feedback](./SUPPORT_AND_FEEDBACK.md). Never include a
connection secret or other credential in a support request.
