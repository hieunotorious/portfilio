import IMAGES from '@/constant/IMAGES_ROUTES';
import './globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

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
        url: IMAGES.meta,
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
        url: IMAGES.meta,
        width: 512,
        height: 512,
      },
    ],
  },
};

export default function RootLayout({ children }: Props) {
  return <>{children}</>;
}
