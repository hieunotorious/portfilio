'use client';

import SocialIcon from '@/components/SocialIcon';
import Facebook_Logo from '@/components/SocialIcon/SVG/Facebook_Logo';
import Instagram_Color_Logo from '@/components/SocialIcon/SVG/Instagram_Color_Logo';
import Instagram_Logo from '@/components/SocialIcon/SVG/Instagram_Logo';
import Zalo_Logo from '@/components/SocialIcon/SVG/Zalo_Logo';
import COLOR from '@/constant/COLOR_ROUTES';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { NAV_LINKS, PROJECTS, SKILLS, STATS } from './data';
import EyeTracker from '@/components/EyeMovement';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''));

const Portfolio = () => {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState<string>(SECTION_IDS[0]);
  const navigationTargetRef = useRef<string | null>(null);
  const scrollEndTimerRef = useRef<number | null>(null);

  // Scrollspy: use one stable point in the viewport instead of comparing only
  // the entries changed by IntersectionObserver (which made long sections flicker).
  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      if (navigationTargetRef.current) {
        setActive(navigationTargetRef.current);
        return;
      }

      const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
        (section): section is HTMLElement => !!section
      );
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 280);
      let currentSection = sections[0]?.id ?? SECTION_IDS[0];
      const isAtPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (isAtPageBottom && sections.length > 0) {
        currentSection = sections[sections.length - 1].id;
      } else {
        for (const section of sections) {
          if (section.offsetTop <= marker) currentSection = section.id;
          else break;
        }
      }

      setActive((previous) => (previous === currentSection ? previous : currentSection));
    };

    const handleViewportChange = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);

      if (navigationTargetRef.current) {
        if (scrollEndTimerRef.current) window.clearTimeout(scrollEndTimerRef.current);
        scrollEndTimerRef.current = window.setTimeout(() => {
          navigationTargetRef.current = null;
          updateActiveSection();
        }, 150);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleViewportChange, { passive: true });
    window.addEventListener('resize', handleViewportChange);

    return () => {
      cancelAnimationFrame(frame);
      if (scrollEndTimerRef.current) window.clearTimeout(scrollEndTimerRef.current);
      window.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
    };
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
                    onClick={() => {
                      const target = link.href.slice(1);
                      navigationTargetRef.current = target;
                      setActive(target);
                      if (scrollEndTimerRef.current) {
                        window.clearTimeout(scrollEndTimerRef.current);
                      }
                      scrollEndTimerRef.current = window.setTimeout(() => {
                        navigationTargetRef.current = null;
                      }, 150);
                    }}
                    className={`relative transition-colors font-semibold ${
                      isActive
                        ? 'text-blue-600 dark:text-white'
                        : 'text-[#474747] hover:text-blue-600 dark:text-slate-300 dark:hover:text-white'
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
                className={`rounded-full px-3 py-1 transition-colors duration-300 hover:bg-[#B22E0D] hover:text-white ${
                  !dark ? 'bg-blue-600 text-white' : 'text-slate-400'
                }`}
              >
                Light
              </button>
              <button
                onClick={() => setDark(true)}
                className={`rounded-full px-3 py-1 transition-colors duration-300 hover:bg-[#B22E0D] hover:text-white ${
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
              <EyeTracker isDark={dark} />
              <span className="hidden text-[14px] font-bold leading-tight dark:text-[#007EF5] min-[390px]:block sm:text-lg lg:block">
                MA
                <br />
                NGOC HIEU
              </span>
            </div>

            <div className=" group/project-image relative row-span-3 row-start-1 aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-[4/5]">
              <Image
                src="/images/portAvatar.png"
                alt="Ma Ngoc Hieu"
                fill
                sizes="(max-width: 640px) 104px, (max-width: 1024px) 160px, 300px"
                className="object-cover transition-transform duration-700 ease-out group-hover/project-image:scale-110 group-hover/project-image:rotate-1"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#B22E0D]/35 via-transparent to-white/20 opacity-0 transition-opacity duration-500 group-hover/project-image:opacity-100" />
              <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/25 blur-md transition-transform duration-700 ease-out group-hover/project-image:translate-x-[450%]" />
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
            <section className="flex min-h-0 flex-col justify-center py-10 sm:min-h-[55vh] sm:py-14 lg:min-h-[60vh] lg:py-0 lg:pt-6">
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
                  className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B22E0D]"
                >
                  Contact me
                </a>
                <a
                  href="#work"
                  className="group flex items-center gap-3 rounded-full py-1 pl-4 pr-1 text-sm font-semibold transition-all duration-300 hover:bg-[#B22E0D] hover:text-white"
                >
                  View all project
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#B22E0D]">
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
                    className="group rounded-2xl border border-[#A6D1FA] bg-[linear-gradient(106.04deg,_#FFFFFF_0.86%,_#E2F1FF_99.55%)] p-6 text-center shadow-sm transition-all duration-500 hover:border-[#112A41] dark:bg-[linear-gradient(106.04deg,_#000000_0.86%,_#112A41_99.55%)] hover:shadow-lg hover:shadow-[#112A41]/30 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-[linear-gradient(106.04deg,_#000000_0.86%,_#112A41_99.55%)] sm:p-6"
                  >
                    <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 sm:text-4xl">
                      <AnimatedStatValue value={s.value} />
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#666666] transition-colors duration-500 group-hover:text-white dark:text-slate-400 sm:text-xs">
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
                className="mt-6 inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B22E0D]"
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
                        viewport={{ once: false, amount: 0.6 }}
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
                    style={{
                      top: `calc(6rem + ${i * 12}px)`,
                      zIndex: i + 1,
                      backdropFilter: 'blur(18.600000381469727px)',
                    }}
                    className="bg-[linear-gradient(106.04deg, rgba(255, 255, 255, 0.3) 0.86%, rgba(226,241, 255, 0.3) 99.55%)] dark:bg-[linear-gradient(106.04deg, #000000 0.86%, #112A41 99.55%)] sticky grid grid-cols-1 gap-5 rounded-xl border border-blue-500/40 bg-white p-4 shadow-[0px_4px_4px_0px_#82BCF2] transition-shadow duration-300 sm:p-6 md:grid-cols-2 md:items-center dark:border-blue-500/40 dark:bg-[#0b0e16]/95 dark:shadow-none"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs  text-[#474747] font-semibold dark:text-slate-400">
                        <span className="h-2 w-2 rounded-full bg-blue-600 " />
                        {p.period}
                      </div>
                      <h3 className="mt-3 text-2xl font-bold text-[#007EF5] dark:text-blue-400">
                        {p.title}
                      </h3>
                      <div className="mt-3 h-px w-24 bg-blue-600/40" />

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-black/10 px-2.5 font-semibold py-1 text-xs text-[#666666] dark:border-white/15 dark:text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs">
                        <span className="font-semibold rounded-md border border-black/10 px-2.5 py-1 text-[#666666] dark:border-white/15 dark:text-slate-300">
                          {p.role}
                        </span>
                        <span className="font-semibold rounded-md border border-black/10 px-2.5 py-1 text-[#666666] dark:border-white/15 dark:text-slate-300">
                          {p.members}
                        </span>
                        <span className="font-semibold rounded-md border border-black/10 px-2.5 py-1 text-[#666666] dark:border-white/15 dark:text-slate-300">
                          {p.progress}
                        </span>
                      </div>
                    </div>
                    <div className="group/project-image relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-700 ease-out group-hover/project-image:scale-110 group-hover/project-image:rotate-1"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#B22E0D]/35 via-transparent to-white/20 opacity-0 transition-opacity duration-500 group-hover/project-image:opacity-100" />
                      <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/25 blur-md transition-transform duration-700 ease-out group-hover/project-image:translate-x-[450%]" />
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
                className="mt-8 inline-block max-w-full break-all rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B22E0D] sm:px-8"
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

const AnimatedStatValue = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(String(target), '');

  useEffect(() => {
    if (!isInView || Number.isNaN(target)) {
      setDisplayValue(0);
      return;
    }

    let animationFrame = 0;
    const duration = 1200;
    const startTime = performance.now();

    const count = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(count);
      }
    };

    animationFrame = requestAnimationFrame(count);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export default Portfolio;
