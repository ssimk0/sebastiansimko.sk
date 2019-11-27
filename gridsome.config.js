// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    // etc.
  ],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['css', 'vue', 'js']
    }
  ],
  whitelist: ['svg-inline--fa'],
  whitelistPatterns: [/shiki/, /fa-$/]
});


module.exports = {
  siteName: 'Sebastián Simko',
  titleTemplate: 'Sebastián - %s',
  siteDescription: 'Sebastián Simko bio website',
  siteUrl: 'https://sebastiansimko.sk',
  icon: {
    favicon: './static/favicon.png',
    touchicon: './static/favicon.png'
  },
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-105344188-3'
      }
    },
    // {
    //   use: '@gridsome/vue-remark',
    //   options: {
    //     index: ['README'],
    //     baseDir: './docs',
    //     pathPrefix: '/docs',
    //     typeName: 'DocPage',
    //     template: './src/templates/DocPage.vue',
    //     plugins: [
    //       '@gridsome/remark-prismjs'
    //     ],
    //     remark: {
    //       autolinkHeadings: {
    //         content: {
    //           type: 'text',
    //           value: '#'
    //         }
    //       }
    //     }
    //   }
    // },
  ],
  css: {
    loaderOptions: {
      postcss: {
        "plugins": [
          require('tailwindcss')('tailwind.js'),
          require('autoprefixer')(),
          ...process.env.NODE_ENV === 'production'
              ? [purgecss]
              : []
        ]
      }
    }
  }
};
