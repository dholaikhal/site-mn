// SAMPLE DATA. The admins: the handful of people who run the server and the
// events. Every username must exist in members.ts. Taglines are written as if
// by each person. `photo` takes a path under /public; without one, the avatar
// spec is drawn.

import type { Face } from '../lib/avatar';

export type Avatar =
  | { kind: 'face'; face: Face }
  | { kind: 'tux'; bg: string }
  | { kind: 'cat'; bg: string; fur: string }
  | { kind: 'monogram'; text: string; bg: string }
  | { kind: 'landscape' }
  | { kind: 'pixel'; color: string; bg: string };

export interface Admin {
  user: string;
  name?: string; // omitted when the person goes by their handle only
  does: string;
  doesBn: string;
  tagline: string;
  avatar: Avatar;
  photo?: string;
}

const SKIN = { a: '#c68a5b', b: '#a8693f', c: '#8a5530' };

export const ADMINS: Admin[] = [
  {
    user: 'farhana',
    name: 'Farhana Rahman',
    does: 'Started it, keeps it going',
    doesBn: 'শুরু করেছেন, চালিয়ে নিচ্ছেন',
    tagline: 'আমার কাজ মিটিং ছোট রাখা। এখনো পারিনি।',
    avatar: { kind: 'face', face: { skin: SKIN.a, hair: 'long', shirt: '#2f5d8a', bg: '#dfe7ef', glasses: true } },
  },
  {
    user: 'shutki_daemon',
    does: 'Server',
    doesBn: 'সার্ভার',
    tagline: "debian, nginx, forgejo, backups. i'd rather keep my face off the internet, hence the penguin.",
    avatar: { kind: 'tux', bg: '#e4ece6' },
  },
  {
    user: 'kalbaishakhi',
    does: 'Server and security',
    doesBn: 'সার্ভার ও নিরাপত্তা',
    tagline: 'Send security problems to me, encrypted if you can. I answer within a day or two.',
    avatar: { kind: 'pixel', color: '#2f5d8a', bg: '#dfe6ee' },
  },
  {
    user: 'sabbir',
    name: 'Sabbir Hossain',
    does: 'Events',
    doesBn: 'ইভেন্ট',
    tagline: 'I find rooms. If yours is free on a Saturday afternoon, please call me.',
    avatar: { kind: 'face', face: { skin: SKIN.c, hair: 'short', beard: 'moustache', shirt: '#a1452f', bg: '#f0e3dc' } },
  },
  {
    user: 'nusrat',
    name: 'Nusrat Jahan',
    does: 'Code of conduct',
    doesBn: 'আচরণবিধি',
    tagline: 'If something at an event or on IRC made you uncomfortable, tell me. It stays between us.',
    avatar: { kind: 'landscape' },
  },
  {
    user: 'prottoy',
    name: 'Prottoy Das',
    does: 'Shell Saturday and guides',
    doesBn: 'শেল স্যাটারডে আর গাইড',
    tagline: 'লিনাক্স শিখেছি সিস্টেম ভেঙে ভেঙে। এখন চাই অন্যরা একটু কম ভাঙুক।',
    avatar: { kind: 'face', face: { skin: SKIN.b, hair: 'side', glasses: true, beard: 'moustache', shirt: '#0f766e', bg: '#dcefec' } },
  },
];
