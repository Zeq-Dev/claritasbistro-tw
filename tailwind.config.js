/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ['Montserrat'],
        "poetsen": ['Poetsen One']
      },
      colors: {
        'primary': '#88CDEA',
        'secondary': '#F1C401',
        'third': '#C20300',
        'dark': '#1E1E1E',
      },
      keyframes: {
        'open-menu': {
          '0%': { left: '100%' },
          '100%': { left: '0%' }
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'close-menu': 'open-menu 0.5s ease-in-out reverse'
      }
    },
  },
  plugins: [],
}

