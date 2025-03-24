import { Dispatch, SetStateAction, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowSize } from './useWindow';
import { useTranslations } from 'next-intl';
import IMAGES from '@/constant/IMAGES_ROUTES';

const VerticalAccordion = () => {
  const t = useTranslations();

  const items = [
    {
      id: 1,
      title: t('teamwork'),
      imgSrc: IMAGES.s1,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.',
    },
    {
      id: 2,
      title: t('analytical'),
      imgSrc: IMAGES.s2,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.',
    },
    {
      id: 3,
      title: t('adaptability'),
      imgSrc: IMAGES.s3,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.',
    },
    {
      id: 4,
      title: t('communitions'),
      imgSrc: IMAGES.s4,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.',
    },
  ];
  const [open, setOpen] = useState(items[0].id);

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-5 xl:px-0 gap-[96px]">
      <h1 className="text-display1 uppercase text-primary300 font-NOTO">{t('home.skill')}</h1>
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  title: string;
  imgSrc: string;
  description: string;
}

const Panel = ({ open, setOpen, id, title, imgSrc, description }: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: 'vertical-lr',
          }}
          className="hidden lg:block text-xl font-light rotate-180 capitalize"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>

        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: '100%',
    height: '100%',
  },
  closed: {
    width: '0%',
    height: '100%',
  },
};

const panelVariantsSm = {
  open: {
    width: '100%',
    height: '200px',
  },
  closed: {
    width: '100%',
    height: '0px',
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: '0%',
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: '100%' },
};
