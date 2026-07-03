import { useRef, type RefObject } from 'react';
import { SEO } from '../components/SEO';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ServicesGrid,
  TeamSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from '../components/sections';
import { ROUTES } from '../config/routes';

export default function HomePage() {
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <SEO path={ROUTES.home} />
      <HeroSection
        onScrollToServices={() => scrollToSection(servicesRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
        onScrollToAbout={() => scrollToSection(aboutRef)}
      />
      <AboutSection ref={aboutRef} />
      <ServicesGrid ref={servicesRef} />
      <WhyChooseUsSection ref={whyRef} />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection ref={contactRef} />
    </>
  );
}
