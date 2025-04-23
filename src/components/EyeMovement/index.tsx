import { useEffect, useRef } from 'react';
import Image from 'next/image';
import IMAGES from '@/constant/IMAGES_ROUTES';

const EyeTracker = () => {
  const eyesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      eyesRef.current.forEach((eye) => {
        if (!eye) return;
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const deltaX = event.clientX - eyeX;
        const deltaY = event.clientY - eyeY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        const maxMove = 5;
        const pupilX = (deltaX / distance) * maxMove;
        const pupilY = (deltaY / distance) * maxMove;

        const pupil = eye.querySelector('.pupil') as HTMLDivElement;
        if (pupil) {
          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-[105px] h-auto">
      <Image
        src={IMAGES.logoPortfolio}
        alt=""
        height={48}
        width={105}
        className="w-[105px] h-auto"
      />

      <div className="absolute top-[50%] left-[20%] flex gap-4">
        {[0, 1].map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) {
                eyesRef.current[index] = el;
              }
            }}
            className="relative w-6 h-6  rounded-full flex justify-center items-center"
          >
            <div className="pupil absolute w-2.5 h-2.5 bg-white rounded-full transition-transform duration-75"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EyeTracker;
