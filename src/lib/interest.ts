import { appendFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { HELPS, USES, type HelpKey, type UseKey } from '../data/site';

export interface InterestRecord {
  at: string;
  source: 'form' | 'terminal';
  lang: 'en' | 'bn';
  email: string;
  name?: string;
  username?: string;
  uses: UseKey[];
  helps: HelpKey[];
  community?: string;
  city?: string;
  note?: string;
}

export const USERNAME_RE = /^[a-z][a-z0-9_-]{1,23}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Input = Record<string, unknown>;

function text(v: unknown, max: number): string | undefined {
  if (typeof v !== 'string') return undefined;
  const t = v.trim().slice(0, max);
  return t || undefined;
}

function keys<K extends string>(v: unknown, allowed: Record<K, string>): K[] {
  const list = Array.isArray(v) ? v : typeof v === 'string' ? v.split(/[\s,]+/) : [];
  return [...new Set(list.filter((k): k is K => typeof k === 'string' && k in allowed))];
}

export function parse(input: Input): { ok: true; record: InterestRecord } | { ok: false; error: string } {
  const email = text(input.email, 254)?.toLowerCase();
  if (!email || !EMAIL_RE.test(email)) return { ok: false, error: 'Enter an email address like you@example.com.' };

  const username = text(input.username, 24)?.toLowerCase().replace(/^~/, '');
  if (username && !USERNAME_RE.test(username)) {
    return {
      ok: false,
      error: 'Usernames are 2 to 24 characters: lowercase letters, digits, - and _, starting with a letter.',
    };
  }

  return {
    ok: true,
    record: {
      at: new Date().toISOString(),
      source: input.source === 'terminal' ? 'terminal' : 'form',
      lang: input.lang === 'bn' ? 'bn' : 'en',
      email,
      name: text(input.name, 100),
      username,
      uses: keys(input.uses, USES),
      helps: keys(input.helps, HELPS),
      community: text(input.community, 140),
      city: text(input.city, 80),
      note: text(input.note, 2000),
    },
  };
}

const DATA_DIR = process.env.DATA_DIR ?? join(process.cwd(), 'data');

export async function save(record: InterestRecord) {
  await mkdir(DATA_DIR, { recursive: true });
  await appendFile(join(DATA_DIR, 'interest.jsonl'), JSON.stringify(record) + '\n', 'utf8');
}

// In-memory and per-process: enough to blunt a script hammering the endpoint.
// IP addresses are never written to disk.
const hits = new Map<string, number[]>();
export function limited(ip: string, max = 8, windowMs = 60 * 60 * 1000): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 10_000) hits.clear();
  return recent.length > max;
}
