# Portfolio

Personal portfolio site built with Astro and TypeScript. Static output, plain
CSS, no UI framework.

To replace placeholders and add projects, research, videos or a new photo, see
[CONTENT_GUIDE.md](CONTENT_GUIDE.md).

## Commands

Requires Node 22 or newer.

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npx astro check` | Type-check components and content |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Serve the built site locally |

## Structure

```text
src/
  config/site.ts        Site-wide settings (name, intro, email, links, skills)
  content/              Projects, research, experience, awards, about story
  content.config.ts     Zod schemas for the collections
  assets/               Images (optimized at build time)
  components/           Header, cards, print sheet, video, timeline, ...
  layouts/              Base layout with SEO tags
  pages/                Routes: /, /projects, /research, /about, /resume, 404
  styles/global.css     Design tokens and base styles
public/
  media/                Videos, captions and PDFs
  Perci-Wolday-Resume.pdf
```

## Deploy

Set `url` in `src/config/site.ts` to your real domain first. The sitemap,
canonical URLs and Open Graph tags use it.

**Vercel:** import the repository. It detects Astro: build command
`npm run build`, output directory `dist`. No other settings needed.

**Netlify:** import the repository with build command `npm run build` and
publish directory `dist`. Netlify serves `dist/404.html` for missing pages
automatically.

**GitHub Pages:** add `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then set **Settings → Pages → Source** to **GitHub Actions**. Use a custom
domain or a `username.github.io` repository: internal links are root-relative,
so a project site served from `username.github.io/repo/` is not supported
without changes.
