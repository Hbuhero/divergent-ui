import type { FaqItem } from '../../data/faq';

interface ServiceFaqSectionProps {
  items: FaqItem[];
  heading?: string;
}

export function ServiceFaqSection({
  items,
  heading = 'Frequently Asked Questions',
}: ServiceFaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-white/50 backdrop-blur-md border-t border-gray-100" aria-labelledby="service-faq-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="service-faq-heading" className="text-3xl font-bold text-[#0A2540] mb-8">
          {heading}
        </h2>
        <dl className="space-y-8">
          {items.map((item) => (
            <div key={item.question}>
              <dt className="text-lg font-semibold text-[#0A2540] mb-2">{item.question}</dt>
              <dd className="text-gray-600 leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
