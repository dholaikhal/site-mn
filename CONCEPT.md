# mukto.net — concept

> **mukto.net is your safe home in a world of walled gardens.**
> A community-run digital commons for Bangladesh's tech community: shared infrastructure,
> open-source work, knowledge, and people — owned by no platform, open to everyone who builds.

---

## 1. The name

**মুক্ত (mukto)** — free, open, liberated. The same word Bangla uses for free software
(মুক্ত সফটওয়্যার). It carries both senses mukto.net needs: *free as in freedom*, and *open
as in the door is open*.

## 2. What it is

mukto.net is a non-commercial, volunteer-run collective that gives Bangladeshi developers,
students and tinkerers a place of their own on the internet — the kind of place that big
platforms don't provide and can't take away.

It began as a plan for a local [tilde](https://tilde.club) server: a shared Unix machine where
members get a shell, a home directory and a web page. It grew into something broader — closer
to what [Framasoft](https://framasoft.org) is for France: libre services, education, and
community, run in the open for the public good.

**In one sentence:** a pubnix at the core, a commons around it, a community on top.

### What it is not

- Not a company, startup or hosting reseller. Nothing is sold; nothing is "free tier".
- Not a social network. It hosts the tools; the community happens in them.
- Not a replacement for production cloud. Resources are for learning, hobby and community
  projects, and open-source work.

## 3. Who it's for

| Who | What they get from mukto.net |
| --- | --- |
| Students & self-learners | A real Linux account, a place to publish, mentors, events |
| Working developers | Space to build side and open-source projects, peers, a stage to teach |
| Local open-source projects | A forge, hosting, CI, visibility, contributors |
| Local tech communities | A shared home: infrastructure, an events calendar, a common banner |
| Sponsors & donors | A transparent way to give back to the local ecosystem |

## 4. Four pillars

Every activity fits under one of four verbs.

### Host — shared infrastructure, held in common

The tilde root, grown into a small community cloud.

- **Shell** — SSH account on a shared Unix system; `~/public_html` served at `mukto.net/~you`
- **Git** — community forge (`git.mukto.net`) for personal and community projects
- **Web & pages** — static sites for members and community groups
- **Later, as hardware and volunteers allow:** databases, containers/VMs, object storage,
  logging, CI runners, local mirrors of distro and package repositories

### Build — contribute to open source

- Group contributions to upstream projects (sprints, "first PR" nights)
- Bangla localization of free software and documentation
- Incubating and hosting open-source projects made in Bangladesh
- Everything mukto.net runs is itself open source and its config is public

### Learn — technical knowledge, shared freely

- Guides and documentation, in Bangla and English
- Workshops, talks and mentorship
- The pubnix itself is a classroom: learning Linux, networking and ops by using a real shared system

### Gather — people and events

- Meetups, hackathons, install-fests, talks
- An events calendar for the wider local tech scene, not just mukto.net's own events
- A shared home and banner for existing local communities, rather than competing with them

## 5. Two doors: the porch and the terminal

mukto.net has two audiences and should greet them differently.

| | **The porch** — `https://mukto.net` | **The terminal** — `ssh mukto.net` |
| --- | --- | --- |
| For | Everyone: public, students, sponsors, press | Members and would-be members |
| Style | Ordinary, readable web pages, bilingual | Minimal, techie, text-only |
| Holds | About, pillars, events, learning, news, donate, code of conduct | Sign-up, account, services, `/etc/motd` |
| Tone | Welcoming, explanatory | Terse, playful, for people who are home |

The public site explains; the terminal admits. Joining is done the techie way, as
[hashbang.sh](https://hashbang.sh) does — but the reasons to join are on ordinary web pages
anyone can read. The current homepage (ASCII art, `/etc/motd`, "first login prompt") already
sets the visual identity both doors should share.

Proposed onboarding: `ssh join@mukto.net` opens a short interactive form (username, SSH public
key, agree to the code of conduct). No `curl | sh`, no web form, no password — and having an
SSH key is the only "test".

## 6. Principles

1. **Libre by default.** Only free/open-source software runs the commons. No vendor lock-in.
2. **No ads, no tracking, no data sales.** Members are not the product.
3. **Local first.** Built for Bangladesh: Bangla-friendly, priced in effort not money, and
   ideally hosted where local users get local speed.
4. **Open to all, accountable to each other.** A clear code of conduct and acceptable-use
   policy, enforced by people, not algorithms.
5. **Run in the open.** Public decisions, public finances, public configs.
6. **Small and sustainable.** Offer only what volunteers can actually keep running. A service
   shut down cleanly beats one left rotting.
7. **Complement, don't compete.** Existing communities are partners, not rivals.

## 7. Membership

| Level | How | Gets |
| --- | --- | --- |
| Visitor | Anyone | Website, events, public guides |
| Member (`~user`) | SSH sign-up, agree to CoC/AUP | Shell, web page, git, community spaces |
| Contributor | Shows up and helps | Event organizing, docs, mentoring, project maintenance |
| Admin / ops | Trusted contributors | Run the infrastructure |
| Supporter | Donates money, hardware, bandwidth, venue | Public thanks, transparency reports |

Heavier resources (databases, VMs, project hosting) are granted per request, not by default.

## 8. Phasing

| Phase | Name | Scope |
| --- | --- | --- |
| 0 | *motd* (now) | Placeholder homepage, identity |
| 1 | *first login* | Public website, code of conduct + AUP, SSH sign-up, shell + `~/public_html`, git forge, a community chat/forum |
| 2 | *userland* | Events program, Bangla/English guides, hosting for local OSS projects, mirrors |
| 3 | *services* | Databases, containers/VMs, object storage, logging, CI — gated on hardware, funding and an ops rota |

Phase 1 is achievable by a handful of volunteers on one server. Phase 3 is not, and the public
site should not promise it before it exists.

## 9. Open decisions

These shape the website's content and need an owner's call. My recommendation follows each.

1. **Sign-up model** — open (hashbang-style) vs waitlist/vouching (tilde.club-style).
   *Recommend:* open shell sign-up, vouching or request for heavier resources. Free compute
   attracts spam and crypto-miners; gate what's abusable, not what's educational.
2. **Where the servers live** — the site is currently served from Frankfurt (IP-Projects,
   AS48314). In-country hosting with [BDIX](https://bdix.net) peering would be much faster for
   local users and fits "local first", but brings local legal exposure and costs.
   *Recommend:* stay abroad for Phase 1; revisit with a sponsor (ISP or data centre) for Phase 2+.
3. **Legal form & money** — informal collective vs registered non-profit; how donations are
   received and reported. Framasoft's model is a registered association funded by donations.
   *Unverified:* which Bangladeshi registration fits best — needs advice from someone who has
   registered a society or non-profit company locally.
4. **Content liability** — hosting user content in Bangladesh carries legal risk under the
   cyber-security laws in force. *Unverified:* the current statute and its obligations for
   hosts; settle with a lawyer before Phase 1 opens sign-ups. The AUP must exist first.
5. **Language** — Bangla-first, English-first or fully bilingual.
   *Recommend:* bilingual public site; English-first terminal (it's what the tools speak),
   with Bangla guides.
6. **Governance** — who decides, how admins are added and removed, how the CoC is enforced.
   *Recommend:* a small named core team and a written process before launch, not after the
   first incident.
7. **Relationship to existing communities** — umbrella, partner or independent.
   *Recommend:* partner; offer infrastructure and a calendar, don't absorb.

## 10. What this means for the website

Sitemap for Phase 1:

- **Home** — the tagline, the four pillars, upcoming events, "how to join" (one command)
- **About** — the name, the story (tilde → commons), principles, people
- **Services** — what exists today, what's planned (clearly labelled), how to request
- **Join** — `ssh join@mukto.net`, what you need, what you agree to
- **Events** — calendar and archive
- **Learn** — guides and talk recordings
- **Code of conduct** and **Acceptable use**
- **Support us** — donate, sponsor, volunteer; transparency reports
- **Members** — the `~user` directory (classic tilde touch)

Visual identity: carry the current homepage's terminal/ASCII character into real, accessible
HTML — monospace accents and the motd voice, but readable for someone who has never opened a
terminal.

## Lineage

- [tilde.club](https://tilde.club), [tilde.town](https://tilde.town) — the shared-Unix-box tradition
- [hashbang.sh](https://hashbang.sh) — terminal-native sign-up
- [envs.net](https://envs.net) — a pubnix that grew into a suite of community services
- [Framasoft](https://framasoft.org) — libre services and popular education as a public good
