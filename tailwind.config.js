import { root } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
    },
    extend: {
      colors:{
        primaryBg:"var(--primary_bg)"
      },
      fontFamily:{
        mon:"var(--primary_font)",
      }
    },
  },
  plugins: [],
}
