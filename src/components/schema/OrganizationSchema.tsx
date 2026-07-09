import { SITE_URL } from '../../seo';
import { contactInfo } from '../../data/contact';
import { socialLinks } from '../../data/socialLinks';
import { JsonLd } from './JsonLd';

export function OrganizationSchema() {
  const sameAs = socialLinks.map((s) => s.href).filter((href) => href.startsWith('http'));

  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: contactInfo.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo2.png`,
    image: `${SITE_URL}/images/about-office.jpg`,
    description:
      'Divergent Tanzania Limited delivers integrated logistics, warehouse operations, agribusiness support and clean energy solutions across Tanzania and East Africa.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: contactInfo.locality,
      addressRegion: contactInfo.region,
      addressCountry: contactInfo.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contactInfo.geo.latitude,
      longitude: contactInfo.geo.longitude,
    },
    telephone: contactInfo.phones.map((p) => p.tel),
    email: contactInfo.email,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
    foundingDate: contactInfo.foundingDate,
  };

  return <JsonLd data={data} />;
}
