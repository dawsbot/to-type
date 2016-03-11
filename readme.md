# to-type

> The way typeOf should be

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

> The way typeOf should be

This is a node implementation of angus-c's [Fixing the JavaScript typeof operator](https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/).

<br>

## Install

```
npm install --save to-type
```

<br>

## Usage

```js
const toType = require('to-type');

toType([1, 2, 3]);
//=> 'array'
typeof [1, 2, 3];
//=> 'object'

toType(new ReferenceError());
//=> 'error'
typeof new ReferenceError();
//=> 'object'

toType(/a-z/);
//=> 'regexp'
typeof /a-z/;
//=> 'object'
```

<br>

## About
JavaScript's `typeOf` is broken. It has been since [1997](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf#sec-11.4.3) and likely always will be due to backwards compatability. It seems like nearly every call returns `object`. Don't believe me?

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

typeof Math;
//=> 'object'

typeof new Number(4);
//=> 'object'

typeof new String('abc');
//=> 'object'
```

<br>

Did I hear you say that was not enough proof?

<br>
```js
typeof new Boolean(true);
//=> 'object'
```

<br>

Wait, you're still not convinced?

<br>

```js
typeof JSON;
//=> 'object'
```

<br>

`to-type` fixes this by providing the types you expect to see.

<br>

## API

### toType(target)

##### target

Type: `string`

##### returns

Type: `string`

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
```

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
