// SAMPLE DATA. Events and recurring programmes. Times are Bangladesh Standard
// Time (UTC+6). Past events carry attendance; upcoming ones carry RSVPs.

export type Kind = 'meetup' | 'workshop' | 'sprint' | 'install-fest' | 'assembly';

export interface Event {
  slug: string;
  title: string;
  kind: Kind;
  programme?: string;
  start: string; // ISO with +06:00
  end: string;
  city: string;
  venue: string;
  online: boolean;
  summary: string;
  bring?: string[];
  agenda?: [time: string, item: string][];
  hosts: string[]; // usernames
  capacity?: number;
  rsvps?: number;
  attended?: number;
  recap?: string;
}

export const EVENTS: Event[] = [
  {
    slug: 'founding-adda',
    title: 'Founding adda',
    kind: 'assembly',
    start: '2026-06-13T16:00:00+06:00',
    end: '2026-06-13T19:30:00+06:00',
    city: 'Dhaka',
    venue: 'Dhanmondi, a borrowed rooftop',
    online: false,
    summary: 'Thirty-eight people on a rooftop deciding whether a Bangladeshi pubnix was worth doing.',
    hosts: ['farhana', 'shutki_daemon'],
    attended: 38,
    recap: 'Agreed the name, the principles and an interim committee of ten. Shutki_daemon offered a server; it went live five weeks later.',
  },
  {
    slug: 'shell-saturday-1',
    title: 'Shell Saturday #1: getting around',
    kind: 'workshop',
    programme: 'shell-saturday',
    start: '2026-07-18T15:00:00+06:00',
    end: '2026-07-18T18:00:00+06:00',
    city: 'Online',
    venue: 'Jitsi, streamed to the archive',
    online: true,
    summary: 'cd, ls, man and the five commands you will type a thousand times.',
    hosts: ['prottoy'],
    attended: 112,
    recap: '112 people at peak. The recording and handout are in Learn.',
  },
  {
    slug: 'install-fest-aug',
    title: 'Linux install-fest',
    kind: 'install-fest',
    start: '2026-08-08T10:00:00+06:00',
    end: '2026-08-08T17:00:00+06:00',
    city: 'Dhaka',
    venue: 'Mohakhali, a university lab (host asked not to be named)',
    online: false,
    summary: 'Bring a laptop, leave with Linux on it and someone to call when it breaks.',
    hosts: ['sabbir', 'tokai', 'rifat'],
    attended: 71,
    recap: '64 laptops installed and 5 broken dual-boots fixed. Ubuntu on most, Fedora on 9, Debian on 4.',
  },
  {
    slug: 'shell-saturday-2',
    title: 'Shell Saturday #2: files, permissions, editors',
    kind: 'workshop',
    programme: 'shell-saturday',
    start: '2026-08-15T15:00:00+06:00',
    end: '2026-08-15T18:00:00+06:00',
    city: 'Online',
    venue: 'Jitsi, streamed to the archive',
    online: true,
    summary: 'chmod without fear, nano for today and vim for later.',
    hosts: ['prottoy', 'borsha'],
    attended: 76,
    recap: 'Fewer people than #1, more questions. September skipped for Software Freedom Day.',
  },
  {
    slug: 'self-hosting-ctg-1',
    title: 'Self-hosting meetup #1',
    kind: 'meetup',
    start: '2026-08-22T17:00:00+06:00',
    end: '2026-08-22T20:00:00+06:00',
    city: 'Chattogram',
    venue: 'Agrabad, a co-working space',
    online: false,
    summary: 'Show what you run at home and what broke along the way.',
    hosts: ['ctg_root', 'nusrat'],
    attended: 29,
    recap: 'Nine lightning demos. Notes and slides are on the forge under ctg_root/selfhost-1.',
  },
  {
    slug: 'software-freedom-day',
    title: 'Software Freedom Day adda',
    kind: 'meetup',
    start: '2026-09-19T15:00:00+06:00',
    end: '2026-09-19T19:00:00+06:00',
    city: 'Dhaka',
    venue: 'Dhanmondi, the same rooftop',
    online: false,
    summary: 'Talks on free software in Bangladeshi schools, then a GPG key-signing.',
    hosts: ['farhana', 'kalbaishakhi'],
    attended: 54,
    recap: '31 keys signed. The power went at 6:10 and the talks carried on by phone torch.',
  },
  {
    slug: 'shell-saturday-3',
    title: 'Shell Saturday #3: pipes and your first script',
    kind: 'workshop',
    programme: 'shell-saturday',
    start: '2026-10-17T15:00:00+06:00',
    end: '2026-10-17T18:00:00+06:00',
    city: 'Dhaka',
    venue: 'Dhanmondi, address on RSVP. Also streamed.',
    online: true,
    summary: 'Pipes, redirection, grep, and a first shell script that backs up your web page.',
    bring: ['A laptop with an SSH key (or come early and we will help)', 'A mukto.net account, or ask for a guest one at the door'],
    agenda: [
      ['15:00', 'Tea, setup help'],
      ['15:30', 'Pipes and redirection, live on the shared server'],
      ['16:30', 'grep, sort, uniq: questions from real log files'],
      ['17:15', 'Write a script that backs up your ~/public_html'],
      ['17:50', 'Next month, and where to go from here'],
    ],
    hosts: ['prottoy', 'sadia'],
    capacity: 60,
    rsvps: 47,
  },
  {
    slug: 'first-pr-night-hacktoberfest',
    title: 'First PR night: Hacktoberfest close-out',
    kind: 'sprint',
    programme: 'first-pr',
    start: '2026-10-30T18:00:00+06:00',
    end: '2026-10-30T22:00:00+06:00',
    city: 'Dhaka',
    venue: 'Online and at Mohakhali',
    online: true,
    summary: 'Last day of Hacktoberfest. Find a good first issue, open a pull request before 22:00.',
    bring: ['A GitHub, GitLab or Codeberg account', 'git installed and configured'],
    agenda: [
      ['18:00', 'Picking an issue: how to read a CONTRIBUTING file'],
      ['18:30', 'Heads down, mentors walking around'],
      ['21:30', 'Show your PR, even if it is one line'],
    ],
    hosts: ['nafis', 'zubair', 'kacchi_overflow'],
    capacity: 40,
    rsvps: 38,
  },
  {
    slug: 'l10n-sprint-nov',
    title: 'Bangla localisation sprint: GNOME',
    kind: 'sprint',
    programme: 'l10n',
    start: '2026-11-07T14:00:00+06:00',
    end: '2026-11-07T19:00:00+06:00',
    city: 'Online',
    venue: 'Jitsi and #docs',
    online: true,
    summary: 'Translate and review GNOME interface strings together, with reviewers on hand.',
    agenda: [
      ['14:00', 'How Damned Lies and the GNOME l10n workflow work'],
      ['14:30', 'Translate in pairs'],
      ['17:30', 'Review queue and glossary arguments'],
    ],
    hosts: ['labiba', 'mithila'],
    capacity: 30,
    rsvps: 17,
  },
  {
    slug: 'self-hosting-dhaka-2',
    title: 'Self-hosting meetup #2',
    kind: 'meetup',
    start: '2026-11-20T17:00:00+06:00',
    end: '2026-11-20T20:00:00+06:00',
    city: 'Dhaka',
    venue: 'Banani, venue to be confirmed',
    online: false,
    summary: 'Home servers, cheap VPSes and backups that actually restore. Lightning demos welcome.',
    hosts: ['ishrak', 'pagla_kernel'],
    capacity: 45,
    rsvps: 21,
  },
  {
    slug: 'install-fest-rajshahi',
    title: 'Install-fest, Rajshahi',
    kind: 'install-fest',
    start: '2026-12-05T10:00:00+06:00',
    end: '2026-12-05T16:00:00+06:00',
    city: 'Rajshahi',
    venue: 'Campus lab, confirmed with the host department',
    online: false,
    summary: 'Our first install-fest outside Dhaka. Students first, everyone welcome.',
    hosts: ['tahsin', 'rajshahi_aam', 'sabbir'],
    capacity: 50,
    rsvps: 12,
  },
  {
    slug: 'agm-2026',
    title: 'Annual general meeting 2026',
    kind: 'assembly',
    start: '2026-12-19T15:00:00+06:00',
    end: '2026-12-19T18:00:00+06:00',
    city: 'Dhaka',
    venue: 'Venue to be announced. Remote voting for members.',
    online: true,
    summary: 'Every member votes: the first elected committee, the constitution and the 2027 budget.',
    agenda: [
      ['15:00', "Convener's and treasurer's reports"],
      ['15:45', 'Constitution: amendments and adoption'],
      ['16:30', 'Election of the executive committee'],
      ['17:30', '2027 budget and plan'],
    ],
    hosts: ['tanvir', 'farhana'],
  },
];

