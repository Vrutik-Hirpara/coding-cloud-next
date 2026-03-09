// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./component/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/typography")],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1240px',  // 1240px and above (tamari requirement)
        '2xl': '1536px', // (optional - specific 1536px+ styling mate)
        '3xl': '1920px', // (optional - specific 1920px+ styling mate)
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};