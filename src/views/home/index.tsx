'use client';

import SplashCursor from '@/components/Animation/SplashCursor';
import FooterPortFolio from '@/components/Footer';
import Section1 from './section_1';
import Section2 from './section_2';
import { Section4 } from './section_4';
import { Section5 } from './section_5';
import EyeTracker from '@/components/EyeMovement';

const Home = () => {
  return (
    <div
      className="flex flex-col relative"
      style={{
        background: 'linear-gradient(163.43deg, #0B1301 11.46%, #0B1301 56.2%, #0B1301 101.84%)',
      }}
    >
      {/* <SplashCursor /> */}
      <div className="bg-black  bg-bgHome bg-no-repeat bg-cover bg-center sticky top-0 panel w-full h-screen min-h-[100vh]">
        <Section1 />
      </div>
      <div
        className="relative  flex flex-col gap-[96px] rounded-[44px] z-10"
        style={{
          background: 'linear-gradient(163.43deg, #0B1301 11.46%, #0B1301 56.2%, #0B1301 101.84%)',
        }}
      >
        <Section2 />
        {/* <Section3 /> */}
        <Section4 />
        {/* <Section5 /> */}
        <FooterPortFolio />
      </div>
    </div>
  );
};

export default Home;
