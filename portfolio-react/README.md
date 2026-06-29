# Minimalist Portfolio — React + Tailwind

React conversion of the original Salesforce LWC `minimalistPortfolio` component, now using Tailwind CSS for styling instead of a hand-written stylesheet.

## What's new in this version

- **Tailwind CSS** replaces the old `portfolio.css` file. Utility classes live directly on each element; `tailwind.config.js` defines custom tokens (`ink`, `slate`, `line`, `offwhite` colors, and the `mono` font family) that match the original palette.
- **Navbar is a floating rounded pill**: `fixed`, centered horizontally, `top-6` (1.5rem margin from the top of the viewport), `rounded-full`. This applies to both the desktop nav and the mobile hamburger nav.
- Since the nav is `fixed` and no longer takes up layout flow height, the `Profile` (hero) section has `pt-32` to keep its content clear of the floating pill.

## Before you run it — replace these

The original LWC had another developer's info hardcoded throughout. Every spot is marked with `// TODO` comments:

- **Name, title, bio** — `Profile.jsx`, `About.jsx`
- **Email / LinkedIn / GitHub links** — `Profile.jsx`, `Contact.jsx`
- **Experience / education / skills** — `About.jsx`, `Experience.jsx`
- **Projects** — `Projects.jsx`
- **Salesforce Web-to-Lead `oid` / `retURL` / reCAPTCHA site key** — `Contact.jsx`
- **Footer copyright name** — `Footer.jsx`

## Assets you need to add

Drop these files into `public/assets/` (filenames must match `src/assets/assetPaths.js`):

```
profile-pic.png       about-pic.png       logo.png
experience.png        education.png       arrow.png
checkmark.png         linkedin.png        github.png
email.png             project-1.png       project-2.png
project-3.png         resume-example.pdf
```

And the font file into `public/fonts/SUSEMono-VariableFont_wght.ttf` — or delete the `@font-face` block in `src/styles/index.css` and load a font from Google Fonts via a `<link>` tag in `index.html` instead, updating `tailwind.config.js`'s `fontFamily.mono` to match.

## How to run in VS Code

1. **Open the folder** in VS Code.
2. **Open a terminal** (`` Ctrl+` ``).
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the dev server:**
   ```bash
   npm run dev
   ```
5. Open the printed local URL (typically `http://localhost:5173`).

### Building for production
```bash
npm run build
```
Outputs static files to `dist/` — Tailwind's build step automatically purges unused classes, so the CSS bundle stays small.

## Project structure

```
portfolio-react/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   ├── assets/        ← your images & resume PDF go here
│   └── fonts/         ← your font file goes here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/index.css   ← Tailwind directives + @font-face only
    ├── assets/assetPaths.js
    ├── hooks/useIsDesktop.js
    ├── utils/scrollToId.js
    └── components/
        ├── Navbar.jsx     ← rounded, fixed, floating pill nav
        ├── Profile.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Customizing the navbar pill

In `Navbar.jsx`, the shared `PILL_BASE` constant controls the floating look:

```js
const PILL_BASE =
  'fixed top-6 left-1/2 -translate-x-1/2 z-[1000] rounded-full ' +
  'bg-white/90 backdrop-blur-md border border-line/40 shadow-lg';
```

- `top-6` → distance from the top of the screen (Tailwind spacing scale; `top-6` = 1.5rem). Increase to `top-8`, `top-10`, etc. for more margin.
- `rounded-full` → fully rounded pill shape. Swap for `rounded-2xl` if you want softer corners instead of a full pill.
- `bg-white/90` → background opacity; adjust the `/90` for more or less transparency.
