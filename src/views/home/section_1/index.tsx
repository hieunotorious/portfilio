'use client';

import ButtonEncrypt from '@/components/Button/ButtonEncrypt';
import IMAGES from '@/constant/IMAGES_ROUTES';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Section1 = () => {
  const t = useTranslations();
  const text = ['ngc', 'hieu'];
  const imageIndex = 1;
  const textAnimationDelay = 0.1;
  const bounceDelay = text.flat().join('').length * textAnimationDelay;
  const [isImageDropped, setIsImageDropped] = useState(false);

  useEffect(() => {
    setTimeout(
      () => setIsImageDropped(true),
      (text.flat().join('').length + 1) * textAnimationDelay * 1000
    );
  }, []);
  return (
    <div className="flex min-h-screen flex-col justify-between h-full items-center mt-[50px] py-[100px]">
      <motion.p
        initial={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-transparent uppercase text-display1"
        style={{ WebkitTextStroke: '1px #E2FFB2' }}
      >
        {t('home.s1Title')}
      </motion.p>
      <h1 className="text-white text-[200px] uppercase flex items-center font-bold">
        {text.map((word, wordIndex) => (
          <div key={wordIndex} className="flex items-center">
            {word.split('').map((char, index) => (
              <motion.div
                key={index}
                initial={{ marginInline: '-10px' }}
                animate={{ marginInline: isImageDropped ? '0' : '-20px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex items-center"
              >
                <motion.span
                  initial={{ x: -200, opacity: 0, rotate: -90 }}
                  animate={{ x: 0, opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: (wordIndex * word.length + index) * textAnimationDelay,
                    type: 'spring',
                    stiffness: 120,
                    damping: 10,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>

                {wordIndex === 0 && index === imageIndex && (
                  <motion.div
                    initial={{ y: -100, opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 15,
                      duration: 0.5,
                      delay: bounceDelay,
                    }}
                    className="relative"
                  >
                    <Image
                      src={IMAGES.headMonkey}
                      alt="Monkey"
                      width={156}
                      height={163}
                      className="w-[156px] h-auto ml-[15px] animate-shake"
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
            {wordIndex === 0 && <div className="w-[45px]" />}
          </div>
        ))}
      </h1>
      <div className="flex flex-col gap-5">
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
          <ButtonEncrypt />
        </motion.div>
        <motion.h1
          initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="text-white text-body1"
        >
          {t('home.s1Desc')}
        </motion.h1>
      </div>
    </div>
  );
};

export default Section1;
