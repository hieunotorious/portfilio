export const NAV_LINKS = [
  { label: 'About me', href: '#about' },
  { label: 'Skill', href: '#skill' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: '20+', label: 'Projects Built' },
  { value: '3+', label: 'Years Experience' },
  { value: '5+', label: 'Technologies Used' },
];

export type Skill = { name: string; level: number };

export const SKILLS: Skill[] = [
  { name: 'React.js / Next.js', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'JavaScript', level: 75 },
  { name: 'HTML / CSS', level: 65 },
  { name: 'Tailwind CSS / SASS', level: 68 },
  { name: 'Git / GitHub', level: 60 },
];

export type Project = {
  period: string;
  title: string;
  image: string;
  tags: string[];
  role: string;
  members: string;
  progress: string;
};

export const PROJECTS: Project[] = [
  {
    period: '2025 - 2026',
    title: 'ERP Management',
    image: '/images/ERP.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    role: 'Lead Engineer',
    members: '5 members',
    progress: '90%',
  },
  {
    period: '2024 - 2025',
    title: 'CRM Management',
    image: '/images/CRM.webp',
    tags: ['React', 'JavaScript', 'Tailwind'],
    role: 'Front-End Software Engineer',
    members: '10 members',
    progress: '60%',
  },
  {
    period: '2024 - 2025',
    title: 'E-Commerce Website',
    image: '/images/coverPTDN.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    role: 'Front-End Software Engineer',
    members: '7 members',
    progress: '70%',
  },
  {
    period: '2023 - 2024',
    title: 'Blockchain Website',
    image: '/images/p1.webp',
    tags: ['React', 'JavaScript', 'SASS'],
    role: 'Front-End Software Engineer',
    members: '4 members',
    progress: '90%',
  },
];
