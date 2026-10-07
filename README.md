# mukto.net

The public website for mukto.net, a community-run commons for Bangladesh's tech people.
See [CONCEPT.md](CONCEPT.md) for what the organisation is and the decisions behind it.

This version is a mock to measure interest. Members, team, events, the ledger and the logbook
are **sample data**; nothing behind "Services" exists yet. The only working backend is the
interest list. While `SAMPLE_DATA` in `src/data/org.ts` is `true`, every page says so in the
footer. Turn it off only once the data is real.

Sample data lives in `src/data/members.ts`, `team.ts`, `events.ts`, `org.ts` (projects, contact
addresses) and `src/content/logbook/`. The two admin photos in `public/team/` are generated
faces (thispersondoesnotexist.com); no real person is depicted. Swap in real, consented photos
before turning the sample-data notice off. Counts shown on the site are computed from these
files, so editing them keeps every page consistent. `COPY-REVIEW.md` records the copy edit.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run check      # type-check
npm run build      # static pages + a small Node server for /api/interest
```

## How it fits together

- Every page is prerendered static HTML. `src/pages/api/interest.ts` is the only on-demand
  route; it validates submissions and appends them to `$DATA_DIR/interest.jsonl`
  (default `./data/`). IP addresses are used only for in-memory rate limiting, never stored.
- Two ways to sign up, same endpoint: the form (`src/components/InterestForm.astro`, works
  without JavaScript) and the in-browser `ssh join@mukto.net` demo (`src/components/Terminal.astro`).
- Other pages can deep-link into the form with pre-ticked boxes:
  `/join/?use=events&help=sponsor#form`.
- Shared lists (nav, footer, services, phases, pillars, form options) live in `src/data/site.ts`.
- Events publish an iCalendar feed at `/events.ics` and one file per event.
- Avatars are drawn at build time as inline SVG (`src/lib/avatar.ts`); add `photo` to a team entry to use a real one.
- The footer status bar shows the Bangla date (revised calendar, `src/lib/bangla.ts`), Dhaka time, and live counts of cookies and third-party requests on the page.
  The API validates against the same keys.
- Guides are Markdown in `src/content/guides/`.
- The ASCII house in the hero is the art from the original placeholder page, `src/data/house.txt`.

## Read the interest list

```sh
npm run interest:report                 # counts by use, help, source, city; username clashes
npm run interest:report -- --csv > interest.csv
```

On the server: `docker exec <container> node scripts/interest-report.mjs /data/interest.jsonl`.

## Deploy

Two build targets, picked by `DEPLOY_TARGET`:

| Target | Command | Output | Interest list |
|---|---|---|---|
| `node` (default) | `npm run build` | `dist/client` + `dist/server` | `/api/interest` on the same server |
| `pages` | `DEPLOY_TARGET=pages npm run build` | `dist/` (static) | posts to `PUBLIC_INTEREST_ENDPOINT` |

**GitHub Pages** (`.github/workflows/pages.yml`) builds the `pages` target on every push to
`main` and publishes it at mukto.net (`public/CNAME`). The form posts to the repository variable
`INTEREST_ENDPOINT`. Leave it unset and the form says the list isn't connected.

**The interest API** runs from the Docker image (Node target), anywhere you can run a container:

```sh
docker build -t mukto-net .
docker run -d --name mukto-net -v mukto-data:/data -p 8080:8080 \
  -e ALLOWED_ORIGINS=https://mukto.net,https://www.mukto.net mukto-net
```

Point a hostname such as `api.mukto.net` at it through traefik, then set
`INTEREST_ENDPOINT=https://api.mukto.net/api/interest` in the repository variables. The endpoint
answers CORS only for `ALLOWED_ORIGINS` and refuses posts from other sites. Rate limiting trusts
the last `X-Forwarded-For` entry, which is correct behind exactly one proxy. Back up the
`mukto-data` volume: it holds the list.

**CI** (`.github/workflows/ci.yml`) type-checks, builds both targets and builds the Docker image
on every push and pull request.

## Before launch

- The Bangla home page (`/bn/`) needs review by a native speaker.
- The code of conduct and acceptable use policy are drafts, marked as such on the pages.
- The site shows hello@, conduct@ and security@mukto.net (`src/data/org.ts`). Create
  them before launch, or change them.
