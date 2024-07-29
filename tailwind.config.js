/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Example color
        secondary: '#05aef4', // Another example color
        dark: '#101010'
        // Add more colors as needed
      },
      textColor: {
        primary: '#ffffff',
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 1)',
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 1)',
      },
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.10)',
        'md': '0 3px 6px rgba(0, 0, 0, 0.15)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.25)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.30)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.40)',
        'none': 'none',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px',
        },
        '.text-shadow-md': {
          textShadow: '0 3px 6px',
        },
        '.text-shadow-lg': {
          textShadow: '0 10px 15px',
        },
        '.text-shadow-xl': {
          textShadow: '0 20px 25px',
        },
        '.text-shadow-2xl': {
          textShadow: '0 25px 50px ',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover', 'focus'])
    }
  ],
}