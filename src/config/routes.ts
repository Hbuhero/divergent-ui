export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  contact: '/contact',
  faq: '/faq',
  media: '/media',
  serviceDetail: (slug: string) => `/services/${slug}`,
} as const;
