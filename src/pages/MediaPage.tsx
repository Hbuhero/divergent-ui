import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { OptimizedImage } from '../components/ui/OptimizedImage';
import { getGalleryItems } from '../data/media';
import { getServiceBySlug } from '../data';
import { ROUTES } from '../config/routes';

export default function MediaPage() {
  const items = getGalleryItems();

  return (
    <>
      <SEO path={ROUTES.media} />

      <div className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <Breadcrumbs
            items={[
              { name: 'Home', path: ROUTES.home },
              { name: 'Media', path: ROUTES.media },
            ]}
          />
          <h1 className="text-5xl md:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">Media Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Recent photos from Divergent Tanzania Ltd operations and project work across Tanzania.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            {items.map((item) => {
              const service = item.serviceSlug ? getServiceBySlug(item.serviceSlug) : undefined;

              return (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
                >
                  <OptimizedImage src={item.src} alt={item.caption} className="w-full h-72 object-cover" />
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-xl font-bold text-[#0A2540] mb-2">{item.title}</h2>
                    <p className="text-gray-600 leading-relaxed flex-1">{item.caption}</p>
                    {service && (
                      <Link
                        to={ROUTES.serviceDetail(item.serviceSlug!)}
                        className="mt-4 text-sm text-[#00A651] font-medium hover:underline"
                      >
                        {service.title} →
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
