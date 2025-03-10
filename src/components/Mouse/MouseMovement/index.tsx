import React, { useEffect } from 'react';
import gsap from 'gsap';
import IMAGES_ROUTES from '@/constant/IMAGES_ROUTES';
import Image from 'next/image';

const MouseMovement = () => {
  useEffect(() => {
    const followBoxSelector = '.follow-box';

    gsap.set(followBoxSelector, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });

    const handleMouseMove = (e: any) => {
      console.log('Mouse moved:', e.clientX, e.clientY);
      gsap.to(followBoxSelector, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        stagger: 0.15,
        ease: 'none',
      });

      const timeline = gsap.timeline({
        defaults: { duration: 0.5, ease: 'none' },
      });

      timeline
        .to(followBoxSelector, {
          scale: 1,
          stagger: { amount: 0.15, from: 'start' },
        })
        .to(
          followBoxSelector,
          {
            scale: 0,
            stagger: { amount: 0.15, from: 'end' },
          },
          '<+=2.5'
        );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id="wrap"
      className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-none"
    >
      <Image
        className="follow-box absolute top-0 left-0 w-[30px] h-[30px] z-[4]"
        src={IMAGES_ROUTES.monkey}
        alt=""
        width={20}
        height={20}
      />
      <Image
        className="follow-box absolute top-0 left-0 w-[30px] h-[30px] z-[3]"
        src={IMAGES_ROUTES.monkey}
        alt=""
        width={20}
        height={20}
      />
      <Image
        className="follow-box absolute top-0 left-0 w-[30px] h-[30px] z-[2]"
        src={IMAGES_ROUTES.monkey}
        alt=""
        width={20}
        height={20}
      />
      <Image
        className="follow-box absolute top-0 left-0 w-[30px] h-[30px] z-[1]"
        src={IMAGES_ROUTES.monkey}
        alt=""
        width={20}
        height={20}
      />
    </div>
  );
};

export default MouseMovement;
