import { motion } from 'framer-motion';
import { OptimizedImage } from '../ui/OptimizedImage';
import { testimonials } from '../../data';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white/50 backdrop-blur-md border-t border-white/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </div>
            <h2 className="text-5xl font-bold text-[#0A2540]">What Our Clients Say</h2>
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
                <div className="text-6xl text-[#00A651]/20 mb-4">&ldquo;</div>
                <p className="text-lg text-gray-700 leading-relaxed">{testimonial.quote}</p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                <OptimizedImage
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
                  className="w-12 h-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
                <div>
                  <div className="font-semibold text-[#0A2540]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
