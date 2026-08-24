import assert from "node:assert/strict";
import * as fs from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { publishGeneratedTreeAtomically } from "../scripts/atomic-generated-tree.mjs";

test("publishes the complete generated tree and removes obsolete files", async (context) => {
  const root = await fs.mkdtemp(path.join(tmpdir(), "discussionbridge-docs-tree-"));
  context.after(() => fs.rm(root, { recursive: true, force: true }));
  const targetDir = path.join(root, "docs");
  await fs.mkdir(targetDir);
  await fs.writeFile(path.join(targetDir, "obsolete.md"), "old", "utf8");

  await publishGeneratedTreeAtomically({
    targetDir,
    files: [{ file: "index.md", content: "new index" }, { file: "nested/page.md", content: "new page" }],
  });

  assert.equal(await fs.readFile(path.join(targetDir, "index.md"), "utf8"), "new index");
  assert.equal(await fs.readFile(path.join(targetDir, "nested/page.md"), "utf8"), "new page");
  await assert.rejects(fs.access(path.join(targetDir, "obsolete.md")));
  assert.deepEqual((await fs.readdir(root)).sort(), ["docs"]);
});

test("restores the exact prior tree when staged publication fails", async (context) => {
  const root = await fs.mkdtemp(path.join(tmpdir(), "discussionbridge-docs-rollback-"));
  context.after(() => fs.rm(root, { recursive: true, force: true }));
  const targetDir = path.join(root, "docs");
  await fs.mkdir(targetDir);
  await fs.writeFile(path.join(targetDir, "index.md"), "original bytes", "utf8");
  let renameCalls = 0;
  const fsImpl = {
    ...fs,
    async rename(from, to) {
      renameCalls += 1;
      if (renameCalls === 2) throw Object.assign(new Error("injected publish failure"), { code: "EIO" });
      return fs.rename(from, to);
    },
  };

  await assert.rejects(
    publishGeneratedTreeAtomically({
      targetDir,
      files: [{ file: "index.md", content: "replacement" }],
      fsImpl,
    }),
    /injected publish failure/,
  );
  assert.equal(await fs.readFile(path.join(targetDir, "index.md"), "utf8"), "original bytes");
  assert.deepEqual((await fs.readdir(root)).sort(), ["docs"]);
});

test("does not claim ownership when the initial backup rename fails", async (context) => {
  const root = await fs.mkdtemp(path.join(tmpdir(), "discussionbridge-docs-backup-"));
  context.after(() => fs.rm(root, { recursive: true, force: true }));
  const targetDir = path.join(root, "docs");
  await fs.mkdir(targetDir);
  await fs.writeFile(path.join(targetDir, "index.md"), "original bytes", "utf8");
  const fsImpl = { ...fs, rename: async () => { throw Object.assign(new Error("backup failed"), { code: "EIO" }); } };

  await assert.rejects(
    publishGeneratedTreeAtomically({
      targetDir,
      files: [{ file: "index.md", content: "replacement" }],
      fsImpl,
    }),
    /backup failed/,
  );
  assert.equal(await fs.readFile(path.join(targetDir, "index.md"), "utf8"), "original bytes");
  assert.deepEqual((await fs.readdir(root)).sort(), ["docs"]);
});

test("preserves the committed tree and recovery backup when cleanup fails", async (context) => {
  const root = await fs.mkdtemp(path.join(tmpdir(), "discussionbridge-docs-cleanup-"));
  context.after(() => fs.rm(root, { recursive: true, force: true }));
  const targetDir = path.join(root, "docs");
  await fs.mkdir(targetDir);
  await fs.writeFile(path.join(targetDir, "index.md"), "original bytes", "utf8");
  const warnings = [];
  const fsImpl = {
    ...fs,
    async rm(target, options) {
      if (path.basename(target).startsWith(".docs.backup-")) {
        throw Object.assign(new Error("injected cleanup failure"), { code: "EIO" });
      }
      return fs.rm(target, options);
    },
  };

  await publishGeneratedTreeAtomically({
    targetDir,
    files: [{ file: "index.md", content: "committed bytes" }],
    fsImpl,
    warn: (message) => warnings.push(message),
  });

  assert.equal(await fs.readFile(path.join(targetDir, "index.md"), "utf8"), "committed bytes");
  const entries = await fs.readdir(root);
  const backup = entries.find((entry) => entry.startsWith(".docs.backup-"));
  assert.ok(backup);
  assert.equal(await fs.readFile(path.join(root, backup, "index.md"), "utf8"), "original bytes");
  assert.deepEqual(warnings, [`Generated content committed; recovery backup remains at ${path.join(root, backup)}`]);
});
