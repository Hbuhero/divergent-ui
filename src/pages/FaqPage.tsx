import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FaqSchema } from '../components/schema';
import { FaqAccordion } from '../components/ui/FaqAccordion';
import { generalFaqs, serviceFaqs } from '../data/faq';
import { services } from '../data';
import { ROUTES } from '../config/routes';

export default function FaqPage() {
  const allFaqs = [...generalFaqs, ...Object.values(serviceFaqs).flat()];

  return (
    <>
      <SEO path="/faq" />
      <FaqSchema items={allFaqs} />

      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
          <Breadcrumbs
            items={[
              { name: 'Home', path: ROUTES.home },
              { name: 'FAQ', path: '/faq' },
            ]}
          />
          <h1 className="text-5xl md:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Answers about Divergent Tanzania Limited&apos;s logistics, warehousing, agribusiness, and clean energy
            services across Tanzania. Can&apos;t find what you need?{' '}
            <Link to={ROUTES.contact} className="text-[#00A651] font-medium hover:underline">
              Contact us
            </Link>
            .
          </p>

          <section className="mb-16" aria-labelledby="general-faq">
            <FaqAccordion items={generalFaqs} heading="General" headingId="general-faq" />
          </section>

          {services.map((service) => {
            const faqs = serviceFaqs[service.slug];
            if (!faqs?.length) return null;
            return (
              <section key={service.slug} className="mb-16" aria-labelledby={`faq-${service.slug}`}>
                <FaqAccordion
                  items={faqs}
                  heading={service.title}
                  headingId={`faq-${service.slug}`}
                />
                <Link
                  to={ROUTES.serviceDetail(service.slug)}
                  className="mt-4 inline-block text-sm text-[#00A651] font-medium hover:underline"
                >
                  View {service.title} services →
                </Link>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
