# portfolio-rafi

Source for [rafi.web.id](https://rafi.web.id). Static HTML/CSS/JS, no build step, served by GitHub Pages.

```
index.html          one-page portfolio
404.html            served by GitHub Pages for any missing URL
CNAME               custom domain (rafi.web.id)
.nojekyll           serve files as-is, skip Jekyll
assets/css/styles.css
assets/js/main.js   language switch, active nav, scroll reveal
assets/img/         rafi.jpg (900px, web-sized), favicon.png
```

## Editing copy

Every piece of text has an English and an Indonesian version side by side:

```html
<p lang="en">English copy</p>
<p lang="id">Teks bahasa Indonesia</p>
```

`<html data-lang>` decides which one shows. Edit both when you change one.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
Push to `main` and the site updates in a minute or two.
