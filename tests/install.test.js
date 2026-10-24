import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const installer = join(root, 'scripts/install.js');
test('offline install, dry run, custom path with spaces, and existing-destination refusal', () => {
  const sandbox = mkdtempSync(join(tmpdir(), 'image-prompt-install-'));
  const dest = join(sandbox, 'skill with spaces');
  try {
    execFileSync(process.execPath, [installer, '--dest', dest, '--dry-run']);
    assert.equal(existsSync(dest), false);
    execFileSync(process.execPath, [installer, '--dest', dest]);
    assert.equal(readFileSync(join(dest, 'SKILL.md'), 'utf8'), readFileSync(join(root, 'SKILL.md'), 'utf8'));
    assert.ok(existsSync(join(dest, 'references/social-media-post.json')));
    assert.ok(existsSync(join(dest, 'templates/lemon8-cover.md')));
    assert.equal(existsSync(join(dest, '.git')), false);
    assert.equal(existsSync(join(dest, 'examples')), true);
    execFileSync(process.execPath, [join(dest, 'scripts/validate.js')]);
    const before = readFileSync(join(dest, 'SKILL.md'), 'utf8');
    const retry = spawnSync(process.execPath, [installer, '--dest', dest], { encoding: 'utf8' });
    assert.notEqual(retry.status, 0);
    assert.match(retry.stderr, /already exists/);
    assert.equal(readFileSync(join(dest, 'SKILL.md'), 'utf8'), before);
    assert.equal(readdirSync(sandbox).length, 1);
    const invalid = spawnSync(process.execPath, [installer, '--not-a-real-option'], { encoding: 'utf8' });
    assert.notEqual(invalid.status, 0);
    const self = spawnSync(process.execPath, [installer, '--dest', join(root, 'nested-install')], { encoding: 'utf8' });
    assert.notEqual(self.status, 0);
    assert.equal(existsSync(join(root, 'nested-install')), false);
  } finally {
    assert.equal(dirname(resolve(sandbox)), resolve(tmpdir()));
    assert.ok(basename(sandbox).startsWith('image-prompt-install-'));
    rmSync(sandbox, { recursive: true, force: true });
  }
});
