import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'JA-sage': {
          50: '#8A9A8C',
          100: '#73836A',
        },
        'JA-gray': '#7E8585',
        'JA-yellow': '#DEBA86',
        'JA-creme': {
          50: '#EFEAE4',
          100: '#F8EEDE',
        },
      },
      textColor: {
        'JA-text': '#445050 ',
      },
    },
  },
  plugins: [],
} satisfies Config;
