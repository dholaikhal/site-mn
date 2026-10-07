# Copy review: AI tells in the site text

Pass over every English and Bangla string on the site, read as a copy editor looking for
machine-written patterns. Signals are borrowed from `fiction-artificity/DETECTION.md`, which
was built from Bangla **fiction**. So I used the signals that carry over to web and
institutional copy, and left out the ones that only apply to fiction:

- **Carried over:**
  - A1 translationese
  - A2 "not X, (but) Y"
  - A3/A18 an aphorism or punchline in every slot
  - A10 a one-of-each tableau
  - A11 numbers that don't reconcile
  - A1k English stock phrases carried over whole
- **Not used:** plot, bookends and planted payoffs (A12, A13, A19), since a website has no
  story. Typography is also ignored (DETECTION rule 1).
- **Extra web-copy tells**, from editing practice rather than DETECTION.md:
  - stacked triple negations ("no X, no Y, no Z")
  - "That's it / That's the whole deal" buttons
  - one cute phrase reused across pages

All findings below are fixed in the source unless marked **kept**.

## English

| Pattern | Where | Before | After |
|---|---|---|---|
| Triple negation stack (×6) | join, about, team, support, pubnix guide | "No passwords, no web forms, no app to install." | "You won't need a password or an app." |
| | | "No application, no minimum hours." | "Nobody keeps track of hours." |
| | | "No card, no free tier that expires, no instance to forget about." | "You don't need a card, and there's no trial that runs out." |
| | privacy | "No cookies, no analytics, no trackers." | **kept**: it's a factual list in a policy, where a list is the right form |
| "X, not Y" antithesis (A2) | about | "Partners, not rivals" | "Working with other groups", with a concrete offer |
| | conduct | "Disagree about ideas, not people. … Never the person." | "Argue about the work. Criticise code, designs and plans as hard as you like. Leave the person out of it." |
| | hero | "Run by volunteers, not for profit." | "Volunteer-run and not-for-profit." |
| | team, team.ts, governance, conduct | "answers to the general assembly, not the committee" ×4 | kept once in governance and conduct; reworded elsewhere |
| Aphorism as a closer (A18) | about | "We'd rather offer four things that work than ten that don't." | "Four services run today. More come when there are volunteers to look after them." |
| | support | "Everything else runs on people's evenings." | "…and events cost about as much again. You can help with time, money or things." |
| | logbook (money) | "That's fine with me: events are where people show up." / "Small and regular helps more than large and once." | "…which we expected." / "A small amount every month helps us plan better than a large one-off." |
| "That's X" buttons | support, terms | "That's the whole deal:" / "That's all the permission we take." | "…and nothing more:" / "We claim no other rights to it." |
| | Learn guide | "That's it." | **kept**: normal in step-by-step tutorials |
| English stock phrase (A1k) | about | "Members aren't the product" | "No ads or tracking", pointing at the status bar that counts cookies |
| Every voice is a punchline (A3) | team taglines | 10 of 10 were setup-and-joke ("I take the minutes, so I decide what you said.", "Sorry, ISPs.", "ninety percent saying please…") | 6 rewritten as plain, specific or practical lines; 4 jokes kept (Farhana, Arpita, Prottoy, Labiba). Real people's self-descriptions are uneven. |
| Voice slip | shutki_daemon tagline | Third person ("Prefers not to be photographed") in what's meant to be self-written | First person, lowercase sysadmin voice |
| Every recap ends on a quirk (A13-ish) | events | "2 BIOS passwords nobody remembered", "a Nextcloud that survived a flood" | Two recaps made plain (distro counts; where the notes are); one quirk kept (power cut at SFD) |
| Intensifier tic | events, logbook | "actually" ×3 | removed from 2 |
| Slogan reuse | home, support, transparency | "Every taka" ×3 | kept once (transparency lede) |
| Western-coded word | hero | "developers, students and tinkerers" | "anyone in Bangladesh who writes code or wants to start" |
| Anaphora tricolon | services lede | "What runs today, what's in beta…, and what comes when…" | "Four services run for the first cohort today. The rest are planned, in the order below." |
| Vague "and beyond" | pillars | "in Dhaka and beyond" | "in Dhaka, Chattogram, Rajshahi and online", which matches the events |

## Bangla

My reading of Bangla cadence is a non-native judgment (DETECTION.md, Limitations). Everything
here still needs a native copy editor.

