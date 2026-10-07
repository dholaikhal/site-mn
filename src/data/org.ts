// SAMPLE DATA. Organisation facts and member projects.

export const ORG = {
  name: 'mukto.net',
  founded: '2026-06-13',
  serverUp: '2026-07-20',
  status: 'A volunteer-run community. Nobody is paid and nothing is sold.',
  hosting: 'Badda, Dhaka',
  email: {
    hello: 'hello@mukto.net',
    conduct: 'conduct@mukto.net',
    security: 'security@mukto.net',
  },
} as const;

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
export const SAMPLE_DATA = false;
