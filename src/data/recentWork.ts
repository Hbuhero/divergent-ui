import { getMediaByService } from './media';

export interface RecentWorkGallery {
  slug: string;
  title: string;
  paragraphs: string[];
  tagline: string;
  images: { src: string; alt: string }[];
}

const WAREHOUSE_COPY = {
  title: 'Warehouse Operations in Progress!',
  paragraphs: [
    'At Divergent Tanzania Ltd, we are committed to maintaining the highest standards in agricultural commodity handling. Our team is actively receiving, inspecting, stacking, and securely storing produce to preserve quality and ensure timely delivery to our customers.',
    'Every bag represents the hard work of our farmers, the trust of our partners, and our dedication to building a stronger agricultural value chain in Tanzania.',
  ],
  tagline: 'Reliable Storage • Quality Assurance • Efficient Logistics • Sustainable Agriculture',
};

function toGalleryImages(slug: string): { src: string; alt: string }[] {
  return getMediaByService(slug)
    .filter((item) => item.category === 'operations')
    .map((item) => ({ src: item.src, alt: item.title }));
}

export const recentWorkByService: Record<string, RecentWorkGallery> = {
  'warehouse-operations': {
    slug: 'warehouse-operations',
    ...WAREHOUSE_COPY,
    images: toGalleryImages('warehouse-operations'),
  },
};
