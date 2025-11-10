# Portfolio Website

A modern, responsive, accessible static portfolio that renders all content from a JSON file. Built with vanilla HTML, CSS, and JavaScript—no frameworks or build tools required.

## Features

- **JSON-Driven Content**: All text and images loaded from `mydata.json`
- **Light/Dark Theme**: Auto-detects system preference with manual toggle
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: Semantic HTML, WCAG AA+ compliant, keyboard navigable
- **Performance**: 95+ Lighthouse scores across all metrics
- **Zero Dependencies**: Pure HTML/CSS/JS, no frameworks or build steps
- **GitHub Pages Ready**: Deploy in seconds with no configuration

## Quick Start

### Run Locally

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd <repo-name>
   ```

2. Serve the files with any static server:
   ```bash
   # Option 1: Python
   python -m http.server 8000

   # Option 2: Node.js
   npx serve

   # Option 3: PHP
   php -S localhost:8000
   ```

3. Open [http://localhost:8000](http://localhost:8000) in your browser

### Customize Your Portfolio

Edit `mydata.json` to personalize your portfolio:

```json
{
  "brand": "Your Name",
  "tagline": "Your value proposition in one line",
  "about": {
    "avatar": "assets/avatar.jpg",
    "bio": "2-3 sentences about you"
  },
  "skills": [...],
  "projects": [...],
  "experience": [...],
  "testimonials": [...],
  "contact": {...},
  "seo": {...}
}
```

**Key Fields:**

- `brand`: Your name (appears in header and hero)
- `tagline`: Short value proposition
- `about.avatar`: Path to your profile picture
- `skills`: Array of skill groups with items
- `projects`: Array of project objects with:
  - `title`, `image`, `short` (description)
  - `longText` (optional, enables modal detail view)
  - `tags`, `links` (demo, repo)
- `experience`: Timeline with company, role, dates, highlights
- `testimonials`: Optional endorsements
- `contact`: Email and social links
- `seo`: Meta tags for social sharing

### Add Your Images

Replace placeholder images in `/assets/`:

- `avatar.jpg` – Your profile photo (400×400px recommended)
- `project1.jpg`, `project2.jpg`, etc. – Project screenshots (800×600px)
- `og.png` – Social share image (1200×630px)

**Formats Supported:** JPG, PNG, SVG, WebP

## Deployment

### GitHub Pages

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to **Settings** → **Pages**
   - Source: **Deploy from branch**
   - Branch: **main** / `/ (root)`
   - Click **Save**

3. Your site will be live at `https://<username>.github.io/<repo-name>/`

### Other Platforms

- **Vercel**: Import GitHub repo, auto-deploy
- **Netlify**: Drag and drop the folder
- **Cloudflare Pages**: Connect repo, zero config needed

## Project Structure

```
/
├── index.html          # Main HTML structure
├── styles.css          # All styles (~300 lines)
├── app.js              # Data fetching & rendering logic
├── mydata.json         # Your portfolio content (EDIT THIS!)
├── 404.html            # Fallback for SPA routing
├── assets/             # Images referenced in JSON
│   ├── avatar.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   └── og.png
└── README.md           # This file
```

## Customization Tips

### Theme Colors

Edit CSS variables in `styles.css` (lines 5-20):

```css
:root {
  --accent: #2563eb;        /* Primary brand color */
  --accent-hover: #1d4ed8;  /* Hover state */
  /* ... */
}
```

### Typography

Change the font stack in `styles.css`:

```css
body {
  font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Sections

To hide a section, omit its data from `mydata.json`. The site gracefully handles missing fields:

- No `testimonials`? Section auto-hides
- No `about.avatar`? Text-only about section
- No `project.longText`? Card doesn't open modal

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

Optimizations included:

- Lazy-loaded images
- Minimal CSS/JS (no frameworks)
- CSS variables for theme switching
- System font stack (no web fonts to download)
- SVG icons (no icon libraries)
- Reduced motion support

Expected Lighthouse scores with sample content:

- Performance: 95-100
- Accessibility: 100
- Best Practices: 95-100
- SEO: 100

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Color contrast AA+ compliant
- Reduced motion support
- Alt text for all images (from JSON)

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with ❤️ using vanilla web technologies.

---

**Questions?** Open an issue or submit a PR!
