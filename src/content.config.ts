import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const video = z.object({
  type: z.enum(['file', 'youtube', 'loom']),
  src: z.string(),
  poster: z.string().optional(),
  captions: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    // Short subtitle, shown at the top left of the card, e.g. "AI-Assisted Reading Companion"
    category: z.string(),
    year: z.number().int(),
    // Focus areas, shown under the title, e.g. ["Accessible Technology", "NLP"]
    topics: z.array(z.string()).default([]),
    summary: z.string(),
    // Shown beside the case-study header when set.
    role: z.string().optional(),
    team: z.string().optional(),
    duration: z.string().optional(),
    stack: z.array(z.string()),
    metrics: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    liveUrl: z.url().optional(),
    codeUrl: z.url().optional(),
    caseStudyOnly: z.boolean().default(false),
    video: video.optional(),
    gallery: z.array(z.string()).optional(),
    // Alt text for each gallery image, in the same order.
    galleryAlt: z.array(z.string()).optional(),
    // Optional title and caption shown under each gallery image, in the same order.
    galleryTitles: z.array(z.string()).optional(),
    galleryCaptions: z.array(z.string()).optional(),
    // Optional case-study introduction, one string per paragraph. Falls back to `summary`.
    overview: z.array(z.string()).optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    type: z.enum(['thesis', 'research assistant', 'independent']).optional(),
    // Category shown at the top left of the card, e.g. "AI Ethics Research". Falls back to `type`.
    typeLabel: z.string().optional(),
    years: z.string().optional(),
    institution: z.string(),
    advisor: z.string().optional(),
    collaborators: z.array(z.string()).optional(),
    topics: z.array(z.string()),
    // Models studied, tools and methods used, shown in the research page header.
    models: z.array(z.string()).optional(),
    tools: z.array(z.string()).optional(),
    methods: z.array(z.string()).optional(),
    // Research areas shown as tags on the research page. Falls back to `topics`,
    // so the card can keep result chips while the page lists areas.
    areas: z.array(z.string()).optional(),
    summary: z.string(),
    // Optional "Why it matters" disclosure on the card. Hidden when empty.
    whyItMatters: z.string().optional(),
    // Optional image on the card, a path inside src/assets/ (e.g. a poster preview).
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // Link to a published version (journal, proceedings, arXiv). Shown as "View published paper".
    publicationUrl: z.url().optional(),
    paperPdf: z.string().optional(),
    posterPdf: z.string().optional(),
    slidesPdf: z.string().optional(),
    video: video.optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

// The description is the Markdown body of each file.
const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    location: z.string().optional(),
    // Shown at the top left of the home page card, e.g. "Software Engineering"
    category: z.string().optional(),
    start: z.string(),
    end: z.string().optional(), // e.g. "Present". Leave out for a single period like "Summer 2025".
    // Focus areas, shown as a small line under the organization.
    tags: z.array(z.string()).default([]),
    // Compact line for the /about timeline.
    about: z.object({ date: z.string(), place: z.string().optional(), line: z.string() }).optional(),
    // Two short highlights for the home page card. Ones containing a number get a tinted background.
    chips: z.array(z.string()).default([]),
    // Measurable results, shown as badges: { value: "10%", label: "faster SQL queries" }
    achievements: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    // Methods or topics worth calling out that are not numbers.
    methods: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    // Optional one-liner and bullets, for entries without a body.
    summary: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const leadership = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/leadership' }),
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    years: z.string().optional(),
    summary: z.string().optional(),
    order: z.number(),
  }),
});

const awards = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/awards' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string().optional(),
    year: z.union([z.number(), z.string()]).optional(), // shown on the right when set
    order: z.number(),
  }),
});

export const collections = { projects, research, experience, leadership, awards };
