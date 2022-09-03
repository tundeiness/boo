/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'san-serif'],
    },
    extend: {
      colors: {
        viking: '#4fdad7',
        illusions: '#f6b0b8',
        dusty_gray: '#949494',
      },
    },
  },
  plugins: [],
};
