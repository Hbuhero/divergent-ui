import type { TeamMember } from './types';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Akida Mwanga',
    role: 'Director',
    bio: '15+ years experience in logistics and sustainable development across East Africa.',
    image: '/images/logo-only.png',
    linkedin: '#', // TODO: replace with real LinkedIn profile URL
  },
  {
    id: 2,
    name: 'Ayoub Lali',
    role: 'Chief Executive Officer',
    bio: 'Expert in supply chain management with a focus on agricultural commodities.',
    image: '/images/logo-only.png',
    linkedin: '#', // TODO: replace with real LinkedIn profile URL
  },
  {
    id: 3,
    name: 'Nuh Saidi',
    role: 'Head of IT Department',
    bio: 'IT professional specializing in system architecture, software development, and digital solutions that enhance business efficiency and innovation.',
    image: '/images/logo-only.png',
    linkedin: 'https://www.linkedin.com/in/nuh-saidi-buhero-3690a2281', 
  },
];
