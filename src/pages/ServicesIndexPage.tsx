import { SEO } from '../components/SEO';
import { ServicesGrid } from '../components/sections';
import { ROUTES } from '../config/routes';

export default function ServicesIndexPage() {
  return (
    <>
      <SEO path={ROUTES.services} />
      <div className="pt-16">
        <ServicesGrid showPageHeader />
      </div>
    </>
  );
}
