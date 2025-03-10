import createMiddleware from 'next-intl/middleware';

import { defaultLocale, localePrefix, locales, pathnames } from './config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
  localePrefix,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    '/(vi|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
