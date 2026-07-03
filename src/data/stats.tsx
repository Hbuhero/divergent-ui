import { Leaf, Truck, Users, Warehouse } from 'lucide-react';
import type { Stat } from './types';

export const stats: Stat[] = [
  {
    id: 1,
    number: 50,
    suffix: 'K',
    label: 'Tons Stored',
    icon: <Warehouse className="w-6 h-6" />,
  },
  {
    id: 2,
    number: 1200,
    suffix: '+',
    label: 'Farmers Empowered',
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 3,
    number: 98,
    suffix: '%',
    label: 'On-Time Delivery',
    icon: <Truck className="w-6 h-6" />,
  },
  {
    id: 4,
    number: 15,
    suffix: 'K',
    label: 'LPG Cylinders Monthly',
    icon: <Leaf className="w-6 h-6" />,
  },
];
