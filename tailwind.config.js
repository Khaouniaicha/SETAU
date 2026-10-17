/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Primary Orange
          600: '#ea580c', // Deep Surveying Orange
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        surveyOrange: '#ff6600',
        charcoal: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Inter', 'sans-serif'],
        arabic: ['var(--font-cairo)', 'sans-serif'],
        serif: ['var(--font-serif-display)', 'Playfair Display', 'Bauer Bodoni', 'Didot', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'topo-pattern': "radial-gradient(circle, rgba(234, 88, 12, 0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
