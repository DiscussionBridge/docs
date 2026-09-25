# Key And Secret Management Guide

DiscussionBridge installations use several credential classes. Keep each class
separate, least-privileged, attributable to one installation and purpose, and
recoverable without copying its value into documentation.

## Current Adapter Credential

Platform adapters authenticate to DiscussionBridge for Discourse with one
connection-scoped ID and one secret:

```text
X-DiscussionBridge-Connection: dbc_...
X-DiscussionBridge-Secret: value read from protected runtime storage
```

The connection ID is not a secret. The secret is shown once and belongs only to
that publishing installation and environment. Never reuse it for another site,
adapter profile, or environment.

The secret must not enter browser JavaScript, platform content, a public
environment file, a URL, Git, generated output, logs, screenshots, analytics,
or support material.

## Credential Inventory

Maintain a private inventory with one record per credential:

```yaml
credential:
  role: "connection-secret | deployment-token | database | service | discourse-api | signing"
  installation: "stable installation name"
  environment: "environment"
  owner_identity: "service or operator identity"
  scope: "exact permitted resources and actions"
  created_at: "date"
  storage_reference: "protected reference; never value"
  consumers: ["exact services or jobs"]
  rotation_procedure: "private runbook reference"
  revocation_procedure: "private runbook reference"
  last_verified: "date"
```

Do not silently repurpose a credential or change its scope when another worker,
build, deployment, or recovery process may depend on it.

## Credential Classes

### Connection secrets

Use only for one Content Connection. Store them outside the web root and expose
them only to the adapter service, trusted build, or native plugin process that
needs them.

### Deployment tokens

Static adapters may need a provider token. Scope it to the existing deployment
project and ordinary deployment operations. Do not grant DNS, route, account,
KV, R2, billing, or organization administration unless a separately approved
operation requires it.

Keep deployment tokens distinct by installation. A Hugo service and a Statamic
SSG service should not share a broad account token merely because they use the
same provider.

### Database and platform credentials

Ghost, WordPress, Statamic, and Discourse have platform/database credentials
that are not DiscussionBridge connection secrets. Do not copy them into adapter
state, service arguments, or support bundles. Backup and rotation must follow
the platform's recovery procedure.

### Signing and entitlement keys

Verification public keys remain server-side configuration. Private signing keys
must not be installed on a customer forum or publishing adapter. Record key
identity and version, not private material, in acceptance evidence.

### Discourse API keys

The current 0.2 adapter path ordinarily uses the Content Connection credential,
not a broad Discourse API key. API keys may still exist for legacy Astro 0.1
API-only estates or bounded forum administration and recovery.

Keep any legacy key on its exact historical workflow. Prefer a single-user,
granular key for routine writes, a least-privilege read-only key for diagnostics,
and a temporary broader key only when an explicitly bounded task cannot be done
otherwise. Revoke temporary elevation after output and recovery evidence are
verified.

Do not copy the former `DISCOURSE_API_KEY` model into a current adapter runbook.

## Protected Storage

On Linux:

- store secrets outside the web root and repository;
- use a dedicated service identity;
- use mode `0600` for one-owner files or `0640` only when an exact service group
  requires read access;
- make the parent directory inaccessible to unrelated users;
- pass the file or protected environment to the service without placing the
  value in process arguments; and
- exclude it from archives, generated output, and public deployment bundles.

On Windows, use a private credential manager or an encrypted record bound to the
intended operator/service identity. Record the protected location in the
runbook, not an exportable plaintext value.

In CI or a hosting provider, use its encrypted secret store and restrict access
to the exact project/environment. Confirm preview or forked builds cannot read
production credentials.

Adapter operational state, transaction journals, and public source files must
remain secret-free.

## Safe Service Configuration

Prefer a protected environment file or credential mechanism that the service
manager reads directly. Do not place a secret in:

- a unit's public command line;
- shell history;
- a world-readable environment file;
- a process title;
- a generated static asset;
- a package-manager configuration committed to Git; or
- diagnostic output.

After installation, inspect the built/deployed artifact and service definition
for accidental values without printing the values being sought.

## Rotation

Before rotating a connection secret, determine whether the exact installed
receiver release explicitly supports overlapping secrets.

If overlap is not documented and verified, treat rotation as bounded
maintenance:

1. Preserve nonsecret queue, lease, adapter-state, and rollback evidence.
2. Pause new adapter claims or builds.
3. Rotate the secret in DiscussionBridge for Discourse.
4. Transfer the new value directly to the adapter's protected store.
5. Run one authenticated canary using the same stable identity.
6. Resume the worker and confirm queue progress.
7. Verify the old secret is rejected without displaying it.
8. Record the date, actors, and credential identity in private operations notes.

Do not claim zero-downtime rotation unless dual-secret/grace behavior is part of
the exact installed release and has been exercised. Never delete durable
publication state during rotation.

For provider, database, or API credentials, use the platform's exact staged
replacement and rollback process. Verify every known consumer before revoking
the old credential.

## Suspected Exposure

Treat a credential as exposed when it appears in a shared transcript, log,
screenshot, issue, chat, repository, generated asset, process argument, or
untrusted terminal history.

1. Stop further distribution without repeating the value.
2. Identify every credential class present in the exposed material.
3. Preserve a restricted incident record and sanitize any retained copy.
4. Rotate or revoke each exposed credential through its own controlled process.
5. Update every legitimate consumer.
6. Verify old credentials are denied and normal operation is restored.
7. Search public/generated artifacts and logs for related exposure.

Rotating only the DiscussionBridge secret does not close exposure of SMTP,
database, storage, geolocation, provider, or other runtime credentials.

## Discourse Launcher Output

The standard Discourse launcher can print a Docker command containing runtime
environment values. Depending on the installation, those values may include
SMTP, database, object-storage, or other protected credentials unrelated to the
plugin being installed.

- Run launcher operations only in a private administrator terminal.
- Do not stream raw output into chat, CI, issues, or support systems.
- If raw output must be retained, write it only to a root-owned protected file.
- Produce a separate sanitized postflight report for container health, installed
  revision, migrations, and safe settings.
- Treat an unredacted transcript that leaves the trusted terminal as
  credential-bearing and rotate every exposed class.

A successful rebuild does not make its terminal output safe to share.

## Logging And Support

Logs may include connection ID, correlation ID, source/resource identity,
sanitized error code, bounded retry count, and component version. They must not
include secret headers, provider tokens, database URLs, cookies, signed payloads,
or personal data.

Support reports may include public URLs, nonsecret IDs, versions, timestamps,
queue state, and redacted errors. Follow
[Support And Feedback](./SUPPORT_AND_FEEDBACK.md).

## Verification Checklist

- [ ] Each credential has one role, owner, environment, and scope.
- [ ] Secret values are absent from Git, public output, logs, and runbooks.
- [ ] File/service ownership grants only required read access.
- [ ] Static deployment bundles contain no protected configuration.
- [ ] Rotation and revocation procedures name every consumer.
- [ ] Exposure response covers every credential class present.
- [ ] Current adapters use connection secrets rather than inherited broad API
      keys.
