'use client';

import moment from 'moment';
import { useEffect } from 'react';
import NavDesktop from './NavDesktop';

type NavProps = {
  locale: string;
};
const NavBar = ({ locale }: NavProps) => {
  useEffect(() => {
    if (locale !== moment.locale()) moment.locale(locale);
  }, [locale]);
  return (
    <div className="hidden xl:block z-30">
      <NavDesktop locale={locale} />
    </div>
  );
};
export default NavBar;
