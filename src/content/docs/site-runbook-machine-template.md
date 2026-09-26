---
title: "DiscussionBridge Site Machine Runbook: {Site Name}"
lastUpdated: 2026-09-25
status: "Current Alpha guidance"
audience: "Operators and evaluators"
appliesTo: "DiscussionBridge Alpha"
editUrl: "https://github.com/DiscussionBridge/docs/edit/main/docs/SITE_RUNBOOK_MACHINE_TEMPLATE.md"
---

Status: `{draft | review | approved | current}`

Environment: `{development | sandbox | preproduction | production}`

Last verified: `{YYYY-MM-DD}`

Companion: [Human Runbook](/site-runbook-human-template/)

Replace every placeholder. Resolve commands from the exact installed release.
Never store a credential value in this file.

## 1. Installation

```yaml
installation:
  name: "{stable name}"
  environment: "{environment}"
  owner: "{operator or team}"
  recovery_owner: "{operator or team}"
  receiver_origin: "{https://forum.example.com}"
  publishing_origin: "{https://site.example.com}"
  platform: "{astro | ghost | hugo | statamic-flat | statamic-db | statamic-ssg | wordpress}"
  directions: ["{to-discourse | from-discourse}"]
```

## 2. Exact Components

```yaml
receiver:
  package: "discussionbridge-for-discourse"
  tag: "{exact tag}"
  commit: "{full commit}"
  artifact: "{name}"
  sha256: "{sha256}"
  topology: "{app | split-data-web | documented custom}"
  application_container: "{name}"
  installed_path: "{path}"

adapter:
  package: "{exact component}"
  tag: "{exact tag}"
  commit: "{full commit}"
  artifact: "{name}"
  sha256: "{sha256}"
  installed_path: "{path}"
  dependency_binding: "{lock or package-manager evidence}"
  runtime: "{runtime and version}"
  native_object: "{exact type}"
```

## 3. Connection And Policy

```yaml
connection:
  id: "{dbc_... nonsecret ID}"
  secret_reference: "{protected reference; never value}"
  allowed_origin: "{publishing origin}"
  enabled: false
  lanes: ["{lane}"]
  source_categories: ["{identifier}"]
  source_tags: ["{tag}"]
  mappings:
    - source: "{source policy}"
      destination: "{native destination}"
  visible_author_policy: "{fixed | mapped}"
  materialization: "{presentation-only | native}"

presentation:
  mode: "{simple | full | interactive}"
  embed_host: "{exact hostname or not-applicable}"
  index_back_route: "{URL}"
```

The historical `fullInteractive` value is compatibility input only. New
runbooks use `interactive`.

## 4. Worker Contract

```yaml
worker:
  kind: "{dynamic | static}"
  initial_command: "{exact command from installed release}"
  steady_state_command: "{exact command from installed release}"
  status_command: "{exact command or UI path}"
  service: "{identity or not-applicable}"
  timer: "{identity or not-applicable}"
  cadence: "{exact schedule}"
  claim_limit: {integer}
  lease_duration: "{duration}"
  state_path: "{protected nonsecret path}"
  journal_path: "{protected path or not-applicable}"
  concurrency_control: "{lock/exclusion mechanism}"
  normal_empty_result: "{expected output}"
```

Reject generation if the command was copied from another adapter or release.
The legacy Astro `publish-new`, `sync-existing`, `publish-and-sync`,
`import-existing`, and `check-discourse` commands are prohibited here.

## 5. Deployment And Public Verification

```yaml
deployment:
  kind: "{dynamic | static}"
  provider: "{provider or self-hosted}"
  project: "{safe identity}"
  build_command: "{command or not-applicable}"
  output_path: "{path or not-applicable}"
  current_deployment: "{exact identity or not-applicable}"
  public_resource_marker: "{marker and procedure}"
  public_revision_marker: "{marker and procedure}"
  analytics_binding: "{governed nonsecret reference or disabled}"
  crawler_policy: "{public-demo | sandbox-noindex | explicit custom}"
```

## 6. Backup And Recovery

```yaml
recovery:
  backup_reference: "{protected location}"
  checksum_ledger_sha256: "{sha256 or not-applicable}"
  prior_receiver: "{exact identity}"
  prior_adapter: "{exact identity}"
  prior_native_state: "{reference}"
  prior_deployment: "{exact identity or not-applicable}"
  restore_procedure: "{exact runbook section}"
  credential_recovery_owner: "{owner}"
```

