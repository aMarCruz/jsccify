const browserify = require('browserify')
const jsccify = require('../')

browserify('./test/sample.js')
  .transform(jsccify, {
    extensions: ['.js', '.html'],
    values: {
      _DEBUG: 1,
      _MYAPP: 'My App'
    }
  })
  .bundle().pipe(process.stdout)
