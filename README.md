# Priyanka Moura — Portfolio Website

A 5-page professional portfolio for a social media manager, with dark/light mode, scroll animations, animated stats, and a fully responsive layout.

**Pages:** Home · About · Work (case studies) · Services · Contact

---

## 📁 File Structure
```

├── index.html        ← Home
├── about.html        ← Bio, timeline, skills, education
├── work.html         ← Full case studies
├── services.html     ← Services, process, testimonials
├── contact.html      ← Contact form + links
├── css/
│   └── style.css     ← All styling (one file)
└── js/
    └── main.js       ← Theme toggle, animations, form
```
**Keep this exact folder structure when uploading** — the pages link to `css/` and `js/` folders.

---

## 🚀 Deploy to GitHub Pages (Free Live Link)

1. Go to your repo on GitHub
2. Click **"Add file" → "Upload files"**
3. Drag in **all files AND the `css` and `js` folders** (keep the structure)
4. Click **"Commit changes"**
5. Go to **Settings → Pages → Branch: main → Save**
6. Wait 2–3 minutes → your site is live!

> Tip: To get the clean URL `priyankamoura.github.io`, she should create her **own** GitHub account and name the repo `priyankamoura.github.io`.

---

## ✏️ What to Update Later

| What | Where | Find |
|---|---|---|
| Instagram link | All pages (footer) + contact | `#` next to "Instagram" |
| Real testimonials | `services.html` | "Add Client Name" |
| Case study images | `work.html` | "Add visuals here" boxes |
| Profile photo | `index.html`, `about.html` | the `hero-avatar` (shows "PM") |

### Adding a profile photo
Replace this:
```html
<div class="hero-avatar">PM</div>
```
With:
```html
<div class="hero-avatar"><img src="assets/priyanka.jpg" alt="Priyanka Moura" style="width:100%;height:100%;object-fit:cover;border-radius:24px;"></div>
```
(Put the photo in an `assets/` folder and upload it too.)

---

## 📬 Make the Contact Form Send Real Emails (Free)

1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a form → copy your endpoint URL
3. In `contact.html`, find `<form class="form" id="contactForm">`
4. Change it to:
   ```html
   <form class="form" id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
5. Done — messages go straight to her inbox.

---

## 🎨 Features
- ☀️🌙 Dark/Light toggle (remembers choice)
- 📊 Animated number counters
- ✨ Scroll-reveal animations
- 📱 Fully mobile responsive
- ♿ Keyboard accessible + respects reduced-motion
- ⚡ Loads fast (no heavy frameworks)
