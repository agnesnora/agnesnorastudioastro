import React, { useRef, useState, useEffect, useCallback } from 'react';
import data from '../data/services.json';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  bgColor: string;
  color: string;
}

const HorizontalServiceCards = () => {
  const container = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>(0);

  const tick = useCallback(() => {
    if (container.current) {
      const rect = container.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const wh = window.innerHeight;

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

  const services = data.services as Service[];
  const count = services.length;

  // Total horizontal distance: (count - 1) cards worth of width
  // Each card is ~85vw wide, so we need to shift by that much per card
  const getTranslateX = () => {
    if (typeof window === 'undefined') return 0;
    const isMobile = window.innerWidth < 768;
    const cardWidth = window.innerWidth * (isMobile ? 0.9 : 0.85);
    const gap = isMobile ? 16 : 24;
    const maxShift = (count - 1) * (cardWidth + gap);
    return scrollProgress * maxShift;
  };

  const translateX = getTranslateX();

  return (
    <div
      ref={container}
      className="relative"
      style={{ height: `${count * 62}vh` }}
    >
      <div className="sticky top-24 h-[calc(100vh-7rem)] flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-6 transition-none pl-[5vw] md:pl-[7.5vw]"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center transition-opacity duration-200"
          style={{
            opacity: scrollProgress > 0.75 ? (scrollProgress - 0.75) / 0.25 : 0,
          }}
        >
          <h2 className="font-family-space font-bold text-3xl lg:text-6xl xl:text-7xl text-center mb-8">
            Hogyan dolgozom?
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            className="mx-auto"
            viewBox="0 0 24
24"
          >
            <path
              fill="1C1D19"
              d="M11.5 17.079V5.5q0-.213.143-.357T12 5t.357.143t.143.357v11.579l5.439-5.439q.146-.146.344-.153q.198-.006.363.16q.16.164.163.353q.002.188-.163.354l-6.08 6.08q-.132.131-.268.184t-.298.053t-.298-.053q-.136-.052-.267-.183l-6.081-6.081q-.14-.14-.15-.341q-.01-.202.15-.367q.165-.165.357-.165t.356.165z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div
      className={`${service.bgColor} ${service.color} shrink-0  lg:min-h-112 2xl:min-h-136 w-[90vw] md:w-[85vw] max-w-3xl 2xl:max-w-5xl rounded-2xl p-5 md:p-8 lg:p-12 2xl:p-16 shadow-sm`}
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6 2xl:text-4xl">
        {service.title}
      </h2>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 md:gap-6 lg:gap-12 sxl:gap-16">
        <div className="lg:w-1/2">
          <h3 className="text-xs md:text-sm 2xl:text-base font-light uppercase mb-2 md:mb-4 tracking-wider">
            Miben segítek?
          </h3>
          <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold leading-relaxed">
            {service.description}
          </p>
        </div>

        <ul className="lg:w-1/2">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex gap-3 md:gap-4 2xl:gap-5 mb-2 md:mb-3 2xl:mb-4 items-start text-sm md:text-base lg:text-lg 2xl:text-xl"
            >
              <span className="font-semibold opacity-60">{`0${index + 1}`}</span>
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HorizontalServiceCards;
