import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, count]);

  return (
    <div ref={ref} className="stats-number text-5xl font-bold text-white">
      {count}
      {suffix}
    </div>
  );
};
