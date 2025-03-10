'use client';

import IMAGES from '@/constant/IMAGES_ROUTES';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../Card3D';

export function CardEffect() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl border  ">
        <CardItem translateZ="100" className="w-full group">
          <Image
            src={IMAGES.port}
            alt=""
            width={50}
            height={50}
            className="w-[546px] h-full object-cover rounded-xl shadow-xl grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
