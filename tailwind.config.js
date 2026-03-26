/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00d4ff',
          light: '#40e0ff',
          pale: 'rgba(0, 212, 255, 0.08)',
        },
        neutral: {
          50: '#080c14',
          100: '#0d1220',
          200: '#1a2744',
          300: '#2a3f62',
          400: '#344f72',
          500: '#4a6d96',
          600: '#6b8cb8',
          700: '#96b2d4',
          800: '#c4d6ec',
          900: '#e8f0fe',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      aspectRatio: {
        'video': '16 / 9',
      },
    },
  },
  plugins: [],
}
