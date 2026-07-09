import { Leaf, Truck, Users, Warehouse } from 'lucide-react';
import type { Service } from './types';

export const services: Service[] = [
  {
    id: 1,
    slug: 'warehouse-operations',
    title: 'Warehouse Operations',
    description:
      'Secure storage and warehouse receipt systems for agricultural commodities with advanced inventory management.',
    icon: <Warehouse className="w-8 h-8" />,
    image: '/images/ghala1.jpeg',
    features: [
      'Climate-controlled storage',
      'Real-time inventory tracking',
      'Quality inspection',
      'Commodity financing',
    ],
  },
  {
    id: 2,
    slug: 'logistics-supply-chain',
    title: 'Logistics & Supply Chain',
    description:
      'Reliable goods transportation and distribution across Tanzania and East Africa with modern fleet management.',
    icon: <Truck className="w-8 h-8" />,
    image: '/images/service-logistics.jpg',
    features: [
      'Nationwide distribution',
      'Last-mile delivery',
      'Cold chain logistics',
      'Fleet tracking',
    ],
  },
  {
    id: 3,
    slug: '#',
    title: 'Agribusiness Support',
    description:
      'Farmer empowerment, aggregation, and market access programs connecting producers to premium markets.',
    icon: <Users className="w-8 h-8" />,
    image: '/images/service-agribusiness.jpg',
    features: [
      'Farmer training programs',
      'Crop aggregation',
      'Market linkages',
      'Financial inclusion',
    ],
  },
  {
    id: 4,
    slug: '#',
    title: 'Clean Energy Initiatives',
    description:
      'LPG distribution and sustainable energy solutions promoting environmental responsibility and energy access.',
    icon: <Leaf className="w-8 h-8" />,
    image: '/images/service-energy.jpg',
    features: [
      'LPG distribution',
      'Solar energy projects',
      'Clean cooking solutions',
      'Carbon reduction',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
