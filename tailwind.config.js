/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  components: {
    zIndex: {
      header: 999
    },
  },
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      animation: {
        'fadeOut': 'fadeOut 2s',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      }
    }
  },
}

