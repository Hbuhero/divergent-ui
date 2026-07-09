import { Helmet } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE, SITE_URL, getPageMeta } from '../seo';

interface SEOProps {
  path: string;
  title?: string;
  description?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  preloadImages?: string[];
}

export function SEO({ path, title, description, ogImage, type = 'website', preloadImages }: SEOProps) {
  const meta = getPageMeta(path);
  const resolvedTitle = title ?? meta?.title ?? 'Divergent Tanzania Limited';
  const resolvedDescription =
    description ??
    meta?.description ??
    'Divergent Tanzania Limited delivers integrated logistics, warehouse, agribusiness and clean energy solutions across Tanzania and East Africa.';

  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={url} />
      {preloadImages?.map((src) => (
        <link key={src} rel="preload" as="image" href={src} fetchPriority="high" />
      ))}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Divergent Tanzania Limited" />
      <meta property="og:locale" content="en_TZ" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
