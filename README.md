# Eduardo Alves — Portfolio / Resume

Personal portfolio and resume website, built as a static site and published via GitHub Pages.

**Live site:** https://eduardoedson.github.io and https://eduardoalves.tech/

## Overview

A single-page site presenting an About section, Education, Experience and Projects, with a fixed top navigation, a light/dark theme toggle, and scroll-reveal animations.

## Tech stack

- HTML5
- CSS3 (custom properties / CSS variables, responsive layout, no framework)
- Vanilla JavaScript (no build step, no dependencies to install)
- [Font Awesome](https://fontawesome.com/) for icons (loaded via kit script)
- Google Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display/headings) and [Inter](https://fonts.google.com/specimen/Inter) (body text)

## Project structure

```
├── index.html                  # Page markup and content
├── Assets/
│   ├── favicon.ico
│   ├── styles/
│   │   ├── app.css             # Core styles, design tokens, layout
│   │   └── mobile.css          # Responsive overrides (max-width breakpoints)
│   ├── scripts/
│   │   ├── animateText.js      # Typewriter effect for the hero name
│   │   └── script.js           # Theme toggle, scroll reveal, nav active state, project links
│   └── files/
│       ├── Resume.pdf
│       ├── CV - Eduardo Edson Batista Cordeiro Alves.pdf
│       └── CV - Eduardo Edson Batista Cordeiro Alves.docx
```

## Features

- **Light / dark theme** — toggled from the top navigation, persisted in `localStorage`, and applied before first paint to avoid a flash of the wrong theme.
- **Responsive layout** — single fixed breakpoint set (`≤ 900px`, `≤ 480px`) covering tablet and mobile.
- **Scroll-reveal animations** — sections fade/slide into view using `IntersectionObserver`; disabled automatically when the user has `prefers-reduced-motion` enabled.
- **Active section highlighting** — the top navigation highlights the section currently in view.
- **No build tooling required** — plain HTML/CSS/JS, opens directly in a browser or via any static file server.

## Deployment

The site is deployed automatically via **GitHub Pages** from this repository.

## Content

All resume content (About, Education, Experience, Projects, contact links) lives directly in `index.html`. To update it, edit the corresponding `<section>` in that file — no data files or CMS are involved.

## License

This repository contains personal resume content and is not intended for reuse as-is. Feel free to use the code/layout as a reference for your own portfolio.
