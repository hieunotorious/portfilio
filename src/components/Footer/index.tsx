'use client';

import SocialIcon from '@/components/SocialIcon';
import Facebook_Logo from '@/components/SocialIcon/SVG/Facebook_Logo';
import Instagram_Color_Logo from '@/components/SocialIcon/SVG/Instagram_Color_Logo';
import Instagram_Logo from '@/components/SocialIcon/SVG/Instagram_Logo';
import Zalo_Logo from '@/components/SocialIcon/SVG/Zalo_Logo';
import COLOR from '@/constant/COLOR_ROUTES';
import { useTranslations } from 'next-intl';

const FooterPortFolio = () => {
  const t = useTranslations();

  return (
    <div className="flex gap-4 items-center justify-center">
      <SocialIcon
        icon={
          <Facebook_Logo
            style={{
              width: 40,
              height: 40,
            }}
            fill={COLOR.white}
          />
        }
        hoverColor={COLOR.facebook}
        href=""
      />

      <SocialIcon
        icon={
          <Zalo_Logo
            style={{
              width: 40,
              height: 40,
            }}
            fill={COLOR.black}
          />
        }
        hoverColor={COLOR.zalo}
      />
      <SocialIcon
        icon={
          <>
            <Instagram_Color_Logo />
            <Instagram_Logo
              style={{
                width: 40,
                height: 40,
              }}
              fill={COLOR.white}
            />
          </>
        }
        hoverColor="url(#rg)"
        strokeColor={COLOR.white}
        href=""
      />
    </div>
  );
};

export default FooterPortFolio;
