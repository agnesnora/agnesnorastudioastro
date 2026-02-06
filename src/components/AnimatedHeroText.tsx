import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedHeroText = ({
  text = 'Reszponzív, gyors és átgondolt digitális élményeket készítek, amelyek valódi értéket adnak az online jelenlétedhez.',
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = text.split(' ');

  return (
    <h1
      ref={container}
      // className="py-20 px-2 text-right  font-family-jakarta text-4xl leading-16 lg:text-left lg:text-6xl lg:font-bold"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <>
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
            {i < words.length - 1 && ' '}
          </>
        );
      })}
    </h1>
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
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }} className="absolute left-0">
        {children}
      </motion.span>
    </span>
  );
};

export default AnimatedHeroText;
