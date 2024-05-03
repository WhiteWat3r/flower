import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desktop: '700px',
    },
    extend: {
      boxShadow: {
        default: '2px 2px 0 #FC9458',
      },

      colors: {
        'custom-pink': '#E1CBE3',
        'custom-yellow': '#FFE194',
        'red-custom': '#FA4D1E',
        'red-shadow': '#FC9458',
        'custom-white': '#FFF8E9',
        'custom-blue': '#3E3A55',
        'button-bg': '#FF8956',
        'white-bg': '#FDF0D5',
        'pressed-color': '#e7d9f6',
      },
      backgroundImage: {
        message: 'url("/src/assets/images/message.png")',
      },

      keyframes: {
        //Move: {
        //   '0%': { transform: 'translateX(0px)' },
        //   '50%': { transform: 'translateX(-120px)' },
        //   '100%': { transform: 'translateX(0px)' },
        // },
      },
      animation: {
        // Move: 'Move 4s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
