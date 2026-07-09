import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ServicesGrid } from '../components/sections';
import { ROUTES } from '../config/routes';

export default function ServicesIndexPage() {
  return (
    <>
      <SEO path={ROUTES.services} />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <Breadcrumbs
            items={[{ name: 'Home', path: ROUTES.home }, { name: 'Services', path: ROUTES.services }]}
          />
        </div>
        <ServicesGrid showPageHeader />
      </div>
    </>
  );
}
