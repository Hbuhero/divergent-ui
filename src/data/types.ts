import type { ReactNode } from 'react';

export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  features: string[];
}

export interface Value {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface Stat {
  id: number;
  number: number;
  suffix: string;
  label: string;
  icon: ReactNode;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface SocialLink {
  name: string;
  href: string;
}
