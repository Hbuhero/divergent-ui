import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { OptimizedImage } from '../ui/OptimizedImage';
import { services } from '../../data';
import { ROUTES } from '../../config/routes';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link font-medium transition-colors ${isActive ? 'text-[#00A651]' : 'text-[#0A2540] hover:text-[#00A651]'}`;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to={ROUTES.home} className="flex items-center gap-3" onClick={closeMobileMenu}>
          <OptimizedImage
            src="/images/transparent-logo2.png"
            className="h-12 w-auto object-contain drop-shadow-sm"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to={ROUTES.home} end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to={ROUTES.about} className={navLinkClass}>
            About
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className="nav-link flex items-center gap-1 text-[#0A2540] hover:text-[#00A651] font-medium transition-colors"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
              onClick={() => setIsServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                >
                  <Link
                    to={ROUTES.services}
                    className="block px-4 py-2.5 text-sm font-medium text-[#0A2540] hover:bg-[#F8F9FA] hover:text-[#00A651]"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <div className="my-1 border-t border-gray-100" />
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={ROUTES.serviceDetail(service.slug)}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-[#F8F9FA] hover:text-[#00A651]"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to={ROUTES.contact} className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to={ROUTES.contact}
            className="hidden md:block px-6 py-2.5 bg-[#0A2540] hover:bg-[#1A1F2E] text-white rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#0A2540]"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="space-y-1">
              <div
                className={`w-5 h-0.5 bg-[#0A2540] transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              />
              <div className={`w-5 h-0.5 bg-[#0A2540] transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div
                className={`w-5 h-0.5 bg-[#0A2540] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              <NavLink to={ROUTES.home} end className={navLinkClass} onClick={closeMobileMenu}>
                Home
              </NavLink>
              <NavLink to={ROUTES.about} className={navLinkClass} onClick={closeMobileMenu}>
                About Us
              </NavLink>

              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((open) => !open)}
                  className="flex items-center justify-between w-full py-2 text-[#0A2540] font-medium"
                  aria-expanded={isMobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-[#00A651]/20">
                    <Link
                      to={ROUTES.services}
                      className="py-1 text-sm text-[#0A2540] hover:text-[#00A651]"
                      onClick={closeMobileMenu}
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={ROUTES.serviceDetail(service.slug)}
                        className="py-1 text-sm text-gray-600 hover:text-[#00A651]"
                        onClick={closeMobileMenu}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to={ROUTES.contact} className={navLinkClass} onClick={closeMobileMenu}>
                Contact
              </NavLink>

              <Link
                to={ROUTES.contact}
                onClick={closeMobileMenu}
                className="mt-4 w-full py-3 bg-[#0A2540] text-white rounded-lg font-medium text-center"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
