/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {
        keyframes: {
          slideUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        animation: {
          slideUp: 'slideUp 1s ease-out forwards',
        },
      },
    },
    plugins: [],
  };
  