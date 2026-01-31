'use client';

import IMAGES_ROUTES from '@/constant/IMAGES_ROUTES';
import { Link, usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LanguageSelector } from '../LanguageSelector';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonMenu } from '@/components/Button/ButtonMenu';
import EyeTracker from '@/components/EyeMovement';

type Props = {
  locale: string;
};

const NavMobile = ({ locale }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const translations = useTranslations('navBar');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState({
    isOpen: false,
    isVisible: false,
    hoveredLink: null as string | null,
    backgroundLink: null as string | null,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    if (menuState.isOpen) {
      setMenuState((prev) => ({ ...prev, isVisible: false }));
      setTimeout(() => setMenuState((prev) => ({ ...prev, isOpen: false })), 300);
    } else {
      setMenuState((prev) => ({ ...prev, isOpen: true }));
      setTimeout(() => setMenuState((prev) => ({ ...prev, isVisible: true })), 50);
    }
  };

  const menuItems = [
    { title: translations('home'), href: '/' },
    { title: translations('aboutLux'), href: '/' },
    { title: translations('service'), href: '/' },
    { title: translations('product'), href: '/' },
    { title: translations('project'), href: '/' },
    { title: translations('procedure'), href: '/' },
    { title: translations('branchSystem'), href: '/' },
    { title: translations('experts'), href: '/' },
    { title: translations('news'), href: '/' },
    { title: translations('appointment'), href: '/' },
  ] as const;

  const handleChangeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const handleLinkMouseEnter = (href: string) => {
    setMenuState((prev) => ({
      ...prev,
      hoveredLink: href,
      backgroundLink: href,
    }));
  };

  const handleLinkMouseLeave = () => {
    setMenuState((prev) => ({
      ...prev,
      hoveredLink: null,
    }));
  };

  const handleLinkClick = () => {
    setMenuState((prev) => ({ ...prev, isVisible: false }));
    setTimeout(() => setMenuState((prev) => ({ ...prev, isOpen: false })), 300);
  };

  const handleNavLinkClick = () => {
    if (menuState.isOpen) {
      setMenuState((prev) => ({ ...prev, isVisible: false }));
      setTimeout(() => setMenuState((prev) => ({ ...prev, isOpen: false })), 300);
    }
  };

  return (
    <>
      <AnimatePresence>
        {menuState.isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 right-0 w-full h-screen bg-gray900 z-50"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: menuState.hoveredLink ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 top-0 left-0 right-0 w-full h-screen bg-cover bg-gray900"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: menuState.hoveredLink ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 top-0 left-0 right-0 w-full h-screen bg-gray900"
            />
          </>
        )}
      </AnimatePresence>

      <div
        className={`fixed  top-0 left-0 right-0 z-[9999] transition-all duration-800 ease-in-out border-b border-gray900 
          before:absolute before:inset-0 before:transition-opacity before:duration-500 before:ease-in-out
          before:bg-gradient-to-b before:from-[#0F1012] before:to-[rgba(15,16,18,0.4)]
          ${menuState.isOpen ? '' : isScrolled ? 'before:opacity-100' : 'before:opacity-0'}`}
      >
        <div className="flex justify-between items-center px-4 container mx-auto w-full h-[76px] py-4 relative">
          <div className="xl:absolute left-1/2 top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
            <Link href="/" onClick={handleNavLinkClick}>
              <EyeTracker />
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <LanguageSelector locale={locale} onChangeLanguage={handleChangeLanguage} />
            {/* <div className="w-9 h-9 flex items-center justify-center">
              <ButtonMenu isOpen={menuState.isOpen} onClick={handleMenuToggle} />
            </div> */}
          </div>
        </div>

        {menuState.isOpen && (
          <div
            className={`flex justify-between items-center px-4 container mx-auto w-full h-[calc(100vh-76px)] transition-all duration-300 ${
              menuState.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="pb-4 flex flex-col xl:flex-row gap-6 justify-between w-full h-full overflow-y-auto">
              <div className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    locale={locale}
                    onMouseEnter={() => handleLinkMouseEnter(item.href)}
                    onMouseLeave={() => handleLinkMouseLeave()}
                    onClick={handleLinkClick}
                    className="font-termina font-semibold text-lg text-gray50 hover:text-primary400 tracking-widest uppercase cursor-pointer"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4 justify-end">
                <h2 className="text-label2 text-gray50 tracking-widest whitespace-nowrap">
                  {translations('office')}
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="text-body2 text-gray400">{translations('address')}</p>
                  <p className="text-body3 text-gray300">{translations('phone')}</p>
                </div>
                <p className="text-body3 text-gray300">{translations('time')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavMobile;
