import { forwardRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../../data/contact';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

type ContactSectionVariant = 'home' | 'page' | 'service-cta';

interface ContactSectionProps {
  variant?: ContactSectionVariant;
  ctaHeading?: string;
}

export const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ variant = 'home', ctaHeading = 'Get in Touch With Us' }, ref) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(initialFormData);
      }, 3000);
    }, 500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formHeading =
    variant === 'page' ? 'Send Us a Message' : variant === 'service-cta' ? ctaHeading : 'Get in Touch With Us';

  const infoHeading = variant === 'page' ? 'Contact Information' : 'Contact Information';

  return (
    <>
      <section ref={ref} className="py-24 bg-white/60 backdrop-blur-lg border-t border-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              {variant !== 'service-cta' && (
                <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">
                  LET&apos;S CONNECT
                </div>
              )}
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-8">{formHeading}</h2>
              {variant === 'home' && (
                <p className="text-xl text-gray-600 mb-10 max-w-md">
                  Ready to transform your business? Our team is here to help you achieve your goals.
                </p>
              )}
              {variant === 'service-cta' && (
                <p className="text-xl text-gray-600 mb-10 max-w-md">
                  Tell us about your requirements and our team will respond within one business day.
                </p>
              )}

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

            <div className="lg:pl-8 pt-8 lg:pt-12">
              <div className="bg-[#F8F9FA] rounded-3xl p-10">
                <h3 className="font-semibold text-2xl text-[#0A2540] mb-8">{infoHeading}</h3>

                <address className="not-italic space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MapPin className="w-6 h-6 text-[#00A651]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A2540]">Our Office</div>
                      <div className="text-gray-600 mt-1">
                        {contactInfo.addressLines[0]}
                        <br />
                        {contactInfo.addressLines[1]}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Phone className="w-6 h-6 text-[#00A651]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A2540]">Phone</div>
                      {contactInfo.phones.map((phone) => (
                        <a
                          key={phone.tel}
                          href={`tel:${phone.tel}`}
                          className="text-gray-600 hover:text-[#00A651] transition-colors block mt-1"
                        >
                          {phone.display}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Mail className="w-6 h-6 text-[#00A651]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A2540]">Email</div>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-600 hover:text-[#00A651] transition-colors mt-1 block"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Clock className="w-6 h-6 text-[#00A651]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A2540]">Business Hours</div>
                      <div className="text-gray-600 mt-1">
                        {contactInfo.hours.weekdays}
                        <br />
                        {contactInfo.hours.saturday}
                      </div>
                    </div>
                  </div>
                </address>
              </div>

              <div className="mt-8 rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-80">
                <iframe
                  title="Divergent Tanzania Location"
                  src="https://maps.google.com/maps?q=-7.1218674,39.2037708&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
  },
);

ContactSection.displayName = 'ContactSection';
