/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
  corePlugins: {
    float: false,
    objectFit: false,
    objectPosition: false,
  },  
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

