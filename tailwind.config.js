module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#e6f0ff',
          100: '#bdd6ff',
          200: '#94bcff',
          300: '#6ba2ff',
          400: '#4288ff',
          500: '#196eff',
          600: '#0054e3',
          700: '#003db0',
          800: '#00297d',
          900: '#00144a',
        },
      },
    },
  },
  plugins: [],
}