import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsRoot = path.join(siteRoot, "docs");

async function markdownFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const candidate = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await markdownFiles(candidate)));
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(candidate);
  }
  return files.sort();
}

test("documentation relative links resolve", async () => {
  const failures = [];

  for (const file of await markdownFiles(docsRoot)) {
    const markdown = await readFile(file, "utf8");
    for (const match of markdown.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = match[1].trim().replace(/^<|>$/g, "");
      if (/^(?:[a-z]+:|#|\/)/i.test(target)) continue;

      const relativePath = decodeURIComponent(target.split(/[?#]/, 1)[0]);
      if (!relativePath) continue;
      const resolved = path.resolve(path.dirname(file), relativePath);
      try {
        await access(resolved);
      } catch {
        failures.push(`${path.relative(docsRoot, file)} -> ${target}`);
      }
    }
  }

  assert.deepEqual(failures, []);
});

test("documentation fenced code blocks are balanced", async () => {
  const failures = [];

  for (const file of await markdownFiles(docsRoot)) {
    const lines = (await readFile(file, "utf8")).split(/\r?\n/);
    let fence = null;
    for (const [index, line] of lines.entries()) {
      const match = line.match(/^\s*(`{3,}|~{3,})/);
      if (!match) continue;
      const marker = match[1][0];
      if (fence === null) fence = { marker, line: index + 1 };
      else if (fence.marker === marker) fence = null;
    }
    if (fence) {
      failures.push(
        `${path.relative(docsRoot, file)}:${fence.line} has an unclosed ${fence.marker} fence`,
      );
    }
  }

  assert.deepEqual(failures, []);
});
