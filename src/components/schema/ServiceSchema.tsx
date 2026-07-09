import { SITE_URL } from '../../seo';
import { contactInfo } from '../../data/contact';
import { getServiceBySlug } from '../../data/services';
import { JsonLd } from './JsonLd';

interface ServiceSchemaProps {
  slug: string;
  description: string;
}

export function ServiceSchema({ slug, description }: ServiceSchemaProps) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: contactInfo.legalName,
      url: SITE_URL,
    },
    areaServed: { '@type': 'Country', name: 'Tanzania' },
    description,
    url: `${SITE_URL}/services/${slug}`,
  };

  return <JsonLd data={data} />;
}
