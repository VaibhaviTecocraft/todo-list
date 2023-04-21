/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xs-max': { 'max': '575px' },
      '2xls': '414px',
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1025px',
      xl: '1281px',
      xxl: '1367px',
      '3xl': '1441px',
    },
    extend: {
      colors: {
        grayLight: '#8B8B8B',
        primary: '#57A2D1',
        listColor: '#3F3F3F',
      },
      fontFamily: {
        RobotoBold: ['Roboto-Bold'],
        RobotoMedium: ['Roboto-Medium'],
        RobotoRegular: ['Roboto-Regular'],
      },
      fontSize: {
        xSmall: '14px',
        small: '16px',
        regular: '18px',
        heading3: '20px',
        heading2: '24px',
        heading1: '28px',
        blogHeading3: '32px',
        blogHeading2: '36px',
        blogHeading1: '56px',
      },
      borderRadius: {
        '8': '8px',
        '15': '15px',
      }
    },
    boxShadow: {
      dropdown: '0px 10px 100px rgba(0, 0, 0, 0.7);'
    }
  },
  plugins: [],
}

