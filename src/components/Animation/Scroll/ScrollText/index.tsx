import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden ">
      <h2 className="relative z-0 text-[10vw] font-black text-neutral-800 md:text-[200px]">
        HIEUNOTORIOUS<span className="text-indigo-500">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://i.pinimg.com/736x/cb/6c/e0/cb6ce02219601794ae0d0f3160980350.jpg"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://i.pinimg.com/736x/83/da/50/83da50553afb73e6fc765b6760d8008f.jpg"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://i.pinimg.com/736x/31/a1/a5/31a1a57b0cdcb0bafb88346aca0356e3.jpg"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://i.pinimg.com/736x/ba/b3/ca/bab3ca7efa11bd918e50e9c599b90804.jpg"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="https://i.pinimg.com/736x/52/9a/43/529a43a0e3b9456dbd7eada81f0b4e14.jpg"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="https://i.pinimg.com/736x/41/62/99/416299e20ad0de066d00dd4fe592ab18.jpg"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className: string;
}

const Card: React.FC<CardProps> = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll('.drag-elements');

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(window.getComputedStyle(el).getPropertyValue('z-index'));

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge('drag-elements absolute w-48 bg-neutral-200 p-1 pb-4', className)}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
