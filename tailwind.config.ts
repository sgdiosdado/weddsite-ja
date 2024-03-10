import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        flowers:
          "url('https://freesvg.org/img/Floral-Seamless-Pattern-By-Karen-Arnold.png')",
        JANDY:
          "url('https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-nG3TDZJ/1/z3bTRGRwVh22QPzgQ9MFsM7DVKKvrC9kb2CwBKVN/X2/240504%20-%20Jacky%20y%20Andres%20-%20060-X2.jpg')",
        WALKING:
          "url('https://photos.smugmug.com/CLIENTES-BODAS/2024/SCAR-VALDEZ/n-XvT5n2/240504-Jacky-y-Andres-CASUAL/i-VB8KwMB/0/DMBQXHMMNZ8rc8wjxJXPTjnvcVjGGTZtLFfkMvHtm/X3/240504%20-%20Jacky%20y%20Andres%20-%20188-X3.jpg')",
      },
      colors: {
        'JA-sage': {
          50: '#8A9A8C',
          100: '#73836A',
          150: '#445050',
        },
        'JA-gray': '#7E8585',
        'JA-yellow': '#DEBA86',
        'JA-creme': {
          50: '#EFEAE4',
          100: '#F8EEDE',
        },
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
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        main: ['Source Serif 4', 'serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
