import type { FaqItem } from '../../data/faq';
import { JsonLd } from './JsonLd';

interface FaqSchemaProps {
  items: FaqItem[];
}

export function FaqSchema({ items }: FaqSchemaProps) {
  if (items.length === 0) return null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}
