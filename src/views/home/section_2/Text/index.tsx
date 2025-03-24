'use client';

import { TextGenerateEffect } from '@/components/Animation/Text';
import { useTranslations } from 'next-intl';

export function TextGenerate() {
  const t = useTranslations();
  const text = t('home.s2Desc');

  return <TextGenerateEffect words={text} />;
}
