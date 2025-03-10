/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary50: '#F6FDEE',
        primary100: '#E5F6CF',
        primary200: '#D0E9B1',
        primary300: '#BADA91',
        primary400: '#9CBF70',
        primary500: '#7FA453',
        primary600: '#608336',
        primary700: '#406316',
        primary800: '#243C07',
        primary900: '#0B1301',
        primary: '#4F7A33',
        bg60: '#0D0E0B99',
        buttonWork: '#0B0F17',
        background: 'linear-gradient(163.43deg, #0B1301 11.46%, #0B1301 56.2%, #0B1301 101.84%)',
      },

      textStrokeWidth: {
        1: '1px',
        2: '2px',
      },
      fontFamily: {
        PARIS: 'var(--font-geist-Paris2024)',
        NOTO: 'var(--font-geist-Noto)',
      },
      backgroundImage: {
        bgHome: "url('/images/bgHome.webp')",
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-darkGold': {
          'background-image': 'linear-gradient(90deg, #D28D42 0%, #F0CA61 52.5%, #C87821 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'text-fill-color': 'transparent',
          color: '#F7C263',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
