# to-type

> The way typeof should be

<br>

[![npm version](https://img.shields.io/npm/v/to-type.svg)](https://www.npmjs.com/package/to-type)
[![npm download count](http://img.shields.io/npm/dm/to-type.svg?style=flat)](http://npmjs.org/to-type)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

  <table>
    <thead>
      <tr>
        <th>Linux & OSX</th>
        <th>Windows</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align='center'>
          <a href='https://travis-ci.org/dawsonbotsford/to-type'><img src='https://api.travis-ci.org/dawsonbotsford/to-type.svg?branch=master'></a>
        </td>
        <td align='center'>
          <a href='https://ci.appveyor.com/project/dawsonbotsford/to-type'><img src='https://ci.appveyor.com/api/projects/status/xnen769jka939d6t/branch/master?svg=true'></a>
        </td>
      </tr>
    </tbody>
  </table>

<br>

This is a JavaScript implementation of [angus-c](https://github.com/angus-c)'s [Fixing the JavaScript typeof operator](https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/).

<br>

## Install

#### Node

```
npm install --save to-type
```
<br>

#### Web

```html
<script src="https://rawgit.com/dawsonbotsford/to-type/master/bundle.js"></script>
```

<br>

Alternatively, you can install the npm module and reference the bundle within `node_modules`

```html
<script src="<path to node_modules>/to-type/bundle.js"></script>
```

<br>

## Usage

```js
// Remove this require line if you're using the web bundle (it's already bundled as "to-type")
const to-type = require('to-type');

toType([1, 2, 3]);
//=> 'array'

toType(/a-z/);
//=> 'regexp'

toType(new Number(4));
//=> 'number'

toType(new String('abc'));
//=> 'string'
```

<br>

## About
JavaScript's `typeof` function sucks. It has returned vague values since [1997](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-11.4.3) and always will be due to backwards compatibility. It seems like nearly every call returns `object`. Don't believe me?

<br>

```js
typeof {a: 4};
//=> 'object'

typeof [1, 2, 3];
//=> 'object'

typeof new ReferenceError;
//=> 'object'

typeof new Date;
//=> 'object'

typeof /a-z/;
//=> 'object'

typeof JSON;
//=> 'object'

typeof new Number(4);
//=> 'object'

typeof new String('abc');
//=> 'object'
```

<br>

Did I hear you say that was not enough proof?

```js
typeof new Boolean(true);
//=> 'object'
```

<br>

Wait, you're still not convinced?

```js
typeof Math;
//=> 'object'
```

<br>

`to-type` fixes these vague outputs by returning the types you expect to see.

<br>

## API

### toType(target)

<br>

#### target

Type: `all types`

<br>

#### returns

**Type**: `string`

**Description**: The return value is always **lowercased**.

<br>

## More Examples
```js
toType({a: 4});
//=> 'object'

toType(new Date());
//=> 'date'

toType(Math);
//=>'math'

toType(JSON);
//=> 'json'

toType(new Number(4));
//=> 'number'

toType(new String('abc'));
//=> 'string'

toType(new Boolean(true));
//=> 'boolean'

toType(new ReferenceError());
//=> 'error'


//es2015 and newer
toType(Promise);
//=> 'function'

toType(Symbol());
//=> 'symbol'
```

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
