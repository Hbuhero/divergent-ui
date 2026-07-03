import { SEO } from '../components/SEO';
import { AboutSection, TeamSection } from '../components/sections';
import { ROUTES } from '../config/routes';

export default function AboutPage() {
  return (
    <>
      <SEO path={ROUTES.about} />
      <div className="pt-16">
        <AboutSection variant="page" />
        <TeamSection />
      </div>
    </>
  );
}
