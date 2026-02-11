import React, { useRef, useState, useEffect, useCallback } from 'react';
import data from '../data/services.json';
import Card from './Card';

const AnimatedServiceCard = () => {
  const container = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>(0);

  const tick = useCallback(() => {
    if (container.current) {
      const rect = container.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const wh = window.innerHeight;

      // 0 when container top hits viewport top, 1 when container bottom hits viewport bottom
      const totalScroll = containerHeight - wh;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

      setScrollProgress(progress);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const services = data.services;

  return (
    <div
      ref={container}
      className="relative"
      style={{ height: `${services.length * 100}vh` }}
    >
      {services.map((service, i) => {
        const targetScale = 1 - (services.length - i) * 0.05;
        return (
          <Card
            key={service.id}
            i={i}
            title={service.title}
            description={service.description}
            features={service.features}
            bgColor={service.bgColor}
            color={service.color}
            progress={scrollProgress}
            range={[i * (1 / services.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default AnimatedServiceCard;
