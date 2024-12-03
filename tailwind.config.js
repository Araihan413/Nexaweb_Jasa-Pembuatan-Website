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
      "gradient-sekunder": "linear-gradient(to right, rgba(0, 255, 135, 1), rgba(96, 239, 255, 1))",
      "gradient-bubble1": "linear-gradient(to right, rgba(0, 255, 135, 0.5), rgba(96, 239, 255, 0.5))",
      "gradient-bubble2": "linear-gradient(to right, #b597f6, #96c6ea)",
      "gradient-top": "linear-gradient(to top, #dbeafe, #f1f5f9)",
      "kotak-kotak": "url('./src/assets/background/mee.svg')",
    }
  },
  plugins: [],
}