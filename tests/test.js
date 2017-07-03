const checkerObj = require('../index');


// Test 1 - Positive Scenarios
if(checkerObj.isArray(['A','B',3]) === true) {
  console.log('Test 1 Passed - Array');
} else {
  console.log('---> Test 1A Failed - Array');
}

if(checkerObj.isObject({'use':'test'}) === true) {
  console.log('Test 1 Passed - Object');
} else {
  console.log('---> Test 1B Failed - Object');
}

if(checkerObj.isNumber(23) === true) {
  console.log('Test 1 Passed - Number');
} else {
  console.log('---> Test 1C Failed - Number');
}

if(checkerObj.isError(new Error('test')) === true) {
  console.log('Test 1 Passed - Error');
} else {
  console.log('---> Test 1D Failed - Error');
}

if(checkerObj.isString('test') === true) {
  console.log('Test 1 Passed - String');
} else {
  console.log('---> Test 1E Failed - String');
}

if(checkerObj.isBoolean(false) === true) {
  console.log('Test 1 Passed - Boolean');
} else {
  console.log('---> Test 1F Failed - Boolean');
}

if(checkerObj.isNull(null) === true) {
  console.log('Test 1 Passed - Null');
} else {
  console.log('---> Test 1G Failed - Null');
}

if(checkerObj.isUndefined({}.test) === true) {
  console.log('Test 1 Passed - Undefined');
} else {
  console.log('---> Test 1H Failed - Undefined');
}

if(checkerObj.isEmptyObject({}) === true) {
  console.log('Test 1 Passed - EmptyObject');
} else {
  console.log('---> Test 1I Failed - EmptyObject');
}

if(checkerObj.isEmptyArray([]) === true) {
  console.log('Test 1 Passed - EmptyArray');
} else {
  console.log('---> Test 1J Failed - EmptyArray');
}

if(checkerObj.isArrayOfEmptyArrays([[],[[]],[[[[]]]]]) === true) {
  console.log('Test 1 Passed - ArrayOfEmptyArrays');
} else {
  console.log('---> Test 1K Failed - ArrayOfEmptyArrays');
}


// Test 2 - Negative Scenarios
if(checkerObj.isArray({}) === false) {
  console.log('Test 2 Passed - Array');
} else {
  console.log('---> Test 2A Failed - Array');
}

if(checkerObj.isObject('abc') === false) {
  console.log('Test 2 Passed - Object');
} else {
  console.log('---> Test 2B Failed - Object');
}

if(checkerObj.isNumber(NaN) === false) {
  console.log('Test 2 Passed - Number');
} else {
  console.log('---> Test 2C Failed - Number');
}

if(checkerObj.isError({}) === false) {
  console.log('Test 2 Passed - Error');
} else {
  console.log('---> Test 2D Failed - Error');
}

if(checkerObj.isString(22) === false) {
  console.log('Test 2 Passed - String');
} else {
  console.log('---> Test 2E Failed - String');
}

if(checkerObj.isBoolean('false') === false) {
  console.log('Test 2 Passed - Boolean');
} else {
  console.log('---> Test 2F Failed - Boolean');
}

if(checkerObj.isNull({}) === false) {
  console.log('Test 2 Passed - Null');
} else {
  console.log('---> Test 2G Failed - Null');
}

if(checkerObj.isUndefined({}) === false) {
  console.log('Test 2 Passed - Undefined');
} else {
  console.log('---> Test 2H Failed - Undefined');
}

if(checkerObj.isEmptyObject({'test': true}) === false) {
  console.log('Test 2 Passed - EmptyObject');
} else {
  console.log('---> Test 2I Failed - EmptyObject');
}

if(checkerObj.isEmptyArray(['A','B']) === false) {
  console.log('Test 2 Passed - EmptyArray');
} else {
  console.log('---> Test 2J Failed - EmptyArray');
}

if(checkerObj.isArrayOfEmptyArrays([[],['A',[]],[[[[]]]]]) === false) {
  console.log('Test 2 Passed - ArrayOfEmptyArrays');
} else {
  console.log('---> Test 2K Failed - ArrayOfEmptyArrays');
}


// Test 3 - getType

if(checkerObj.getType(1) === 'number') {
  console.log('Test 3A Passed');
} else {
  console.log('---> Test 3A Failed');
}

if(checkerObj.getType(NaN) === 'NaN') {
  console.log('Test 3B Passed');
} else {
  console.log('---> Test 3B Failed');
}

if(checkerObj.getType('1') === 'string') {
  console.log('Test 3C Passed');
} else {
  console.log('---> Test 3C Failed');
}

if(checkerObj.getType(new Error("test")) === 'error') {
  console.log('Test 3D Passed');
} else {
  console.log('---> Test 3D Failed');
}

if(checkerObj.getType(null) === 'null') {
  console.log('Test 3E Passed');
} else {
  console.log('---> Test 3E Failed');
}

if(checkerObj.getType(undefined) === 'undefined') {
  console.log('Test 3F Passed');
} else {
  console.log('---> Test 3F Failed');
}

if(checkerObj.getType(true) === 'boolean') {
  console.log('Test 3G Passed');
} else {
  console.log('---> Test 3G Failed');
}

if(checkerObj.getType({}) === 'object') {
  console.log('Test 3H Passed');
} else {
  console.log('---> Test 3H Failed');
}

if(checkerObj.getType([]) === 'array') {
  console.log('Test 3I Passed');
} else {
  console.log('---> Test 3I Failed');
}