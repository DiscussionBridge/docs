# DiscussionBridge Machine Operator Manual

This page defines the current 0.2 machine-readable contract for generating and
checking one installation runbook. It is platform-neutral. Resolve executable
commands from the exact installed component release and selected
[Adapter Operating Model](./ADAPTER_OPERATING_MODELS.md); never synthesize a
command from an older Astro API-only manual.

No generated runbook may contain a secret value.

## 1. Required Installation Record

```yaml
installation:
  name: "required stable name"
  environment: "development | sandbox | preproduction | production"
  receiver_origin: "https://forum.example.com"
  publishing_origin: "https://site.example.com"
  platform: "astro | ghost | hugo | statamic-flat | statamic-db | statamic-ssg | wordpress"
  direction: ["to-discourse | from-discourse"]
  owner: "operator or team"
  recovery_owner: "operator or team"

receiver:
  component: "discussionbridge-for-discourse"
  release_tag: "exact immutable tag"
  source_commit: "full commit"
  artifact: "artifact name or source archive"
  artifact_sha256: "sha256"
  discourse_topology: "app | split-data-web | documented custom topology"
  application_container: "exact container name"
  installed_path: "exact protected or application path"

adapter:
  component: "exact adapter package"
  release_tag: "exact immutable tag"
  source_commit: "full commit"
  artifact: "artifact name"
  artifact_sha256: "sha256"
  installed_path: "exact path"
  dependency_binding: "lockfile or package-manager evidence"
  runtime_identity: "runtime and version"
  native_object: "post | page | entry | markdown | mdx | other exact type"

connection:
  id: "dbc_... nonsecret identifier"
  secret_reference: "protected store reference; never the value"
  allowed_origin: "https://site.example.com"
  lanes: ["exact lane"]
  source_categories: ["ID or stable identifier"]
  source_tags: ["tag"]
  destination_mappings:
    - source: "exact category/tag/policy"
      destination: "exact native destination"
  visible_author_policy: "fixed | mapped"
  materialization: "presentation-only | native"
  enabled: false

worker:
  kind: "dynamic | static"
  command: "exact command from installed release"
  service: "service/unit/job name or not-applicable"
  timer: "timer/scheduler identity or not-applicable"
  cadence: "exact schedule"
  claim_limit: 0
  lease_duration: "exact duration"
  state_path: "protected nonsecret state path"
  journal_path: "protected journal path or not-applicable"
  concurrency: "exact exclusion mechanism"

deployment:
  provider: "provider or self-hosted"
  project: "safe project identity"
  build_command: "exact command or not-applicable"
  output_path: "exact path or not-applicable"
  public_verification: "resource and revision marker procedure"
  analytics_binding: "governed nonsecret identity reference or disabled"
  crawler_policy: "public-demo | sandbox-noindex | explicit custom policy"

recovery:
  backup_reference: "protected backup location"
  backup_sha256_ledger: "hash or not-applicable"
  prior_component_identity: "exact rollback version"
  prior_deployment_identity: "exact static deployment or not-applicable"
  restore_procedure: "site-specific runbook section"
```

Reject the runbook when a required value is unknown, inferred, or copied from a
different installation.

## 2. Credential Contract

Current adapters authenticate to DiscussionBridge for Discourse with:

```text
X-DiscussionBridge-Connection: dbc_...
X-DiscussionBridge-Secret: value supplied only from protected runtime storage
```

Record only the connection ID and secret-store reference. Keep provider tokens,
database credentials, signing keys, API keys, and service environment files as
separate credential records with their own owner, scope, rotation, and
revocation procedure.

The legacy `DISCOURSE_API_KEY`, `publish-new`, `sync-existing`,
`publish-and-sync`, `import-existing`, and `check-discourse` contract belongs to
the old Astro 0.1 API-only line. It must not appear in a generated current 0.2
runbook.

## 3. Presentation Contract

```yaml
presentation:
  mode: "simple | full | interactive"
  source_attribution: true
  open_discussion_route: true
  index_or_section_back_route: true
  desktop_verified: false
  mobile_verified: false
  signed_out_verified: false
  signed_in_verified: false
  keyboard_verified: false
```

`interactive` is canonical. The historical `fullInteractive` input may be
accepted and normalized by compatible releases, but generated configuration and
documentation must use `interactive`.

## 4. Shared Publication State

```yaml
queue_states:
  queued: "eligible and waiting for a lease"
  claimed_or_delivering: "bounded lease active; not success"
  current: "exact source, mapping, and publication revisions acknowledged"
  retrying: "bounded automatic attempt remains"
  held_or_unpublished: "successful eligibility outcome with identity retained"
  needs_attention_or_failed: "automatic recovery exhausted or unsafe"
```

