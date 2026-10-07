#!/usr/bin/env node
// Summarise data/interest.jsonl: how many people, what they'd use, how they'd help.
// Usage: npm run interest:report [-- path/to/interest.jsonl] [-- --csv]
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const csv = args.includes('--csv');
const file = args.find((a) => !a.startsWith('--')) ?? join(process.env.DATA_DIR ?? 'data', 'interest.jsonl');
if (!existsSync(file)) {
  console.error(`No sign-ups yet: ${file} does not exist.`);
  process.exit(1);
}

const lines = readFileSync(file, 'utf8').split('\n').filter(Boolean);
const bad = [];
const byEmail = new Map();
for (const [i, line] of lines.entries()) {
  try {
    const r = JSON.parse(line);
    byEmail.set(r.email, { ...byEmail.get(r.email), ...r }); // latest answer wins
  } catch {
    bad.push(i + 1);
  }
}
const people = [...byEmail.values()];

if (csv) {
  const cols = ['at', 'source', 'lang', 'email', 'name', 'username', 'uses', 'helps', 'community', 'city', 'note'];
  const esc = (v) => `"${String(Array.isArray(v) ? v.join(' ') : v ?? '').replaceAll('"', '""')}"`;
  console.log(cols.join(','));
  for (const p of people) console.log(cols.map((c) => esc(p[c])).join(','));
  process.exit(0);
}

const tally = (key) => {
  const counts = {};
  for (const p of people) for (const k of p[key] ?? []) counts[k] = (counts[k] ?? 0) + 1;
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
};
const bar = (n) => '#'.repeat(Math.round((n / Math.max(people.length, 1)) * 40));
const show = (title, rows) => {
  console.log(`\n${title}`);
  for (const [k, n] of rows) console.log(`  ${k.padEnd(12)} ${String(n).padStart(4)}  ${bar(n)}`);
};

console.log(`${people.length} people (${lines.length} submissions${bad.length ? `, ${bad.length} unreadable lines: ${bad.join(', ')}` : ''})`);
const helpers = people.filter((p) => p.helps?.length).length;
console.log(`${helpers} offered to help`);
show('Would use', tally('uses'));
show('Would help', tally('helps'));
show('Source', Object.entries(Object.groupBy(people, (p) => p.source)).map(([k, v]) => [k, v.length]));

const cities = Object.entries(Object.groupBy(people.filter((p) => p.city), (p) => p.city.toLowerCase())).map(([k, v]) => [k, v.length]).sort((a, b) => b[1] - a[1]);
if (cities.length) show('Cities', cities.slice(0, 15));

const names = Object.groupBy(people.filter((p) => p.username), (p) => p.username);
const clashes = Object.entries(names).filter(([, v]) => v.length > 1);
if (clashes.length) {
  console.log('\nUsername clashes');
  for (const [u, v] of clashes) console.log(`  ~${u}: ${v.map((p) => p.email).join(', ')}`);
}
