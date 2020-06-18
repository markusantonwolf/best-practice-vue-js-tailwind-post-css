module.exports = {
  plugins: {
    tailwindcss: {},
    'vue-cli-plugin-tailwind/purgecss': {
      content: ['./public/**/*.html', './src/**/*.vue'],
      whitelist: [],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [],
    },
    autoprefixer: {},
  },
}
