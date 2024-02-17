import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
      },
      backgroundImage: {
        flowers:
          "url('https://freesvg.org/img/Floral-Seamless-Pattern-By-Karen-Arnold.png')",
        JANDY:
          "url('https://photos.smugmug.com/photos/i-LRGsM7b/0/X3/i-LRGsM7b-X3.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
