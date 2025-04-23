import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const ButtonMenu = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  const translations = useTranslations('navBar');
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    if (window.innerWidth >= 640) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 640) {
      setIsHovered(false);
    }
  };
  return (
    <div
      className="flex gap-3 items-center cursor-pointer group"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300 relative"
      >
        <g
          className={`transition-opacity duration-300 ${
            isOpen || isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <path
            d="M1 8H21"
            stroke="currentColor"
            className="text-gray200 group-hover:text-primary400"
            strokeLinecap="round"
          />
          <path
            d="M1 12H21"
            stroke="currentColor"
            className="text-gray200 group-hover:text-primary400"
            strokeLinecap="round"
          />
        </g>
        <path
          d="M1 10H21"
          stroke="currentColor"
          className={`text-gray200 group-hover:text-primary400 transition-opacity duration-300 ${
            isOpen || isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          strokeLinecap="round"
        />
      </svg>
      <h2 className="hidden xl:block font-termina font-medium text-xs text-gray200 group-hover:text-primary400 uppercase">
        {translations(isOpen ? 'close' : 'menu')}
      </h2>
    </div>
  );
};
