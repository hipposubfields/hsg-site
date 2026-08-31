# Hippocampal Subfields Group — site draft

A Jekyll site, ready for GitHub Pages. No custom domain or DNS needed to get
this live — GitHub gives you a working `github.io` URL automatically.

## Status: content migration

Every top-level page and section is now filled in with the real content
from the WordPress site:

- Home, About, Harmonized Protocol (+ Body Protocol, QC Best Practices,
  Training Opportunities), People (+ Advisory Council, Working Groups
  landing, all 5 working-group pages, Members), HSG Conferences (full
  19-meeting archive), and Other Resources.
- The last 7 blog posts (October 2025 through July 2026) are in `_posts/`,
  full text, and show up automatically in "Recent updates" on the homepage.

**Not yet migrated:** roughly 20 older blog posts, spanning August 2018
through October 2024. Ask to have these brought over next, page by page,
the same way the rest of this was done.

## About the resource links

Images, PDFs, and other downloadable files (protocol figures, meeting
photos, newsletters, whitepapers) are still linked to their original
locations on the WordPress media library (`hippocampalsubfields.com/
wp-content/uploads/...`). These links work for now, but depend on the old
site staying up. Wherever you see a `<div class="note-box">` on a page,
that's a flag for a specific file worth re-uploading into `assets/images/`
or `assets/files/` and re-linking — you can search the project for
`note-box` to find all of them at once.

Two things that need a non-GitHub-Pages solution when you get to them:
- The interest-form on the Working Groups page (currently a WordPress
  form plugin) — needs a service like Formspree or a Google Form embed.
- Anything gated behind NITRC login (the sample MRI dataset) — already
  just links out, no change needed.

## What's here

- `_config.yml` — site title, description, social links, and `baseurl`
  (see "Before you push" below — this one setting matters).
- `_layouts/default.html` — the shared nav, footer, and light/dark toggle
  every page uses.
- `index.html` — the homepage.
- `about/`, `harmonized-protocol/` (+ 3 sub-pages), `people/` (+ 6
  sub-pages), `hsg-conference/`, `resources/` — full content pages.
- `_posts/` — 7 real posts. Add a new Markdown or HTML file here
  (`YYYY-MM-DD-title.md`) for each new post going forward, and it'll
  automatically show up in "Recent updates" on the homepage, newest five.
- `assets/` — the real logo, the stylesheet (all colors as CSS variables
  at the top of `style.css`), and the toggle's JS.

## Before you push: one setting to check

`_config.yml` currently has:

```yaml
baseurl: "/hsg-site"
```

This must exactly match your repo's name, with a leading slash and no
trailing slash. If you named the repo `hsg-site`, no change needed.

When you later move to `hippocampalsubfields.com`, set `baseurl: ""` and
add a `CNAME` file — happy to walk through that step when you're ready.

## Push it

```bash
cd hsg-site        # or whatever you named the folder
git init
git add .
git commit -m "Full content migration"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

Then in the repo on GitHub: **Settings → Pages → Source → Deploy from a
branch → `main` / `(root)`**. GitHub builds Jekyll sites automatically — no
local Ruby install needed. Give it a minute or two, then your site is live
at `https://<username>.github.io/<repo-name>/`.

(If you're updating an existing repo rather than starting fresh, skip
`git init`/`remote add` and just commit + push the changed files instead.)

## Custom domain, when you're ready

1. Add a file named `CNAME` (no extension) to the repo root containing just
   `hippocampalsubfields.com`.
2. In your DNS provider, add a CNAME record pointing the domain (or the
   `www` subdomain) at `<username>.github.io`.
3. Set `baseurl: ""` in `_config.yml`.

## Local preview (optional)

Not required — GitHub builds it for you. If you want to preview changes
locally before pushing, you'll need Ruby and Bundler installed, then:

```bash
bundle init
bundle add jekyll
bundle exec jekyll serve
```
