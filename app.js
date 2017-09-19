const htmlStandards = require('reshape-standard')
const Dato = require('spike-datocms')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.SPIKE_ENV

const locals = {}

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({ 
    parser: false,
    locals,
    minify: env === 'production'
  }),
  postcss: cssStandards({
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards(),
  plugins: [
    new Dato({
      addDataTo: locals,
      token: '27b8085f8fdf8fe0015df7ad5ae88d',
      models: [{ name: 'project' }]
    })
  ]
}