For static profiles, prior native state and prior public deployment are both
required.

## 7. Preflight

```yaml
preflight:
  exact_components: "{pass | fail}"
  backups_verified: "{pass | fail}"
  ordinary_forum_health: "{pass | fail}"
  ordinary_platform_health: "{pass | fail}"
  connection_disabled_during_setup: "{pass | fail}"
  origin_direction_policy: "{pass | fail}"
  catalog_and_mappings: "{pass | fail}"
  protected_secret_read: "{pass | fail}"
  credential_output_scan: "{pass | fail}"
  unresolved_lease_or_journal: "{none | exact state}"
```

## 8. Canary

```yaml
canary:
  source_identity: "{exact ID}"
  bridge_resource: "{exact ID}"
  destination_identity: "{exact ID and URL}"
  create: "{pass | fail}"
  unchanged_retry: "{pass | fail}"
  update: "{pass | fail}"
  withdrawal: "{pass | fail}"
  interrupted_recovery: "{pass | fail}"
  receiver_native_agreement: "{pass | fail}"
```

Reject an applicable initial population when any canary result fails. When no
initial population applies, use the canary to gate steady-state operation.

## 9. Initial Population And Steady State

```yaml
initial_population:
  applicability: "{required | optional | not-applicable}"
  direction: "{from-discourse | to-discourse | not-applicable}"
  proof_status: "{qualified-for-this-adapter-and-scale | unqualified | not-applicable}"
  decision_reason: "{exact reason}"
  preview_population: {integer}
  start_identity: "{high-water or equivalent}"
  started_at: "{ISO-8601}"
  completed_at: "{ISO-8601 or null}"

census:
  measured_at: "{ISO-8601}"
  queued: {integer}
  active: {integer}
  current: {integer}
  retrying: {integer}
  held_or_unpublished: {integer}
  needs_attention: {integer}
  error_groups: ["{bounded sanitized group}"]
```

Dynamic success requires a verified native write and exact lease
acknowledgement. Static success additionally requires build, deployment, and
public revision verification.

## 10. Static Transaction Record

Complete only for Astro, Hugo, or Statamic SSG.

```yaml
static_transaction:
  transaction_id: "{ID or none}"
  phase: "{none | prepared | building | deployed | finalizing | aborting}"
  claimed_items: {integer}
  lease_expires_at: "{ISO-8601 or null}"
  prior_state_reference: "{path or null}"
  candidate_deployment: "{identity or null}"
  public_markers_verified: "{true | false | not-attempted}"
  recovery_decision: "{finalize-existing | abort-undeployed | none}"
```

Never delete or hand-edit a transaction journal. Never claim another batch over
an unresolved transaction.

## 11. Attention Decision

```yaml
attention:
  item: "{source/resource/destination IDs}"
  error: "{sanitized bounded reason}"
  evidence_preserved: "{reference}"
  retryable: "{yes | no | unknown}"
  diagnosis: "{cause}"
  authorized_action: "{retry-same-identity | finalize | abort | correct-policy | escalate}"
  owner: "{owner}"
```

`unknown` is a stop condition. Do not use Retry for identity drift, ownership
conflict, collision, over-limit content, authentication uncertainty, or an
unresolved static transaction.

## 12. Acceptance

```yaml
acceptance:
  exact_components: "{pass | fail}"
  canary: "{pass | fail}"
  backfill_or_steady_state: "{pass | fail | not-applicable}"
  public_revision: "{pass | fail | not-applicable}"
  presentation: "{pass | fail}"
  analytics_and_crawler_policy: "{pass | fail | disabled}"
  secret_review: "{pass | fail}"
  disable_reenable: "{pass | fail}"
  rollback: "{pass | fail}"
  unresolved_items: []
  accepted_by: "{authority}"
  accepted_at: "{ISO-8601}"
```

## Template Completion Check

- [ ] No placeholder remains unintentionally.
- [ ] No secret value is present.
- [ ] Exact commands come from the installed release.
- [ ] Human and Machine Runbooks agree.
- [ ] Claim, lease, state, journal, backup, and recovery are explicit.
- [ ] Every manual Retry has a diagnosis and owner.
