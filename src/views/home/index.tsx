/* eslint-disable react/no-children-prop */
'use client';

import Section1 from './section_1';
import Section2 from './section_2';
import Section3 from './section_3';
import { Section5 } from './section_5';

const Home = () => {
  return (
    <div
      className="flex flex-col relative"
      style={{
        background: 'linear-gradient(163.43deg, #0B1301 11.46%, #0B1301 56.2%, #0B1301 101.84%)',
      }}
    >
      <div className="bg-black bg-bgHome bg-no-repeat bg-cover bg-center sticky top-0 panel w-full h-screen min-h-[100vh]">
        <Section1 />
      </div>
      <div
        className="flex flex-col gap-[96px] rounded-[44px] z-50 "
        style={{
          background: 'linear-gradient(163.43deg, #0B1301 11.46%, #0B1301 56.2%, #0B1301 101.84%)',
        }}
      >
        <Section2 />
        <Section3 />
        <Section5 />
        {/* <Timeline
          data={[
            {
              title: 'hieu',
              content: 'hieu',
            },
          ]}
        /> */}
      </div>
    </div>
  );
};

export default Home;
