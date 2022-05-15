module.exports = {
  content: ['./pages/**/*.{tsx}', './src/**/*.{tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
