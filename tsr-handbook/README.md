# TSR — The Silver Road · Player's Handbook

An interactive web-based Player's Handbook for **The Silver Road (TSR)** roleplaying group, version 5.0.

## 📖 Contents

| Page | Description |
|---|---|
| `index.html` | Landing page with chapter overview and quick reference |
| `pages/getting-started.html` | Attributes, Stats, Skills overview, Roles, Character Sheet, Leveling |
| `pages/combat.html` | Full combat guide: actions, attacking, magic, conditions, terrain |
| `pages/skills.html` | All Physical and Magic skill trees with accordion details |
| `pages/boons.html` | All Starting Boons with comparison table |

## 🚀 Hosting on GitHub Pages

1. Push this entire folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select `main` branch and `/ (root)`.
4. Your handbook will be live at `https://yourusername.github.io/your-repo-name/`.

## 🗂 File Structure

```
tsr-handbook/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── nav.js
└── pages/
    ├── getting-started.html
    ├── combat.html
    ├── skills.html
    └── boons.html
```

## ✨ Features

- **Dark fantasy aesthetic** — parchment, ink, and gold colour palette
- **Fully responsive** — works on mobile, tablet, and desktop
- **Accordion skill cards** — click to expand/collapse skill details
- **Sticky navigation** — always accessible
- **No dependencies** — pure HTML, CSS, and vanilla JavaScript (no frameworks, no build step)
- **Google Fonts** — Cinzel Decorative, Cinzel, and EB Garamond

## 📝 Updating Content

All content is written directly in HTML. To update rules:
- Edit the relevant `.html` file in `/pages/`
- Styling lives in `css/style.css`
- Navigation toggle logic is in `js/nav.js`

---

*Source material: TSR Documents v5.0 — Combat Guide, Getting Started, Skills, Starting Boons.*
