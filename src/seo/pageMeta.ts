export type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  changefreq: ChangeFrequency;
  priority: number;
}

export const pageMeta: PageMeta[] = [
  {
    path: '/',
    title: 'Logistics, Warehousing & Agribusiness Solutions Tanzania | Divergent Tanzania',
    description:
      'Divergent Tanzania Limited delivers integrated logistics, warehouse, agribusiness and clean energy solutions across Tanzania and East Africa. Get in touch today.',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    path: '/about',
    title: 'About Divergent Tanzania Limited | Mkuranga, Tanzania',
    description:
      "Founded in 2025 in Mkuranga, Pwani, Divergent Tanzania Limited builds sustainable logistics, agribusiness and clean energy solutions for Tanzania's growth.",
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/services',
    title: 'Our Services | Logistics, Warehousing, Agribusiness & Clean Energy',
    description:
      "Explore Divergent Tanzania's four core service lines: logistics & supply chain, warehouse operations, agribusiness support, and clean energy solutions.",
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/services/logistics-supply-chain',
    title: 'Logistics & Supply Chain Company in Tanzania | Divergent Tanzania',
    description:
      'Nationwide distribution, last-mile delivery, cold chain logistics and fleet tracking across Tanzania and East Africa. Reliable supply chain partner.',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/services/warehouse-operations',
    title: 'Warehouse & Storage Services in Tanzania | Divergent Tanzania',
    description:
      'Secure, climate-controlled warehousing and agricultural warehouse receipt systems in Tanzania, with real-time inventory management and commodity financing.',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/contact',
    title: 'Contact Divergent Tanzania Limited | Mkuranga, Pwani',
    description:
      'Reach Divergent Tanzania Limited in Mkuranga, Pwani. Call +255 656 426 585, email info@divergenttz.co.tz, or send us a message online.',
    changefreq: 'yearly',
    priority: 0.6,
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions | Divergent Tanzania',
    description:
      "Answers to common questions about Divergent Tanzania's logistics, warehousing, agribusiness and clean energy services across Tanzania and East Africa.",
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    path: '/media',
    title: 'Media Gallery | Divergent Tanzania Operations & Projects',
    description:
      'Photos from Divergent Tanzania Limited — warehouse operations, logistics, agribusiness, clean energy, and facilities across Tanzania.',
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    path: '/case-studies',
    title: 'Case Studies & Client Results | Divergent Tanzania',
    description:
      'See how Divergent Tanzania has helped agricultural cooperatives, traders and energy partners across Tanzania achieve measurable results.',
    changefreq: 'monthly',
    priority: 0.7,
  },
];

export function getPageMeta(path: string): PageMeta | undefined {
  return pageMeta.find((entry) => entry.path === path);
}
