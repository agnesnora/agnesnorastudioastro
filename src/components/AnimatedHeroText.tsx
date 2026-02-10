import React, { useRef, useState, useEffect, useCallback } from 'react';

interface WordProps {
  children: string;
  progress: number;
  range: [number, number];
}

interface CharProps {
  children: string;
  progress: number;
  range: [number, number];
}

const AnimatedHeroText = ({
  text = 'Reszponzív, gyors és átgondolt digitális élményeket készítek, amelyek valódi értéket adnak az online jelenlétedhez.',
}) => {
  const container = useRef<HTMLParagraphElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>(0);

  const tick = useCallback(() => {
    if (container.current) {
      const rect = container.current.getBoundingClientRect();
      const wh = window.innerHeight;

      // 0 = elem teteje a viewport alján; 1 = elem teteje a viewport tetejénél
      // Minél nagyobb a különbség start-end között, annál lassabb az animáció
      const start = wh * 0.9;
      const end = wh * 0.05;
      const progress = Math.max(
        0,
        Math.min(1, (start - rect.top) / (start - end))
      );

      setScrollProgress(progress);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const words = text.split(' ');

  return (
    <p ref={container} className="relative">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <React.Fragment key={`word-${i}`}>
            <Word progress={scrollProgress} range={[start, end]}>
              {word}
            </Word>
            {i < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </p>
  );
};

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="inline-block">
      {children.split('').map((char: string, i: number) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = Math.max(
    0,
    Math.min(1, (progress - range[0]) / (range[1] - range[0]))
  );

  return (
    <span className="relative inline-block">
      <span className="opacity-20">{children}</span>
      <span style={{ opacity }} className="absolute left-0">
        {children}
      </span>
    </span>
  );
};

export default AnimatedHeroText;
