import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../ui/OptimizedImage';
import { services } from '../../data';
import { ROUTES } from '../../config/routes';

interface ServicesGridProps {
  showPageHeader?: boolean;
}

export const ServicesGrid = forwardRef<HTMLElement, ServicesGridProps>(
  ({ showPageHeader = false }, ref) => {
    return (
      <section ref={ref} className="py-24 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          {showPageHeader ? (
            <div className="mb-16 max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore Divergent Tanzania&apos;s four core service lines — logistics and supply chain, warehouse
                operations, agribusiness support, and clean energy — designed to drive growth across Tanzania&apos;s key
                sectors.
              </p>
            </div>
          ) : (
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">
                WHAT WE OFFER
              </div>
              <h2 className="text-5xl font-bold text-[#0A2540] mb-4">Our Services</h2>
              <p className="max-w-2xl mx-auto text-xl text-gray-600">
                Comprehensive solutions designed to drive growth and sustainability across Tanzania&apos;s key sectors.
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
              >
                <Link to={ROUTES.serviceDetail(service.slug)} className="relative h-80 overflow-hidden block">
                  <OptimizedImage
                    src={service.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/90 text-[#0A2540] rounded-2xl mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-4xl font-bold tracking-tight">{service.title}</h3>
                  </div>
                </Link>

                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 text-lg flex-1">{service.description}</p>

                  <div>
                    <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">KEY FEATURES</div>
                    <ul className="grid grid-cols-1 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-[#0A2540]">
                          <div className="w-1.5 h-1.5 bg-[#00A651] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={ROUTES.serviceDetail(service.slug)}
                      className="inline-flex items-center text-[#00A651] font-medium hover:underline"
                    >
                      Learn more about {service.title} →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    );
  },
);

ServicesGrid.displayName = 'ServicesGrid';
