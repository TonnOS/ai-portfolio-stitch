# AI Portfolio Stitch

Cyberpunk AI Developer Portfolio - Generated with Google Stitch, built with Vue 3 + Tailwind CSS.

## Tech Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite** 5.x
- **Tailwind CSS** 3.x
- **Google Stitch** (Design Generation)

## Project Structure

```
src/
├── components/
│   ├── Navbar.vue          # Fixed navigation
│   ├── HeroSection.vue     # Hero with CTA
│   ├── ProjectsSection.vue # Project grid
│   ├── ProjectCard.vue     # Project card component
│   ├── ContactSection.vue  # Contact form
│   ├── FooterSection.vue   # Footer
│   ├── StatusIndicator.vue # Status display
│   └── Divider.vue         # Visual separator
├── data/
│   └── projects.js         # Projects data
├── App.vue                 # Main app
├── main.js                 # Entry point
└── style.css               # Global styles + Tailwind
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

- **Netlify:** `base: '/'` in vite.config.js
- **GitHub Pages:** `base: '/ai-portfolio-stitch/'`

## Best Practices Applied

- ✅ Lazy loading for components
- ✅ Separate data files for easy maintenance
- ✅ Small, reusable components (SRP)
- ✅ Props validation with `defineProps`
- ✅ Semantic HTML with ARIA labels
- ✅ SEO meta tags + favicon
- ✅ Responsive design (mobile-first)

## Initialize with Opencode

```bash
opencode
```

Then run `/init` to set up AI-assisted development.

## Future Improvements

- [ ] TypeScript support
- [ ] Dark/Light mode toggle
- [ ] Form validation with VeeValidate
- [ ] Animations with GSAP or Motion One
- [ ] Unit tests with Vitest