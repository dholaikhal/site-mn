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

export type Topic = 'bangla' | 'data' | 'tools' | 'learning' | 'infra' | 'fun';

export const TOPICS: Record<Topic, string> = {
  bangla: 'Bangla',
  learning: 'Learning',
  data: 'Open data',
  tools: 'Tools',
  infra: 'Running the server',
  fun: 'Just for fun',
};

export interface Project {
  repo: string; // owner/name on git.mukto.net; owner must exist in members.ts
  what: string;
  lang: string;
  license: string;
  topic: Topic;
  with?: string[]; // other contributors, also members
  updated: string; // YYYY-MM-DD, no later than the build-time "today" in events.ts
  featured?: boolean; // shown on the home page
}

export const PROJECTS: Project[] = [
  { repo: 'shutki_daemon/mukto-infra', what: 'Ansible for the whole server: accounts, nginx, Forgejo, IRC, backups. If it runs on mukto.net, it is in here.', lang: 'YAML', license: 'GPL-3.0', topic: 'infra', with: ['kalbaishakhi', 'ishrak', 'zubair'], updated: '2026-10-02', featured: true },
  { repo: 'kalbaishakhi/jail-rules', what: 'The fail2ban filters and nftables rules we run, with notes on what each one caught.', lang: 'Shell', license: 'MIT', topic: 'infra', updated: '2026-09-21' },
  { repo: 'zubair/oncall-handbook', what: 'What to do when the server pages you at 3am. Written for the ops apprentices.', lang: 'Markdown', license: 'CC BY 4.0', topic: 'infra', with: ['shutki_daemon'], updated: '2026-09-30' },
  { repo: 'labiba/bn-man', what: 'Bangla translations of the 40 man pages beginners open first. 23 done.', lang: 'roff', license: 'GPL-2.0', topic: 'bangla', with: ['prottoy', 'mithila'], updated: '2026-10-05', featured: true },
  { repo: 'labiba/bn-glossary', what: 'The words we settled on for translating interfaces, 640 so far, with the arguments that got us there.', lang: 'CSV', license: 'CC BY-SA 4.0', topic: 'bangla', with: ['mithila', 'borsha'], updated: '2026-10-01' },
  { repo: 'mithila/bn-cite', what: 'Bookmarklet that turns a Bangla newspaper article into a ready-made bn.wikipedia citation.', lang: 'JavaScript', license: 'MIT', topic: 'bangla', updated: '2026-09-12' },
  { repo: 'rakib/qmk-bangla', what: 'A Bangla phonetic layer for 60% keyboards running QMK.', lang: 'C', license: 'GPL-2.0', topic: 'bangla', updated: '2026-09-27' },
  { repo: 'prottoy/shell-saturday', what: 'Handouts and exercises for every Shell Saturday, in Bangla and English.', lang: 'Markdown', license: 'CC BY-SA 4.0', topic: 'learning', with: ['sadia', 'borsha'], updated: '2026-10-06', featured: true },
  { repo: 'prottoy/broken-vm', what: 'A virtual machine that boots with twelve things wrong. Fix all twelve and you have finished the course.', lang: 'Shell', license: 'MIT', topic: 'learning', updated: '2026-09-18' },
  { repo: 'ctg_root/selfhost-1', what: 'Slides and notes from the first Chattogram self-hosting meetup.', lang: 'Markdown', license: 'CC BY-SA 4.0', topic: 'learning', with: ['nusrat'], updated: '2026-08-24' },
  { repo: 'sadia/first-site', what: 'My first website, kept exactly as it was. Pull requests that make it worse are welcome.', lang: 'HTML', license: 'CC0', topic: 'learning', updated: '2026-08-03' },
  { repo: 'tasnim/dhaka-rent', what: 'Asking rents for 3,100 Dhaka flats, collected by hand from listings and to-let signs.', lang: 'CSV', license: 'ODbL', topic: 'data', updated: '2026-10-04', featured: true },
  { repo: 'anika/khulna-aqi', what: 'Hourly air quality readings for Khulna, scraped and charted on a ~user page.', lang: 'Python', license: 'MIT', topic: 'data', updated: '2026-10-07', featured: true },
  { repo: 'dhakaiya/mirpur-routes', what: 'Bus routes through Mirpur 10, traced by riding them. 14 of about 40 done.', lang: 'GeoJSON', license: 'ODbL', topic: 'data', with: ['tasnim'], updated: '2026-09-29' },
  { repo: 'loadshedding/outage-log', what: 'Logs power cuts from your IPS or UPS and plots them by neighbourhood.', lang: 'Shell', license: 'MIT', topic: 'data', with: ['raihan_k'], updated: '2026-09-25', featured: true },
  { repo: 'bdix_bhai/mirror-status', what: 'Which Linux mirrors are reachable over BDIX right now, and how fast.', lang: 'Go', license: 'MIT', topic: 'tools', updated: '2026-10-03' },
  { repo: 'raihan_k/ips-monitor', what: 'ESP32 board that reads your IPS battery level and posts it to outage-log.', lang: 'C++', license: 'MIT', topic: 'tools', with: ['loadshedding'], updated: '2026-09-26' },
  { repo: 'thowai/ctg-bus', what: 'Android app for Chattogram city bus fares and stops. Works offline.', lang: 'Kotlin', license: 'GPL-3.0', topic: 'tools', updated: '2026-09-15' },
  { repo: 'kacchi_overflow/biryani-bot', what: 'The bot in #adda. !next shows the next event, !seen finds people, !kacchi settles arguments.', lang: 'Python', license: 'MIT', topic: 'tools', with: ['tokai'], updated: '2026-10-06' },
  { repo: 'labib/nu-mukto', what: 'Nushell commands that query the member list and the forge API as tables.', lang: 'Nushell', license: 'MIT', topic: 'tools', updated: '2026-10-06' },
  { repo: 'jamdani/jamdani-svg', what: 'Generates jamdani-style motifs as SVG. The Shell Saturday posters use it.', lang: 'JavaScript', license: 'MIT', topic: 'fun', with: ['orpa'], updated: '2026-09-28' },
  { repo: 'fuchka_fs/fuchkafs', what: 'A toy FUSE filesystem in C. Still eats files under load.', lang: 'C', license: 'GPL-2.0', topic: 'fun', updated: '2026-09-09' },
  { repo: 'ayon/gopherhole', what: 'My gopher hole and the 40-line server behind it. Yes, gopher.', lang: 'Shell', license: 'MIT', topic: 'fun', updated: '2026-09-11' },
  { repo: 'tokai/nvim', what: 'Neovim config. 400 lines and counting.', lang: 'Lua', license: 'MIT', topic: 'fun', updated: '2026-10-05' },
  { repo: 'ishrak/nixos-t480', what: 'NixOS config for a ThinkPad T480, tuned to survive power cuts without losing work.', lang: 'Nix', license: 'MIT', topic: 'fun', updated: '2026-09-22' },
];

// While members, team, events and the ledger are sample data, every page says
// so in the footer. Set to false once they are real.
export const SAMPLE_DATA = false;
