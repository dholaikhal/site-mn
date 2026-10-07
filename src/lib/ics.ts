import type { Event } from '../data/events';

const stamp = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/[,;]/g, (c) => `\\${c}`).replace(/\n/g, '\\n');

// RFC 5545 wants lines folded at 75 octets.
function fold(line: string) {
  const out: string[] = [];
  let rest = line;
  while (new TextEncoder().encode(rest).length > 75) {
    let cut = 75;
    while (new TextEncoder().encode(rest.slice(0, cut)).length > 75) cut--;
    out.push(rest.slice(0, cut));
    rest = ' ' + rest.slice(cut);
  }
  out.push(rest);
  return out.join('\r\n');
}

export function ics(events: Event[], site: URL) {
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//mukto.net//events//EN', 'CALSCALE:GREGORIAN', 'X-WR-CALNAME:mukto.net'];
  for (const e of events) {
    lines.push(
      'BEGIN:VEVENT',
      `UID:${e.slug}@mukto.net`,
      `DTSTAMP:${stamp(e.start)}`,
      `DTSTART:${stamp(e.start)}`,
      `DTEND:${stamp(e.end)}`,
      `SUMMARY:${esc(e.title)}`,
      `DESCRIPTION:${esc(e.summary)}`,
      `LOCATION:${esc(`${e.venue}, ${e.city}`)}`,
      `URL:${new URL(`/events/${e.slug}/`, site)}`,
      'END:VEVENT',
    );
  }
  lines.push('END:VCALENDAR');
  return lines.map(fold).join('\r\n') + '\r\n';
}
