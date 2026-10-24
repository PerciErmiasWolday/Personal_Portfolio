import type { ImageMetadata } from 'astro';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Images that Astro can optimize must be imported, so they are looked up here
 * by their path inside src/assets/ (e.g. "/media/projects/my-app/cover.jpg").
 * Returns undefined when the file does not exist yet, so callers can show a
 * placeholder sheet instead.
 */
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export function resolveImage(path?: string | null): ImageMetadata | undefined {
  if (!path) return undefined;
  const key = `/src/assets/${path.replace(/^\/+/, '')}`;
  return images[key]?.default;
}

export const isExternal = (src: string) => /^https?:\/\//.test(src);

/**
 * Videos, PDFs and captions live in public/. Checked at build time so links
 * and players only render when the file is really there. External URLs pass.
 */
export function publicFile(path?: string | null): string | undefined {
  if (!path) return undefined;
  if (isExternal(path)) return path;
  const clean = `/${path.replace(/^\/+/, '')}`;
  return existsSync(join(process.cwd(), 'public', clean)) ? clean : undefined;
}

export interface Video {
  type: 'file' | 'youtube' | 'loom';
  src: string;
  poster?: string;
  captions?: string;
}

/**
 * Works out which video to show. Uses the `video` field when set, otherwise
 * looks for the conventional file (e.g. public/media/projects/<slug>/demo.mp4).
 */
export function resolveVideo(video: Video | undefined, folder: string, fileName: string) {
  const v: Video | undefined =
    video ?? (publicFile(`${folder}/${fileName}`) ? { type: 'file', src: `${folder}/${fileName}` } : undefined);
  if (!v) return undefined;

  const src = v.type === 'file' ? publicFile(v.src) : v.src;
  if (!src) return undefined;

  // Poster: an optimizable image in src/assets/, else a file in public/.
  const posterPath = v.poster ?? `${folder}/poster.jpg`;
  const posterImage = resolveImage(posterPath);
  const posterUrl = posterImage ? undefined : publicFile(posterPath);

  const captions = publicFile(v.captions ?? (v.type === 'file' ? `${folder}/captions.vtt` : undefined));

  return { type: v.type, src, posterImage, posterUrl, captions };
}

/**
 * Paper, poster and slides for a research entry. Uses the frontmatter path
 * when set, otherwise the conventional file in public/media/research/<slug>/.
 * Each is undefined unless the file exists.
 */
export function researchDocs(r: { slug: string; paperPdf?: string; posterPdf?: string; slidesPdf?: string }) {
  const folder = `/media/research/${r.slug}`;
  return {
    paper: publicFile(r.paperPdf ?? `${folder}/paper.pdf`),
    poster: publicFile(r.posterPdf ?? `${folder}/poster.pdf`),
    slides: publicFile(r.slidesPdf ?? `${folder}/slides.pdf`),
  };
}
