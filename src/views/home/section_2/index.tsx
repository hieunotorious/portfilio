'use client';

import { CardEffect } from '@/components/Card/CardEffect';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.01, duration: 0.1 },
  }),
};

const Section2 = () => {
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const text = t('home.s2Desc');
  return (
    <div ref={ref} className="flex justify-center items-center flex-col gap-[96px] mt-[96px]">
      <motion.h1
        initial={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-display1 text-primary300 uppercase"
      >
        {t('home.s2Title')}
      </motion.h1>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px]">
          <h1
            className="text-primary300 text-[24px] leading-[50px] font-NOTO"
            key={isInView ? 'visible' : 'hidden'}
          >
            {text.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <motion.div
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
