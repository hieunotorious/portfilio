import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ButtonEncrypt = () => {
  return (
    <div className="place-content-center grid">
      <EncryptButton />
    </div>
  );
};

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = '!@#$%^&*():{};|,.<>/?';

const EncryptButton = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const t = useTranslations();

  const TARGET_TEXT = t('home.s1btt');
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join('');

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      style={{
        background:
          'linear-gradient(#0B0F17, #0B0F17) padding-box, linear-gradient(90deg, #97E021 0%, #FF9B0F 32%, #FF5912 65.5%, #FFE416 89%) border-box',
        borderRadius: '999px',
        border: '1px solid transparent',
      }}
      className="group relative overflow-hidden text-NOTO  bg-buttonWork px-4 py-2 font-mono font-medium capitalize text-white transition-colors hover:text-white"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span className="text-NOTO">{text}</span>
      </div>
      <motion.span
        initial={{
          y: '100%',
        }}
        animate={{
          y: '-100%',
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 1,
          ease: 'linear',
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-green-400/0 from-40% via-green-400/100 to-green-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default ButtonEncrypt;
