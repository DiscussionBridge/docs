# Change Platforms, Keep The Discussion

“Publish anywhere. Keep the discussion.” requires more than copying articles.
The durable thing that must survive a platform change is the Discourse topic
and its DiscussionBridge resource identity. Platform IDs and URLs may change;
the topic, replies, moderation history, and Bridge identity must not.

> **Alpha boundary:** the complete site/platform migration workflow on this
> page is not yet a built, supported bulk migration tool. DiscussionBridge has
> tested record-level prepared To Discourse connection-migration primitives,
> but destination cutover orchestration, bulk coordination, redirect
> management, retirement, and coordinated rollback still require
> implementation and live qualification.

## Migration Means Replacing The Publishing Platform

A migration changes the publishing platform while keeping the Discourse
discussion. Direction determines which bindings must move:

| Existing relationship | Migrated relationship | Required operation |
| --- | --- | --- |
| Discourse → WordPress | Discourse → Astro | Cut over each From Discourse destination publication while retaining its topic and Bridge identity |
| WordPress → Discourse | Statamic → Discourse | Transfer each To Discourse record's active source binding while retaining its topic and Bridge identity |
| WordPress ↔ Discourse | Statamic ↔ Discourse | Coordinate both directional operations as one platform migration and one rollback boundary |

A bidirectional connection does not create a bidirectional Bridge Record. Each
record still has one direction. A bidirectional platform migration therefore
moves a set of To Discourse records and a set of From Discourse records under
one coordinated cutover.

### Platform-to-Discourse source transfer

When WordPress → Discourse becomes Statamic → Discourse, the receiver's
technical operation is a prepared connection migration. One To Discourse
Bridge Record moves from the old platform connection and external identity to
a prepared binding on the new connection. Applying the prepared binding must
retain the exact Bridge resource and Discourse topic while making the old
binding historical.

The receiver has automated request coverage for prepare/apply, scope
revalidation, reverse migration, and denial of the old connection after the
move—including a migration to a Statamic connection. That is implementation
evidence, not yet a public live cross-platform demonstration.

### Discourse-to-platform destination cutover

When Discourse → WordPress becomes Discourse → Astro, the same topic may be
materialized through the new platform connection, verified on its new public
URL, and then withdrawn from the old connection while the forum topic remains
unchanged. The OBBBA estate demonstrates one forum corpus materialized across
multiple platforms. It does not yet demonstrate the full destination cutover,
redirects, retirement, and rollback of one platform into another.

### Bidirectional platform replacement

When WordPress ↔ Discourse becomes Statamic ↔ Discourse, the migration must
combine both operations. The target connection is proven in both directions;
platform-owned articles transfer their active To Discourse source bindings;
Discourse-owned articles cut over their From Discourse destination
publications; old URLs redirect; and the old connection loses active authority
only after both directions pass. One direction must not be declared migrated
while the other silently remains on the retired platform.

## What Backfill Does And Does Not Prove

| Evidence | Proven meaning | Not proven by it |
| --- | --- | --- |
| OBBBA Discourse → platform backfill | A large forum corpus can become native content on the exercised destination profile | Importing a large existing platform corpus into Discourse |
| One-topic To Discourse canary | Stable platform identity can create or resolve one governed topic idempotently | Whole-site platform import, sustained rate behavior, or recovery at scale |
| Receiver migration tests | One Bridge Record can change connections while preserving its resource and topic | Live redirects, platform export/import fidelity, or public rollback |
| Multiple destination demos | The same forum topic can be presented/materialized on different platforms | A completed production platform replacement |
| Independent To Discourse and From Discourse canaries | Each direction works on the target platform | One coordinated bidirectional cutover and rollback |

The current Alpha therefore must not claim a proven large **platform →
Discourse** backfill. That requires its own qualified adapter-specific import
test.

## Required Live Cutover Demonstration

The first public proof should exercise a bidirectional platform replacement
with one representative record in each direction before any bulk claim:

1. On platform A, publish one platform-owned article into Discourse. Also
   publish one separate Discourse-owned article onto platform A.
2. Add replies, moderation state, and a signed-in interaction to both Discourse
   topics. Record both resource IDs, topic IDs, directional bindings, and public
   URLs.
3. Prepare platform B's connection for both directions without changing the
   active platform A bindings.
4. Import or recreate the platform-owned article on platform B with a deliberate
   stable target identity. Do not let it create a second forum topic.
5. Materialize the Discourse-owned article on platform B and verify its exact
   destination identity and public revision before withdrawing platform A's
   destination publication.
6. Install and verify permanent platform A URL redirects for both public
   articles.
7. Prepare and apply the To Discourse connection migration to platform B.
   Prove its Bridge resource, topic, replies, moderation history, and discussion
   URL are unchanged.
8. Prove platform B can update the transferred To Discourse record and process
   a new From Discourse revision. Prove platform A can no longer read or mutate
   the active source record and no longer presents the active destination.
9. Reconcile both directional record sets and declare the platform migration
   complete only when both pass.
10. Exercise a coordinated reverse migration or documented rollback while both
    topics remain intact.
11. Verify analytics, canonical URLs, search behavior, navigation, and both old
    redirects independently from Bridge health.

Only after that one-item cutover passes should a bounded corpus migration be
designed and tested.

## Large Platform-To-Discourse Qualification Still Owed

A credible scale test needs an explicit existing-platform corpus—not generated
forum topics—with stable native IDs, authors, taxonomies, publication states,
rich content, duplicates/collisions, oversized items, revisions, and deleted or
private items. It must measure:

- preview and eligibility counts before mutation;
- bounded request rate and forum impact;
- exact create, unchanged retry, update, withdrawal, and restart behavior;
- author/category/tag mapping and unsupported-content attention;
- interruption, credential expiry, and resume without duplicates;
- reconciliation between every admitted native item, Bridge Record, and topic;
  and
- rollback or containment when only part of the corpus is admitted.

Until a specific adapter passes that test, document platform-to-Discourse
operation as canary/steady-state publication, not as a proven bulk backfill.

## Discourse Networks Are A Separate Capability

Replacing WordPress with Statamic is different from connecting multiple
Discourse forums. The planned DiscussionBridge Network requires at least one
hub and two independent Discourse spokes. Its qualification will use dedicated
categories on the existing live DiscussionBridge, Citizen Activist, and Repeal
OBBBA forums rather than disposable test forums. It must prove:

- one authorized hub corpus can fan out to multiple forums;
- each spoke can independently publish an authorized corpus back to the hub;
- every hub/spoke direction uses its own directional Bridge Records,
  credentials, scope, acknowledgement, and audit history; and
- route provenance and single-writer ownership prevent loops and duplicate
  topics.

Every connection and credential must be restricted to the dedicated Network
category on its forum. Unrelated community categories and topics remain out of
scope.

That Discourse-to-Discourse capability is not implemented or proven in the
current Alpha. Bidirectional publication also does not imply replication of
replies, flags, whispers, moderation actions, users, private content, or trust
state. Those remain local unless a separately designed and qualified writable
relay explicitly owns them.

## Current Safe Operator Boundary

Do not use a forum-to-platform backfill as a substitute for a platform
migration. Do not assign fresh identities merely to make a target import run.
Do not delete an old binding or topic. Preserve exact evidence first, use the
receiver's prepared connection migration for each To Discourse record, cut over
each From Discourse destination deliberately, and treat redirects and public
verification as required platform operations. For a bidirectional connection,
retain a single migration record and rollback decision covering both
directional sets.
