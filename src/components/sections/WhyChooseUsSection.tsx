import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Shield, Target } from 'lucide-react';
import { OptimizedImage } from '../ui/OptimizedImage';
import { stats } from '../../data';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const highlights = [
  { icon: <Shield className="w-5 h-5" />, label: 'ISO Certified' },
  { icon: <Award className="w-5 h-5" />, label: 'Expert Team' },
  { icon: <Clock className="w-5 h-5" />, label: '24/7 Support' },
  { icon: <Target className="w-5 h-5" />, label: 'Results Driven' },
];

export const WhyChooseUsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="relative py-24 bg-[#0A2540] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <OptimizedImage
          src="/images/why-choose.jpg"
          decorative
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              THE DIFFERENCE
            </div>
            <h2 className="text-5xl font-bold leading-tight mb-8">
              Why Choose Divergent Tanzania?
            </h2>
            <p className="text-xl text-white/80 max-w-md mb-10">
              We combine local expertise with international best practices to deliver exceptional results.
            </p>

            <div className="flex flex-wrap gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-3 px-5 py-2 bg-white/10 rounded-full text-sm">
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl"
              >
                <div className="text-[#00A651] mb-4">{stat.icon}</div>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                <div className="text-lg text-white/70 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = 'WhyChooseUsSection';
