import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { OptimizedImage } from '../ui/OptimizedImage';
import { services, socialLinks } from '../../data';
import { ROUTES } from '../../config/routes';

const quickLinks = [
  { label: 'About Us', to: ROUTES.about },
  { label: 'Our Services', to: ROUTES.services },
  { label: 'Contact', to: ROUTES.contact },
];

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white/90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-y-16">
          <div className="md:col-span-5">
            <Link to={ROUTES.home} className="flex items-center gap-3 mb-6">
              <OptimizedImage
                src="/images/logo2.png"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="max-w-sm text-white/70 mb-8">
              Delivering innovative solutions for Tanzania&apos;s logistics, agriculture, and clean energy sectors.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-semibold text-white mb-6">Quick Links</div>
            <div className="flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="font-semibold text-white mb-4 mt-8">Services</div>
            <div className="flex flex-col gap-3 text-sm">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={ROUTES.serviceDetail(service.slug)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="font-semibold text-white mb-6">Contact Us</div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-[#00A651]" />
                <div>
                  Mkuranga, Pwani
                  <br />
                  Tanzania
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00A651]" />
                <div>+255 656 426 585 / +255 787 589 945</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00A651]" />
                <a href="mailto:info@divergenttz.co.tz" className="hover:text-white transition-colors">
                  info@divergenttz.co.tz
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/50">
          <div>© {new Date().getFullYear()} Divergent Tanzania Limited. All rights reserved.</div>
          <div className="flex gap-6">
            {/* TODO: replace with real policy page URLs when available */}
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
