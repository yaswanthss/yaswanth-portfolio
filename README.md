# Yaswanth Naidu Vegi — Portfolio

A production-grade animated portfolio website built with **React + Vite**.

## ✨ Features

- 🌀 Loading screen with orbital animation
- 🖱️ Custom glowing cursor with trailing ring
- ✨ Live particle network canvas (mouse-reactive)
- 💎 Hero name shimmer gradient animation
- 🃏 3D floating card with continuous rotation
- 📜 Scroll reveal on all sections (fade-up, slide-left, slide-right)
- 📊 Skill bars animate only when scrolled into view
- 🔁 Infinite tech-stack marquee (pauses on hover)
- 🎯 Project cards with top-border gradient sweep on hover
- 🌀 Pulsing ripple rings on contact section
- 📱 Fully responsive — mobile-first

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:5175](http://localhost:5175) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview the build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

### Option 1 — Netlify (Recommended, easiest)

**Method A: Drag & Drop**
1. Run `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page
4. Live in seconds ✅

**Method B: Connect GitHub repo**
1. Push this project to a GitHub repo
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Select your repo
4. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site** ✅

---

### Option 2 — GitHub Pages

1. Push this project to a GitHub repository

2. If your repo is `username/yaswanth-portfolio` (not `username.github.io`), update `vite.config.js`:
   ```js
   base: '/yaswanth-portfolio/',
   ```
   If deploying to `username.github.io`, leave `base: '/'`.

3. Enable GitHub Pages in repo settings:
   - Go to **Settings → Pages**
   - Source: **GitHub Actions**

4. The workflow at `.github/workflows/deploy.yml` will auto-deploy on every push to `main`.

5. Your site will be live at:
   - `https://username.github.io/yaswanth-portfolio/` (project repo)
   - `https://username.github.io` (user repo)

---

### Option 3 — Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite. ✅

---

## 📁 Project Structure

```
yaswanth-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.jsx / .module.css
│   │   ├── Cursor.jsx / .module.css
│   │   ├── ParticleCanvas.jsx
│   │   ├── Nav.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── Marquee.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Achievements.jsx / .module.css
│   │   ├── Education.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   └── Footer.jsx / .module.css
│   ├── data/
│   │   └── resume.js          ← Edit ALL your content here
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── .github/workflows/
│   └── deploy.yml             ← GitHub Pages auto-deploy
├── index.html
├── vite.config.js
├── netlify.toml               ← Netlify config
├── .gitignore
└── package.json
```

---

## ✏️ Updating Content

**All your resume data lives in one file:**

```
src/data/resume.js
```

Edit that file to update:
- Name, email, phone, LinkedIn, GitHub URLs
- Work experience bullets
- Skill names and percentages
- Project titles, descriptions, metrics, tags
- Achievements
- Education details
- Languages

No need to touch any component files.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI components |
| Vite 5 | Build tool & dev server |
| CSS Modules | Scoped component styles |
| Vanilla JS | Animations (particles, cursor, scroll reveal) |
| CSS Keyframes | All motion effects |
| GitHub Actions | CI/CD for GitHub Pages |

---

## 📬 Contact

**Yaswanth Naidu Vegi**
- Email: yaswanthssnaidu07@gmail.com
- Phone: 9676862619
