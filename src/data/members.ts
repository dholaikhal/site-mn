// SAMPLE DATA. The founding beta cohort as it might look: usernames people
// actually pick, .plan lines in their own words (some Bangla, some Banglish,
// some empty). Replace with the real /home listing once accounts exist.

export interface Member {
  user: string;
  name?: string;
  city: string;
  joined: string; // YYYY-MM-DD
  shell: 'bash' | 'zsh' | 'fish' | 'nu' | 'ksh';
  plan: string;
  page: boolean; // has a ~/public_html page
  repos: number;
}

type Row = [user: string, name: string, city: string, joined: string, shell: Member['shell'], page: 0 | 1, repos: number, plan: string];

const rows: Row[] = [
  ['shutki_daemon', '', 'Dhaka', '2026-07-20', 'zsh', 1, 14, "if it's down, page me. if it's up, don't touch it"],
  ['kalbaishakhi', '', 'Dhaka', '2026-07-20', 'bash', 0, 3, 'reading auth.log so you don\'t have to'],
  ['farhana', 'Farhana Rahman', 'Dhaka', '2026-07-20', 'zsh', 1, 6, 'convener. agenda for the next EC meeting is in ~/ec/agenda.md'],
  ['tanvir', 'Tanvir Ahmed', 'Dhaka', '2026-07-20', 'bash', 1, 4, 'minutes from 2 Oct are up. read them, then complain'],
  ['arpita', 'Arpita Saha', 'Dhaka', '2026-07-21', 'fish', 1, 2, 'ledger updated every sunday. হিসাব না মিললে আমাকে বলো'],
  ['sabbir', 'Sabbir Hossain', 'Dhaka', '2026-07-21', 'bash', 0, 1, 'oct 17 room confirmed. singara count: 60'],
  ['nusrat', 'Nusrat Jahan', 'Chattogram', '2026-07-22', 'zsh', 1, 5, 'conduct@ inbox is me. be nice so i get to sleep'],
  ['prottoy', 'Prottoy Das', 'Sylhet', '2026-07-22', 'zsh', 1, 9, 'writing the shell saturday handouts, ch 3 of 6'],
  ['labiba', 'Labiba Chowdhury', 'Dhaka', '2026-07-24', 'bash', 1, 3, 'GNOME bn: 1,204 strings left. ধীরে ধীরে'],
  ['bdix_bhai', 'Raihan', 'Dhaka', '2026-07-24', 'bash', 0, 2, 'talking to ISPs about a mirror. bring me a sponsor and i\'ll bring you speed'],
  ['tokai', '', 'Dhaka', '2026-08-01', 'zsh', 1, 7, 'nvim config 400 lines, actual code 0 lines'],
  ['kacchi_overflow', '', 'Dhaka', '2026-08-01', 'bash', 1, 11, 'kacchi > biryani. fight me on #adda'],
  ['loadshedding', '', 'Mymensingh', '2026-08-02', 'bash', 0, 0, 'tmux + UPS. the power goes, the session stays'],
  ['jhalmuri', '', 'Dhaka', '2026-08-02', 'fish', 1, 4, ''],
  ['sadia', 'Sadia Islam', 'Dhaka', '2026-08-03', 'zsh', 1, 2, 'CSE 3rd year. my first ever website is on this box, be kind'],
  ['ilish', '', 'Barishal', '2026-08-03', 'bash', 1, 1, 'barishal theke ssh korchi, ping 41ms, khushi'],
  ['rifat', 'Rifat Hasan', 'Gazipur', '2026-08-04', 'bash', 0, 3, 'flutter at work, arch on the laptop, ubuntu on the office pc'],
  ['nilkhet', '', 'Dhaka', '2026-08-05', 'zsh', 1, 2, 'scanning old programming books from my uncle. public domain only, relax'],
  ['tahsin', 'Tahsin Kabir', 'Rajshahi', '2026-08-05', 'zsh', 1, 6, 'learning rust. the borrow checker is winning'],
  ['cha_r_tong', '', 'Dhaka', '2026-08-06', 'bash', 0, 0, 'just here for irc'],
  ['anika', 'Anika Tabassum', 'Khulna', '2026-08-07', 'fish', 1, 3, 'khulna air quality scraper, updates hourly on my page'],
  ['ishrak', '', 'Dhaka', '2026-08-08', 'zsh', 1, 8, 'nixos convert. yes it\'s a cult. yes i\'m happy'],
  ['pritom', 'Pritom Sarker', 'Rangpur', '2026-08-09', 'bash', 0, 1, ''],
  ['borsha', '', 'Sylhet', '2026-08-10', 'zsh', 1, 2, 'emacs user, sorry in advance'],
  ['zubair', 'Zubair Alam', 'Berlin', '2026-08-11', 'zsh', 1, 12, 'sre in berlin, homesick for fuchka. ask me about on-call'],
  ['fuchka_fs', '', 'Dhaka', '2026-08-11', 'bash', 1, 5, 'writing a toy filesystem in C. it eats files. working on it'],
  ['mithila', 'Mithila Roy', 'Dhaka', '2026-08-12', 'fish', 1, 2, 'bn.wikipedia editor, 2.3k edits. ask me how to cite'],
  ['dhakaiya', '', 'Dhaka', '2026-08-14', 'bash', 0, 0, 'mirpur 10 er bus route gula document korchi. help chai'],
  ['rajshahi_aam', '', 'Rajshahi', '2026-08-15', 'zsh', 1, 3, 'mango season is over, so now i code'],
  ['shuvo', 'Shuvo', 'Cumilla', '2026-08-16', 'bash', 1, 1, 'first time using linux. day 12. still alive'],
  ['jamdani', '', 'Narayanganj', '2026-08-18', 'zsh', 1, 4, 'generative textile patterns in svg. see ~/public_html'],
  ['fahim', 'Fahim Shahriar', 'Dhaka', '2026-08-19', 'bash', 0, 2, 'ex-windows admin, recovering'],
  ['ctg_root', '', 'Chattogram', '2026-08-20', 'zsh', 1, 6, 'ctg self-hosting meetup #2 kobe? dm on irc'],
  ['tasnim', 'Tasnim Ara', 'Dhaka', '2026-08-22', 'zsh', 1, 3, 'data journalism + python. dhaka rent prices dataset coming'],
  ['morich', '', 'Dhaka', '2026-08-23', 'bash', 0, 1, 'lurking'],
  ['nafis', 'Nafis Iqbal', 'Kuala Lumpur', '2026-08-25', 'fish', 1, 7, 'backend at a fintech in KL. reviewing PRs for anyone who asks'],
  ['sylheti_sudo', '', 'Sylhet', '2026-08-27', 'bash', 1, 2, 'সিলেট থেকে লগইন, ping একটু বেশি, তবু চলে'],
  ['jannat', 'Jannatul Ferdous', 'Dhaka', '2026-08-29', 'zsh', 1, 4, 'teaching my little brother python on this box'],
  ['thowai', 'Thowai Marma', 'Chattogram', '2026-09-02', 'bash', 1, 2, 'android dev in ctg. cycling on fridays if it doesn\'t rain'],
  ['panta', '', 'Dhaka', '2026-09-03', 'bash', 0, 0, ''],
  ['ayon', 'Ayon Biswas', 'Khulna', '2026-09-05', 'zsh', 1, 5, 'gopher hole at ~/public_gopher. yes, gopher'],
  ['rakib', 'Rakibul Hasan', 'Dhaka', '2026-09-08', 'bash', 1, 3, 'keyboard collector. 60% layout or nothing'],
  ['pagla_kernel', '', 'Dhaka', '2026-09-10', 'zsh', 0, 9, 'compiling my own kernel again for no reason'],
  ['sumaiya', 'Sumaiya Akter', 'Mymensingh', '2026-09-14', 'fish', 1, 1, 'BAU agri student. using R for my thesis, ask me nothing about R'],
  ['bogura_doi', '', 'Bogura', '2026-09-17', 'bash', 1, 2, 'বগুড়া থেকে। গতকাল প্রথম bash script লিখলাম'],
  ['raihan_k', 'Raihanul Karim', 'Tokyo', '2026-09-20', 'zsh', 1, 4, 'embedded dev in tokyo. 3am irc when i can\'t sleep'],
  ['dipto', 'Dipto', 'Dhaka', '2026-09-24', 'bash', 0, 0, 'ssh kora shikhlam. eita ki?'],
  ['orpa', 'Orpa Chakraborty', 'Dhaka', '2026-09-28', 'zsh', 1, 1, 'design student. making the shell saturday posters'],
  ['kopotakkho', '', 'Jashore', '2026-10-02', 'bash', 1, 0, 'jashore theke. first page up, ugly but mine'],
  ['labib', 'Labib Hasan', 'Dhaka', '2026-10-05', 'nu', 0, 1, 'nushell. structured data or bust'],
];

export const MEMBERS: Member[] = rows.map(([user, name, city, joined, shell, page, repos, plan]) => ({
  user,
  name: name || undefined,
  city,
  joined,
  shell,
  page: page === 1,
  repos,
  plan,
}));

export const MEMBER_CITIES = [...new Set(MEMBERS.map((m) => m.city))];
