# Install And Operate DiscussionBridge For Hugo

DiscussionBridge for Hugo is a trusted-build adapter. Secrets and operational
state stay in the protected build environment; generated source and public
output contain only nonsecret presentation and provenance data.

## Install And Bind

Use the exact released package and hash, preserve its lockfile binding, and
record the Hugo version, build command, deployment provider, state path, and
last known-good artifact. Follow the
[component README](https://github.com/DiscussionBridge/hugo-discussion-bridge)
for the release's CLI and template integration.

Install DiscussionBridge for Discourse and create an enabled Content Connection
for every supported Hugo integration. Hugo does not provide Astro's
plugin-free Simple or Full path. Keep the receiver credential in the protected
build environment rather than generated source or public output.

Before enabling a connected build, generate the installation identity once,
configure the protected receiver credential, emit and upload the actual Hugo
platform catalog, and prove one bounded canary without overlapping builds.

## Choose The Work

- Presentation by itself does not require an initial population, even though
  the Hugo integration is receiver-backed.
- New Hugo content sent to Discourse follows the authoritative build manifest;
  a successful canary is not evidence for a large historical import.
- Existing Discourse topics becoming native Hugo content use the optional
  From Discourse initial population.

## Optional Forum-To-Hugo Initial Population

Run the installed release's explicit `prepare-forum-publications` operation
only when an existing forum corpus is intended to populate Hugo. It records a
bounded high-water and prepares native content; it is not a universal install
step.

After that optional operation, use the queue-specific prepare/build/deploy/
finalize lifecycle. The build must preserve the protected transaction and
verify each exact public publication revision before acknowledgement. A local
file or successful Hugo build is not public-deployment proof.

## Routine Operation

Record the timer or CI trigger, bounded claim size, deployment lease, state
path, candidate identity, provider deployment receipt, and finalization result.
Exclude overlapping builds. If a prepared candidate is already public, finish
verification/finalization rather than claiming another batch. If it was not
deployed, preserve evidence and use the documented recovery path.

Use the adapter's one-publication migration command only for a verified native
URL move with an equivalent permanent redirect on the actual hosting target.
It is not a complete site-to-site migration tool.
