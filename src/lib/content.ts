/** Sort collection entries by their `order` field, lowest first. */
export const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) => a.data.order - b.data.order;

/** "[PLACEHOLDER] Web app" -> "placeholder-web-app", for filter keys. */
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
