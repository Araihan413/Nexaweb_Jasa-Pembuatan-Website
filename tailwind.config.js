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
    },
    backgroundImage: {
      "gradient-primer": "linear-gradient(to right, #40c9ff, #e81cff)",
      "gradient-sekunder": "linear-gradient(to right, #00ff87, #60efff)",
      "gradient-top": "linear-gradient(to top, #dbeafe, #f1f5f9)"
    }
  },
  plugins: [],
}