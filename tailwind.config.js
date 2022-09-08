/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xxxsm:'300px',
      xxsm:'360px',
      xsm:'420px',
      lxm:'535px',
      sm: '605px',
      md: '836px',
      lg: '1024px',
      xl: '1120px',
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
