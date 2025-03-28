'use client';

import { DragCards } from '@/components/Animation/Scroll/ScrollText';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Section3 = () => {
  const ref = useRef(null);
  return (
    <div ref={ref} className="flex justify-center items-center flex-col gap-[96px] ">
      <motion.h1
        initial={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-display1 text-primary300 uppercase"
      >
        /tech stack_
      </motion.h1>
      <div>
        <DragCards />
      </div>
    </div>
  );
};

export default Section3;
