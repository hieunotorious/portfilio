import { useTranslations } from 'next-intl';
import React from 'react';

const CardHover = () => {
  const t = useTranslations();

  return (
    <div className="p-4">
      <p className="text-title1 font-semibold mb-2 text-center text-primary300">
        {t('footer.title')}
      </p>
      <div className="flex">
        <Card title="hieumn2001@gmail.com" href="mailto:hieumn2001@gmail.com" />
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  href: string;
}

const Card = ({ title, href }: CardType) => {
  return (
    <a
      href={href}
      style={{
        background:
          'linear-gradient(#0B0F17, #0B0F17) padding-box, linear-gradient(90deg, #97E021 0%, #FF9B0F 32%, #FF5912 65.5%, #FFE416 89%) border-box',
        borderRadius: '999px',
        border: '1px solid transparent',
      }}
      className="w-full px-8 py-3 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 rounded-[999px]" />
      <h3 className="font-medium text-[25px] md:text-[52px] text-primary300 group-hover:text-white relative z-10 duration-300 border-b-2 md:border-b-4 border-primary300">
        {title}
      </h3>
    </a>
  );
};

export default CardHover;
