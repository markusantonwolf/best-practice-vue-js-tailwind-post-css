const { colors } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './public/**/*.html'],
  theme: {
    fontFamily: {
      sans: ['Fira Sans', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      mono: ['Fira Code', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    listStyleType: {
      circle: 'circle',
    },
    container: {
      center: true,
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    extend: {
      colors: {
        primary: colors.pink[800],
        secondary: colors.blue[800],
        copy: colors.gray[800],
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '1px 1px 0px rgba(0,0,0, 0.6), -1px -1px 0px rgba(0,0,0, 0.2)',
        },
        '.text-glow': {
          textShadow: '1px 1px 1px rgba(255, 255, 255, 0.6), -1px -1px 1px rgba(255, 255, 255, 0.2)',
        },
        '.filter-blur': {
          filter: 'blur(10px)',
        },
        '.backdrop-blur': {
          backdropFilter: 'blur(4px)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
}
