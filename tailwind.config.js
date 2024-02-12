/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: "#05174d",
        line: "#336699",
        secundaria: '#ff6600'
      },
      fontFamily:{
        nunito: 'Nunito',
        roboto: 'Roboto',
        open:  'Open Sans'
      }
    },
  },
  plugins: [],
}

