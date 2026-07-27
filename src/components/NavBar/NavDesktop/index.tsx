'use client';

import EyeTracker from '@/components/EyeMovement';
import { usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { LanguageSelector } from '../LanguageSelector';

type Props = {
  locale: string;
};

const NavDesktop = ({ locale }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('navBar');
  const isBirthdayPage = pathname.includes('birthday');

  const sections = [
    { id: 'about_me', portfolioId: 'about', label: t('about_me') },
    { id: 'skill', portfolioId: 'skill', label: t('skill') },
    { id: 'work', portfolioId: 'work', label: t('work') },
    { id: 'contact_me', portfolioId: 'contact', label: t('contact_me') },
  ];

  const handleChangeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 z-50">
      <div className="container flex mt-[27px] justify-between w-full items-center">
        {isBirthdayPage ? (
          <div className="bg-bg60 border border-primary800 rounded-[999px] py-3 px-[48px]">
            <EyeTracker />
          </div>
        ) : (
          <>
            <div />
            <div className="flex items-center gap-[87px] bg-bg60 border border-primary800 rounded-[999px] py-3 px-[48px]">
              {sections.map((section) => {
                return (
                  <React.Fragment key={section.id}>
                    <a
                      href={`/${locale}/portfolio#${section.portfolioId}`}
                      className="text-white"
                    >
                      <h1 className="capitalize">{section.label}</h1>
                    </a>

                    {section.label === t('skill') && <EyeTracker />}
                  </React.Fragment>
                );
              })}
            </div>
          </>
        )}

        <LanguageSelector locale={locale} onChangeLanguage={handleChangeLanguage} />
      </div>
    </div>
  );
};

export default NavDesktop;
