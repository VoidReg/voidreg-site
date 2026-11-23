// Alias of /sitemap.xml under a fresh filename. Search Console can leave a
// sitemap entry stuck on "Sitemap could not be read"; submitting the same
// content under a new URL is the known way to reset it. /sitemap.xml stays
// canonical in robots.txt.
export { GET } from '../sitemap.xml/+server';
