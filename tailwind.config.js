/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors:{
        "neutralsilver":"#F5F7A",
        "neutralDGrey":"#4D4D4D",
        "brandPrimary":"#4361ee",
        "neutralGrey":"#717171"
      }
    },
  },
  plugins: [],
}

