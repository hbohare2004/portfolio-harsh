/**
 * Canonical site URL for metadata, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com).
 * On Vercel, VERCEL_URL is used when NEXT_PUBLIC_SITE_URL is unset.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}
