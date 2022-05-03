module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['"Quicksand"']
    },
    extend: {
      width: {
        '128' : '32rem',
        '136' : '36rem',
        '140' : '40rem',
        '145' : '45rem',

      }
    },
    screens: {
      'xs': {'min': '320px', 'max': '480px'},
      'sm': {'min': '481px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1440px'},
      '2xl': {'min': '1440px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
 
}
