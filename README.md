# Designing for Real Operations — UX Case Study

A single-page case study for the IMPACT Center Volunteer Management System, built with the Toyota Mobility
Foundation and Indiana University's MS HCI Capstone program.

Plain HTML/CSS/JS — no build step, no dependencies. Colors and type are pulled from the deployed product's
own brand: IMPACT teal (`#0D7B6E`), dark navy (`#0A2A3A`), and the task-status colors used on the live task
board.

## Files

```
index.html      the whole page
styles.css       design tokens + layout
script.js        scroll progress bar, reveal-on-scroll, active nav highlight
images/          screenshots from the live product
```

## Run it locally

Just open `index.html` in a browser — everything is self-contained. Or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Push to GitHub + host on GitHub Pages

```bash
git init
git add .
git commit -m "Add IMPACT Center UX case study"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then in the repo on GitHub: **Settings → Pages → Deploy from a branch → main / (root)**. Your case study
will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Editing

- Swap or add screenshots in `images/` and reference them in `index.html`.
- All colors live as CSS custom properties at the top of `styles.css` (`:root`) — change them once and
  everything updates.
- Section "tag labels" (e.g. `RACK 04 — THE PROBLEM`) intentionally borrow the pantry's own bay/rack/door
  code system instead of generic numbering — keep that pattern if you add sections.
