'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Link href={card.link} target="_blank">
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          'rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-[250px] w-full transition-all duration-300 ease-out',
          hovered !== null && hovered !== index && 'blur-sm scale-[0.98]'
        )}
      >
        <Image src={card.src} alt={card.title} fill className="object-cover absolute inset-0" />
        <div
          className={cn(
            'absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300',
            hovered === index ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="text-body1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
    </Link>
  )
);

Card.displayName = 'Card';

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </>
  );
}
