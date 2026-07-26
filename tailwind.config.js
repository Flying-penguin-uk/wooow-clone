/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        gold: {
          DEFAULT: 'hsl(var(--gold))',
          light: 'hsl(var(--gold-light))',
        },
        burgundy: {
          DEFAULT: 'hsl(var(--burgundy))',
          light: 'hsl(var(--burgundy-light))',
        },
        blush: 'hsl(var(--blush))',
        cream: {
          DEFAULT: 'hsl(var(--cream))',
          dark: 'hsl(var(--cream-dark))',
        },
        sage: 'hsl(var(--sage))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['Raleway', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        script: ['"Great Vibes"', '"Dancing Script"', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      boxShadow: {
        soft: '0 4px 24px -6px hsl(350 40% 35% / 0.10)',
        card: '0 10px 40px -12px hsl(350 40% 35% / 0.18)',
        lift: '0 22px 60px -18px hsl(350 40% 35% / 0.28)',
        gold: '0 10px 34px -10px hsl(42 70% 55% / 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 hsl(350 40% 35% / 0.35)' },
          '70%': { boxShadow: '0 0 0 14px hsl(350 40% 35% / 0)' },
          '100%': { boxShadow: '0 0 0 0 hsl(350 40% 35% / 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
}
