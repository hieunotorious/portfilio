'use client';

import { CardEffect } from '@/components/Animation/Card/CardEffect';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { TextGenerate } from './Text';
import IMAGES from '@/constant/IMAGES_ROUTES';
import { PixelatedCanvas } from '@/components/Pixel';

const Section2 = () => {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  return (
    <div
      id="about_me"
      ref={ref}
      className="flex justify-center items-center flex-col gap-8 lg:gap-[96px] mt-[96px] px-5"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-display1 text-primary300 uppercase text-center text-wrap"
      >
        {t('home.s2Title')}
      </motion.h1>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px]">
          <h1 key={isInView ? 'visible' : 'hidden'}>
            <TextGenerate />
          </h1>
          <div className="mx-auto flex justify-end">
            <PixelatedCanvas
              src={IMAGES.port}
              width={400}
              height={500}
              cellSize={4}
              dotScale={0.9}
              shape="square"
              backgroundColor="#000000"
              dropoutStrength={0.2}
              interactive
              distortionStrength={3}
              distortionRadius={70}
              distortionMode="swirl"
              followSpeed={0.2}
              jitterStrength={5}
              jitterSpeed={4}
              sampleAverage
              tintColor="#FFFFFF"
              tintStrength={0.1}
              className="rounded-xl border border-neutral-800 shadow-lg"
            />
          </div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.5, 1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: 1,
            }}
          >
          

            <CardEffect />
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Section2;
