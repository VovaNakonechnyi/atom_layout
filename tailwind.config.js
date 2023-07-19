/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    screens: {
      sm: '600px',
      md: '1024px',
      lg: '1440px',
    },
    extend: {
      minHeight: {
        'social-media-blocks': '11rem',
      },
      backgroundImage: {
        'def-img': "url('/src/assets/images/bg.svg')",
        'bg-second': "url('/src/assets/images/bg-second.svg')",
        'phone-img': "url('/src/assets/images/phone.png')",
      },
      backgroundColor: {
        'dark-grey': '#D9D9D9',
        'light-grey': '#F5F5F5',
        'lighten-grey': '#BABABA',
        'light-grey-second': 'rgba(255, 255, 255, 10%)',
        'light-blue': '#229ED9',
        orange: '#f8871f',
      },
      colors: {
        'light-grey-third': 'rgba(255, 255, 255, 30%)',
        'lighten-grey': '#BABABA',
        'progress-bar-custom': 'rgba(248, 135, 31, 25%)',
      },
      fontFamily: {
        'girloy-reg': 'Gilroy Regular',
        'girloy-med': 'Gilroy Medium',
        'girloy-bold': 'Gilroy Bold',
      },
      borderRadius: {
        xl: '1.2rem',
      },
    },
  },
  plugins: [],
};
