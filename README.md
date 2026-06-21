# Priyanka Moura — Portfolio Website

A single self-contained `index.html` (HTML + CSS + JS inline). No build step, no frameworks, no paid services. Hosted free on GitHub Pages.

## The one thing that broke last time (and why this won't)
The old multi-page version broke because the repo was named `PriyankaMoura.github.io` AND it had separate `css/` and `js/` folders, so the stylesheet paths never resolved. This version is **one single file** with everything inline. There is nothing to misplace. Just upload `index.html`.

## How to deploy (easy)
1. Create a repo (any simple name, e.g. `priyanka` — NOT `something.github.io`).
2. Upload `index.html` to it.
3. Settings → Pages → deploy from the default branch.
4. Open the live link **in an Incognito window** (GitHub Pages caches hard; a normal refresh can lie to you).

For a clean `priyankamoura.github.io` URL, Priyanka makes her own free GitHub account and names the repo `priyankamoura.github.io`. Same single file works either way.

## Adding her photo
Two spots use a photo at `images/priyanka.jpg`:
- the hero phone profile circle
- the About section

Until that file exists, both show a tasteful "PM" monogram / placeholder, so the site looks finished with or without it. To add it: create an `images` folder in the repo and upload a photo named exactly `priyanka.jpg`.

## What's on the page
Nav · Hero (the "Living Feed" phone showpiece) · Proof stats · Services (4) · Work (5 case-study cards) · Brands · Skills · About (story + timeline) · Contact · Footer · rule-based chatbot · light/dark toggle.

## Design notes
- **Fonts:** Fraunces (display) + DM Sans (body). Two only.
- **Palette:** sunset — rose #FF5D8F, coral #FF8A5B, gold #FFC75F, lilac #B388FF, plum #6A2C70.
- **Theme:** light by default, dark toggle (in-memory, no localStorage).
- **Mobile-first** with breakpoints at 680 / 880 / 1024px. Verified no horizontal overflow 390→1280px, no JS errors, CSS balanced.
- No em-dashes in visible copy. Client logos via Google's favicon service.

## Editing content
Everything is plain text in `index.html`:
- **Work cards:** the `var W=[…]` array near the bottom `<script>`.
- **Brands:** the `var B=[…]` array (each row: name, label, domain for the favicon).
- **Skills/tools:** the `var S` (bars) and the `tools` / `soft` arrays.
- **Chatbot answers:** the `INTENTS` array — add an object with `kw` (keywords), `ph` (phrases), `a` (answers), `next` (suggested buttons).

## Make the contact buttons hers
The email (`priyankamoura0025@gmail.com`) and LinkedIn URL are already in. Update the LinkedIn href if her profile slug differs from `priyanka-moura`.
