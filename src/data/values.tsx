import { Award, Leaf, Shield, Target, TrendingUp } from 'lucide-react';
import type { Value } from './types';

export const values: Value[] = [
  {
    id: 1,
    title: 'Integrity',
    description: 'Transparency and honesty in every interaction and decision we make.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'Innovation',
    description: 'Embracing modern solutions and new ideas to drive efficiency.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'Accountability',
    description: 'Taking full responsibility for our actions and results.',
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: 4,
    title: 'Excellence',
    description: 'Delivering consistent quality in every service we provide.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    id: 5,
    title: 'Sustainability',
    description: 'Environmentally and socially responsible business practices.',
    icon: <Leaf className="w-6 h-6" />,
  },
];