export interface Programme {
  id: string;
  name: string;
  cadence: string;
  where: string;
  what: string;
}

export const PROGRAMMES: Programme[] = [
  {
    id: 'shell-saturday',
    name: 'Shell Saturday',
    cadence: 'Third Saturday, monthly',
    where: 'Dhaka and online',
    what: 'A three-hour hands-on class on the shared server. Starts from zero; each month builds on the last.',
  },
  {
    id: 'first-pr',
    name: 'First PR night',
    cadence: 'Last Friday, monthly',
    where: 'Online, sometimes Mohakhali',
    what: 'Pick a good first issue, get unstuck with a mentor, open a pull request the same night.',
  },
  {
    id: 'l10n',
    name: 'Bangla localisation sprint',
    cadence: 'Quarterly',
    where: 'Online',
    what: 'Translate and review the interfaces and docs of free software projects, in pairs.',
  },
  {
    id: 'ops',
    name: 'Ops apprenticeship',
    cadence: 'Rolling, 3 months',
    where: 'On the server',
    what: 'Shadow the infrastructure group, take a supervised on-call shift, earn sudo.',
  },
];

export const now = new Date('2026-10-07T12:00:00+06:00');
// Build-time "today". Kept fixed so the sample data stays coherent; switch to
// `new Date()` once events are real.

export const upcoming = EVENTS.filter((e) => new Date(e.end) >= now).sort((a, b) => a.start.localeCompare(b.start));
export const past = EVENTS.filter((e) => new Date(e.end) < now).sort((a, b) => b.start.localeCompare(a.start));
