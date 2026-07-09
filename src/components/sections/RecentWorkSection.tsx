import { Link } from 'react-router-dom';
import { OptimizedImage } from '../ui/OptimizedImage';
import { ROUTES } from '../../config/routes';
import type { RecentWorkGallery } from '../../data/recentWork';

interface RecentWorkSectionProps {
  work: RecentWorkGallery;
}

export function RecentWorkSection({ work }: RecentWorkSectionProps) {
  return (
    <section className="py-16 px-6 bg-[#0A2540] text-white" aria-labelledby="recent-work-heading">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#00A651] font-medium mb-3">Recent Work</p>
        <h2 id="recent-work-heading" className="text-3xl md:text-4xl font-bold mb-6">
          {work.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {work.images.map((image) => (
            <figure key={image.src} className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <OptimizedImage src={image.src} alt={image.alt} className="w-full h-64 md:h-80 object-cover" />
            </figure>
          ))}
        </div>

        <div className="max-w-3xl space-y-4 text-white/90 text-lg leading-relaxed mb-6">
          {work.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <p className="text-[#C5A36E] font-medium tracking-wide mb-4">{work.tagline}</p>
        <Link to={ROUTES.media} className="text-sm text-white/80 hover:text-white underline underline-offset-2">
          View full media gallery →
        </Link>
      </div>
    </section>
  );
}
