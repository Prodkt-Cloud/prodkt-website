const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  
  theme: {
    // fontFamily: {
    //   sans: ['Sora', sans-serif],
    // },
    extend: {
      fontFamily: {
        'sans': ['Sora', ...defaultTheme.fontFamily.sans],
      },},
  },
  plugins: [],
}
