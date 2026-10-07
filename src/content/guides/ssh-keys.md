---
title: Make an SSH key
summary: The one thing you need before joining. Works on Linux, macOS, Windows and Android.
level: beginner
order: 2
---

An SSH key is a pair of files. The **private key** stays on your computer and proves who you are. The **public key** is safe to share: you give it to a server, and the server lets in whoever holds the matching private key. No passwords.

## 1. Check whether you already have one

On Linux, macOS, or Windows PowerShell:

```sh
ls ~/.ssh
```

If you see `id_ed25519.pub` (or `id_rsa.pub`), you already have a key. Skip to step 3.

## 2. Make a new key

Linux, macOS, and Windows 10 or 11 (in PowerShell) all come with OpenSSH. Run:

```sh
ssh-keygen -t ed25519 -C "you@example.com"
```

- Press **Enter** to save it in the default place.
- Choose a **passphrase**. It protects the key if someone copies your laptop's files. You can leave it empty, but you shouldn't.

On **Android**, install [Termux](https://termux.dev), then run `pkg install openssh` and the same `ssh-keygen` command.

## 3. Find your public key

```sh
cat ~/.ssh/id_ed25519.pub
```

It's one line that starts with `ssh-ed25519`. That line is what you paste when you join mukto.net, or add to a git forge.

## Keep the private key private

The file without `.pub` on the end, `id_ed25519`, never leaves your computer. Don't paste it anywhere, don't email it, don't commit it to git. If you think someone has it, make a new key and replace the old public key everywhere you used it.

## Don't want to type the passphrase every time?

Add the key to your SSH agent once per login session:

```sh
ssh-add ~/.ssh/id_ed25519
```
