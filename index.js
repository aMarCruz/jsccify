var through = require('through2')
var path = require('path')
var jscc = require('jscc')

var JSCCPROPS = ['sourceMap', 'keepLines', 'prefixes', 'values', 'extensions']

/* eslint no-invalid-this:0 */

module.exports = function (file, opts) {

  opts = cloneProps(opts, JSCCPROPS)

  if (!ourFile(file, opts.extensions)) {
    return through()
  }

  opts.sourceMap = false
  opts.keepLines = true

  var data = ''

  return through(

    function trans (buf, enc, cb) {
      data += buf.toString()
      cb()
    },

    function flush (cb) {
      var output

      try {
        output = jscc(data, file, opts).code
        this.push(output)
        cb()
      } catch (err) {
        cb(err)
        return
      }
    }
  )

  // helpers

  function cloneProps (src, list) {
    var dest = {}
    for (var i = 0; i < list.length; i++) {
      var p = list[i]
      if (p in src) dest[p] = src[p]
    }
    return dest
  }

  function ourFile (name, exts) {
    if (!exts || name == null) {
      return true
    }
    if (typeof exts == 'string') {
      exts = [exts]
    }
    return exts.indexOf(path.extname(name)) > -1
  }
}
