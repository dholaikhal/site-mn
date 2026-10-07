// SAMPLE DATA. The interim executive committee and working groups. Every
// username here must exist in members.ts; taglines are written as if by each
// person about themselves. `photo` takes a path under /public once real
// photos exist; until then the avatar spec draws one.

import type { Face } from '../lib/avatar';

export type Avatar =
  | { kind: 'face'; face: Face }
  | { kind: 'tux'; bg: string }
  | { kind: 'cat'; bg: string; fur: string }
  | { kind: 'monogram'; text: string; bg: string };

export interface Officer {
  user: string;
  name?: string; // omitted when the person goes by their handle only
  role: string;
  roleBn: string;
  tagline: string;
  avatar: Avatar;
  photo?: string;
  pgp?: string;
}

const SKIN = { a: '#c68a5b', b: '#a8693f', c: '#8a5530', d: '#d9a27a', e: '#b67b4e' };

export const COMMITTEE: Officer[] = [
  {
    user: 'farhana',
    name: 'Farhana Rahman',
    role: 'Convener',
    roleBn: 'আহ্বায়ক',
    tagline: 'আমার কাজ মিটিং ছোট রাখা। এখনো পারিনি।',
    avatar: { kind: 'face', face: { skin: SKIN.a, hair: 'long', shirt: '#2f5d8a', bg: '#dfe7ef', glasses: true } },
    pgp: '7A3F 91C2 0D4E 55B8',
  },
  {
    user: 'tanvir',
    name: 'Tanvir Ahmed',
    role: 'General secretary',
    roleBn: 'সাধারণ সম্পাদক',
    tagline: 'Minutes, agendas and the AGM paperwork this year. Write to me if a decision is missing from the logbook.',
    avatar: { kind: 'face', face: { skin: SKIN.b, hair: 'short', beard: 'stubble', shirt: '#3f4a3c', bg: '#e6e2d6' } },
  },
  {
    user: 'arpita',
    name: 'Arpita Saha',
    role: 'Treasurer',
    roleBn: 'কোষাধ্যক্ষ',
    tagline: 'Spreadsheet er moto boring, kintu shob hishab member der jonno khola.',
    avatar: { kind: 'face', face: { skin: SKIN.d, hair: 'bun', shirt: '#7a3e6b', bg: '#efe1e8' } },
  },
  {
    user: 'shutki_daemon',
    role: 'Infrastructure lead',
    roleBn: 'অবকাঠামো প্রধান',
    tagline: "debian, nginx, forgejo, backups. i'd rather keep my face off the internet, hence the penguin.",
    avatar: { kind: 'tux', bg: '#e4ece6' },
  },
  {
    user: 'kalbaishakhi',
    role: 'Security and abuse',
    roleBn: 'নিরাপত্তা ও অপব্যবহার রোধ',
    tagline: 'Send security problems to me, encrypted if you can. I answer within a day or two.',
    avatar: { kind: 'monogram', text: 'kb', bg: '#1f2a2e' },
  },
  {
    user: 'sabbir',
    name: 'Sabbir Hossain',
    role: 'Events',
    roleBn: 'ইভেন্ট',
    tagline: 'I find rooms. If yours is free on a Saturday afternoon, please call me.',
    avatar: { kind: 'face', face: { skin: SKIN.c, hair: 'short', beard: 'moustache', shirt: '#a1452f', bg: '#f0e3dc' } },
  },
  {
    user: 'nusrat',
    name: 'Nusrat Jahan',
    role: 'Community and conduct',
    roleBn: 'কমিউনিটি ও আচরণবিধি',
    tagline: 'If something at an event or on IRC made you uncomfortable, tell me. It stays between us.',
    avatar: { kind: 'face', face: { skin: SKIN.e, hair: 'hijab', hairColor: '#2c5f55', shirt: '#2c5f55', bg: '#e1ece9' } },
  },
  {
    user: 'prottoy',
    name: 'Prottoy Das',
    role: 'Learning and docs',
    roleBn: 'শিক্ষা ও ডকুমেন্টেশন',
    tagline: 'লিনাক্স শিখেছি সিস্টেম ভেঙে ভেঙে। এখন চাই অন্যরা একটু কম ভাঙুক।',
    avatar: { kind: 'face', face: { skin: SKIN.b, hair: 'side', glasses: true, beard: 'moustache', shirt: '#0f766e', bg: '#dcefec' } },
  },
  {
    user: 'labiba',
    name: 'Labiba Chowdhury',
    role: 'Bangla localisation',
    roleBn: 'বাংলা স্থানীয়করণ',
    tagline: 'We argued for three days about the Bangla for "Save". I won.',
    avatar: { kind: 'cat', bg: '#ece6da', fur: '#d08a3c' },
  },
  {
    user: 'bdix_bhai',
    name: 'Raihan',
    role: 'Outreach and partnerships',
    roleBn: 'যোগাযোগ ও অংশীদারিত্ব',
    tagline: 'Working on a BDIX mirror so apt update stops taking ten minutes.',
    avatar: { kind: 'face', face: { skin: SKIN.a, hair: 'short', beard: 'stubble', shirt: '#4b5563', bg: '#e5e7ea' } },
  },
];

export interface Group {
  name: string;
  does: string;
  lead: string;
  members: string[];
  meets: string;
}

export const GROUPS: Group[] = [
  {
    name: 'Infrastructure',
    does: 'Runs the server, the forge, chat and backups. Keeps the on-call rota.',
    lead: 'shutki_daemon',
    members: ['kalbaishakhi', 'zubair', 'ishrak', 'pagla_kernel', 'fuchka_fs', 'ctg_root'],
    meets: 'Tuesdays, 22:00, #ops',
  },
  {
    name: 'Events',
    does: 'Finds rooms, plans sessions, runs the calendar and the stream.',
    lead: 'sabbir',
    members: ['tokai', 'kacchi_overflow', 'sadia', 'rajshahi_aam', 'orpa', 'ctg_root', 'anika'],
    meets: 'Every other Thursday, 21:30, #events',
  },
  {
    name: 'Docs and localisation',
    does: 'Writes guides and handouts, translates interfaces and docs into Bangla.',
    lead: 'labiba',
    members: ['prottoy', 'mithila', 'borsha', 'jannat', 'tasnim'],
    meets: 'Saturdays after Shell Saturday, #docs',
  },
  {
    name: 'Conduct',
    does: 'Handles reports under the code of conduct, and answers to the general assembly.',
    lead: 'nusrat',
    members: ['thowai', 'nafis'],
    meets: 'When there is a report, within 72 hours',
  },
  {
    name: 'Outreach',
    does: 'Talks to universities, ISPs, sponsors and other communities.',
    lead: 'bdix_bhai',
    members: ['rifat', 'tahsin', 'rakib'],
    meets: 'Monthly, first Sunday',
  },
];
