import { Link } from 'react-router-dom';
import { getServiceBySlug } from '../../data';
import { getServicePageContent } from '../../data/servicePageContent';
import { ROUTES } from '../../config/routes';
import { ContactSection } from './ContactSection';

interface ServiceDetailContentProps {
  slug: string;
}

const ALL_SERVICE_SLUGS = [
  'logistics-supply-chain',
  'warehouse-operations',
  'agribusiness-support',
  'clean-energy',
] as const;

export function ServiceDetailContent({ slug }: ServiceDetailContentProps) {
  const service = getServiceBySlug(slug);
  const content = getServicePageContent(slug);

  if (!service || !content) {
    return null;
  }

  return (
    <>
      <section className="pt-32 pb-12 px-6 bg-white/50 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-6">
            {service.title}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0A2540] mb-8 leading-tight">{content.h1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">{content.intro}</p>
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
        <div className="grid sm:grid-cols-3 gap-4">
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
      </div>
    </aside>
  );
}
