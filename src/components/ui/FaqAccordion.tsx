import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import type { FaqItem } from '../../data/faq';

interface FaqAccordionProps {
  items: FaqItem[];
  heading?: string;
  headingId?: string;
  /** Item indices open on first render */
  defaultOpenIndices?: number[];
}

export function FaqAccordion({
  items,
  heading,
  headingId,
  defaultOpenIndices = [],
}: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    () => new Set(defaultOpenIndices),
  );

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const baseId = headingId ?? 'faq';

  return (
    <div>
      {heading && (
        <h2
          id={headingId}
          className="text-3xl md:text-4xl font-bold text-[#0A2540] tracking-tight mb-6"
        >
          {heading}
        </h2>
      )}

      <dl className="border-t border-gray-200">
        {items.map((item, index) => {
          const isOpen = openIndices.has(index);
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;

          return (
            <div key={item.question} className="border-b border-gray-200">
              <dt>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-6 py-5 md:py-6 text-left cursor-pointer"
                >
                  <span className="text-base md:text-lg font-semibold text-[#0A2540]">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-[#0A2540]" aria-hidden="true">
                    {isOpen ? (
                      <Minus className="w-5 h-5" strokeWidth={2} />
                    ) : (
                      <Plus className="w-5 h-5" strokeWidth={2} />
                    )}
                  </span>
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <dd id={panelId} aria-labelledby={buttonId}>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 md:pb-6 text-gray-600 leading-relaxed">{item.answer}</p>
                    </motion.div>
                  </dd>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
