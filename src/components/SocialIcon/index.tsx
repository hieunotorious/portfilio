import COLOR from '@/constant/COLOR_ROUTES';
import { Stack, StackProps } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type SocialIconType = {
  icon: React.ReactNode;
  hoverColor?: string;
  strokeColor?: string;
  href?: string;
} & StackProps;

const SocialIcon = ({ icon, hoverColor, strokeColor, href, ...props }: SocialIconType) => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        border: `1px solid ${COLOR.white}`,
        borderRadius: '50%',
        cursor: 'pointer',
        width: '50px',
        height: '50px',
        transition: 'all 300ms ease-in-out',
        '&:hover': {
          background: COLOR.white,
          svg: {
            stroke: strokeColor || 'transparent',
            fill: hoverColor,
          },
        },
        svg: {
          transition: 'all 300ms ease-in-out',
        },
      }}
      {...props}
    >
      <Link href={href || '#'} target="_blank" style={{ display: 'flex', padding: '6px' }}>
        {icon}
      </Link>
    </Stack>
  );
};

export default SocialIcon;
