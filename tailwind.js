module.exports = {
  purge: {
    content: ['src/*.js',
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.vue',
      'public/**/*.html',
    ],
    enabled: true,
  },
  theme: {
    fontFamily: {
      sans: ['Titillium Web', 'sans-serif'],
      display: ['Titillium Web', 'sans-serif'],
      body: ['Titillium Web', 'sans-serif'],
    },
    extend: {}
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: []
};
