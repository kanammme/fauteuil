/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette de couleurs définie dans la section 3 du README
        'noir-profond': '#0B0B0D',
        'bleu-nuit': '#0F1B2B',
        'dore': '#C6A052',
        'dore-clair': '#D4AF6A',
        'blanc-casse': '#F5F1EA',
        'gris-chaud': '#8A8580',
      },
      fontFamily: {
        // Les polices seront configurées dans app/layout.tsx via next/font/google
        'cinzel': ['var(--font-cinzel)', 'serif'],
        'cormorant': ['var(--font-cormorant)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}