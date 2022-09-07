/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xxxsm:'300px',
      xxsm:'360px',
      xsm:'480px',
      sm: '640px',
      md: '768px',
      lg: '935px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('herobg.jpg')",
      }
    },
  },
  plugins: [],
}
