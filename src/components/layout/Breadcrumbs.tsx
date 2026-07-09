import { Link } from 'react-router-dom';
import type { BreadcrumbItem } from '../schema';
import { BreadcrumbSchema } from '../schema';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length <= 1) return null;

  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="text-[#0A2540] font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link to={item.path} className="hover:text-[#00A651] transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
