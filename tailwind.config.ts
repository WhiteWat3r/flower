import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desktop: '700px',
    },
    extend: {
      boxShadow: {
        'btn-shadow': '6px 7px black',
        'btn2-shadow': '-6px 7px black',
        sound: '4px 4px black',
        'pause-sadow': '8px 8px black',
      },

      colors: {
        'yellow-eats': '#FFE033',
        'secondary-button' : '#E3F1FA',
        'text-button' : '#158ACC',
        'bg-color' : '#F5EEE5',
        'input-color' : '#ECD9C1'
      },
      backgroundImage: {
        onBoarding: 'url("/src/assets/images/onBoarding.png")',
        check: 'url("/src/assets/images/check.png")',

      },

      keyframes: {
        handMove: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-120px)' },
          '100%': { transform: 'translateX(0px)' },
        },

        screenMove: {
          '0%': { backgroundPosition: 'center' },
          '50%': { backgroundPosition: '60% 50%' },
          '100%': { backgroundPosition: 'center' },
        },

        'fly-heart': {
          '0%': { transform: 'translateY(0) scale(1)' },
          // '50%': { transform: 'translateY(-100px) scale(0.8)' },
          '100%': { transform: 'translateY(-150px) scale(0.6)', opacity: '0' },
        },
      },
      animation: {
        handMove: 'handMove 4s infinite',
        screenMove: 'screenMove 4s infinite',
        'fly-heart': 'fly-heart 3s infinite',
      },
    },
  },
  plugins: [],
};


export default config;
