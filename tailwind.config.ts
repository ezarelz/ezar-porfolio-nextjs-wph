import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}', // components di luar app
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        neutral: {
          25: '#FDFDFD',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E9EAEB',
          300: '#D5D7DA',
          400: '#A4A7AE',
          500: '#717680',
          600: '#535862',
          700: '#414651',
          800: '#252B37',
          900: '#181D27',
          950: '#0A0D12',
        },
        primary: {
          100: '#AAF3FF',
          200: '#43AFC0',
          300: '#149BB0',
          400: '#075864',
        },
        base: {
          white: '#FFFFFF',
          black: '#000000',
        },
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
      },
    },
  },
  plugins: [],
};

export default config;
