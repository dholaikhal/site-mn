// SAMPLE DATA. Organisation facts, the public ledger and member projects.

export const ORG = {
  name: 'mukto.net',
  founded: '2026-06-13',
  serverUp: '2026-07-20',
  status: 'Volunteer-run, not-for-profit community association. Registration as a non-profit is planned for 2027.',
  hosting: 'Frankfurt, Germany',
  email: {
    hello: 'hello@mukto.net',
    conduct: 'conduct@mukto.net',
    security: 'security@mukto.net',
    treasurer: 'treasurer@mukto.net',
  },
} as const;

export interface Entry {
  date: string;
  what: string;
  amount: number; // BDT; income positive, spending negative
  kind: 'contribution' | 'hosting' | 'domain' | 'event' | 'print' | 'hardware';
}

export const LEDGER: Entry[] = [
  { date: '2026-06-13', what: 'Contributions at the founding adda (31 people)', amount: 12500, kind: 'contribution' },
  { date: '2026-06-13', what: 'Tea and snacks, founding adda', amount: -3800, kind: 'event' },
  { date: '2026-06-20', what: 'Domain renewal, mukto.net, 1 year', amount: -1550, kind: 'domain' },
  { date: '2026-07-05', what: 'Member contributions, July (22 people)', amount: 18000, kind: 'contribution' },
  { date: '2026-07-18', what: 'Server, Frankfurt, July', amount: -2700, kind: 'hosting' },
  { date: '2026-07-18', what: 'Off-site backup storage, July', amount: -600, kind: 'hosting' },
  { date: '2026-08-04', what: 'Member contributions, August (29 people)', amount: 22400, kind: 'contribution' },
  { date: '2026-08-06', what: '20 USB drives for the install-fest', amount: -9000, kind: 'hardware' },
  { date: '2026-08-08', what: 'Lunch and tea, install-fest', amount: -4200, kind: 'event' },
  { date: '2026-08-18', what: 'Server, Frankfurt, August', amount: -2700, kind: 'hosting' },
  { date: '2026-08-18', what: 'Off-site backup storage, August', amount: -600, kind: 'hosting' },
  { date: '2026-09-03', what: 'Member contributions, September (24 people)', amount: 15300, kind: 'contribution' },
  { date: '2026-09-12', what: '500 stickers and 200 cheat-sheets', amount: -3500, kind: 'print' },
  { date: '2026-09-18', what: 'Server, Frankfurt, September', amount: -2700, kind: 'hosting' },
  { date: '2026-09-18', what: 'Off-site backup storage, September', amount: -600, kind: 'hosting' },
  { date: '2026-09-19', what: 'Tea and snacks, Software Freedom Day', amount: -3900, kind: 'event' },
];

export const IN_KIND = [
  { from: 'A member\'s family', what: 'Rooftop in Dhanmondi for the founding adda and Software Freedom Day' },
  { from: 'A university department, Mohakhali', what: 'Computer lab for the install-fest, one Saturday' },
  { from: 'A co-working space, Agrabad', what: 'Meeting room for the Chattogram self-hosting meetup' },
  { from: 'shutki_daemon', what: 'The first month of server rent, before the ledger existed' },
];

export function ledgerTotals(entries = LEDGER) {
  const income = entries.filter((e) => e.amount > 0).reduce((s, e) => s + e.amount, 0);
  const spent = entries.filter((e) => e.amount < 0).reduce((s, e) => s - e.amount, 0);
  return { income, spent, balance: income - spent };
}

export function taka(n: number) {
  return '৳' + Math.abs(n).toLocaleString('en-IN');
}

export interface Project {
  repo: string;
  lang: string;
  what: string;
}

export const PROJECTS: Project[] = [
  { repo: 'labiba/bn-man', lang: 'roff', what: 'Bangla translations of the 40 man pages beginners read first.' },
  { repo: 'prottoy/shell-saturday', lang: 'Markdown', what: 'Handouts and exercises for every Shell Saturday, CC BY-SA.' },
  { repo: 'bdix_bhai/mirror-status', lang: 'Go', what: 'Which Linux mirrors are reachable over BDIX right now, and how fast.' },
  { repo: 'anika/khulna-aqi', lang: 'Python', what: 'Hourly air quality for Khulna, scraped and charted on a ~user page.' },
  { repo: 'loadshedding/outage-log', lang: 'Shell', what: 'Logs power cuts from your UPS and plots them by neighbourhood.' },
  { repo: 'tasnim/dhaka-rent', lang: 'CSV', what: 'Asking rents for 3,100 Dhaka flats, collected by hand, open data.' },
];

// While members, team, events and the ledger are sample data, every page says
// so in the footer. Set to false once they are real.
export const SAMPLE_DATA = true;
