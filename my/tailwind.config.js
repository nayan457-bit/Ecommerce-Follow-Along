/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{html,jsx}"
  ],
  theme: {
    fontfamily: {
      Roboto:['Roboto','sans-serif'],
      poppins:['poppins','sans-serif']
    },
    extend: {
      screens:{
        "1000px":"1050px",
        "1100px":"1110px",
        "800px":"800px",
        "1300px":"1300px",
        "400px":"400px"
      }
    },
  },
  plugins: [],
}

