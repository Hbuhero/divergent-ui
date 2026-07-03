import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SITEMAP_PATHS } from '../src/config/sitemapPaths.ts';
import { SITE_URL } from '../src/seo/constants.ts';
import { pageMeta } from '../src/seo/pageMeta.ts';

function buildLoc(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function generateSitemap(): void {
  const entries = pageMeta.filter((entry) => SITEMAP_PATHS.includes(entry.path));

  if (entries.length !== SITEMAP_PATHS.length) {
    const missing = SITEMAP_PATHS.filter(
      (path) => !entries.some((entry) => entry.path === path),
    );
    if (missing.length > 0) {
      console.warn(`Warning: missing pageMeta for sitemap paths: ${missing.join(', ')}`);
    }
  }

  const lastmod = new Date().toISOString().split('T')[0];

  const urlEntries = entries
    .map(
      (entry) =>
        `  <url><loc>${buildLoc(entry.path)}</loc><lastmod>${lastmod}</lastmod><changefreq>${entry.changefreq}</changefreq><priority>${entry.priority.toFixed(1)}</priority></url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

  const outputPath = resolve(process.cwd(), 'dist/sitemap.xml');
  writeFileSync(outputPath, xml, 'utf-8');
  console.log(`Generated sitemap with ${entries.length} URLs → dist/sitemap.xml`);
}

generateSitemap();
