import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        tegomin: ['var(--font-new-tegomin)', 'sans-serif'],
        noto: ['var(--font-noto-sans-jp)', 'sans-serif'],
      },
      fontSize: {
        h1: '2.25rem', //36px
        h2: '1.5rem', //24px
        body1: '1.125rem', //18px
        body2: '1rem', //16px
        body3: '0.875rem', //14px
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        white: '#ffffff',
        black: '#000000',
        base: '#fff9e5',
        main: '#a08703',
        second: '#d6ba26',
        accent: '#b03030',
        gray: '#8c8982',
        font_main: '#211c1a',
        header_footer: '#211c1a',
        font_khaki: '#6c5c07',
        logo_color: '#ab1b1b',

        font_link: '#5995a2',
        white_back: 'rgba(255,255,255,0.7)',
        base_back: 'rgba(255,249,229,0.5)',
        dark_back: 'rgba(76,42,0,0.8)',
      },
      animation: {
        'move-clouds': 'move-clouds 30s linear infinite', // アニメーション名と設定
        'move-clouds-2nd': 'move-clouds-2nd 30s linear infinite',
      },
      keyframes: {
        'move-clouds': {
          '0%': { transform: 'translateX(0%)' }, // 画面右端から開始
          '100%': { transform: 'translateX(-100%)' }, // 画面左端まで移動
        },
        'move-clouds-2nd': {
          '0%': { transform: 'translateX(100%)' }, // 画面右端から開始
          '100%': { transform: 'translateX(0%)' }, // 画面左端まで移動
        },

      },
    },
  },

  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        //テキストシャドウ
        '.shadow_right': {
          textShadow: '0 0 0.5rem rgba(225,225,225,1)',
        },
        '.shadow_font': {

          textShadow: '0 0.20rem 0.1rem rgba(0,0,0,0.25)',

        },
        //ボックスシャドウ
        '.shadow_logo': {
          boxShadow: '0.125rem 0.125rem 0.125rem rgba(88,60,35,0.5)',
        },
        '.shadow_dark': {
          boxShadow: '0 0 0.5rem rgba(0,0,0,0.5)',
        },
        '.shadow_button': {
          boxShadow: '0 0.25rem 0.25rem rgba(0,0,0,0.25)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
