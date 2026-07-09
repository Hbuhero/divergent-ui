import { Link } from 'react-router-dom';
import { getFaqsForService } from '../../data/faq';
import { recentWorkByService } from '../../data/recentWork';
import { getServiceBySlug } from '../../data';
import { getServicePageContent } from '../../data/servicePageContent';
import { ROUTES } from '../../config/routes';
import { Breadcrumbs } from '../layout/Breadcrumbs';
import { LinkedText } from '../ui/LinkedText';
import { ContactSection } from './ContactSection';
import { RecentWorkSection } from './RecentWorkSection';
import { ServiceFaqSection } from './ServiceFaqSection';

interface ServiceDetailContentProps {
  slug: string;
}

const ALL_SERVICE_SLUGS = ['logistics-supply-chain', 'warehouse-operations'] as const;

export function ServiceDetailContent({ slug }: ServiceDetailContentProps) {
  const service = getServiceBySlug(slug);
  const content = getServicePageContent(slug);
  const faqs = getFaqsForService(slug);
  const recentWork = recentWorkByService[slug];

  if (!service || !content) {
    return null;
  }

  const breadcrumbs = [
    { name: 'Home', path: ROUTES.home },
    { name: 'Services', path: ROUTES.services },
    { name: service.title, path: ROUTES.serviceDetail(slug) },
  ];

  return (
    <>
      <section className="pt-32 pb-12 px-6 bg-white/50 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={breadcrumbs} />
          <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-6">
            {service.title}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">{content.h1}</h1>

          <p className="text-lg text-[#0A2540] font-medium leading-relaxed mb-6 border-l-4 border-[#00A651] pl-4">
            {content.snippetAnswer}
          </p>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            <LinkedText text={content.intro} links={content.introLinks ?? []} />
          </p>

          <div className="rounded-2xl border border-[#00A651]/20 bg-[#00A651]/5 p-6">
            <p className="text-sm uppercase tracking-widest text-[#00A651] font-medium mb-2">Who this is for</p>
            <p className="text-gray-700 leading-relaxed">{content.whoIsThisFor}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto space-y-16">
          {content.sections.map((section) => (
            <article key={section.heading}>
              <h2 className="text-3xl font-bold text-[#0A2540] mb-6">{section.heading}</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}

          {content.whyChooseHeading && content.whyChooseParagraphs && (
            <article>
              <h2 className="text-3xl font-bold text-[#0A2540] mb-6">{content.whyChooseHeading}</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                {content.whyChooseParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </article>
          )}
        </div>
      </section>

      {recentWork && <RecentWorkSection work={recentWork} />}

      <ServiceFaqSection items={faqs} />
      <RelatedServicesLinks currentSlug={slug} />
      <ContactSection variant="service-cta" ctaHeading={content.ctaHeading} />
    </>
  );
}

export function RelatedServicesLinks({ currentSlug }: { currentSlug: string }) {
  const otherSlugs = ALL_SERVICE_SLUGS.filter((s) => s !== currentSlug);

  return (
    <aside className="py-12 px-6 border-t border-gray-100 bg-white/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Related Services</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {otherSlugs.map((serviceSlug) => {
            const service = getServiceBySlug(serviceSlug);
            if (!service) return null;
            return (
              <Link
                key={serviceSlug}
                to={ROUTES.serviceDetail(serviceSlug)}
                className="p-4 rounded-xl border border-gray-100 bg-white hover:border-[#00A651]/30 hover:text-[#00A651] transition-colors text-[#0A2540] font-medium text-sm"
              >
                {service.title} →
              </Link>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-gray-500">
          More answers in our{' '}
          <Link to="/faq" className="text-[#00A651] font-medium hover:underline">
            FAQ page
          </Link>
          .
        </p>
      </div>
    </aside>
  );
}
