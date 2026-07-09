export interface ImageMeta {
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
}

/** Centralized alt text and intrinsic dimensions for public images */
export const IMAGE_META: Record<string, ImageMeta> = {
  '/images/hero-logistics.jpg': {
    alt: 'Divergent Tanzania logistics trucks and supply chain operations across Tanzania',
    width: 1920,
    height: 1080,
    loading: 'eager',
  },
  '/images/about-office.jpg': {
    alt: 'Divergent Tanzania Limited office in Mkuranga, Pwani',
    width: 1200,
    height: 800,
    loading: 'lazy',
  },
  '/images/service-warehouse.jpg': {
    alt: 'Warehouse workers inspecting stored agricultural commodities at a Divergent Tanzania facility',
    width: 800,
    height: 600,
    loading: 'lazy',
  },
  '/images/service-logistics.jpg': {
    alt: 'Divergent Tanzania logistics fleet and nationwide distribution network in Tanzania',
    width: 800,
    height: 600,
    loading: 'lazy',
  },
  '/images/service-agribusiness.jpg': {
    alt: 'Tanzanian farmers and agricultural producers supported through Divergent Tanzania agribusiness programmes',
    width: 800,
    height: 600,
    loading: 'lazy',
  },
  '/images/service-energy.jpg': {
    alt: 'LPG cylinders and clean energy solutions distributed by Divergent Tanzania',
    width: 800,
    height: 600,
    loading: 'lazy',
  },
  '/images/why-choose.jpg': {
    alt: 'Divergent Tanzania logistics and distribution hub in Tanzania',
    width: 1600,
    height: 900,
    loading: 'lazy',
  },
  '/images/transparent-logo2.png': {
    alt: 'Divergent Tanzania Limited logo',
    width: 200,
    height: 200,
    loading: 'eager',
  },
  '/images/logo2.png': {
    alt: 'Divergent Tanzania Limited logo',
    width: 200,
    height: 200,
    loading: 'lazy',
  },
  '/images/logo-only.png': {
    alt: 'Divergent Tanzania Limited logo',
    width: 200,
    height: 200,
    loading: 'lazy',
  },
  '/images/team.jpg': {
    alt: 'Divergent Tanzania team members',
    width: 400,
    height: 400,
    loading: 'lazy',
  },
  '/images/ghala1.jpeg': {
    alt: 'Divergent Tanzania warehouse team stacking agricultural commodity bags on pallets in Mkuranga',
    width: 1200,
    height: 900,
    loading: 'lazy',
  },
  '/images/ghala2.jpeg': {
    alt: 'Large-scale bagged produce storage at Divergent Tanzania Ltd warehouse facility in Tanzania',
    width: 1200,
    height: 900,
    loading: 'lazy',
  },
};

export function getImageMeta(src: string): ImageMeta | undefined {
  return IMAGE_META[src];
}
