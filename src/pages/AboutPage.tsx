import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { AboutSection, TeamSection } from '../components/sections';
import { ROUTES } from '../config/routes';

export default function AboutPage() {
  return (
    <>
      <SEO path={ROUTES.about} />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <Breadcrumbs items={[{ name: 'Home', path: ROUTES.home }, { name: 'About', path: ROUTES.about }]} />
        </div>
        <AboutSection variant="page" />
        <TeamSection />
      </div>
    </>
  );
}
