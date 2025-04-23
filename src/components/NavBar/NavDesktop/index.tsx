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
  const sections = [
    { id: 'about_me', label: t('about_me') },
    { id: 'skill', label: t('skill') },
    { id: 'work', label: t('work') },
    { id: 'contact_me', label: t('contact_me') },
  ];

  const handleChangeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };
  const smoothScrollTo = (targetId: string, offset = 0, duration = 800) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 z-50">
      <div className="container flex mt-[27px] justify-between w-full items-center">
        <div />
        <div className="flex items-center gap-[87px] bg-bg60 border border-primary800 rounded-[999px] py-3 px-[48px]">
          {sections.map((section) => {
            return (
              <React.Fragment key={section.id}>
                <button onClick={() => smoothScrollTo(section.id, -120)} className="text-white">
                  <h1 className="capitalize">{section.label}</h1>
                </button>

                {section.label === t('skill') && <EyeTracker />}
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
