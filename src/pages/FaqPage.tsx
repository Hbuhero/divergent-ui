import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FaqSchema } from '../components/schema';
import { generalFaqs, serviceFaqs } from '../data/faq';
import { services } from '../data';
import { ROUTES } from '../config/routes';
import { Link } from 'react-router-dom';

export default function FaqPage() {
  const allFaqs = [...generalFaqs, ...Object.values(serviceFaqs).flat()];

  return (
    <>
      <SEO path="/faq" />
      <FaqSchema items={allFaqs} />

      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-8">
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
            <h2 id="general-faq" className="text-2xl font-bold text-[#0A2540] mb-6">
              General
            </h2>
            <dl className="space-y-8">
              {generalFaqs.map((item) => (
                <div key={item.question}>
                  <dt className="text-lg font-semibold text-[#0A2540] mb-2">{item.question}</dt>
                  <dd className="text-gray-600 leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          {services.map((service) => {
            const faqs = serviceFaqs[service.slug];
            if (!faqs?.length) return null;
            return (
              <section key={service.slug} className="mb-16" aria-labelledby={`faq-${service.slug}`}>
                <h2 id={`faq-${service.slug}`} className="text-2xl font-bold text-[#0A2540] mb-2">
                  {service.title}
                </h2>
                <Link
                  to={ROUTES.serviceDetail(service.slug)}
                  className="text-sm text-[#00A651] font-medium hover:underline mb-6 inline-block"
                >
                  View {service.title} services →
                </Link>
                <dl className="space-y-8">
                  {faqs.map((item) => (
                    <div key={item.question}>
                      <dt className="text-lg font-semibold text-[#0A2540] mb-2">{item.question}</dt>
                      <dd className="text-gray-600 leading-relaxed">{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
