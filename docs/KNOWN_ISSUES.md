# Known Issues

This page lists operator-facing issues with a bounded affected state and a safe
workaround. Release-review follow-ups and historical candidate findings belong
in their exact release records, not in this current operator guide.

Check [Versions And Live Status](./VERSIONS_AND_LIVE_STATUS.md) before relying on
an affected-version statement. If an issue does not match your component and
exact version, report it as a new observation rather than assuming the same
cause.

## Current Product Issues

### Oversized Source Content Requires Operator Attention

- **Last verified:** September 24, 2026
- **Affected state:** a From Discourse source body exceeds the current 256 KiB
  receiver boundary, or a destination platform has a lower documented limit
- **Operator impact:** DiscussionBridge refuses to truncate the source silently;
  the publication remains visible in **Publishing → Needs attention**

**Workaround:** confirm the recorded size and destination limit, shorten or
split the source when editorially appropriate, or ship a reviewed adapter and
platform-limit correction. Use the authenticated Retry action only after the
recorded cause has been corrected. Repeating Retry against the same oversized
source cannot make the work publishable.

### Identity Or Ownership Drift Cannot Be Repaired By Blind Retry

- **Last verified:** September 24, 2026
- **Affected state:** the native destination identity, managed ownership marker,
  or expected resource-to-path binding no longer matches the durable Bridge
  Record
- **Operator impact:** the adapter fails closed rather than adopting or
  overwriting an ambiguous native item

**Workaround:** preserve the Bridge Record, adapter evidence, and native item;
diagnose which identity or ownership boundary changed; then use the adapter's
documented reconciliation or migration path. Do not delete durable state,
invent a replacement identity, or repeatedly press Retry.

## Upstream Issues Needing Current Reconfirmation

### Starlight May Log `Entry docs -> 404 was not found`

- **Last reproduced:** July 2026
- **Historical test range:** Astro `^7.0.4`, Starlight `^0.41.2`
- **Current-version status:** not reconfirmed for the current release line
- **Impact when reproduced:** low; the build succeeds and Starlight's generated
  fallback 404 page still works

The message was reproduced in the independent stock Starlight control without
DiscussionBridge integration. `disable404Route: true` removed it. Adding a
`src/content/docs/404.md` file removed the missing-entry message but introduced a
route conflict, so that is not a safe generic workaround.

**Workaround:** if the build succeeds and the generated 404 page is verified,
treat the message as a warning. Do not add a custom `404.md` solely to silence
it. Use `disable404Route: true` only when the site supplies and verifies another
404 implementation.

Before filing or relying on this as a current upstream issue, reproduce it with
the exact installed Astro and Starlight versions and record those versions in
the report.

## Report A New Issue

Use [Support And Feedback](./SUPPORT_AND_FEEDBACK.md) for the current intake
path. Include the exact DiscussionBridge component release, platform and
runtime versions, affected direction and presentation mode, expected behavior,
observed behavior, and sanitized reproduction details. Never post API keys,
tokens, cookies, private content, personal data, or unredacted logs.
