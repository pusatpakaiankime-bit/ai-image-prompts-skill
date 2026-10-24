#!/usr/bin/env node
// Offline installer: copies this checked-out release; never overwrites a skill.
import { cpSync, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(readFileSync(join(source, 'package.json'), 'utf8'));
const args = process.argv.slice(2);
let destination;
let dryRun = false;
try {
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--help' || args[i] === '-h') {
      console.log('Usage: node scripts/install.js [--dest <complete-skill-folder>] [--dry-run]\nDefault: ~/.agents/skills/ai-image-prompts-skill\n--dest is the complete skill folder, not its parent. Existing destinations are refused.');
      process.exit(0);
    } else if (args[i] === '--version') {
      console.log(pkg.version);
      process.exit(0);
    } else if (args[i] === '--dry-run') dryRun = true;
    else if (args[i] === '--dest' && args[i + 1] && !args[i + 1].startsWith('--')) destination = resolve(args[++i]);
    else throw new Error(`Unknown or incomplete option: ${args[i]}`);
  }
  destination ??= join(homedir(), '.agents', 'skills', pkg.name);
  const rel = relative(source, destination);
  if (rel === '' || (rel !== '..' && !rel.startsWith('..' + sep) && !isAbsolute(rel))) {
    throw new Error('Destination must be outside the source release.');
  }
  // Detect existing folders, files, and broken symbolic links.
  try { lstatSync(destination); throw new Error(`Destination already exists: ${destination}. Back it up or choose another --dest.`); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  const items = ['SKILL.md', 'LICENSE', 'NOTICE.md', 'package.json', 'VERSION', 'release-manifest.json', 'agents', 'scripts', 'references', 'templates', 'docs', 'examples', 'README.md', 'README.en.md', 'CHANGELOG.md'];
  function inspect(path) {
    const stat = lstatSync(path);
    if (stat.isSymbolicLink()) throw new Error(`Symbolic links are not copied: ${path}`);
    if (stat.isDirectory()) for (const name of readdirSync(path)) inspect(join(path, name));
  }
  for (const name of items) { if (!existsSync(join(source, name))) throw new Error(`Missing release file: ${name}`); inspect(join(source, name)); }
  console.log(`${dryRun ? 'DRY RUN' : 'INSTALL'} ${pkg.name}@${pkg.version}\nFrom: ${source}\nTo: ${destination}`);
  if (!dryRun) {
    mkdirSync(dirname(destination), { recursive: true });
    mkdirSync(destination); // Atomic refusal if another installer created the destination.
    for (const name of items) cpSync(join(source, name), join(destination, name), { recursive: true, force: false, errorOnExist: true });
    console.log('Installed. Invoke $ai-image-prompts-skill in your next turn; restart the host if it is not discovered.\nGuides, templates and examples are included. No network requests were made.');
  }
} catch (error) {
  console.error(`Install failed: ${error.message}`);
  process.exitCode = 1;
}
