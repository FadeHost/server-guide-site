# Server guide site

[![Deploy to FadeHost](https://fadehost.com/deploy-button.svg)](https://laplace.fadehost.com/register?intent=app&repo=https://github.com/FadeHost/server-guide-site)

[![Deploy on FadeHost](https://img.shields.io/badge/deploy%20on-FadeHost-0ea5e9?style=flat-square)](https://laplace.fadehost.com/bots?new=1)

The small website every community server ends up needing: the address, how to
join, the rules and the mod list. Write the pages in Markdown, push, and it
builds to plain HTML.

- Three pages to start with, already written, ready to be edited into yours
- Add a Markdown file and it becomes a page and a menu entry
- One settings file for the server name, the address and the Discord link
- Dark, quick and readable on a phone
- No database, no server process, nothing to keep running

## Make it yours

1. Edit `src/site.ts`: the server name, the tagline, the address, the Discord
   invite.
2. Edit the three files in `src/content/pages/`. They are ordinary Markdown
   with a title and a summary at the top.
3. Add more files there for anything else: shops, claims, the map, staff
   applications. They join the menu in the order set in `src/site.ts`, then
   alphabetically.
4. Put your real address in `astro.config.mjs` under `site`.

```
src/site.ts                   name, address, Discord, menu order
src/content/pages/*.md        one file per page
src/styles/global.css         colors and spacing
```

## Deploy on FadeHost

Host it as an app from your fork of this repository with the **Static site**
runtime, build command `npm run build`, and `dist` as the folder to serve.
Turn on the web address and it is live at `https://yourname.fadehost.app`.

The static runtime is newer than the Node and Python ones. If your panel does
not offer it yet, the same repository still works anywhere that serves a
folder of files.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321, reloads as you edit
npm run build    # writes dist/
npm run preview  # serves what was built
```

Node 20 or newer.

## Writing the pages

The top of each file is the page's title and summary:

```markdown
---
title: How to join
summary: The address, the version you need and what to do the first time.
---

## Java Edition

Ordinary Markdown from here down: headings, lists, tables, links, code blocks.
```

Link between pages with their file names: `[the rules](/rules/)`.

Built and maintained by [FadeHost](https://fadehost.com). MIT licensed.
