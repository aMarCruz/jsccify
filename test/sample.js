//#set _DATE = new Date().toISOString().slice(0, 10)
//#set _T {TAG:1, TEXT:2, COMMENT:3}
/*
  yat-amazing-parser v$_VERSION
  File: $_FILE
  Date: $_DATE
*/
//#if !_T
// fallback to import _types.js
const $_T = require('./_types')
//#endif

// ...amazing code...

function parse (type, text) {
  switch (type) {
    case $_T.TAG: return 'Tag: ' + text
    case $_T.TEXT: return 'Text: ' + text
    case $_T.COMMENT: return 'Comment: ' + text
    default: return text
  }
}

/* eslint no-console:0 */
console.log(parse($_T.TAG, 'my tag'))
console.log(parse($_T.TEXT, 'my text'))
