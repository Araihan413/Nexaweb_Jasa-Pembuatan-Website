/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "judul": ["Fira Sans Condensed", 'serif'],
      "subJudul": ["Padauk", 'sans-serif'],
      "paragraf": ["Karma", 'serif']
    }
  },
  plugins: [],
}