import { useAnimate } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, ReactNode, MouseEvent } from 'react';

interface MouseImageTrailProps {
  children: ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}

export const MouseTrail: React.FC = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        'https://i.pinimg.com/736x/99/b0/e2/99b0e2db39d6f4146cf912ef1ec4a9ef.jpg',
        'https://i.pinimg.com/736x/6b/03/21/6b0321d1c5a5a26a8e5e83b2a00b75a9.jpg',
        'https://i.pinimg.com/736x/30/67/ad/3067ad10134f798047f62ea6f859cc07.jpg',
        'https://i.pinimg.com/736x/1b/44/ea/1b44ea75270afe3426d57074c46aa102.jpg',
        'https://i.pinimg.com/736x/58/62/db/5862dbd243026ec89c4013268352b146.jpg',
        'https://i.pinimg.com/736x/99/b0/e2/99b0e2db39d6f4146cf912ef1ec4a9ef.jpg',
        'https://i.pinimg.com/736x/6b/03/21/6b0321d1c5a5a26a8e5e83b2a00b75a9.jpg',
        'https://i.pinimg.com/736x/30/67/ad/3067ad10134f798047f62ea6f859cc07.jpg',
        'https://i.pinimg.com/736x/1b/44/ea/1b44ea75270afe3426d57074c46aa102.jpg',
        'https://i.pinimg.com/736x/58/62/db/5862dbd243026ec89c4013268352b146.jpg',
        'https://i.pinimg.com/736x/99/b0/e2/99b0e2db39d6f4146cf912ef1ec4a9ef.jpg',
        'https://i.pinimg.com/736x/6b/03/21/6b0321d1c5a5a26a8e5e83b2a00b75a9.jpg',
        'https://i.pinimg.com/736x/30/67/ad/3067ad10134f798047f62ea6f859cc07.jpg',
        'https://i.pinimg.com/736x/1b/44/ea/1b44ea75270afe3426d57074c46aa102.jpg',
        'https://i.pinimg.com/736x/58/62/db/5862dbd243026ec89c4013268352b146.jpg',
      ]}
    >
      <section className="grid h-screen w-full place-content-center bg-white">
        <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black">
          {/* <FiMousePointer /> */}
          <span>Hieudeptrai</span>
        </p>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail: React.FC<MouseImageTrailProps> = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const imageRenderCount = useRef<number>(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;
      renderNextImage();
    }
  };

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number): number => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: 'spring', damping: 15, stiffness: 200 }
    );

    animate(selector, { opacity: [1, 0] }, { ease: 'linear', duration: 0.5, delay: 5 });

    imageRenderCount.current += 1;
  };

  return (
    <div ref={scope} className="relative overflow-hidden" onMouseMove={handleMouseMove}>
      {children}
      {images.map((img, index) => (
        <Image
          key={index}
          width={20}
          height={20}
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
