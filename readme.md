# node-unique-id-generator
A npm module to generate Unique ID and GUID for node.

Table of Contents
=================

  * [Installation](#installation)
  * [Available Methods](#availablemethods)
    * [isArray](#isArray)
    * [isObject](#isObject)
    * [isNumber](#isNumber)
    * [isError](#isError)
    * [isString](#isString)
    * [isBoolean](#isBoolean)
    * [isNull](#isNull)
    * [isUndefined](#isUndefined)
    * [isEmptyObject](#isEmptyObject)
    * [isEmptyArray](#isEmptyArray)
    * [isArrayOfEmptyArrays](#isArrayOfEmptyArrays)
    * [getType](#getType)

<a name='installation'></a>
## Installation
```
npm install javascript-type-checker --save
```
<a name='availablemethods'></a>
## Available Methods

<a name='isArray'></a>
### isArray(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.isArray(['A','B',3])); // true
console.log(javascriptTypeChecker.isArray('A')); // false
```

<a name='isObject'></a>
### isObject(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.isObject({'key':'value'})); // true
console.log(javascriptTypeChecker.isObject(['A','B',3])); // false
```

<a name='isNumber'></a>
### isNumber(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.isNumber(123)); // true
console.log(javascriptTypeChecker.isNumber('123')); // false
console.log(javascriptTypeChecker.isNumber(NaN)); // false
```

<a name='isError'></a>
### isError(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.isError(new Error('Test Error'))); // true
console.log(javascriptTypeChecker.isError('Test Error')); // false
```

<a name='isString'></a>
### isString(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.isString('123')); // true
console.log(javascriptTypeChecker.isString(123)); // false
```

<a name='isBoolean'></a>
### isBoolean(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.isBoolean(false)); // true
console.log(javascriptTypeChecker.isBoolean('false')); // false
```

<a name='isNull'></a>
### isNull(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.isNull(null)); // true
console.log(javascriptTypeChecker.isNull('ABC')); // false
```

<a name='isUndefined'></a>
### isUndefined(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.isUndefined({}.testKey)); // true
console.log(javascriptTypeChecker.isUndefined({})); // false
```

<a name='isEmptyObject'></a>
### isEmptyObject(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.isEmptyObject({})); // true
console.log(javascriptTypeChecker.isEmptyObject({'key':'value'})); // false
```

<a name='isEmptyArray'></a>
### isEmptyArray(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.isEmptyArray([])); // true
console.log(javascriptTypeChecker.isEmptyArray(['A'])); // false
```

<a name='isArrayOfEmptyArrays'></a>
### isArrayOfEmptyArrays(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.isArrayOfEmptyArrays([[[[]], [[]]], [])); // true
console.log(javascriptTypeChecker.isArrayOfEmptyArrays([[[[[]]]], 'A'])); // false
```

<a name='getType'></a>
### getType(argument)
```javascript
const javascriptTypeChecker = require('javascript-type-checker');
console.log(javascriptTypeChecker.getType('123')); // string
console.log(javascriptTypeChecker.getType(123)); // number
console.log(javascriptTypeChecker.getType(true)); // boolean
console.log(javascriptTypeChecker.getType(NaN)); // NaN
console.log(javascriptTypeChecker.getType(null)); // null
console.log(javascriptTypeChecker.getType(undefined)); // undefined
console.log(javascriptTypeChecker.getType({})); // object
console.log(javascriptTypeChecker.getType([])); // array
console.log(javascriptTypeChecker.getType(new Error('test'))); // error
```