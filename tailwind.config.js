module.exports = {
  purge: [],
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3
    },
    extend: {
      fontSize: {
        'xxs': '0.5rem',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-line-clamp')
  ],
}
