# Content guide

How to replace the placeholders and add new content. Every placeholder string
starts with `[PLACEHOLDER]` (or contains `PLACEHOLDER` in URLs and emails), so
search the project for `PLACEHOLDER` to find what is left.

One exception has no prefix, so the header stays clean: your last name in
the wordmark. Both are marked with a `PLACEHOLDER`
code comment in `src/config/site.ts`.

## Where files go

| What | Where | Why |
| --- | --- | --- |
| Images (portrait, covers, screenshots, diagrams, video posters) | `src/assets/` | Astro resizes and optimizes them |
| Videos, captions, PDFs | `public/media/` | Served as-is |
| Resume PDF | `public/Perci-Wolday-Resume.pdf` | Linked from the header and /resume |
| Text content | `src/content/` | One Markdown/MDX file per entry |
| Site settings | `src/config/site.ts` | Name, intro, email, links, skills |

A missing image or file never breaks the build. The site shows a labeled
placeholder sheet (or hides the link) until the file exists.

## Update site settings

Open `src/config/site.ts`. It holds your name (the hero says "Hey, I'm
{firstName}."), the hero `tagline` and `intro`, the "seeking" line (shown on
/resume), the spec list (focus, location, education, status), email,
social links, the story pull-quote, contact line, education, skills and
interests. Also set `url` to your real domain: canonical URLs, Open Graph tags
and the sitemap use it.

Set `specs.openToRoles` to `false` to hide the terracotta status dot.

## Swap the photo

1. Save a 4:5 portrait, at least 1200px tall, as `src/assets/images/portrait.jpg`.
2. In `src/config/site.ts`:

   ```ts
   photo: 'images/portrait.jpg',
   photoAlt: 'Portrait of Your Name',
   ```

The hero and /about both use it.

## Add a project

1. Create `src/content/projects/my-project.mdx`. The file name does not matter,
   but keep it the same as `slug`.
2. Put images in `src/assets/media/projects/my-project/` and the video in
   `public/media/projects/my-project/`.

```mdx
---
title: "My Project"
slug: "my-project"
category: "Web app"
year: 2026
summary: "One sentence on what it does and who it is for."
role: "Lead engineer"
team: "3 engineers"
duration: "4 months"
stack: ["TypeScript", "PostgreSQL"]
metrics: ["70% faster queries", "12k users"]
featured: true        # show on the home page
order: 5              # lower comes first
cover: "/media/projects/my-project/cover.jpg"
coverAlt: "Dashboard showing query times by region"
liveUrl: "https://example.com"                     # optional
codeUrl: "https://github.com/you/my-project"       # optional
caseStudyOnly: false  # true shows "Case study only"
gallery:
  - "/media/projects/my-project/gallery-1.jpg"
  - "/media/projects/my-project/gallery-2.jpg"
galleryAlt:
  - "Sign-up flow on mobile"
  - "Admin view of usage"
---

## Problem

What was broken or missing, and who it affected.

## Approach

The options you considered and why you chose this one.

## Architecture

The main components and how data moves between them.

<Diagram src="/media/projects/my-project/architecture.png" alt="Services and queues" caption="System overview" />

## Results

What changed.


## What I learned

One or two honest lessons.
```

`<Diagram>` works in any project MDX file without an import.

Image sizes: `cover.jpg` 1600 × 900, `gallery-*.jpg` 1600 × 1000, `architecture.png`
1600px wide.

To remove a placeholder project, delete its `.mdx` file and its media folders.

## Add a video

**Self-hosted:** put `demo.mp4` (1080p, H.264, under 30MB) and `captions.vtt` in
`public/media/projects/<slug>/`, and a 1920 × 1080 `poster.jpg` in
`src/assets/media/projects/<slug>/`. The case study picks them up
automatically. No frontmatter needed.

**YouTube or Loom:** add to the frontmatter:

```yaml
video:
  type: youtube          # or loom
  src: "https://www.youtube.com/watch?v=VIDEO_ID"
  poster: "/media/projects/<slug>/poster.jpg"   # optional, in src/assets
```

It shows as a poster card that opens in a new tab.

For research, the same rules apply with `video.mp4` in
`public/media/research/<slug>/`.

## Add research

Create `src/content/research/my-thesis.mdx`. Put PDFs in
`public/media/research/my-thesis/`.

```mdx
---
title: "Title of the work"
slug: "my-thesis"
type: "thesis"               # thesis | research assistant | independent
typeLabel: "Senior thesis"   # optional display label
years: "2025 to 2026"
institution: "University Name"
advisor: "Dr. Name"          # optional
collaborators: ["Name"]      # optional
topics: ["Distributed systems", "Consensus"]
summary: "Two or three sentences. Keep it short."
whyItMatters: "One or two sentences for the card's disclosure."
featured: true
order: 1
---

## Abstract

## Question

## Method

## Findings

## Why it matters
```

Paper, poster and slides links appear only once `paper.pdf`, `poster.pdf` or
`slides.pdf` exist in that folder. To use other names or external URLs, set
`paperPdf`, `posterPdf` or `slidesPdf` in the frontmatter.

## Add experience

Create `src/content/experience/company.md`. The paragraph under the
frontmatter is the description, shown exactly as written (`**bold**` works).

```md
---
role: "Engineering Intern"
organization: "Example Company"
location: "Chicago, IL"        # optional
start: "2025"
end: "Present"                 # optional; leave out for a single period like "Summer 2025"
tags: ["Payment Infrastructure", "Data Engineering"]   # small line under the company
achievements:                  # badges for measurable results
  - { value: "10%", label: "faster SQL queries" }
methods: ["Statistical Parity"]   # outlined tags for methods that are not numbers
stack: ["Python", "SQL"]          # small, quiet tech tags
order: 1                       # lower comes first
---

Your paragraph, in your own words.
```

The home page, /about and /resume all show these rows.

## Add leadership or teaching

Create `src/content/leadership/role-name.md`. Shown on the home page under
Leadership & teaching.

```md
---
role: "Resident Assistant"
organization: "Alma College"
years: "2024"        # optional, shown on the right
summary: "..."       # optional, one sentence
order: 3
---
```

## Add an award

Create `src/content/awards/award-name.md`:

```md
---
title: "Award name"
issuer: "Who gave it"        # optional
year: 2025
order: 1
---
```

## Edit your story

Your story on /about is `src/content/about/story.mdx`. Plain Markdown works.
longer shows a pull-quote.

## Replace the resume

Replace `public/Perci-Wolday-Resume.pdf` with your real resume (same file name). The
education, experience and skills on the /resume page come from
`src/config/site.ts` and the experience collection, so keep them in sync.
