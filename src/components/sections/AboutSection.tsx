import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Target, Users } from 'lucide-react';
import { OptimizedImage } from '../ui/OptimizedImage';
import { values } from '../../data';
import { ROUTES } from '../../config/routes';

interface AboutSectionProps {
  variant?: 'home' | 'page';
}

export const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(({ variant = 'home' }, ref) => {
  const isPage = variant === 'page';

  return (
    <section ref={ref} className="py-24 bg-white/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        {isPage && (
          <div className="mb-16 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">
              About Divergent Tanzania Limited
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Based in Mkuranga, Pwani, Divergent Tanzania Limited is a diversified business solutions company serving
              Tanzania&apos;s logistics, agribusiness, and clean energy sectors — with a commitment to sustainable growth
              and national development.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">
              OUR STORY
            </div>
            {isPage ? (
              <h2 className="text-4xl font-bold text-[#0A2540] mb-8 leading-tight">Our Story</h2>
            ) : (
              <h2 className="text-5xl font-bold text-[#0A2540] mb-8 leading-tight">
                Building a Sustainable Future for Tanzania
              </h2>
            )}

            <div className="prose text-lg text-gray-600 max-w-md">
              <p>
                Established in September 2025, Divergent Tanzania Limited is a young but professional company focused on
                delivering innovative and impactful business solutions across logistics, agribusiness, and clean energy.
              </p>
              <p>
                Built on strong values, experienced personnel, and a commitment to efficiency, quality, and national
                development, we serve clients from our base in Mkuranga, Pwani — connecting Tanzanian producers and
                businesses to reliable markets and infrastructure.
              </p>
              {variant === 'home' && (
                <p className="mt-4">
                  <Link to={ROUTES.about} className="text-[#00A651] font-medium hover:underline">
                    Read our full story →
                  </Link>
                </p>
              )}
            </div>
          </div>

          <div className="relative">
            <OptimizedImage
              src="/images/about-office.jpg"
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#00A651] rounded-full flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-[#0A2540]">Trusted Partner</div>
                  <div className="text-sm text-gray-500">Since 2025</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Recognized for innovation, efficiency, and contribution to sustainable development.
              </p>
            </div>
          </div>
        </div>

        {isPage && (
          <>
            <div className="mt-24 grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-3xl border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#0A2540] rounded-2xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A2540]">Our Vision</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To become a leading and trusted company in Tanzania, recognized for innovation, efficiency, and
                  contribution to sustainable development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#0A2540] text-white p-12 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-xl text-white/90 leading-relaxed">
                  To provide high-quality services that create value for clients, empower communities, and contribute to
                  economic growth.
                </p>
              </motion.div>
            </div>

            <div className="mt-20">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">
                  OUR FOUNDATION
                </div>
                <h2 className="text-4xl font-bold text-[#0A2540]">Core Values</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="value-card bg-white p-8 rounded-2xl border border-gray-100 group"
                  >
                    <div className="w-14 h-14 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00A651] group-hover:text-white transition-colors">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-xl text-[#0A2540] mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';
