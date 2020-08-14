const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  variants: {},
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'PT Mono',
          ...defaultTheme.fontFamily.mono,
        ]
      },
    }
  }
}
