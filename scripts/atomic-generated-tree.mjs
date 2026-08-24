import { randomUUID } from "node:crypto";
import * as fs from "node:fs/promises";
import path from "node:path";

export async function publishGeneratedTreeAtomically({
  targetDir,
  files,
  fsImpl = fs,
  warn = (message) => console.warn(message),
}) {
  const parent = path.dirname(targetDir);
  const stem = path.basename(targetDir);
  const nonce = `${process.pid}-${randomUUID()}`;
  const stageDir = path.join(parent, `.${stem}.stage-${nonce}`);
  const backupDir = path.join(parent, `.${stem}.backup-${nonce}`);
  let stageOwned = false;
  let backupOwned = false;
  let committed = false;

  await fsImpl.mkdir(parent, { recursive: true });
  try {
    await fsImpl.mkdir(stageDir, { recursive: false });
    stageOwned = true;
    for (const { file, content } of files) {
      const destination = path.resolve(stageDir, file);
      if (destination === stageDir || !destination.startsWith(`${stageDir}${path.sep}`)) {
        throw new Error(`Generated file escaped the staging tree: ${file}`);
      }
      await fsImpl.mkdir(path.dirname(destination), { recursive: true });
      await fsImpl.writeFile(destination, content, { encoding: "utf8", flag: "wx" });
    }

    const expected = [...files].sort((left, right) => left.file.localeCompare(right.file));
    for (const { file, content } of expected) {
      if (await fsImpl.readFile(path.join(stageDir, file), "utf8") !== content) {
        throw new Error(`Generated staging verification failed for ${file}`);
      }
    }

    try {
      const status = await fsImpl.lstat(targetDir);
      if (!status.isDirectory()) throw new Error(`Generated target is not a directory: ${targetDir}`);
      await fsImpl.rename(targetDir, backupDir);
      backupOwned = true;
    } catch (error) {
      if (error?.code !== "ENOENT") throw error;
    }

    await fsImpl.rename(stageDir, targetDir);
    stageOwned = false;
    committed = true;
  } catch (error) {
    if (backupOwned) {
      await fsImpl.rm(targetDir, { recursive: true, force: true }).catch(() => undefined);
      await fsImpl.rename(backupDir, targetDir);
      backupOwned = false;
    }
    throw error;
  } finally {
    if (stageOwned) await fsImpl.rm(stageDir, { recursive: true, force: true }).catch(() => undefined);
  }

  if (committed && backupOwned) {
    try {
      await fsImpl.rm(backupDir, { recursive: true, force: true });
    } catch {
      warn(`Generated content committed; recovery backup remains at ${backupDir}`);
    }
  }
}
