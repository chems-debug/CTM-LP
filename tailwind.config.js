/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
        colors:{
          Gris: 'hsl(219, 10%, 20%)',
          Naranaja: 'hsl(24, 100%, 54%)'
        }
    },
  },
  plugins: [],
}

