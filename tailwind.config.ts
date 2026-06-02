import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cronos Exclusive design system
        black: '#000000',
        graphite: '#141414',
        champagne: '#C9A961',
        'off-white': '#F5F2EC',
        'gray-mid': '#8A8A8A',
        'gray-dark': '#3A3A3A',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.15em',
        'editorial-wide': '0.25em',
        'ui': '0.08em',
      },
      spacing: {
        section: '80px',
        'section-lg': '120px',
      },
      aspectRatio: {
        portrait: '4 / 5',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}

export default config
