// Generates the versioned API reference from the library sources of each release tag.
//
// Only the latest patch release of every minor version is kept (e.g. v2.2.1 for 2.2).
// The output follows the Docusaurus versioning layout of the "api" docs plugin instance:
//   api_versions.json
//   api_versioned_docs/version-<major.minor>/
//   api_versioned_sidebars/version-<major.minor>-sidebars.json
//
// The current (unreleased) API is generated separately by docusaurus-plugin-typedoc.

import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {Application} from 'typedoc';

const require = createRequire(import.meta.url);
const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const versionsFile = path.join(siteDir, 'api_versions.json');
const versionedDocsDir = path.join(siteDir, 'api_versioned_docs');
const versionedSidebarsDir = path.join(siteDir, 'api_versioned_sidebars');

// Library source location, newest layout first
const sourceDirs = ['gs1-parser/src', 'src'];

const repoDir = execFileSync('git', ['rev-parse', '--show-toplevel'], {cwd: siteDir, encoding: 'utf8'}).trim();

function git(...args) {
  return execFileSync('git', args, {
    cwd: repoDir,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

const toPosix = (file) => file.split(path.sep).join('/');

function pathExists(tag, file) {
  try {
    git('cat-file', '-e', `${tag}:${file}`);
    return true;
  } catch {
    return false;
  }
}

/** Latest patch tag of every minor version, newest first */
function getReleaseTags() {
  const latest = new Map();
  for (const tag of git('tag', '--list', 'v*').split('\n')) {
    const match = /^v(\d+)\.(\d+)\.(\d+)$/.exec(tag.trim());
    if (!match) continue;
    const [major, minor, patch] = match.slice(1).map(Number);
    const name = `${major}.${minor}`;
    const current = latest.get(name);
    if (!current || patch > current.patch) {
      latest.set(name, {name, tag: match[0], major, minor, patch});
    }
  }
  return [...latest.values()].sort((a, b) => b.major - a.major || b.minor - a.minor);
}

/** Writes the library sources of a tag into a temporary directory */
function extractSources(tag, tmpDir) {
  const sourceDir = sourceDirs.find((dir) => pathExists(tag, `${dir}/index.ts`));
  if (!sourceDir) throw new Error(`No library sources found in ${tag}`);

  const files = git('ls-tree', '-r', '--name-only', tag, '--', sourceDir).split('\n').filter(Boolean);
  for (const file of files) {
    const target = path.join(tmpDir, 'src', path.relative(sourceDir, file));
    fs.mkdirSync(path.dirname(target), {recursive: true});
    fs.writeFileSync(target, execFileSync('git', ['show', `${tag}:${file}`], {cwd: repoDir}));
  }

  fs.writeFileSync(
    path.join(tmpDir, 'tsconfig.json'),
    JSON.stringify({
      compilerOptions: {
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'bundler',
        lib: ['ES2022', 'DOM'],
        types: [],
        strict: true,
        skipLibCheck: true,
      },
      include: ['src'],
    }),
  );
}

async function generateVersion({name, tag}) {
  const outDir = path.join(versionedDocsDir, `version-${name}`);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gs1-parser-api-'));

  try {
    extractSources(tag, tmpDir);

    const app = await Application.bootstrapWithPlugins({
      entryPoints: [toPosix(path.join(tmpDir, 'src/index.ts'))],
      tsconfig: path.join(tmpDir, 'tsconfig.json'),
      out: outDir,
      docsPath: outDir,
      plugin: ['typedoc-plugin-markdown', 'typedoc-docusaurus-theme'],
      name: '@valentynb/gs1-parser',
      readme: 'none',
      disableSources: true,
      skipErrorChecking: true,
      logLevel: 'Warn',
    });
    const project = await app.convert();
    if (project) await app.generateOutputs(project);
    if (!project || app.logger.hasErrors()) throw new Error(`TypeDoc failed to generate the API of ${tag}`);
  } finally {
    fs.rmSync(tmpDir, {recursive: true, force: true});
  }

  const sidebarFile = path.join(outDir, 'typedoc-sidebar.cjs');
  const items = require(sidebarFile);
  fs.rmSync(sidebarFile);

  fs.mkdirSync(versionedSidebarsDir, {recursive: true});
  fs.writeFileSync(
    path.join(versionedSidebarsDir, `version-${name}-sidebars.json`),
    JSON.stringify({apiSidebar: [{type: 'doc', id: 'index', label: 'Overview'}, ...items]}, null, 2),
  );
  fs.writeFileSync(path.join(outDir, '.tag'), tag);
}

const releases = getReleaseTags();
const names = new Set(releases.map((release) => `version-${release.name}`));

// Remove versions that are no longer the latest patch of their minor
for (const dir of [versionedDocsDir, versionedSidebarsDir]) {
  if (!fs.existsSync(dir)) continue;
  for (const entry of fs.readdirSync(dir)) {
    if (!names.has(entry.replace(/-sidebars\.json$/, ''))) {
      fs.rmSync(path.join(dir, entry), {recursive: true, force: true});
    }
  }
}

for (const release of releases) {
  const tagFile = path.join(versionedDocsDir, `version-${release.name}`, '.tag');
  if (fs.existsSync(tagFile) && fs.readFileSync(tagFile, 'utf8') === release.tag) continue;

  console.log(`[api-versions] Generating API ${release.name} from ${release.tag}`);
  await generateVersion(release);
}

fs.writeFileSync(versionsFile, JSON.stringify(releases.map((release) => release.name), null, 2) + '\n');

if (releases.length === 0) {
  console.warn('[api-versions] No release tags found, only the current API will be available');
} else {
  console.log(`[api-versions] API versions: ${releases.map((release) => release.tag).join(', ')}`);
}
