'use client';

import moment from 'moment';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

type NavProps = {
  locale: string;
};
const NavBar = ({ locale }: NavProps) => {
  const pathname = usePathname();
  useEffect(() => {
    if (locale !== moment.locale()) moment.locale(locale);
  }, [locale]);
  // The portfolio route ships its own header + theme toggle.
  if (pathname?.includes('/portfolio')) return null;
  return (
    <>
      <div className="hidden xl:block z-30">
        <NavDesktop locale={locale} />
      </div>
      <div className="block xl:hidden z-30">
        <NavMobile locale={locale} />
      </div>
    </>
  );
};
export default NavBar;
