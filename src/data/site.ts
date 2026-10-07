// Shared copy and lists. The API validates against USES and HELPS, so the form,
// the terminal demo and the stored records always agree on the same keys.

export const NAV = [
  { href: '/events/', label: 'Events' },
  { href: '/members/', label: 'Members' },
  { href: '/team/', label: 'Team' },
  { href: '/services/', label: 'Services' },
  { href: '/learn/', label: 'Learn' },
  { href: '/about/', label: 'About' },
] as const;

export const FOOTER = [
  {
    title: 'Community',
    links: [
      { href: '/events/', label: 'Events' },
      { href: '/members/', label: 'Members' },
      { href: '/services/', label: 'Services' },
      { href: '/learn/', label: 'Learn' },
      { href: '/logbook/', label: 'Logbook' },
    ],
  },
  {
    title: 'mukto.net',
    links: [
      { href: '/about/', label: 'About' },
      { href: '/team/', label: 'Team' },
      { href: '/support/', label: 'Support us' },
      { href: '/conduct/', label: 'Code of conduct' },
      { href: '/rules/', label: 'Rules' },
      { href: '/privacy/', label: 'Privacy' },
    ],
  },
] as const;

export const USES = {
  shell: 'A shell account and a ~/public_html web page',
  git: 'Git hosting for my projects',
  hosting: 'Hosting for an open-source or community project',
  compute: 'Databases, containers or compute to learn on',
  events: 'Meetups, hackathons and install-fests',
  learn: 'Guides, workshops and mentoring',
  oss: 'Contributing to open source with others',
} as const;

export const HELPS = {
  events: 'Organise events',
  teach: 'Teach or mentor',
  ops: 'Help run the servers',
  docs: 'Write or translate docs into Bangla',
  donate: 'Donate money once donations open',
  sponsor: 'Sponsor hardware, bandwidth or a venue',
} as const;

export type UseKey = keyof typeof USES;
export type HelpKey = keyof typeof HELPS;

export const PILLARS = [
  { verb: 'Gather', bn: 'আড্ডা', line: 'Monthly meetups and install-fests, in Dhaka and other cities.', lineBn: 'প্রতি মাসে আড্ডা আর ইনস্টল-ফেস্ট, ঢাকায় আর অন্য শহরে।', href: '/events/' },
  { verb: 'Learn', bn: 'শেখা', line: 'Free classes, and a mentor if you are just starting out.', lineBn: 'বিনা পয়সায় ক্লাস, আর একদম নতুন হলে একজন মেন্টর।', href: '/learn/' },
  { verb: 'Build', bn: 'গড়া', line: 'Help with your project, and people to build things with.', lineBn: 'আপনার প্রজেক্টে সাহায্য, আর একসাথে কিছু বানানোর লোক।', href: '/members/#projects' },
  { verb: 'Host', bn: 'ঘর', line: 'A server and a few tools the members look after together.', lineBn: 'সবাই মিলে দেখাশোনা করা একটা সার্ভার আর কয়েকটা টুল।', href: '/services/' },
] as const;

export const PHASES = [
  {
    n: 0,
    name: 'motd',
    status: 'done',
    summary: 'Name, a few principles and someone to run the server, agreed at the founding adda in June.',
    statusBn: 'হয়ে গেছে',
    summaryBn: 'জুনের প্রতিষ্ঠা আড্ডায় নাম, কয়েকটা নীতি আর সার্ভার কে চালাবে, ঠিক হয়েছে।',
  },
  {
    n: 1,
    name: 'first login',
    status: 'now',
    summary: 'Shell, web pages, git and chat, open to an invited first cohort. Public sign-ups next.',
    statusBn: 'এখন',
    summaryBn: 'আমন্ত্রিত প্রথম দলের জন্য শেল, ওয়েব পেজ, গিট আর চ্যাট চালু। এরপর সবার জন্য সাইন-আপ।',
  },
  {
    n: 2,
    name: 'userland',
    status: '2027',
    summary: 'Open sign-ups, project hosting and a local package mirror.',
    statusBn: '২০২৭',
    summaryBn: 'সবার জন্য সাইন-আপ, প্রজেক্ট হোস্টিং আর দেশি প্যাকেজ মিরর।',
  },
  {
    n: 3,
    name: 'services',
    status: 'when funded',
    summary: 'Databases, containers, storage and CI, once there is hardware and an ops rota to run them.',
    statusBn: 'অর্থ পেলে',
    summaryBn: 'হার্ডওয়্যার আর চালানোর লোক পেলে ডেটাবেস, কনটেইনার, স্টোরেজ আর CI।',
  },
] as const;

export type ServiceStatus = 'live' | 'beta' | 'planned';

export const SERVICES: { name: string; what: string; phase: number; status: ServiceStatus; address: string | null }[] = [
  { name: 'Shell account', what: 'SSH into a shared Debian server with editors, compilers and the usual tools.', phase: 1, status: 'beta', address: 'ssh you@mukto.net' },
  { name: 'Personal web page', what: 'Anything in ~/public_html is on the web.', phase: 1, status: 'beta', address: 'mukto.net/~you' },
  { name: 'Git forge', what: 'Repositories, issues and pull requests on Forgejo.', phase: 1, status: 'beta', address: 'git.mukto.net' },
  { name: 'Chat', what: 'IRC on the server, with a web client for people without one.', phase: 1, status: 'live', address: 'irc.mukto.net #adda' },
  { name: 'Project hosting', what: 'Static sites and small services for open-source and community projects.', phase: 2, status: 'planned', address: null },
  { name: 'Package mirror', what: 'Debian, Ubuntu and Arch mirrors over BDIX, so updates come from inside the country.', phase: 2, status: 'planned', address: null },
  { name: 'Databases', what: 'PostgreSQL to learn and build on, granted per project.', phase: 3, status: 'planned', address: null },
  { name: 'Containers and VMs', what: 'For projects that outgrow a shell account.', phase: 3, status: 'planned', address: null },
  { name: 'Storage and logging', what: 'S3-compatible object storage and a shared log stack.', phase: 3, status: 'planned', address: null },
  { name: 'CI runners', what: 'Build and test runners attached to the forge.', phase: 3, status: 'planned', address: null },
];
