import React from 'react';

export const LanguageSelector = ({
  locale,
  onChangeLanguage,
}: {
  locale: string;
  onChangeLanguage: (lang: string) => void;
}) => (
  <div className="xl:px-4 gap-2 flex items-center mt-1">
    {['vi', 'en'].map((lang) => (
      <React.Fragment key={lang}>
        <h2
          className={`text-label1 uppercase cursor-pointer ${
            locale === lang ? '!text-white' : 'text-primary400'
          }`}
          onClick={() => onChangeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </h2>
        {lang === 'vi' && <span className="w-[2px] h-[15px] bg-primary400"></span>}
      </React.Fragment>
    ))}
  </div>
);
