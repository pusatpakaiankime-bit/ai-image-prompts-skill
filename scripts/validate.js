#!/usr/bin/env node
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = path => readFileSync(join(root, path), 'utf8');
const pkg = JSON.parse(read('package.json'));
assert.equal(read('VERSION').trim(), pkg.version, 'Version mismatch');
const skill = read('SKILL.md');
assert.match(skill, /^---\r?\nname: ai-image-prompts-skill\r?\n/);
assert.match(skill, /\nmetadata:\r?\n/);
assert.ok(skill.includes(`version: "${pkg.version}"`));
const manifest = JSON.parse(read('references/manifest.json'));
const ids = new Set();
let associations = 0;
for (const category of manifest.categories) {
  assert.match(category.file, /^[a-z0-9-]+\.json$/, 'Unsafe category path');
  const records = JSON.parse(read(`references/${category.file}`));
  assert.equal(records.length, category.count, `Count: ${category.file}`);
  for (const record of records) {
    assert.ok(Number.isInteger(record.id));
    assert.equal(typeof record.content, 'string');
    assert.ok(Array.isArray(record.sourceMedia));
    ids.add(record.id);
  }
  associations += records.length;
}
if (ids.size !== manifest.totalPrompts) console.warn(`UPSTREAM NOTICE: manifest reports ${manifest.totalPrompts} prompts; bundled files contain ${ids.size} unique IDs. See docs/upstream.md.`);
const snapshot = JSON.parse(read('release-manifest.json'));
assert.equal(snapshot.version, pkg.version);
assert.equal(snapshot.library.uniquePrompts, ids.size);
assert.equal(snapshot.library.categoryEntries, associations);
assert.equal(snapshot.library.upstreamReportedPrompts, manifest.totalPrompts);
function walk(folder) {
  return readdirSync(folder, { withFileTypes: true }).flatMap(entry => {
    if (['.git', 'node_modules', 'dist'].includes(entry.name)) return [];
    const path = join(folder, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}
const files = walk(root);
for (const file of files.filter(path => path.endsWith('.md'))) {
  const text = readFileSync(file, 'utf8');
  // Markdown links/images; ignore external URLs and placeholder paths inside fenced examples.
  const prose = text.replace(/(`{3,}|~{3,})[^\n]*\n[\s\S]*?\1/g, '').replace(/`[^`\n]*`/g, '');
  for (const match of prose.matchAll(/!?\[[^\]]*\]\(([^\s)]+)(?:\s+[^)]*)?\)/g)) {
    const target = match[1].split('#')[0];
    if (!target || /^(https?:|mailto:|data:)/.test(target)) continue;
    assert.ok(existsSync(resolve(dirname(file), decodeURIComponent(target))), `Broken link in ${file}: ${target}`);
  }
  for (const match of prose.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const target = match[1].split('#')[0];
    if (!target || /^(https?:|mailto:|data:)/.test(target)) continue;
    assert.ok(existsSync(resolve(dirname(file), decodeURIComponent(target))), `Broken HTML media/link in ${file}: ${target}`);
  }
}
for (const file of files) assert.ok(statSync(file).size < 50 * 1024 * 1024, `Unexpected large file: ${file}`);
console.log(`PASS v${pkg.version}: ${manifest.categories.length} categories, ${ids.size} unique prompts, ${associations} category entries; ${files.length} files and local Markdown links checked.`);
