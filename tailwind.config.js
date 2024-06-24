/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        colors: {
          softBlue: 'hsl(231, 69%, 60%)',
          softRed: 'hsl(0, 94%, 66%)'
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        }
        
      },
    },
    plugins: [],
  }
  