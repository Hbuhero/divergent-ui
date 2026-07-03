export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  contact: '/contact',
  serviceDetail: (slug: string) => `/services/${slug}`,
} as const;
