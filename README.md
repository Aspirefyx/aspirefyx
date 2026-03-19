# AspireFyX Website — GitHub + Decap CMS Setup

## IMPORTANT: Before deploying, update one line in admin/config.yml

Open admin/config.yml and change line 3:
  repo: YOUR-GITHUB-USERNAME/aspirefyx
to your actual GitHub username, e.g.:
  repo: anshu-sharma/aspirefyx

---

## File Structure

```
aspirefyx/
  index.html          ← Your website
  _redirects          ← Cloudflare routing
  admin/
    index.html        ← CMS login panel at /admin
    config.yml        ← Defines every editable field
  content/
    data.json         ← All editable text content
    blog/             ← Blog posts go here (auto-created by CMS)
  images/
    logo.png          ← Your logo
```

## What's Editable from the CMS Admin Panel

- Logo
- All page headings and body text
- Home, Pathfinders, Professionals, Builders, About, Book pages
- Footer details
- Blog posts (create, edit, publish)

## CMS Admin Access

After deployment: aspirefyx.pages.dev/admin

---

See deployment guide document for step-by-step instructions.
