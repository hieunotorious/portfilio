'use client';

import SocialIcon from '@/components/SocialIcon';
import Facebook_Logo from '@/components/SocialIcon/SVG/Facebook_Logo';
import Instagram_Color_Logo from '@/components/SocialIcon/SVG/Instagram_Color_Logo';
import Instagram_Logo from '@/components/SocialIcon/SVG/Instagram_Logo';
import Zalo_Logo from '@/components/SocialIcon/SVG/Zalo_Logo';
import COLOR from '@/constant/COLOR_ROUTES';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { NAV_LINKS, PROJECTS, SKILLS, STATS } from './data';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''));

const Portfolio = () => {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState<string>(SECTION_IDS[0]);

  // Scrollspy: highlight the nav link whose section is currently in view.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="relative min-h-screen overflow-x-clip bg-[#f4f7ff] text-slate-900 transition-colors duration-500 dark:bg-[#05070d] dark:text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full opacity-70 blur-[120px]"
          style={{
            background: dark
              ? 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)'
              : 'radial-gradient(circle, #93c5fd 0%, transparent 70%)',
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[150px] z-0 select-none overflow-hidden lg:top-[100px]"
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          >
            {[0, 1].map((i) => (
              <span
                key={i}
                className="pr-16 text-[56px] font-black uppercase leading-none tracking-tight text-slate-900/[0.035] dark:text-white/[0.04] sm:text-[150px] lg:text-[210px]"
              >
                Creative Frontend Developer&nbsp;
              </span>
            ))}
          </motion.div>
        </div>

        <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f4f7ff]/80 backdrop-blur-md dark:border-white/10 dark:bg-[#05070d]/80">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap sm:px-5 sm:py-5">
            <div className="flex items-center gap-2 lg:opacity-0">
              <span className="text-sm font-bold leading-tight">
                MA
                <br />
                NGOC HIEU
              </span>
            </div>

            <nav className="order-3 flex w-full items-center justify-between border-t border-black/5 pt-3 text-xs font-medium dark:border-white/10 sm:order-none sm:w-auto sm:gap-5 sm:border-0 sm:pt-0 sm:text-sm md:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === `#${active}`;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative transition-colors ${
                      isActive
                        ? 'text-blue-600 dark:text-white'
                        : 'text-slate-500 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center rounded-full  bg-white/60 p-1 text-xs font-semibold backdrop-blur dark:border-white/10 dark:bg-white/5">
              <button
                onClick={() => setDark(false)}
                className={`rounded-full px-3 py-1 transition-colors ${
                  !dark ? 'bg-blue-600 text-white' : 'text-slate-400'
                }`}
              >
                Light
              </button>
              <button
                onClick={() => setDark(true)}
                className={`rounded-full px-3 py-1 transition-colors ${
                  dark ? 'bg-blue-600 text-white' : 'text-slate-500'
                }`}
              >
                Dark
              </button>
            </div>
          </div>
        </header>

        <main className="relative z-10 mt-10 lg:mt-0 mx-auto max-w-6xl px-5 pb-24 lg:grid lg:grid-cols-[300px_1fr] lg:items-start lg:gap-10">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=" grid h-fit grid-cols-[104px_minmax(0,1fr)] gap-x-4 rounded-3xl border border-black/5 bg-white p-4 shadow-xl shadow-blue-500/5 dark:border-white/10 dark:bg-white/[0.03] sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-x-6 sm:p-6 lg:sticky lg:top-24 lg:mb-0 lg:block lg:p-8"
          >
            <div className="col-start-2 mb-3 flex min-w-0 items-center gap-2 lg:mb-4">
              {/* <div className="flex  items-center justify-center rounded-xl ">
                <Image
                  src="/images/portLogo.png"
                  alt="Ma Ngoc Hieu"
                  width={30}
                  height={30}
                  className="h-auto w-[68px] object-contain sm:w-[86px] lg:h-[44px] lg:w-[100px] lg:object-cover"
                />
              </div> */}
              <span className="hidden text-[14px] font-bold leading-tight dark:text-blue-400 min-[390px]:block sm:text-lg lg:block">
                MA
                <br />
                NGOC HIEU
              </span>
            </div>

            <div className="relative row-span-3 row-start-1 aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-[4/5]">
              <Image
                src="/images/portAvatar.png"
                alt="Ma Ngoc Hieu"
                fill
                sizes="(max-width: 640px) 104px, (max-width: 1024px) 160px, 300px"
                className="object-cover"
              />
            </div>

            <h3 className="col-start-2 mt-0 text-base font-bold text-blue-600 dark:text-blue-400 sm:text-lg lg:mt-4">
              A new beginning
            </h3>
            <p className="col-start-2 mt-1 line-clamp-4 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 sm:text-xs lg:line-clamp-none">
              Available for full-time roles and freelance projects. Let&apos;s build something
              extraordinary together.
            </p>

            <ul className="col-span-2 mt-4 grid min-w-0 gap-2 border-t border-black/5 pt-4 text-sm dark:border-white/10 min-[520px]:grid-cols-2 lg:block lg:space-y-2 lg:border-0 lg:pt-0 lg:text-base">
              <li className="flex items-center gap-3">
                <span className="font-bold text-blue-600 dark:text-blue-400">P</span>
                <span className="min-w-0 truncate text-slate-600 dark:text-slate-300">
                  0912590467
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-bold text-blue-600 dark:text-blue-400">E</span>
                <span className="min-w-0 truncate text-slate-600 dark:text-slate-300">
                  hieumn2001@gmail.com
                </span>
              </li>
            </ul>

            <div className="relative col-span-2 mt-4">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-28 -z-0 rounded-full opacity-70 blur-[45px] h-[320px] w-[320px] "
                style={{
                  background: dark
                    ? 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)'
                    : 'radial-gradient(circle, #93c5fd 0%, transparent 70%)',
                }}
              />
              <div className="flex gap-3 items-center justify-start ">
                <SocialIcon
                  icon={<Facebook_Logo style={{ width: 20, height: 20 }} fill={COLOR.white} />}
                  hoverColor={COLOR.facebook}
                  href="https://www.facebook.com/ngoc.hieu.412229"
                />
                <SocialIcon
                  icon={<Zalo_Logo style={{ width: 20, height: 20 }} fill={COLOR.black} />}
                  hoverColor={COLOR.zalo}
                  href="https://zalo.me/0912590467"
                />
                <SocialIcon
                  icon={
                    <>
                      <Instagram_Color_Logo />
                      <Instagram_Logo
                        style={{ width: 20, height: 20 }}
                        fill={dark ? COLOR.black : COLOR.white}
                      />
                    </>
                  }
                  hoverColor="url(#rg)"
                  strokeColor={COLOR.white}
                  href="https://www.instagram.com/hieunotorious___"
                />
              </div>
            </div>
          </motion.aside>

          <div className="min-w-0">
            <section className="flex min-h-0 flex-col justify-center py-10 sm:min-h-[55vh] sm:py-14 lg:min-h-[55vh] lg:py-0 lg:pt-6">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                <span className="h-2.5 w-2.5 rounded-sm bg-blue-600" />
                Creative Frontend Developer
              </div>
              <motion.h1
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="text-[clamp(2.25rem,9vw,3rem)] font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
              >
                I&apos;m Ma Ngoc Hieu
                <br />
                <span className="text-blue-600 dark:text-blue-500">A dedicated</span>
                <br />
                <span className="text-blue-600 dark:text-blue-500">Frontend Developer</span>
              </motion.h1>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="#contact"
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform hover:-translate-y-0.5"
                >
                  Contact me
                </a>
                <a href="#work" className="group flex items-center gap-3 text-sm font-semibold">
                  View all project
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </section>

            <section id="about" className="scroll-mt-24 pt-20 sm:pt-28">
              <SectionLabel>About me</SectionLabel>
              <h2 className="mt-4 max-w-md text-3xl font-extrabold leading-tight sm:text-4xl">
                Crafting interfaces that perform.
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:gap-4">
                {STATS.map((s) => (
                  <motion.div
                    key={s.label}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="rounded-2xl border border-black/5 bg-white p-4 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-6"
                  >
                    <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 sm:text-4xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:text-xs">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Frontend developer passionate about{' '}
                  <strong className="text-slate-900 dark:text-white">
                    crafting fast, scalable and user-centered digital products.
                  </strong>
                </p>
                <p>
                  I work closely with design systems,{' '}
                  <strong className="text-slate-900 dark:text-white">responsive layouts</strong> and
                  modern frontend technologies to build seamless experiences across web platforms.
                  From translating UI concepts into production-ready interfaces to optimizing
                  performance and interaction details, I focus on creating products that are clean,
                  intuitive and impactful.
                </p>
              </div>

              <a
                href="/cv.pdf"
                className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform hover:-translate-y-0.5"
              >
                Download CV
              </a>
            </section>

            <section id="skill" className="scroll-mt-24 pt-20 sm:pt-28">
              <SectionLabel>Technical_skills</SectionLabel>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">What I work with</h2>

              <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {skill.name}
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700"
                        style={{ boxShadow: '0 0 12px 0 rgba(37, 99, 235, 0.6)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="work" className="relative scroll-mt-24 pt-20 sm:pt-28">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 top-24 -z-10 h-[420px] w-[420px] rounded-full opacity-70 blur-[120px]"
                style={{
                  background: dark
                    ? 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)'
                    : 'radial-gradient(circle, #93c5fd 0%, transparent 70%)',
                }}
              />
              <SectionLabel>Selected project</SectionLabel>
              <h2 className="mt-4 max-w-lg text-3xl font-extrabold leading-tight sm:text-4xl">
                These are the projects I have participated in
              </h2>

              <div className="relative mt-10 space-y-6">
                {PROJECTS.map((p, i) => (
                  <motion.article
                    key={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 gap-5 rounded-3xl border border-blue-500/40 bg-white p-4 shadow-[0_0_45px_0_rgba(37,99,235,0.4)] transition-shadow duration-300 hover:shadow-[0_0_65px_4px_rgba(37,99,235,0.6)] sm:p-6 md:grid-cols-2 md:items-center dark:border-blue-500/40 dark:bg-white/[0.03]"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                        {p.period}
                      </div>
                      <h3 className="mt-3 text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {p.title}
                      </h3>
                      <div className="mt-3 h-px w-24 bg-blue-600/40" />

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-black/10 px-2.5 py-1 text-xs text-slate-600 dark:border-white/15 dark:text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs">
                        <span className="rounded-md border border-black/10 px-2.5 py-1 text-slate-600 dark:border-white/15 dark:text-slate-300">
                          {p.role}
                        </span>
                        <span className="rounded-md border border-black/10 px-2.5 py-1 text-slate-600 dark:border-white/15 dark:text-slate-300">
                          {p.members}
                        </span>
                        <span className="rounded-md border border-black/10 px-2.5 py-1 text-slate-600 dark:border-white/15 dark:text-slate-300">
                          {p.progress}
                        </span>
                      </div>
                    </div>

                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover"
                      />
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            <section id="contact" className="scroll-mt-24 pt-20 text-center sm:pt-28">
              <SectionLabel className="justify-center">Contact</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-xl text-3xl font-extrabold sm:text-4xl">
                Let&apos;s build something extraordinary together.
              </h2>
              <a
                href="mailto:hieumn2001@gmail.com"
                className="mt-8 inline-block max-w-full break-all rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-transform hover:-translate-y-0.5 sm:px-8"
              >
                hieumn2001@gmail.com
              </a>
              <p className="mt-10 text-xs text-slate-400">
                © 2026 Ma Ngoc Hieu · Frontend Developer
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

const SectionLabel = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 ${className}`}
  >
    <span className="h-2.5 w-2.5 rounded-sm bg-blue-600" />
    {children}
  </div>
);

const Glyph = ({ name }: { name: string }) => {
  const common = 'h-4 w-4 fill-current';
  if (name === 'phone')
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1L6.6 10.8z" />
      </svg>
    );
  if (name === 'mail')
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={common}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
};

export default Portfolio;
