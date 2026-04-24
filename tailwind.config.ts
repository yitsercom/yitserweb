import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Dark Theme: Siyah + Koyu Mavi + Neon Yeşil ───
        canvas:  '#080C14',   // Derin siyah zemin
        surface: '#0D1117',   // Kart yüzeyi
        muted:   '#0F1923',   // Hafif ayrışan yüzey
        navy: {
          50:  '#E8F4FF',
          100: '#C5E0FF',
          200: '#8EC4FF',
          300: '#57A8FF',
          400: '#2D8EFF',
          500: '#0D72FF',
          600: '#0057CC',
          700: '#003F99',
          800: '#002B6B',  // Koyu mavi vurgu
          900: '#001840',
          950: '#000C20',
        },
        accent: {
          light:   '#ADFFD6',
          DEFAULT: '#00FF87',  // Neon yeşil
          dark:    '#00CC6A',
          glow:    '#39FFB0',
        },
        ink: {
          primary:   '#F0F4FF',
          secondary: '#A8B4CC',
          muted:     '#6B7A99',
          subtle:    '#3D4A66',
          inverse:   '#080C14',
        },
        border: {
          DEFAULT: '#1A2540',
          strong:  '#243055',
          focus:   '#00FF87',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px 0 rgb(0 0 0/0.3), 0 1px 2px -1px rgb(0 0 0/0.2)',
        'soft':    '0 4px 16px -2px rgb(0 0 0/0.4), 0 2px 6px -2px rgb(0 0 0/0.3)',
        'soft-md': '0 8px 24px -4px rgb(0 0 0/0.5), 0 4px 10px -3px rgb(0 0 0/0.3)',
        'soft-lg': '0 16px 40px -6px rgb(0 0 0/0.6), 0 8px 16px -4px rgb(0 0 0/0.4)',
        'soft-xl': '0 24px 56px -8px rgb(0 0 0/0.7), 0 12px 24px -6px rgb(0 0 0/0.5)',
        'accent':    '0 0 0 3px rgb(0 255 135/0.20)',
        'accent-lg': '0 0 40px -4px rgb(0 255 135/0.35), 0 8px 30px -4px rgb(0 255 135/0.20)',
        'neon':      '0 0 20px rgb(0 255 135/0.5), 0 0 60px rgb(0 255 135/0.2)',
        'dark-card': '0 4px 24px -4px rgb(0 0 0/0.6)',
      },
      backgroundImage: {
        'grid-slate': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%231A2540' stroke-width='0.8' stroke-opacity='0.8'/%3E%3C/svg%3E\")",
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,40,100,0.5) 0%, transparent 70%)',
        'neon-glow': 'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(0,255,135,0.08) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid-60': '60px 60px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
