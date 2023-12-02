/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default': '#000',
        'grey': '#808080',
        'apply': '#333',
        'matblack': '#1b1b1b',
        'college': '#F8FFD2',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'svg': "url('./src/assets/bg.svg')",
      },
    },
  },
  plugins: [],
}

