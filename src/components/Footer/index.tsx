'use client';

import SocialIcon from '@/components/SocialIcon';
import Facebook_Logo from '@/components/SocialIcon/SVG/Facebook_Logo';
import Instagram_Color_Logo from '@/components/SocialIcon/SVG/Instagram_Color_Logo';
import Instagram_Logo from '@/components/SocialIcon/SVG/Instagram_Logo';
import Zalo_Logo from '@/components/SocialIcon/SVG/Zalo_Logo';
import COLOR from '@/constant/COLOR_ROUTES';
import CardHover from '../Animation/Card/CardHover';

const FooterPortFolio = () => {
  return (
    <div
      id="contact_me"
      style={{
        background: 'linear-gradient(163.43deg, #0B1301 11.46%, #0B1301 56.2%, #0B1301 101.84%)',
      }}
      className="flex flex-col justify-center items-center rounded-tl-[44px] rounded-tr-[44px]   border-t-[1px] border-t-[#608336] py-7"
    >
      <CardHover />
      <div className="flex gap-4 items-center justify-center ">
        <SocialIcon
          icon={
            <Facebook_Logo
              style={{
                width: 30,
                height: 30,
              }}
              fill={COLOR.white}
            />
          }
          hoverColor={COLOR.facebook}
          href="https://www.facebook.com/ngoc.hieu.412229"
        />

        <SocialIcon
          icon={
            <Zalo_Logo
              style={{
                width: 30,
                height: 30,
              }}
              fill={COLOR.black}
            />
          }
          hoverColor={COLOR.zalo}
          href="https://zalo.me/0912590467"
        />
        <SocialIcon
          icon={
            <>
              <Instagram_Color_Logo />
              <Instagram_Logo
                style={{
                  width: 30,
                  height: 30,
                }}
                fill={COLOR.white}
              />
            </>
          }
          hoverColor="url(#rg)"
          strokeColor={COLOR.white}
          href="https://www.instagram.com/hieunotorious___"
        />
      </div>
    </div>
  );
};

export default FooterPortFolio;
