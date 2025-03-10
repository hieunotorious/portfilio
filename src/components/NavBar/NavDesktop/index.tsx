'use client';

import { usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { LanguageSelector } from '../LanguageSelector';
import Image from 'next/image';
import IMAGES from '@/constant/IMAGES_ROUTES';
import React from 'react';

type Props = {
  locale: string;
};

const NavDesktop = ({ locale }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('navBar');
  const sections = [
    { id: t('about_me') },
    { id: t('skill') },
    { id: t('work') },
    { id: t('contact_me') },
  ];

  const handleChangeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 z-50">
      <div className="container flex mt-[27px] justify-between w-full items-center">
        <div />
        <div className="flex items-center gap-[87px] bg-bg60 border-primary800 rounded-[999px] py-3 px-[48px]">
          {sections.map((section) => {
            return (
              <React.Fragment key={section.id}>
                <a href={`#${section.id}`} className="text-white">
                  <h1 className="capitalize">{section.id}</h1>
                </a>

                {section.id === t('skill') && (
                  <Image
                    src={IMAGES.logoPortfolio}
                    alt=""
                    height={48}
                    width={105}
                    className="w-[105px] h-auto"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <LanguageSelector locale={locale} onChangeLanguage={handleChangeLanguage} />
      </div>
    </div>
  );
};

export default NavDesktop;
