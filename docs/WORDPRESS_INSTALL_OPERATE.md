# Install And Operate DiscussionBridge For WordPress

DiscussionBridge for WordPress is a native plugin installed into one WordPress
site and bound to one independently scoped Content Connection.

## Install And Bind

Preserve the database, `wp-content`, authentication salts, scheduler, plugin
settings, and existing DiscussionBridge metadata. Install the exact
reproducible release ZIP identified by its version and SHA-256; do not build a
production ZIP from uncommitted working files.

Configure **Settings → DiscussionBridge** with the forum origin, connection ID,
allowed post types, lane, author, and presentation. Prefer protected server
configuration:

```php
define('DISCUSSIONBRIDGE_SERVER_URL', 'https://forum.example');
define('DISCUSSIONBRIDGE_CONNECTION_ID', 'dbc_000000000000000000000000');
define('DISCUSSIONBRIDGE_CONNECTION_SECRET_FILE', '/run/secrets/discussionbridge-wordpress');
define('DISCUSSIONBRIDGE_SERVICE_AUTHOR', 'discussionbridge');
```

The service author must exist and be allowed to publish. When server-file
access is unavailable, the settings page may encrypt a one-time pasted secret
with the installation's authentication salts. Rotating those salts invalidates
that stored credential.

Every supported WordPress integration requires DiscussionBridge for Discourse
and an enabled Content Connection. WordPress does not provide Astro's
plugin-free Simple or Full path. Presentation alone does not make an initial
population necessary.

## Choose The Work

- New opted-in WordPress posts going to Discourse use background delivery on
  their authoritative published transition. No initial backfill is required.
- Existing eligible Discourse topics becoming native WordPress posts use the
  optional forum synchronization below.
- A large existing WordPress corpus going into Discourse has not been proven at
  scale. Do not infer that capability from the new-post delivery path.

## Optional Forum-To-WordPress Initial Population

Use **Refresh platform setup and start or restart forum synchronization** only
when an existing forum corpus is meant to become WordPress content. The first
run uploads the bounded platform catalog and pauses at `awaiting_mapping` until
the Discourse operator completes and previews destination mapping.

The source-feed scan is the bounded initial From Discourse population. After it
completes, five-minute polling claims only changed or withdrawn receiver work;
it must not restart the full scan to conceal a failure.

For legacy individually authorized publications, **Synchronize publications**
is a separate compatibility action. Record its bounded failure codes before
refreshing and do not repeatedly synchronize an unexplained failure.

## Routine Operation

Install a real scheduler for `wp-cron.php` or `wp cron event run --due-now`.
Reader traffic is not a durable queue runner. Treat **Queued** and
**Delivering** as active states; do not press Retry. Diagnose **Attention** or
**Failed** first, then retry only a genuinely recoverable item.

WP Discourse is a separate plugin. Disable its competing automatic publication
and comments paths when DiscussionBridge owns those lifecycles.