| Pattern | Before | After | Why |
|---|---|---|---|
| English idiom rendered literally (A1d) | দেয়ালঘেরা বাগানের দুনিয়ায় আপনার নিরাপদ ঘর। | বড় প্ল্যাটফর্মের বেড়ার বাইরে, নিজেদের একটা ঘর। | "Walled garden" means platform lock-in in English. In Bangla, দেয়ালঘেরা বাগান is just a garden with a wall. The rewrite says what it means. |
| Transliterated English word nobody uses (A1) | টিংকারারদের | যাঁরা কোড লেখেন বা শিখতে চান | টিংকারার isn't a Bangla word |
| English sentence shape: "A X for Y" with a long noun stack | বাংলাদেশের ডেভেলপার… জন্য একটা শেয়ার করা লিনাক্স সার্ভার, গিট, হোস্টিং আর প্রতি মাসের আড্ডা। | একটা শেয়ার করা লিনাক্স সার্ভার, গিট, নিজের ওয়েব পেজ, আর মাসে একবার আড্ডা। যাঁরা কোড লেখেন বা শিখতে চান, তাঁদের সবার জন্য। | Split into two sentences. মাসে একবার reads more natural than প্রতি মাসের. |
| Literal calque | {n} জন এখানে থাকেন | সার্ভারে {n} জনের অ্যাকাউন্ট | "Live here" is a pubnix idiom. থাকেন in Bangla means they reside here. |
| Calque of "claim" | আপনার ~নাম রাখুন | আপনার ~নাম বুক করুন | বুক করা is how Bangladeshis say "reserve" |
| Postposed appositive after a comma (A1a/A1b) ×4 | শেল, ওয়েব পেজ আর গিট, সদস্যদের চালানো সার্ভারে। | সদস্যদের চালানো সার্ভারে শেল, ওয়েব পেজ আর গিট। | Bangla puts the place first |
| | নাম, নীতি আর অন্তর্বর্তী কমিটি, জুনের প্রতিষ্ঠা আড্ডায় ঠিক হয়েছে। | জুনের প্রতিষ্ঠা আড্ডায় নাম, নীতি আর অন্তর্বর্তী কমিটি ঠিক হয়েছে। | same |
| | …আর CI, যখন হার্ডওয়্যার আর চালানোর মানুষ থাকবে। | হার্ডওয়্যার আর চালানোর লোক পেলে ডেটাবেস, … আর CI। | Condition first; লোক পেলে is more natural than মানুষ থাকবে |
| Odd phrasing | প্রথম দলটা আমন্ত্রণে এসেছে। | আপাতত শুধু আমন্ত্রিতরা অ্যাকাউন্ট পাচ্ছেন। | The old line said "the first group came by invitation" |
| Incomplete role name | নিরাপত্তা ও অপব্যবহার | নিরাপত্তা ও অপব্যবহার রোধ | As a job title, অপব্যবহার alone reads as "misuse" |
| Accounting words | এসেছে / খরচ / হাতে আছে | আয় / খরচ / হাতে আছে | |
| Double আর | ঢাকা আর ঢাকার বাইরে মিটআপ আর ইনস্টল-ফেস্ট | ঢাকা, চট্টগ্রাম, রাজশাহী আর অনলাইনে মিটআপ, ইনস্টল-ফেস্ট | |
| Forced pun in a .plan | বগুড়ার দই আর bash script, দুইটাই মিষ্টি | বগুড়া থেকে। গতকাল প্রথম bash script লিখলাম | |

**Kept:** Banglish and code-mixed .plan lines ("ledger updated every sunday. হিসাব না মিললে
আমাকে বলো", "GNOME bn: 1,204 strings left. ধীরে ধীরে"). Mixed Bangla-English like this is how
people actually type (H3).

## Sample data

- **One-of-each tableau (A10).** Every committee avatar had a different signature feature
  (curly hair with a beard, buzz cut with a beard, bun, hijab, glasses…). Two men now share
  the plain short-hair, stubble or moustache look. The only Marma member mapped Bandarban
  trails, which is the tokenising version of a tableau. Their .plan is now about Android work
  and cycling.
- **Numbers reconciled (A11).** I checked these across pages:
  - Ledger totals: ৳68,200 in, ৳35,850 out, ৳32,350 left. The money post and the minutes
    use the same figures.
  - Contributor counts (31, 22, 29, 24) match between the ledger and the minutes.
  - The singara count matches the Shell Saturday capacity (60).
  - The disk quota (2 GB → 5 GB) matches between the server post, the minutes and the
    services page.
  - The minutes count 49 users on 2 October, because one member joined on the 5th.
  - Shell Saturday numbering skips September for Software Freedom Day, and both the
    programme and the recap say so.
  - Attendance totals are computed from the event data, not typed.

## Still needs a person

- A native Bangla copy editor for the `/bn/` page, the Bangla taglines, the role names and
  the .plan lines.
- A real committee writing their own taglines. However careful the sample ones are, they're
  still written by one hand.
