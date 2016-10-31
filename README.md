[![npm][npm-image]][npm-url]
[![License][license-image]][license-url]

# jsccify

Featuring some of the C preprocessor characteristics through special, configurable comments, [jscc](https://github.com/aMarCruz/jscc) can be used in any type of files to build multiple versions of your software from the same code base.

With jscc, you have:

* Conditional inclusion/exclusion of code, based on compile-time variables*
* Compile-time variables with all the power of JavaScript expressions
* Replacement of variables inside the source (by value at compile-time)
* Source Map support

**NOTE:** This transform is WIP, sourceMap is not supported yet.

jscc is **not** a minifier tool, it only does well that it does...

jscc is derived on [jspreproc](http://amarcruz.github.io/jspreproc), the tiny source file preprocessor in JavaScript, enhanced with Source Map support but without the file importer ([browserify](http://browserify.org/) does this better).

## Install

```sh
npm i jsccify -D
```

## Usage

jscc is a preprocessor, please put it first in the chain...

```js
const jsccify = require('jsccify')

bundle.transform(jsccify, {
  extensions: ['.js', '.html']
  values: {
    _DEBUG: 1,
    _MYAPP: 'My App'
  }
})
...
```

## Example

```js
/*#if _DEBUG
const mylib = require('mylib-debug');
//#else */
const mylib = require('mylib');
//#endif

mylib.log('Starting $_MYAPP v$_VERSION...');
```

output:

```js
CONST mylib = require('mylib-debug');

mylib.log('Starting My App v1.0.0...');
```

That's it.

\* jscc has the predefined `_VERSION` varname, in addition to `_FILE`.


## Documentation

You can read in the Wiki about:

- [Options](https://github.com/aMarCruz/jscc/wiki/Options)
- [Basic Syntax](https://github.com/aMarCruz/jscc/wiki/Syntax)
- [Keywords](https://github.com/aMarCruz/jscc/wiki/Keywords)
- [Examples & Tricks](https://github.com/aMarCruz/jscc/wiki/Examples)


## TODO

This is work in progress, so please update jscc constantly, I hope the first stable version does not take too long.

---

\* _For me, write in english is 10x harder than coding JS, so contributions are welcome..._


Don't forget to give me your star!


[npm-image]:      https://img.shields.io/npm/v/jsccify.svg
[npm-url]:        https://www.npmjs.com/package/jsccify
[license-image]:  https://img.shields.io/npm/l/express.svg
[license-url]:    https://github.com/aMarCruz/jscc/blob/master/LICENSE
