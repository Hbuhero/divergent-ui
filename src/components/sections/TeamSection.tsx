import { motion } from 'framer-motion';
import { OptimizedImage } from '../ui/OptimizedImage';
import { teamMembers } from '../../data';

export function TeamSection() {
  return (
    <section className="py-24 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">
            OUR PEOPLE
          </div>
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
                  <OptimizedImage
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Divergent Tanzania Limited`}
                    className="w-full h-50 object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                <motion.a
                  href={member.linkedin || '#'}
                  className="absolute top-6 right-6 w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
              </div>

              <div className="px-1">
                  <h3 className="font-bold text-xl text-[#0A2540] mb-1">{member.name}</h3>
                <div className="text-[#00A651] font-medium text-sm mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
