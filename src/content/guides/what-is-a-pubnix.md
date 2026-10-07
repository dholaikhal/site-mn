---
title: What is a pubnix?
summary: Why a shared Unix server is still one of the best places to learn, and what living on one is like.
level: beginner
order: 1
---

A **pubnix** (public Unix) is a computer that many people share. Each person gets an account, a home directory and a shell, and logs in over SSH. Everyone is on the same machine, at the same time.

The idea is older than the web. [SDF](https://sdf.org) has been running one since 1987. In 2014, [tilde.club](https://tilde.club) revived it as a single shared computer for making web pages and talking to each other, and dozens of *tildes* followed, named after the `~` in `~username`.

## Why bother, when cloud servers exist?

- **It's a real system, with real neighbours.** You learn Linux by using it, and you learn from what others build: run `ls /home` and look around.
- **Your web page is just a folder.** Put an HTML file in `~/public_html` and it's on the internet. No build pipeline, no deploy button.
- **It's free.** You don't need a card, and there's no trial that runs out.
- **Chat lives on the box.** Ask a question in the shared chat and someone who's on the same machine answers.
- **It's a commons.** Admins are volunteers and members. The rules are written down. Nobody is mining your attention.

## What it isn't

A pubnix isn't where you run a startup's production database. Resources are shared, so heavy or long-running jobs need an admin's OK, and everyone agrees to an [acceptable use policy](/acceptable-use/).

## What mukto.net adds

mukto.net starts as a pubnix and grows into a commons around it: a git forge, project hosting, mirrors, events and guides, in Bangla and English. See the [services plan](/services/).