The receiver Publishing view is the cross-platform census. Native adapter state
explains the local action. A public HTTP 200 does not prove the expected
publication revision.

## 5. Dynamic Adapter Procedure

Applies to Ghost, Statamic Flat, Statamic DB, and WordPress.

```yaml
dynamic_cycle:
  - verify connection, catalog, mapping, and worker identity
  - claim no more than the configured bound
  - materialize or withdraw the exact native identity
  - verify the native write
  - acknowledge the exact lease
  - persist a secret-free summary
```

The current OBBBA profile uses eight-item claims under five-minute leases for
the dynamic non-Astro lanes. That is a demonstrated profile, not a universal
maximum. The site runbook must record the installed release's actual values.

WordPress requires a real scheduler for durable WP-Cron execution. Reader
traffic is not an acceptable production queue runner. Queued and Delivering are
active states; do not issue Retry while either is present.

## 6. Static Adapter Procedure

Applies to Astro, Hugo, and Statamic SSG.

```yaml
static_cycle:
  - verify no unresolved prior transaction
  - claim a bounded set under the configured deployment lease
  - persist exact prior state and the candidate identity
  - write native source atomically
  - build the complete site
  - deploy one exact candidate
  - verify public resource and publication revision markers
  - acknowledge only verified leases
  - clear state or journal only after completion
```

Hugo's demonstrated OBBBA profile claims at most eight items under a one-hour
deployment lease. Statamic SSG's current Alpha profile claims at most eight
topics in one protected transaction and may regenerate the complete site.

For Statamic SSG, record the journal phase and transaction ID. Finalize only a
publicly verified candidate. Abort only after preserving evidence and proving
the candidate was not deployed. Never delete or hand-edit a journal, acknowledge
local output alone, schedule the Flat/DB worker on SSG, or claim over an
unresolved transaction.

## 7. Canary And Initial-Population Record

```yaml
canary:
  source_identity: "exact topic or native item"
  destination_identity: "exact native ID and URL"
  bridge_resource: "exact resource ID"
  create: "pass | fail"
  unchanged_retry: "pass | fail"
  update: "pass | fail"
  withdrawal: "pass | fail"
  recovery: "pass | fail"

initial_population:
  applicability: "required | optional | not-applicable"
  direction: "from-discourse | to-discourse | not-applicable"
  proof_status: "qualified-for-this-adapter-and-scale | unqualified | not-applicable"
  decision_reason: "exact reason"
  previewed_population: 0
  high_water_or_start_identity: "exact value"
  started_at: "ISO-8601"
  completed_at: "ISO-8601 or null"
  queued: 0
  active: 0
  current: 0
  held_or_unpublished: 0
  needs_attention: 0
```

If initial population applies, reject it until the canary passes, rollback is
available, and the exact adapter path is qualified for the intended direction
and scale. `not-applicable` is a valid result for Astro's plugin-free
presentation and for new-item steady-state delivery. Do not infer a large To
Discourse import from a one-item publication canary.

## 8. Retry And Recovery Rules

Automatic retry must be bounded and idempotent. Manual Retry is permitted only
after the error is diagnosed as recoverable.

Do not blindly retry:

- destination identity drift or ownership conflict;
- native path or slug collision;
- content above the supported 256 KiB source-publication boundary;
- a static lease whose deployment state is unknown;
- a persistent Statamic SSG journal;
- authentication failure before credential state is verified; or
- a withdrawal whose destination is already absent but whose retained identity
  disagrees.

Never replace a stable identity merely because a response, local completion
record, or acknowledgement is missing.

## 9. Verification Record

```yaml
verification:
  exact_components: "pass | fail"
  ordinary_forum_health: "pass | fail"
  ordinary_platform_health: "pass | fail"
  connection_fail_closed: "pass | fail"
  canary: "pass | fail"
  queue_and_native_state_agree: "pass | fail"
  public_revision: "pass | fail | not-applicable"
  presentation: "pass | fail"
  analytics_and_crawler_policy: "pass | fail | disabled"
  credential_exposure_review: "pass | fail"
  disable_reenable: "pass | fail"
  rollback: "pass | fail"
  unresolved_items: []
```

No `pass` may be inferred from a successful process exit, build, deployment, or
HTTP response alone. Preserve exact evidence and unresolved uncertainty.

## 10. Durable Update Rule

When the installed component changes, refresh every affected package, command,
state, lease, service, deployment, recovery, and presentation field. A prior
successful run is historical evidence, not acceptance of changed bytes.
