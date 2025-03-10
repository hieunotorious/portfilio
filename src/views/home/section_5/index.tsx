'use client';
import React from 'react';
import IMAGES from '@/constant/IMAGES_ROUTES';
import { HeroParallax } from '@/components/Scroll/ScrollProject/HeroParallax';

export function Section5() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: 'ONEBIT VENTURES',
    link: 'https://onebit.ventures',
    thumbnail: IMAGES.p1,
  },
  {
    title: 'ONEBIT STARTUPPAD',
    link: 'https://onbpad.com',
    thumbnail: IMAGES.p2,
  },
  {
    title: 'DUEL ALL DAY',
    link: 'https://duelallday.com',
    thumbnail: IMAGES.p15,
  },

  {
    title: 'VIỆN PHONG THUỶ KHOA HỌC TOÀN CẦU',
    link: 'https://daotao.phongthuydainam.vn',
    thumbnail: IMAGES.p4,
  },
  {
    title: 'LUX FENGSHUI',
    link: 'https://lux-fengshui.xheroapp.com',
    thumbnail: IMAGES.p5,
  },
  {
    title: 'KHOÁ HỌC PHONG THUỶ',
    link: 'https://khpt.phongthuydainam.vn',
    thumbnail: IMAGES.p6,
  },
  {
    title: 'CORE STAKE',
    link: 'https://corestake.org',
    thumbnail: IMAGES.p13,
  },

  {
    title: 'DARK KNIGHT GAMES',
    link: 'https://darkknight.games',
    thumbnail: IMAGES.p3,
  },
  {
    title: 'TRENDYDEFI',
    link: 'https://trendydefi.com/',
    thumbnail: IMAGES.p8,
  },
  {
    title: 'GAME',
    link: '#',
    thumbnail: IMAGES.p10,
  },
  {
    title: 'ONEWAY',
    link: '#',
    thumbnail: IMAGES.p11,
  },

  {
    title: 'SATOSHI NAKAMOTO',
    link: '#',
    thumbnail: IMAGES.p12,
  },
  {
    title: 'LỊCH DỤNG SỰ',
    link: '#',
    thumbnail: IMAGES.p7,
  },
  {
    title: 'SWEET DODGE',
    link: '#',
    thumbnail: IMAGES.p14,
  },
  {
    title: 'MYCALEM',
    link: '#',
    thumbnail: IMAGES.p9,
  },
];
