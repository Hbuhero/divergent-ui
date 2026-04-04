import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Truck, Warehouse, Users, Leaf, 
  Phone, Mail, MapPin, Clock, Award, 
  Shield, Target, TrendingUp 
} from 'lucide-react';

// Types
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

interface Value {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

interface Stat {
  id: number;
  number: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

// Data
const services: Service[] = [
  {
    id: 1,
    title: "Warehouse Operations",
    description: "Secure storage and warehouse receipt systems for agricultural commodities with advanced inventory management.",
    icon: <Warehouse className="w-8 h-8" />,
    image: "/images/service-warehouse.jpg",
    features: ["Climate-controlled storage", "Real-time inventory tracking", "Quality inspection", "Commodity financing"]
  },
  {
    id: 2,
    title: "Logistics & Supply Chain",
    description: "Reliable goods transportation and distribution across Tanzania and East Africa with modern fleet management.",
    icon: <Truck className="w-8 h-8" />,
    image: "/images/service-logistics.jpg",
    features: ["Nationwide distribution", "Last-mile delivery", "Cold chain logistics", "Fleet tracking"]
  },
  {
    id: 3,
    title: "Agribusiness Support",
    description: "Farmer empowerment, aggregation, and market access programs connecting producers to premium markets.",
    icon: <Users className="w-8 h-8" />,
    image: "/images/service-agribusiness.jpg",
    features: ["Farmer training programs", "Crop aggregation", "Market linkages", "Financial inclusion"]
  },
  {
    id: 4,
    title: "Clean Energy Initiatives",
    description: "LPG distribution and sustainable energy solutions promoting environmental responsibility and energy access.",
    icon: <Leaf className="w-8 h-8" />,
    image: "/images/service-energy.jpg",
    features: ["LPG distribution", "Solar energy projects", "Clean cooking solutions", "Carbon reduction"]
  }
];

const values: Value[] = [
  {
    id: 1,
    title: "Integrity",
    description: "Transparency and honesty in every interaction and decision we make.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Innovation",
    description: "Embracing modern solutions and new ideas to drive efficiency.",
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Accountability",
    description: "Taking full responsibility for our actions and results.",
    icon: <Award className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Excellence",
    description: "Delivering consistent quality in every service we provide.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Sustainability",
    description: "Environmentally and socially responsible business practices.",
    icon: <Leaf className="w-6 h-6" />
  }
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Akida Mwanga",
    role: "Managing Directory",
    bio: "15+ years experience in logistics and sustainable development across East Africa.",
    image: "/images/team.jpg",
    linkedin: "#"
  },
  {
    id: 2,
    name: "Ayoub Lali",
    role: "Chief Executive Officer",
    bio: "Expert in supply chain management with a focus on agricultural commodities.",
    image: "/images/mende.jpeg",
    linkedin: "#"
  },
  {
  id: 3,
  name: "Nuh Saidi",
  role: "Head of IT Department",
  bio: "IT professional specializing in system architecture, software development, and digital solutions that enhance business efficiency and innovation.",
  image: "/images/team.jpg",
  linkedin: "#"
}
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Amina Hassan",
    role: "CEO",
    company: "Tanzania Agricultural Co-op",
    quote: "Divergent Tanzania has revolutionized our supply chain operations. Their warehouse management and logistics services are second to none.",
    image: "/images/team.jpg"
  },
  {
    id: 2,
    name: "James Kimani",
    role: "Operations Director",
    company: "East Africa Commodities",
    quote: "Working with Divergent has significantly improved our market access and reduced post-harvest losses. Truly a game-changer.",
    image: "/images/team.jpg"
  },
  {
    id: 3,
    name: "Sarah Mwenzi",
    role: "Sustainability Manager",
    company: "Green Energy Tanzania",
    quote: "Their clean energy initiatives align perfectly with our sustainability goals. Professional, reliable, and innovative.",
    image: "/images/team.jpg"
  }
];

