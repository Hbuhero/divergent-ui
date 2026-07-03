import { SEO } from '../../components/SEO';
import { ServiceDetailContent } from '../../components/sections/ServiceDetailContent';
import { ROUTES } from '../../config/routes';

interface ServicePageProps {
  slug: string;
}

export default function ServicePage({ slug }: ServicePageProps) {
  const path = ROUTES.serviceDetail(slug);

  return (
    <>
      <SEO path={path} />
      <ServiceDetailContent slug={slug} />
    </>
  );
}
