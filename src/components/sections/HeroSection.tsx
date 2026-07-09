import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../ui/OptimizedImage';
import { contactInfo } from '../../data/contact';
import { ROUTES } from '../../config/routes';

interface HeroSectionProps {
  onScrollToServices: () => void;
  onScrollToContact: () => void;
  onScrollToAbout: () => void;
}

export function HeroSection({
  onScrollToServices,
  onScrollToContact,
  onScrollToAbout,
}: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
      <OptimizedImage
        src="/images/hero-logistics.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 via-[#0A2540]/80 to-[#0A2540]/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-4 border border-white/20">
            Divergent Tanzania Limited
          </p>
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6 border border-white/20">
            EST. SEPTEMBER 2025 • DAR ES SALAAM
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Logistics, Warehousing &amp; Agribusiness Solutions Across Tanzania
          </h1>

          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/90 mb-10">
            As a leading logistics company in Tanzania, Divergent Tanzania Limited delivers integrated supply chain,
            warehouse, agribusiness, and clean energy solutions for businesses across Tanzania and East Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={onScrollToServices}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-[#0A2540] hover:bg-gray-100 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all"
            >
              Explore Our Services
            </motion.button>
            <motion.button
              onClick={onScrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-white/70 hover:bg-white/10 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all"
            >
              Contact Us
            </motion.button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-white/80">
            <a href={`tel:${contactInfo.primaryPhone.tel}`} className="hover:text-white transition-colors">
              {contactInfo.primaryPhone.display}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
              {contactInfo.email}
            </a>
            <Link to={ROUTES.faq} className="hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-1 cursor-pointer"
        onClick={onScrollToAbout}
      >
        <span className="text-xs tracking-[3px]">SCROLL TO DISCOVER</span>
        <div className="w-px h-8 bg-white/50" />
      </motion.div>
    </section>
  );
}
