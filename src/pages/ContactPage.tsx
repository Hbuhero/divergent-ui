import { SEO } from '../components/SEO';
import { ContactSection } from '../components/sections';
import { ROUTES } from '../config/routes';

export default function ContactPage() {
  return (
    <>
      <SEO path={ROUTES.contact} />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-4">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">
            Contact Divergent Tanzania Limited
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Reach our team in Mkuranga, Pwani for logistics, warehousing, agribusiness, and clean energy enquiries.
            Call +255 656 426 585, email info@divergenttz.co.tz, or send us a message below.
          </p>
        </div>
        <ContactSection variant="page" />
      </div>
    </>
  );
}
