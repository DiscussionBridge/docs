# Draft Roadmap

This roadmap describes possible product direction, not a promise, release
schedule, or statement that an item has been accepted for implementation.
Current releases, installed demonstrations, and acceptance boundaries live in
[Versions And Live Status](./VERSIONS_AND_LIVE_STATUS.md).

DiscussionBridge will prefer work grounded in operator demand, field evidence,
and a clear recovery model. A roadmap item becomes current product behavior only
after its owning component documents and releases it.

## Now

The current Alpha work is about proving and strengthening the existing product
family rather than adding another platform:

- complete the current installation, upgrade, rollback, and recovery evidence;
- finish the OBBBA demonstration rollout and record each platform's exact
  installed identity;
- keep To Discourse and From Discourse behavior explicit, single-writer, and
  recoverable;
- improve operator guidance, known-issue reporting, support intake, and demo
  navigation; and
- publish the next coherent Adapter Protocol candidate and keep every adapter
  aligned with its declared compatibility line.

## Next

These are the strongest candidate improvements after the current Alpha gates:

### Advanced Profiles

- Statamic Multi-Site;
- additional static deployment arrangements;
- WordPress Multisite; and
- multi-origin or multi-site operation where authority and failure handling
  remain explicit.

### Migration Tools

Focused migration workflows may support:

- adopting an existing companion topic without creating a duplicate;
- moving a publishing system or canonical origin while preserving discussion
  identity;
- importing existing comments with explicit authorship, timestamps,
  moderation, attachment, privacy, and rollback rules; and
- producing auditable previews and reconciliation reports.

Migration is not ordinary publishing. It requires dedicated authority,
collision, provenance, privacy, and recovery controls.

### Deployment Helpers

Deployment helpers may package existing adapters for Cloudflare Workers,
managed CMS hosting, static build systems, and conventional servers. A helper
remains deployment tooling; it must not become a second receiver or policy
control plane.

## Later

### Additional Platform Adapters

Candidate platforms include Drupal/Drupal CMS and Next.js. An adapter should be
added only when real demand justifies its installation, lifecycle, security,
documentation, and support cost.

### Identity Addons

Login, user, and profile synchronization should be separate focused addons.
Publication authorship is not login synchronization, and platform-to-Discourse
identity has different privacy and lifecycle requirements from
Discourse-to-Discourse identity.

### DiscussionBridge Network

A future Discourse-to-Discourse product could support organizations with many
brands, chapters, or communities. Its minimum proof requires one hub and at
least two independent Discourse spokes. The planned qualification uses one
dedicated Network category on each existing live participating forum: 1,000
hub-owned topics fan out to both spokes, and separate 1,000-topic cohorts from
each spoke publish back to the hub. Every direction remains an explicit record
set with category-only scope, independent credentials, acknowledgements, audit,
and loop prevention.

This network capability is planned, not implemented or Alpha-qualified.
Publishing governed first-post content in both directions must not be described
as reply, moderation, user, private-content, or trust-state synchronization.
Read-only presentation or controlled promotion should precede writable relay.
Writable relay remains later work because it must define identity mapping,
moderation authority, edits, deletion, flags, whispers, private content, rate
limits, conflicts, and recovery.

## Exploring

- platform-native starter kits and restrained showcase themes;
- a polished temporary-site mode for operators building a final experience;
- guided demo conversations written by clearly identified demo participants;
  and
- other platform or deployment proposals supported by operator evidence.

Exploration does not create a compatibility or delivery commitment.

## Product Principle

**Your discussions deserve freedom.** The publishing platform, forum, adapter,
hosting model, and presentation may change without making an accidental URL or
proprietary CMS database the only possible home of the discussion.

Share priorities and use cases through
[Support And Feedback](./SUPPORT_AND_FEEDBACK.md) or the
[DiscussionBridge community forum](https://forum.discussionbridge.dev/).
