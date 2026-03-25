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
          DEFAULT: '#b8621a',
          light: '#d4784e',
          pale: '#f5ede6',
        },
        neutral: {
          50: '#faf9f7',
          100: '#f3f1ee',
          200: '#e8e4df',
          300: '#d4cfc8',
          400: '#a8a096',
          500: '#7a7269',
          600: '#5a5449',
          700: '#3d3830',
          800: '#262218',
          900: '#161310',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
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
