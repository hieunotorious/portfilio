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
    link: '#',

    src: IMAGES.p1,
  },
  {
    title: 'ONEBIT STARTUPPAD',
    link: '#',

    src: IMAGES.p2,
  },
  {
    title: 'TRENDYDEFI',
    link: '#',

    src: IMAGES.p8,
  },
  {
    title: 'DARK KNIGHT GAMES',
    link: '#',

    src: IMAGES.p3,
  },
  {
    title: 'CORE STAKE',
    link: '#',

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
    link: '#',
    src: IMAGES.p4,
  },
  {
    title: 'KHOÁ HỌC PHONG THUỶ',
    link: '#',
    src: IMAGES.p6,
  },
  {
    title: 'LUX FENGSHUI',
    link: '#',
    src: IMAGES.p5,
  },
  {
    title: 'LỊCH DỤNG SỰ',
    link: '#',
    src: IMAGES.p7,
  },
  {
    title: 'Phong Thuỷ Đại Nam',
    link: '#',
    src: IMAGES.ptdn,
  },
];
const data2025 = [
  {
    title: 'ERP',
    link: '#',
    src: IMAGES.erp,
  },
  {
    title: 'Admin CRM',
    link: '#',
    src: IMAGES.crm,
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
    {
      title: '2025-2026',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FocusCards cards={data2025} />
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
