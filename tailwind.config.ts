import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        porcelain: '#fffaf8',
        cream: '#f9f2ee',
        petal: '#f7d8dd',
        blush: '#e9a7b4',
        rose: '#c95f74',
        mauve: '#8f5666',
        cocoa: '#3a272b',
        oyster: '#ede7e4',
        graphite: '#62575a',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Aptos', 'Segoe UI', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Aptos', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        ambient: '0 22px 70px rgba(120, 73, 80, 0.14)',
        petal: '0 14px 42px rgba(201, 95, 116, 0.18)',
        soft: '0 10px 30px rgba(76, 46, 52, 0.08)',
      },
      borderRadius: {
        brand: '1.75rem',
        'brand-sm': '1.125rem',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
