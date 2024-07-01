/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "forgot-pw": 'url("/bg_forgot_password.png")'
      },
      colors: {
        'base-putih-clr': '#FFFCF1',
        'base-kuning-clr': '#FCB92B',
        'base-hijau-clr': '#095F59',
        'hijau-terang': '#0C766F',
        'kuning-terang': '#FFD681',
        'hijau-paling-terang': '#CFECE0',
        'hijau-300': '#10857E',
        'hijau-500': '#095F59',
        'kuning-500': '#F6AA0B',
        'hijau-200': '#CFECE0'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
