/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F7F7F4',
        background: '#F7F7F4',
        foreground: '#111111',
        primary: {
          DEFAULT: '#7665FF',
          foreground: '#FFFFFF',
          hover: '#6352F0',
        },
        'muted-foreground': '#71716D',
        input: '#DEDED8',
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#111111',
        },
        secondary: {
          DEFAULT: '#F0F0EC',
          foreground: '#111111',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F0F0EC',
        },
        border: {
          DEFAULT: '#DEDED8',
          light: 'rgba(17, 17, 17, 0.08)',
          purple: 'rgba(118, 101, 255, 0.22)',
          lime: 'rgba(168, 230, 46, 0.35)',
        },
        purple: {
          DEFAULT: '#7665FF',
          hover: '#6352F0',
        },
        lime: {
          DEFAULT: '#A8E62E',
          dark: '#82B91A',
        },
        text: {
          DEFAULT: '#111111',
          soft: '#4F4F4B',
          muted: '#71716D',
        },
        black: '#111111',
      },
      fontFamily: {
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1320px',
      },
      borderRadius: {
        button: '5px',
      },
    },
  },
  plugins: [],
};
