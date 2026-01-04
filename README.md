# Yash Dipesh Palan — Professional Website

A single-page portfolio and consultation site for Advocate Yash Dipesh Palan. The site highlights practice areas, professional journey, and provides a Bar Council-compliant experience with a mandatory disclaimer modal.

## Features

- **Responsive Tailwind CSS layout** with hero, about, professional journey, expertise, strategy, and contact sections.
- **Animated interactions** (scroll reveals, navbar transitions, blob background) powered by lightweight custom JavaScript.
- **Bar Council disclaimer modal** that appears on every reload to ensure regulatory compliance.
- **Netlify Forms-powered contact form** capturing first name, last name, email, phone, matter type, and case details. AJAX submission provides inline success feedback without leaving the page.
- **SEO-ready**: custom meta tags, canonical link, Open Graph data, and Schema.org Attorney markup.

## Tech Stack

- HTML5 + Tailwind CSS (`styles.css` is the compiled output of `input.css` + `tailwind.config.js`).
- Vanilla JavaScript for UI behavior and Netlify form submission.
- Assets stored locally under `/asset` for full control.

## Local Development

1. Install dependencies (only needed if you plan to rebuild Tailwind):
   ```bash
   npm install
   ```
2. Run Tailwind build (optional—`styles.css` is already committed):
   ```bash
   npx tailwindcss -i ./input.css -o ./styles.css --watch
   ```
3. Serve the site locally (any static server works). Example via `npx serve`:
   ```bash
   npx serve .
   ```
4. Open the provided localhost URL in your browser.

## Deployment Instructions

### GitHub
1. Commit all files (including `/asset`, `styles.css`, and this README) to the repository `yashpalan17/Professional-website`.
2. Push to `main`/`master`.

### Netlify
1. In Netlify, click **Add new site → Import from Git** and select the GitHub repository.
2. Since this is a static site, the default settings work (no build command, publish directory is the repo root). If you choose to rebuild Tailwind at deploy time, set:
   - **Build command**: `npx tailwindcss -i ./input.css -o ./styles.css`
   - **Publish directory**: `.`
3. Deploy the site.
4. Configure **Form notifications** in Netlify → **Site Configuration → Forms → Form notifications** to send submissions to `Palan389@gmail.com` (or any preferred address).

## Netlify Forms Notes
- The form element includes `name="contact"`, `method="POST"`, `data-netlify="true"`, and a hidden `form-name` field. Netlify detects this during build.
- The JavaScript `handleSubmit` function posts form data using `application/x-www-form-urlencoded` so submissions work without reloading.

## Manual Upload Option
If you cannot push via Git:
1. Zip the entire project folder (including hidden files like `.gitignore` if present).
2. In GitHub → repository → **Add file → Upload files**, drag the zip (GitHub will unpack it) or drag the folder contents.
3. Commit via the web UI.

---
Maintained by the Cascade assistant on behalf of Yash Dipesh Palan. For assistance, update the repo and redeploy through Netlify as needed.
