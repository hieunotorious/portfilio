import { FocusCards } from '@/components/Animation/Card/FocusCard';
import { Timeline } from '@/components/Animation/Timeline';
import IMAGES from '@/constant/IMAGES_ROUTES';
import Image from 'next/image';

const data2023 = [
  {
    title: 'MYCALEM',
    link: '#',
    src: IMAGES.p9,
  },
  {
    title: 'ONEWAY',
    link: '#',
    src: IMAGES.p11,
  },
];

const middle2023 = [
  {
    title: 'ONEBIT VENTURES',
    link: 'https://onebit.ventures',
    src: IMAGES.p1,
  },
  {
    title: 'ONEBIT STARTUPPAD',
    link: 'https://onbpad.com',
    src: IMAGES.p2,
  },
  {
    title: 'TRENDYDEFI',
    link: 'https://trendydefi.com/',
    src: IMAGES.p8,
  },
  {
    title: 'DARK KNIGHT GAMES',
    link: 'https://darkknight.games',
    src: IMAGES.p3,
  },
  {
    title: 'CORE STAKE',
    link: 'https://corestake.org',
    src: IMAGES.p13,
  },
  {
    title: 'GAME',
    link: '#',
    src: IMAGES.p10,
  },
  {
    title: 'SWEET DODGE',
    link: '#',
    src: IMAGES.p14,
  },
  {
    title: 'SATOSHI NAKAMOTO',
    link: '#',
    src: IMAGES.p12,
  },
];

const data2024 = [
  {
    title: 'VIỆN PHONG THUỶ KHOA HỌC TOÀN CẦU',
    link: 'https://daotao.phongthuydainam.vn',
    src: IMAGES.p4,
  },
  {
    title: 'KHOÁ HỌC PHONG THUỶ',
    link: 'https://khpt.phongthuydainam.vn',
    src: IMAGES.p6,
  },
  {
    title: 'LUX FENGSHUI',
    link: 'https://lux-fengshui.xheroapp.com',
    src: IMAGES.p5,
  },
  {
    title: 'LỊCH DỤNG SỰ',
    link: '#',
    src: IMAGES.p7,
  },
];
export function Section4() {
  const data = [
    {
      title: '2023',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FocusCards cards={data2023} />
        </div>
      ),
    },
    {
      title: 'Half Year 2023',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FocusCards cards={middle2023} />
        </div>
      ),
    },
    {
      title: '2024',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FocusCards cards={data2024} />
        </div>
      ),
    },
  ];
  return (
    <div id="work" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
