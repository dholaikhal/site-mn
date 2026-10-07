---
title: Your first web page on a tilde
summary: How ~/public_html works, and the five-minute page every new member makes.
level: beginner
order: 3
---

On a tilde server, the folder `~/public_html` in your home directory is your website. Anything you put there is served at `mukto.net/~yourname`. This will work on mukto.net from phase 1; you can try the same steps on any tilde today.

## Make a page

Log in, then:

```sh
mkdir -p ~/public_html
nano ~/public_html/index.html
```

Type something, anything:

```html
<!doctype html>
<meta charset="utf-8">
<title>~yourname</title>
<h1>hello from ~yourname</h1>
<p>I just joined mukto.net. Here's what I'm working on.</p>
```

Save with **Ctrl+O**, **Enter**, then exit with **Ctrl+X**. Open `https://mukto.net/~yourname` in a browser. That's it.

## If you see "403 Forbidden"

The web server needs to be able to read your files:

```sh
chmod 755 ~ ~/public_html
chmod 644 ~/public_html/index.html
```

## Where to go from here

- Look at what others have made: `ls /home`, then visit their pages.
- Keep the page in git and push it to the forge.
- Write in Bangla. Add `<html lang="bn">` and it'll be read correctly by browsers and screen readers.
