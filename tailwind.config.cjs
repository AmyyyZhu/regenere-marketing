/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'gold':'#AC8D48',
        'light-yellow':'#F5F0E7'
      }
    },
  },
  plugins: [],
}

