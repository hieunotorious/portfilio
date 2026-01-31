'use client';
import { FireWork, FireworkRef } from '@/components/Firework';
import { useTranslations } from 'next-intl';
import React, { useRef } from 'react';

interface BirthdayInvitationProps {
  name?: string;
  age?: number;
  date?: string;
  time?: string;
  location?: string;
  rsvp?: string;
}

const BirthdayInvitation: React.FC<BirthdayInvitationProps> = ({
  name = 'Hiếu',
  age = 25,
  date = 'Saturday, January 31st, 2026',
  time = '6:00 PM',
  location = 'Cuu Van Long',
  rsvp = '0912590467',
}) => {
  const t = useTranslations();
  const fireWorkRef = useRef<FireworkRef>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-md mt-[100px] w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-8 text-center relative overflow-hidden">
          <div className="absolute top-2 left-4 w-12 h-12 bg-yellow-300 rounded-full opacity-60" />
          <div className="absolute top-6 right-8 w-8 h-8 bg-pink-300 rounded-full opacity-60" />
          <div className="absolute bottom-4 left-12 w-10 h-10 bg-blue-300 rounded-full opacity-60" />

          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-2">{t('birthdayInvitation.title')}</h1>

            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-6xl">🎉</span>
              <span className="text-6xl">🎂</span>
              <span className="text-6xl">🎈</span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-2">{t('birthdayInvitation.celebrateWith')}</p>

            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
              {name}
            </h2>

            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-300" />
              <p className="text-6xl font-bold text-purple-500">
                {age} {t('birthdayInvitation.th')}
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-300" />
            </div>

            <p className="text-3xl font-semibold text-gray-700 mt-1">
              {t('birthdayInvitation.birthday')}
            </p>
          </div>

          <div className="border-t-2 border-dashed border-purple-200" />

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1">📅</span>
              <div>
                <p className="font-semibold text-gray-700">{t('birthdayInvitation.dateLabel')}</p>
                <p className="text-gray-600">{date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1">⏰</span>
              <div>
                <p className="font-semibold text-gray-700">{t('birthdayInvitation.timeLabel')}</p>
                <p className="text-gray-600">{time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1">📍</span>
              <div>
                <p className="font-semibold text-gray-700">
                  {t('birthdayInvitation.locationLabel')}
                </p>
                <p className="text-gray-600">{location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1">📱</span>
              <div>
                <p className="font-semibold text-gray-700">{t('birthdayInvitation.phoneLabel')}</p>
                <p className="text-gray-600">{rsvp}</p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-dashed border-purple-200" />

          <div className="text-center">
            <p className="text-gray-600 italic">{t('birthdayInvitation.footer')}</p>
          </div>
        </div>

        <div className="h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400" />
      </div>
      <FireWork
        ref={fireWorkRef}
        className="absolute top-0 left-0 z-0 size-full"
        onMouseEnter={() => {
          fireWorkRef.current?.fire({});
        }}
      />
    </div>
  );
};

export default BirthdayInvitation;
