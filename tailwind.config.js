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
      "gradient-primer": "linear-gradient(to right, rgba(64, 201, 255, 1), rgba(232, 28, 255, 1))",
      "gradient-sekunder": "linear-gradient(to right, rgba(0, 255, 135, 1), rgba(96, 239, 255, 1))",
      "gradient-bubble1": "linear-gradient(to right, rgba(0, 255, 135, 0.5), rgba(96, 239, 255, 0.5))",
      "gradient-bubble2": "linear-gradient(to right, rgba(246, 213, 247, 0.5), rgba(251, 233, 215, 0.6))",
      "gradient-transparant": "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5)100%)",
      "kotak-kotak": "url('/background/bg-kotak-bolong.svg')",
      "gradient-kursor": "linear-gradient(to right, rgba(64, 201, 255, 0.7), rgba(232, 28, 255, 0.7))",
      "image-layanan-joki-website": "url('/background/layanan-joki-tugas-website.jpg')",
      "image-layanan-custom-website": "url('/background/layanan-website-custom.jpg')",
    },

  },
  plugins: [],
}