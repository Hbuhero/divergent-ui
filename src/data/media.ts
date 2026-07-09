export type MediaCategory = 'operations' | 'services' | 'facilities' | 'team';

export interface MediaItem {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: MediaCategory;
  serviceSlug?: string;
  /** When true, item appears on /media. Add more items as project photos become available. */
  showInGallery: boolean;
}

/** All media records — use showInGallery to control the public gallery page. */
export const mediaItems: MediaItem[] = [
  {
    id: 'ghala-1',
    src: '/images/ghala1.jpeg',
    title: 'Warehouse Operations in Progress',
    caption:
      'Our team receiving, inspecting, and stacking agricultural commodity bags on pallets at our Mkuranga warehouse — preserving quality for timely delivery across Tanzania.',
    category: 'operations',
    serviceSlug: 'warehouse-operations',
    showInGallery: true,
  },
  {
    id: 'ghala-2',
    src: '/images/ghala2.jpeg',
    title: 'Large-Scale Commodity Storage',
    caption:
      'Secure bagged produce storage at Divergent Tanzania Ltd. Every bag represents the hard work of farmers, the trust of our partners, and our commitment to a stronger agricultural value chain.',
    category: 'operations',
    serviceSlug: 'warehouse-operations',
    showInGallery: true,
  },
];

export function getGalleryItems(): MediaItem[] {
  return mediaItems.filter((item) => item.showInGallery);
}

export function getMediaByService(slug: string): MediaItem[] {
  return mediaItems.filter((item) => item.serviceSlug === slug);
}
