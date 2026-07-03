import { ROUTES } from './routes';

/** Paths included in sitemap.xml — must match implemented routes in src/routes.tsx */
export const SITEMAP_PATHS: readonly string[] = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.services,
  ROUTES.serviceDetail('logistics-supply-chain'),
  ROUTES.serviceDetail('warehouse-operations'),
  ROUTES.serviceDetail('agribusiness-support'),
  ROUTES.serviceDetail('clean-energy'),
  ROUTES.contact,
];
