import { Pathnames } from 'next-intl/navigation';
import { UrlObject } from 'url';

export const locales = ['vi', 'en'];
export const defaultLocale = 'vi';

export const Languages = [
  {
    locale: 'en',
    name: 'EN',
  },
  {
    locale: 'vi',
    name: 'VI',
  },
];

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
type ExcludeType<T, Exclude> = T extends Exclude ? never : T;
type AppPathnamesWithSlug = AppPathnames & `${string}[${string}`;
type AppPathnamesWithoutSlug = ExcludeType<AppPathnames, AppPathnamesWithSlug>;

export type Href =
  | AppPathnamesWithoutSlug
  | ({
      pathname: AppPathnames;
      params?: any;
    } & Omit<UrlObject, 'pathname'>);
