# DiscussionBridge Site Runbook: {Site Name}

Status: `{draft | review | approved | current}`

Environment: `{development | sandbox | preproduction | production}`

Platform: `{Astro | Ghost | Hugo | Statamic Flat | Statamic DB | Statamic SSG | WordPress}`

Release/version: `{exact receiver and adapter identities}`

Last verified: `{YYYY-MM-DD}`

Companion: [Machine Runbook](./SITE_RUNBOOK_MACHINE_TEMPLATE.md)

This is the human operating and recovery runbook for one publishing
installation. Replace every brace-delimited placeholder. Never place a password,
connection secret, API key, provider token, private account value, or database
credential in this file.

## 1. Purpose And Ownership

`{Explain what this installation publishes, which forum governs it, and what a
successful connection gives readers and operators.}`

| Responsibility | Owner |
| --- | --- |
| Forum administration | `{person or team}` |
| Platform operation | `{person or team}` |
| Editorial policy | `{person or team}` |
| Deployment | `{person or team}` |
| Recovery | `{person or team}` |
| Security/credential response | `{person or team}` |

## 2. Installation Map

| Item | Exact value |
| --- | --- |
| Forum origin | `{https://forum.example.com}` |
| Publishing origin | `{https://site.example.com}` |
| Direction | `{To Discourse | From Discourse | both}` |
| Receiver release | `{tag, commit, artifact/hash}` |
| Adapter release | `{tag, commit, artifact/hash}` |
| Content Connection | `{dbc_… nonsecret ID}` |
| Secret location | `{protected reference, never value}` |
| Native object | `{post, page, entry, Markdown/MDX, other}` |
| Presentation | `{simple | full | interactive}` |
| Deployment | `{dynamic application or static provider/project}` |

Use `interactive` for new configuration. Record a legacy `fullInteractive`
value only when the installed release still supplies that compatibility input.

## 3. Source And Destination Policy

| Source category/tag/opt-in | Destination | Author policy | Materialization |
| --- | --- | --- | --- |
| `{exact policy}` | `{exact native destination}` | `{fixed or mapped}` | `{presentation-only or native}` |

> **Stop if:** source ownership, eligibility, destination identity, public URL,
> or the one authorized writer is unclear.

## 4. Recovery Boundary

Record:

- `{receiver container configuration and database/uploads recovery}`;
- `{platform application, content, database, config, and integration backup}`;
- `{adapter state, service, timer, and dependency binding}`;
- `{last known-good static artifact and deployment identity, if applicable}`;
- `{checksum ledger and protected backup location}`; and
- `{tested restore sequence}`.

For static sites, native source state and deployed public state are separate.

## 5. Worker Or Build Contract

| Property | Exact value |
| --- | --- |
| Runtime type | `{dynamic | static}` |
| Command | `{from exact installed release}` |
| Service/timer/job | `{identity}` |
| Cadence | `{schedule}` |
| Claim limit | `{integer}` |
| Lease duration | `{duration}` |
| State location | `{protected nonsecret path}` |
| Journal location | `{path or not applicable}` |
| Concurrency control | `{lock or exclusion mechanism}` |
| Normal empty cycle | `{expected safe result}` |

Do not infer these values from another platform or demo.

## 6. Preflight

1. Confirm the exact receiver and adapter releases and installed paths.
2. Verify backups, hashes, ownership/modes, and restore authority.
3. Confirm the Content Connection is disabled while configuration is checked.
4. Verify allowed origin, direction, source policy, and destination mappings.
5. Verify the adapter can read its protected secret without printing it.
6. Verify the native destination structure and empty public routes.
7. Verify the worker/build is stopped or isolated for the canary.
8. Confirm no unresolved lease, journal, or prior deployment exists.

> **Stop if:** identity differs, a credential appears in output, a destination
> collision exists, rollback is unavailable, or static transaction state is
> unresolved.

## 7. Canary

Use one deliberately selected item. Record its source topic/native ID, Bridge
resource ID, destination ID, and public URL.

- [ ] Create/materialize once.
- [ ] Repeat unchanged without a duplicate.
- [ ] Update the source and verify the same destination identity.
- [ ] Remove eligibility and verify the documented held/draft/unpublished state.
- [ ] Recover one controlled interruption.
- [ ] Verify receiver queue and native state agree.
- [ ] Verify no credential appears in public or retained output.

Do not start a forum-scale backfill until every applicable check passes.

## 8. Initial Backfill

Preview the complete eligible population and destination mappings. Record the
stable high-water or equivalent start identity. Start only the bounded
adapter-specific backfill.

Expected states are Queued, active Claimed/Synchronizing/Delivering, Current,
bounded Retrying, successful Held/Unpublished, and Needs attention/Failed.

Do not use Retry on active work. Diagnose a terminal item before action. Never
blindly retry identity drift, ownership conflict, collision, over-limit content,
or unresolved static deployment state.

## 9. Dynamic Operation

For Ghost, Statamic Flat/DB, and WordPress, verify each cycle claims no more than
the recorded bound, mutates the same native identity, acknowledges only after
the native write, and leaves a secret-free summary. WordPress must use a real
scheduler rather than reader traffic for durable WP-Cron work.

## 10. Static Operation

For Astro, Hugo, and Statamic SSG, verify one cycle claims a bounded set, records
candidate/prior state, writes native source, builds, deploys, verifies public
revision markers, and only then acknowledges.

For Statamic SSG, preserve any persistent journal before diagnosis. Finalize
only a publicly verified candidate. Abort only after proving the candidate was
not deployed. Never delete or edit the journal manually.

## 11. Presentation And Public Policy

- [ ] Source content and linked attribution are correct.
- [ ] Detail pages link to their section or publication index.
- [ ] Desktop/mobile layout, keyboard focus, and contrast pass.
- [ ] Tables, code, images, Mermaid, and a real math fixture pass if claimed.
- [ ] Signed-in and signed-out discussion behavior passes if claimed.
- [ ] Analytics sends no credentials, personal data, or internal IDs.
- [ ] Crawler policy matches the environment and is independent of analytics.

## 12. Failure And Recovery

| Symptom | Preserved evidence | Diagnosis | Authorized recovery | Owner |
| --- | --- | --- | --- | --- |
| `{symptom}` | `{logs/state/journal/deployment}` | `{cause}` | `{exact action}` | `{owner}` |

Never delete durable state, create a replacement identity, or clear an error
merely to make the dashboard look healthy.

## 13. Disable, Upgrade, Roll Back, And Remove

- [ ] Disable and verify requests fail closed.
- [ ] Re-enable and verify durable identities resume.
- [ ] Upgrade one exact immutable component at a time.
- [ ] Roll back using the recorded component and state.
- [ ] Stop/remove presentation and workers without deleting content or records.
- [ ] Revoke credentials only after the intended replacement or removal passes.

## 14. Acceptance Record

Record canary identities, final queue census, attention items, public revision,
component and deployment identities, presentation results, credential review,
rollback result, exclusions, and next review date.

## Template Completion Check

- [ ] No placeholder remains unintentionally.
- [ ] No secret value is present.
- [ ] Human and Machine Runbooks agree.
- [ ] Dynamic/static workflow matches the selected adapter.
- [ ] Claim, lease, state, journal, backup, and recovery fields are complete.
- [ ] Retry prohibitions and escalation owners are explicit.
