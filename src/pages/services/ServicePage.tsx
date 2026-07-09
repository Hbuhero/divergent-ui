import { SEO } from '../../components/SEO';
import { FaqSchema, ServiceSchema } from '../../components/schema';
import { ServiceDetailContent } from '../../components/sections/ServiceDetailContent';
import { getFaqsForService } from '../../data/faq';
import { getServicePageContent } from '../../data/servicePageContent';
import { ROUTES } from '../../config/routes';

interface ServicePageProps {
  slug: string;
}

export default function ServicePage({ slug }: ServicePageProps) {
  const path = ROUTES.serviceDetail(slug);
  const content = getServicePageContent(slug);
  const faqs = getFaqsForService(slug);

  return (
    <>
      <SEO path={path} />
      {content && <ServiceSchema slug={slug} description={content.snippetAnswer} />}
      <FaqSchema items={faqs} />
      <ServiceDetailContent slug={slug} />
    </>
  );
}
