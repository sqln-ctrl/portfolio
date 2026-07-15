/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"SUSE Mono Variable"', 'monospace'],
      },
      colors: {
        ink: 'rgb(53, 53, 53)',
        slate: 'rgb(85, 85, 85)',
        line: 'rgb(163, 163, 163)',
        offwhite: 'rgb(250, 250, 250)',
      },
    },
  },
  plugins: [],
};
