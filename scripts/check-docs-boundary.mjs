import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

async function markdownFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await markdownFiles(target));
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(target);
  }
  return files;
}

const license = await readFile(path.join(root, "LICENSE"), "utf8");
if (!license.includes("MIT License") || !license.includes("Copyright (c) 2026 WebSynergetics")) {
  failures.push("Repository LICENSE is not the reviewed WebSynergetics MIT license.");
}

const syncScript = await readFile(path.join(root, "scripts", "sync-docs-site-content.mjs"), "utf8");
for (const required of [
  '"ATTRIBUTION_OWNERSHIP_LICENSE.md"',
  "https://github.com/DiscussionBridge/docs/edit/main/docs/",
  "https://github.com/DiscussionBridge/docs/blob/main/LICENSE",
  "https://github.com/DiscussionBridge/docs/blob/main/docs/THIRD_PARTY_PROVENANCE.json",
]) {
  if (!syncScript.includes(required)) failures.push(`Sync contract is missing ${required}`);
}

const forbidden = [
  [/WebSynergetics Secure Ops Vault/i, "protected vault name"],
  [/(?:^|[("'`\s])K:\\/im, "protected K: path"],
  [/C:\\Users\\/i, "private Windows user path"],
];
for (const file of await markdownFiles(path.join(root, "docs"))) {
  const contents = await readFile(file, "utf8");
  for (const [pattern, label] of forbidden) {
    if (pattern.test(contents)) failures.push(`${path.relative(root, file)} contains a ${label}.`);
  }
}

const generated = await readFile(
  path.join(root, "src", "content", "docs", "attribution-ownership-license.md"),
  "utf8",
);
if (!generated.includes("https://github.com/DiscussionBridge/docs/blob/main/LICENSE")) {
  failures.push("Generated attribution page does not link to the docs repository license.");
}
if (/\]\(\.\.\/[^)]+\)/.test(generated)) {
  failures.push("Generated attribution page contains an unresolved parent-relative link.");
}

if (failures.length) {
  console.error("Documentation boundary gate: FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Documentation boundary gate: PASS");
  console.log("- repository license: PASS");
  console.log("- canonical/generated attribution links: PASS");
  console.log("- protected-path scan: PASS");
}
