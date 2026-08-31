# Hippocampal Subfields Group — site draft

A Jekyll site, ready for GitHub Pages. No custom domain or DNS needed to get
this live — GitHub gives you a working `github.io` URL automatically.

## What's here

- `_config.yml` — site title, description, social links, and `baseurl`
  (see "Before you push" below — this one setting matters).
- `_layouts/default.html` — the shared nav, footer, and light/dark toggle
  every page uses.
- `index.html` — the homepage.
- `about/`, `harmonized-protocol/`, `people/`, `hsg-conference/`,
  `resources/` — one stub page per top-level nav item, each with placeholder
  copy marked `<em>Replace this...</em>` — swap in the real content whenever
  you're ready, the layout and styling are already wired up.
- `_posts/` — two sample posts, showing how the blog pipeline works. Add a
  new Markdown or HTML file here (`YYYY-MM-DD-title.md`) for each new post,
  and it'll automatically show up in "Recent updates" on the homepage,
  newest five.
- `assets/` — the real logo, the stylesheet (all colors as CSS variables, so
  the light/dark palette lives in one place at the top of `style.css`), and
  the toggle's JS.

Sub-pages you had in the original nav (Advisory Council, Working Groups,
Body Protocol, QC Best Practices, Training Opportunities, Global
Membership) aren't built yet — the five top-level pages above are stubs
ready for you or me to fill in and split out next.

## Before you push: one setting to check

`_config.yml` currently has:

```yaml
baseurl: "/hsg-site"
```

This must exactly match your repo's name, with a leading slash and no
trailing slash — GitHub Pages serves project repos at
`https://<username>.github.io/<repo-name>/`, and Jekyll needs to know that
prefix to link pages and assets correctly. If you name the repo something
other than `hsg-site`, update this line to match before pushing.

(Exception: if you create the repo as `<username>.github.io` itself, it
becomes your root site instead of a project page — in that case set
`baseurl: ""`.)

When you later move to `hippocampalsubfields.com`, set `baseurl: ""` and
add a `CNAME` file (see below) — happy to walk through that step when
you're ready.

## Push it

```bash
cd hsg-site        # or whatever you named the folder
git init
git add .
git commit -m "Initial site draft"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

Then in the repo on GitHub: **Settings → Pages → Source → Deploy from a
branch → `main` / `(root)`**. GitHub builds Jekyll sites automatically — no
local Ruby install needed. Give it a minute or two, then your site is live
at `https://<username>.github.io/<repo-name>/`.

## Custom domain, when you're ready

1. Add a file named `CNAME` (no extension) to the repo root containing just
   `hippocampalsubfields.com`.
2. In your DNS provider, add a CNAME record pointing the domain (or the
   `www` subdomain) at `<username>.github.io`.
3. Set `baseurl: ""` in `_config.yml`.

No rush on this — the `github.io` URL works fine for drafting.

## Local preview (optional)

Not required — GitHub builds it for you. If you want to preview changes
locally before pushing, you'll need Ruby and Bundler installed, then:

```bash
bundle init
bundle add jekyll
bundle exec jekyll serve
```
