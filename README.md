# Sayed Ashraf, Portfolio

Static site: no build step. Deploys as-is on Vercel.

```
index.html          page structure and content
css/styles.css      all styling; colors and fonts are at the top (:root)
js/main.js          theme toggle, mobile menu, contact form
assets/images/      put project screenshots here
```

## Add a project screenshot
1. Save the image in `assets/images/` (e.g. `project-1.webp`).
2. In `index.html`, replace the `<div class="shot">` placeholder with:
   `<img class="shot-img" src="assets/images/project-1.webp" alt="Describe the screenshot" loading="lazy">`