const stats: Stat[] = [
  { id: 1, number: 50, suffix: "K", label: "Tons Stored", icon: <Warehouse className="w-6 h-6" /> },
  { id: 2, number: 1200, suffix: "+", label: "Farmers Empowered", icon: <Users className="w-6 h-6" /> },
  { id: 3, number: 98, suffix: "%", label: "On-Time Delivery", icon: <Truck className="w-6 h-6" /> },
  { id: 4, number: 15, suffix: "K", label: "LPG Cylinders Monthly", icon: <Leaf className="w-6 h-6" /> }
];

// Animated Counter Component
const AnimatedCounter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && count === 0) {
          let start = 0;
          const duration = 1500;
          const increment = Math.ceil(target / 50);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, duration / 50);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, count]);

  return (
    <div ref={ref} className="stats-number text-5xl font-bold text-white">
      {count}{suffix}
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for smooth scrolling
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, 3000);
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/transparent-logo2.png" alt="Divergent Tanzania Logo" className="h-12 w-auto object-contain drop-shadow-sm" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link text-[#0A2540] hover:text-[#00A651] font-medium cursor-pointer">Home</button>
            <button onClick={() => scrollToSection(aboutRef)} className="nav-link text-[#0A2540] hover:text-[#00A651] font-medium cursor-pointer">About</button>
            <button onClick={() => scrollToSection(servicesRef)} className="nav-link text-[#0A2540] hover:text-[#00A651] font-medium cursor-pointer">Services</button>
            <button onClick={() => scrollToSection(whyRef)} className="nav-link text-[#0A2540] hover:text-[#00A651] font-medium cursor-pointer">Why Us</button>
            <button onClick={() => scrollToSection(contactRef)} className="nav-link text-[#0A2540] hover:text-[#00A651] font-medium cursor-pointer">Contact</button>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection(contactRef)}
              className="hidden md:block px-6 py-2.5 bg-[#0A2540] hover:bg-[#1A1F2E] text-white rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#0A2540]"
            >
              <div className="space-y-1">
                <div className={`w-5 h-0.5 bg-[#0A2540] transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`w-5 h-0.5 bg-[#0A2540] transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-5 h-0.5 bg-[#0A2540] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100 bg-white"
            >
              <div className="px-6 py-8 flex flex-col gap-4">
                <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }} className="text-left py-2 text-[#0A2540] font-medium">Home</button>
                <button onClick={() => scrollToSection(aboutRef)} className="text-left py-2 text-[#0A2540] font-medium">About Us</button>
                <button onClick={() => scrollToSection(servicesRef)} className="text-left py-2 text-[#0A2540] font-medium">Services</button>
                <button onClick={() => scrollToSection(whyRef)} className="text-left py-2 text-[#0A2540] font-medium">Why Choose Us</button>
                <button onClick={() => scrollToSection(contactRef)} className="text-left py-2 text-[#0A2540] font-medium">Contact</button>
                <motion.button
                  onClick={() => scrollToSection(contactRef)}
                  className="mt-4 w-full py-3 bg-[#0A2540] text-white rounded-lg font-medium"
                >
                  Get in Touch
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/hero-logistics.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 via-[#0A2540]/80 to-[#0A2540]/70" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6 border border-white/20">
              EST. SEPTEMBER 2025 • DAR ES SALAAM
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Divergent Tanzania<br />Limited
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/90 mb-10">
              Delivering innovative and impactful business solutions across logistics, agriculture, and clean energy
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection(servicesRef)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-white text-[#0A2540] hover:bg-gray-100 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all"
              >
                Explore Our Services
              </motion.button>
              <motion.button
                onClick={() => scrollToSection(contactRef)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-white/70 hover:bg-white/10 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          <span className="text-xs tracking-[3px]">SCROLL TO DISCOVER</span>
          <div className="w-px h-8 bg-white/50" />
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">OUR STORY</div>
              <h2 className="text-5xl font-bold text-[#0A2540] mb-8 leading-tight">
                Building a<br />sustainable future<br />for Tanzania
              </h2>
              
              <div className="prose text-lg text-gray-600 max-w-md">
                <p>
                  Established in September 2025, Divergent Tanzania Limited is a young but professional company 
                  focused on delivering innovative and impactful business solutions across multiple industries.
                </p>
                <p>
                  Built on strong values, experienced personnel, and a commitment to efficiency, quality, 
                  and national development.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/images/about-office.jpg" 
                alt="Divergent Tanzania Office" 
                className="rounded-3xl shadow-2xl w-full" 
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

          {/* Vision & Mission */}
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
                <h3 className="text-3xl font-bold text-[#0A2540]">Our Vision</h3>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                To become a leading and trusted company in Tanzania, recognized for innovation, efficiency, 
                and contribution to sustainable development.
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
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-xl text-white/90 leading-relaxed">
                To provide high-quality services that create value for clients, empower communities, 
                and contribute to economic growth.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">OUR FOUNDATION</div>
              <h3 className="text-4xl font-bold text-[#0A2540]">Core Values</h3>
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
                  <h4 className="font-semibold text-xl text-[#0A2540] mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">WHAT WE OFFER</div>
            <h2 className="text-5xl font-bold text-[#0A2540] mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Comprehensive solutions designed to drive growth and sustainability across Tanzania's key sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/90 text-[#0A2540] rounded-2xl mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-4xl font-bold tracking-tight">{service.title}</h3>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 text-lg flex-1">{service.description}</p>
                  
                  <div>
                    <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">KEY FEATURES</div>
                    <ul className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-[#0A2540]">
                          <div className="w-1.5 h-1.5 bg-[#00A651] rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyRef} className="relative py-24 bg-[#0A2540] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/why-choose.jpg" alt="Logistics Hub" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">THE DIFFERENCE</div>
              <h2 className="text-5xl font-bold leading-tight mb-8">
                Why choose<br />Divergent Tanzania?
              </h2>
              <p className="text-xl text-white/80 max-w-md mb-10">
                We combine local expertise with international best practices to deliver exceptional results.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Shield className="w-5 h-5" />, label: "ISO Certified" },
                  { icon: <Award className="w-5 h-5" />, label: "Expert Team" },
                  { icon: <Clock className="w-5 h-5" />, label: "24/7 Support" },
                  { icon: <Target className="w-5 h-5" />, label: "Results Driven" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-2 bg-white/10 rounded-full text-sm">
                    {item.icon}
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
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

      {/* Testimonials Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">TESTIMONIALS</div>
            <h2 className="text-5xl font-bold text-[#0A2540]">What our clients say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="testimonial bg-white p-8 rounded-3xl border border-gray-100 flex flex-col"
              >
                <div className="flex-1">
                  <div className="text-6xl text-[#00A651]/20 mb-4">“</div>
                  <p className="text-lg text-gray-700 leading-relaxed">{testimonial.quote}</p>
                </div>
                
                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <div className="font-semibold text-[#0A2540]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">TESTIMONIALS</div>
            <h2 className="text-5xl font-bold text-[#0A2540]">What our clients say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="testimonial bg-white p-8 rounded-3xl border border-gray-100 flex flex-col"
              >
                <div className="flex-1">
                  <div className="text-6xl text-[#00A651]/20 mb-4">“</div>
                  <p className="text-lg text-gray-700 leading-relaxed">{testimonial.quote}</p>
                </div>
                
                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <div className="font-semibold text-[#0A2540]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">OUR PEOPLE</div>
            <h2 className="text-5xl font-bold text-[#0A2540]">Meet the Leadership Team</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 mt-4">
              Experienced professionals dedicated to driving sustainable growth and innovation across Tanzania.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="team-card group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  
                  <motion.a 
                    href={member.linkedin || '#'} 
                    className="absolute top-6 right-6 w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                </div>
                
                <div className="px-1">
                  <h4 className="font-bold text-xl text-[#0A2540] mb-1">{member.name}</h4>
                  <div className="text-[#00A651] font-medium text-sm mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">LET'S CONNECT</div>
              <h2 className="text-5xl font-bold text-[#0A2540] mb-8">Get in touch with us</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-md">
                Ready to transform your business? Our team is here to help you achieve your goals.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A651] transition-colors" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A651] transition-colors" 
                      placeholder="john@company.co.tz" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A651] transition-colors" 
                      placeholder="+255 712 345 678" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interested In</label>
                    <select 
                      name="service" 
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A651] transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5} 
                    className="w-full px-5 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A651] transition-colors resize-y" 
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#0A2540] hover:bg-[#1A1F2E] text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-3"
                >
                  Send Message
                  <Mail className="w-5 h-5" />
                </motion.button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8 pt-8 lg:pt-12">
              <div className="bg-[#F8F9FA] rounded-3xl p-10">
                <h3 className="font-semibold text-2xl text-[#0A2540] mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MapPin className="w-6 h-6 text-[#00A651]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A2540]">Our Office</div>
                      <div className="text-gray-600 mt-1">
                        Dar es Salaam, Tanzania<br />
                        Industrial Area, Ubungo
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Phone className="w-6 h-6 text-[#00A651]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A2540]">Phone</div>
                      <a href="tel:+255656426585" className="text-gray-600 hover:text-[#00A651] transition-colors block mt-1">+255 656 426 585</a>
                      <a href="tel:+255787589945" className="text-gray-600 hover:text-[#00A651] transition-colors">+255 787 589 945</a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Mail className="w-6 h-6 text-[#00A651]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A2540]">Email</div>
                      <a href="mailto:info@divergenttz.co.tz" className="text-gray-600 hover:text-[#00A651] transition-colors mt-1 block">info@divergenttz.co.tz</a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Clock className="w-6 h-6 text-[#00A651]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A2540]">Business Hours</div>
                      <div className="text-gray-600 mt-1">Monday – Friday: 8:00 AM – 6:00 PM<br />Saturday: 9:00 AM – 1:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-3xl overflow-hidden border border-gray-200">
                <div className="map-container h-72 bg-[#E8ECEF] flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#00A651] mx-auto mb-4" />
                    <div className="font-semibold text-[#0A2540]">Dar es Salaam, Tanzania</div>
                    <div className="text-sm text-gray-500 mt-1">Industrial Area, Ubungo</div>
                  </div>
                  <div className="absolute bottom-4 right-4 px-4 py-2 bg-white rounded-lg shadow text-xs text-gray-500">
                    Interactive Map Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2540] text-white/90 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-y-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logo2.png" alt="Divergent Tanzania Logo" className="h-12 w-auto object-contain" />
              </div>
              
              <p className="max-w-sm text-white/70 mb-8">
                Delivering innovative solutions for Tanzania's logistics, agriculture, and clean energy sectors.
              </p>
              
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Facebook'].map((social, i) => (
                  <a key={i} href="#" className="text-white/50 hover:text-white transition-colors">{social}</a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="font-semibold text-white mb-6">Quick Links</div>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  { label: 'About Us', action: () => scrollToSection(aboutRef) },
                  { label: 'Our Services', action: () => scrollToSection(servicesRef) },
                  { label: 'Why Choose Us', action: () => scrollToSection(whyRef) },
                  { label: 'Contact', action: () => scrollToSection(contactRef) }
                ].map((link, i) => (
                  <button key={i} onClick={link.action} className="text-left text-white/70 hover:text-white transition-colors">{link.label}</button>
                ))}
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="font-semibold text-white mb-6">Contact Us</div>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-[#00A651]" />
                  <div>Dar es Salaam, Tanzania<br />Industrial Area, Ubungo</div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00A651]" />
                  <div>+255 656 426 585 / +255 787 589 945</div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00A651]" />
                  <a href="mailto:info@divergenttz.co.tz" className="hover:text-white transition-colors">info@divergenttz.co.tz</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/50">
            <div>© {new Date().getFullYear()} Divergent Tanzania Limited. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-12 max-w-md text-center"
            >
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-10 h-10 text-[#00A651]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">Thank You!</h3>
              <p className="text-gray-600">
                Your message has been received. Our team will get back to you within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
