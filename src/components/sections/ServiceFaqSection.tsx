import type { FaqItem } from '../../data/faq';
import { FaqAccordion } from '../ui/FaqAccordion';

interface ServiceFaqSectionProps {
  items: FaqItem[];
  heading?: string;
}

export function ServiceFaqSection({
  items,
  heading = 'Frequently asked questions',
}: ServiceFaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section
      className="py-16 px-6 bg-white/50 backdrop-blur-md border-t border-gray-100"
      aria-labelledby="service-faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        <FaqAccordion items={items} heading={heading} headingId="service-faq-heading" />
      </div>
    </section>
  );
}
