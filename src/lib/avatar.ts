// Avatars drawn at build time as inline SVG, so there are no image requests and
// no third-party avatar service sees who visits which profile.

function hash(s: string): number {
  let h = 2166136261;
  for (const c of s) h = Math.imul(h ^ c.codePointAt(0)!, 16777619);
  return h >>> 0;
}

const INK = ['#00684b', '#2f5d8a', '#8a5a1f', '#7a3e6b', '#3f6b2a', '#a1452f', '#4b5563', '#0f766e'];

/** GitHub-style 5×5 mirrored identicon. */
export function identicon(seed: string, size = 40): string {
  const h = hash(seed);
  const color = INK[h % INK.length];
  let cells = '';
  for (let i = 0; i < 15; i++) {
    if (!((h >>> (i + 3)) & 1)) continue;
    const col = Math.floor(i / 5);
    const row = i % 5;
    for (const x of new Set([col, 4 - col])) cells += `<rect x="${x + 1}" y="${row + 1}" width="1" height="1"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="${size}" height="${size}" aria-hidden="true" shape-rendering="crispEdges"><rect width="7" height="7" fill="${color}" opacity=".12"/><g fill="${color}">${cells}</g></svg>`;
}

export interface Face {
  skin: string;
  hair: 'short' | 'side' | 'long' | 'bun' | 'curly' | 'buzz' | 'hijab' | 'none';
  hairColor?: string;
  beard?: 'full' | 'stubble' | 'moustache';
  glasses?: boolean;
  shirt: string;
  bg: string;
}

/** A small flat portrait. Deliberately plain: it stands in until a real photo is added. */
export function face(f: Face, size = 96): string {
  const hc = f.hairColor ?? '#1d1a17';
  const parts: string[] = [];
  parts.push(`<rect width="96" height="96" fill="${f.bg}"/>`);
  if (f.hair === 'long') parts.push(`<path d="M26 44c0-18 10-28 22-28s22 10 22 28v34H26z" fill="${hc}"/>`);
  if (f.hair === 'hijab') parts.push(`<path d="M22 96V52c0-20 12-34 26-34s26 14 26 34v44z" fill="${hc}"/>`);
  parts.push(`<path d="M14 96c2-16 16-24 34-24s32 8 34 24z" fill="${f.shirt}"/>`);
  if (f.hair !== 'hijab') parts.push(`<rect x="42" y="58" width="12" height="16" rx="5" fill="${f.skin}"/>`);
  parts.push(`<ellipse cx="48" cy="44" rx="17" ry="20" fill="${f.skin}"/>`);
  if (f.hair === 'hijab') parts.push(`<path d="M30 46c0-16 8-25 18-25s18 9 18 25c0-6-2-12-6-15-4 3-8 4-12 4s-8-1-12-4c-4 3-6 9-6 15z" fill="${hc}"/>`);
  if (f.hair === 'short' || f.hair === 'long' || f.hair === 'bun')
    parts.push(`<path d="M31 42c-1-14 7-22 17-22s18 8 17 22c-3-7-9-11-17-11s-14 4-17 11z" fill="${hc}"/>`);
  if (f.hair === 'side') parts.push(`<path d="M31 43c-2-15 7-23 18-23 10 0 17 7 16 21-6-8-15-11-25-9-4 2-7 6-9 11z" fill="${hc}"/>`);
  if (f.hair === 'buzz') parts.push(`<path d="M32 38c1-11 8-17 16-17s15 6 16 17c-4-5-10-7-16-7s-12 2-16 7z" fill="${hc}" opacity=".85"/>`);
  if (f.hair === 'curly')
    parts.push(
      [[34, 30], [41, 24], [49, 22], [57, 25], [63, 31], [31, 38], [65, 38]]
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6.5" fill="${hc}"/>`)
        .join(''),
    );
  if (f.hair === 'bun') parts.push(`<circle cx="48" cy="18" r="7" fill="${hc}"/>`);
  parts.push(`<circle cx="41.5" cy="45" r="1.8" fill="#1d1a17"/><circle cx="54.5" cy="45" r="1.8" fill="#1d1a17"/>`);
  parts.push(`<path d="M43 54q5 3.5 10 0" stroke="#1d1a17" stroke-width="1.6" fill="none" stroke-linecap="round"/>`);
  if (f.beard === 'full') parts.push(`<path d="M31 46c1 14 8 22 17 22s16-8 17-22c-2 6-5 9-8 9-3-2-6-3-9-3s-6 1-9 3c-3 0-6-3-8-9z" fill="${hc}"/>`);
  if (f.beard === 'stubble') parts.push(`<path d="M33 50c2 10 8 16 15 16s13-6 15-16c-3 5-6 8-9 8h-12c-3 0-6-3-9-8z" fill="${hc}" opacity=".35"/>`);
  if (f.beard === 'moustache') parts.push(`<path d="M41 51q7-3 14 0q-7 2-14 0z" fill="${hc}"/>`);
  if (f.glasses)
    parts.push(
      `<g fill="none" stroke="#1d1a17" stroke-width="1.6"><circle cx="41.5" cy="45" r="5.5"/><circle cx="54.5" cy="45" r="5.5"/><path d="M47 45h2"/></g>`,
    );
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="${size}" height="${size}" aria-hidden="true">${parts.join('')}</svg>`;
}

/** The penguin on a terminal: for people who'd rather not have a face online. */
export function tux(bg: string, size = 96): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="${size}" height="${size}" aria-hidden="true"><rect width="96" height="96" fill="${bg}"/><ellipse cx="48" cy="58" rx="22" ry="27" fill="#1d1a17"/><ellipse cx="48" cy="62" rx="14" ry="20" fill="#f4f4f0"/><circle cx="48" cy="32" r="15" fill="#1d1a17"/><ellipse cx="43" cy="31" rx="4" ry="5" fill="#f4f4f0"/><ellipse cx="53" cy="31" rx="4" ry="5" fill="#f4f4f0"/><circle cx="43.5" cy="32" r="1.8" fill="#1d1a17"/><circle cx="52.5" cy="32" r="1.8" fill="#1d1a17"/><path d="M42 38q6 6 12 0q-6 3-12 0z" fill="#e8a317"/><ellipse cx="38" cy="86" rx="8" ry="3.5" fill="#e8a317"/><ellipse cx="58" cy="86" rx="8" ry="3.5" fill="#e8a317"/></svg>`;
}

/** A cat, because there's always one. */
export function cat(bg: string, fur: string, size = 96): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="${size}" height="${size}" aria-hidden="true"><rect width="96" height="96" fill="${bg}"/><path d="M24 40 28 16l14 14h12l14-14 4 24c4 6 5 12 4 18-2 16-15 26-28 26S22 74 20 58c-1-6 0-12 4-18z" fill="${fur}"/><ellipse cx="38" cy="50" rx="4" ry="5" fill="#d9e05a"/><ellipse cx="58" cy="50" rx="4" ry="5" fill="#d9e05a"/><ellipse cx="38" cy="50" rx="1.4" ry="4" fill="#1d1a17"/><ellipse cx="58" cy="50" rx="1.4" ry="4" fill="#1d1a17"/><path d="M45 60h6l-3 3z" fill="#d98c8c"/><path d="M48 63v3m0 0q-4 4-8 1m8-1q4 4 8 1" stroke="#1d1a17" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>`;
}

/** Initials on a colour, like a default chat avatar. */
export function monogram(text: string, bg: string, fg = '#ffffff', size = 96): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="${size}" height="${size}" aria-hidden="true"><rect width="96" height="96" fill="${bg}"/><text x="48" y="61" text-anchor="middle" font-family="Iosevka, ui-monospace, monospace" font-size="38" font-weight="700" fill="${fg}">${text}</text></svg>`;
}
