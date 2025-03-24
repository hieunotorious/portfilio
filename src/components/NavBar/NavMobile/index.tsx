'use client';

import IMAGES from '@/constant/IMAGES_ROUTES';
import { usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LanguageSelector } from '../LanguageSelector';

type Props = {
  locale: string;
};

const NavMobile = ({ locale }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('navBar');
  const sections = [
    { id: 'about_me', label: t('about_me') },
    { id: 'skill', label: t('skill') },
    { id: 'work', label: t('work') },
    { id: 'contact_me', label: t('contact_me') },
  ];

  const handleChangeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 z-50">
      <div className="container flex mt-[27px] justify-between w-full items-center px-5">
        <Image
          src={IMAGES.logoPortfolio}
          alt=""
          height={48}
          width={105}
          className="w-[105px] h-auto"
        />
        <div className="flex items-center ">
          <LanguageSelector locale={locale} onChangeLanguage={handleChangeLanguage} />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
