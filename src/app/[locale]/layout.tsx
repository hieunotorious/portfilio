import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import localFont from 'next/font/local';

import theme from '@/@mui/theme/theme';

import NavBar from '@/components/NavBar';
import IMAGES_ROUTES from '@/constant/IMAGES_ROUTES';
import { Metadata } from 'next';

const parisFont = localFont({
  src: [
    {
      path: '../../../public/font/Paris2024-Regular.ttf',
      weight: '500',
    },
    {
      path: '../../../public/font/Paris2024-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../../../public/font/Paris2024-Bold.ttf',
      weight: '700',
    },
  ],

  variable: '--font-geist-Paris2024',
});

const notoFont = localFont({
  src: [
    {
      path: '../../../public/font/NotoSans-VariableFont_wdth,wght.ttf',
      weight: '500',
    },
  ],

  variable: '--font-geist-Noto',
});
export const metadata: Metadata = {
  title: 'HIEUNOTORIOUS',
  description: 'HIEUNOTORIOUS',
  keywords: ['HIEUNOTORIOUS'],
  metadataBase: new URL('http://localhost:3000/vi'),
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'HIEUNOTORIOUS',
    description: 'HIEUNOTORIOUS',
    images: [
      {
        url: IMAGES_ROUTES.meta,
        width: 512,
        height: 512,
      },
    ],
    siteName: 'HIEUNOTORIOUS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HIEUNOTORIOUS',
    description: 'HIEUNOTORIOUS',
    images: [
      {
        url: IMAGES_ROUTES.meta,
        width: 512,
        height: 512,
      },
    ],
  },
};
export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={`${parisFont.className} ${notoFont.variable} antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <NavBar locale={locale} />
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
