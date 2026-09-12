
# Saqlain Naqvi - Portfolio

A responsive personal portfolio website for **Saqlain Naqvi**, a software
engineer and full-stack developer. The site presents an introduction,
technical skills, selected projects, resume access, social profiles, and a
contact form.

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Animated, scroll-aware navigation bar
- Profile section with resume and contact call-to-action buttons
- About section with experience, education, and technology cards
- Project showcase with technology tags, GitHub links, and live-demo links
- Contact form powered by [EmailJS](https://www.emailjs.com/)
- Social links for LinkedIn, GitHub, Instagram, and email
- Smooth scrolling between page sections
- Local portfolio images and resume PDF served from `public/assets`

## Featured projects

The portfolio currently showcases:

- **Andaaz - Online Watch Store** - Full-stack e-commerce store with
  inventory, checkout, order confirmation, and an admin dashboard.
- **LeadForge - AI Lead Generation Platform** - Lead capture, scoring, and
  nurturing tools for businesses.
- **Horizon Boys Hostel - Marketing Website** - Responsive hostel website
  with room, facility, gallery, meal-plan, and WhatsApp inquiry information.
- **UniShop - University Student Marketplace** - Campus marketplace for
  listings, wishlists, seller contact, reporting, and administration.

Project data is defined in
[`src/components/Projects.jsx`](./src/components/Projects.jsx), so titles,
descriptions, technologies, images, and links can be updated in one place.

## Tech stack

- React 18
- Vite
- Tailwind CSS
- JavaScript (ES modules)
- EmailJS Browser SDK
- Lucide React
- React Icons
- PostCSS and Autoprefixer

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

From the project directory:

```bash
npm install
```

### Development server

Start Vite's development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal, normally
`http://localhost:5173`.

### Production build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
portfolio-react/
├── public/
│   └── assets/              # Images and downloadable resume
├── src/
│   ├── assets/              # Asset path definitions
│   ├── components/          # Navbar, profile, about, projects, contact, footer
│   ├── hooks/               # Responsive viewport hook
│   ├── styles/              # Tailwind entry styles and global CSS
│   ├── utils/               # Smooth-scroll helper
│   ├── App.jsx              # Page composition
│   └── main.jsx             # React entry point
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Customization

1. Replace or add images and documents in `public/assets`.
2. Update the paths in
   [`src/assets/assetPaths.js`](./src/assets/assetPaths.js).
3. Edit personal details and social URLs in
   [`src/components/Profile.jsx`](./src/components/Profile.jsx) and
   [`src/components/Contact.jsx`](./src/components/Contact.jsx).
4. Update skills and biography content in
   [`src/components/About.jsx`](./src/components/About.jsx).
5. Update project entries in
   [`src/components/Projects.jsx`](./src/components/Projects.jsx).
6. Change the page title in [`index.html`](./index.html).

### EmailJS contact form

The contact form submits directly from the browser through EmailJS. To use
your own EmailJS account, update the service ID, template ID, and public key
in `src/components/Contact.jsx`, and make sure the template field names match
the form fields:

- `from_name`
- `from_email`
- `company`
- `mobile`
- `message`

For a public portfolio, configure the EmailJS service and template with
appropriate domain restrictions and anti-spam settings.

## Deployment

The generated `dist/` directory can be deployed to any static hosting
provider. The project is also suitable for Vercel, Netlify, GitHub Pages, or
another host that supports Vite static builds.

For Vercel, import the repository and use:

- **Build command:** `npm run build`
- **Output directory:** `dist`

## License

This repository is a personal portfolio project. Contact the author before
reusing personal branding, photographs, resume content, or project assets.
