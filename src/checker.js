class Checker {

  isArray(argument) {
    return Object.prototype.toString.call(argument) === '[object Array]';
  }

  isObject(argument) {
    return Object.prototype.toString.call(argument) === '[object Object]';
  }

  isNumber(argument) {
    return Object.prototype.toString.call(argument) === '[object Number]' 
      && !isNaN(argument);
  }

  isError(argument) {
    return Object.prototype.toString.call(argument) === '[object Error]';
  }

  isString(argument) {
    return Object.prototype.toString.call(argument) === '[object String]';
  }

  isBoolean(argument) {
    return Object.prototype.toString.call(argument) === '[object Boolean]';
  }

  isNull(argument) {
    return Object.prototype.toString.call(argument) === '[object Null]';
  }

  isUndefined(argument) {
    return Object.prototype.toString.call(argument) === '[object Undefined]';
  }

  isEmptyObject(argument) {
    if(!this.isObject(argument)) {
      throw new Error('Argument is not an object');
    } else {
      return Object.getOwnPropertyNames(argument).length === 0;
    }
  }

  isEmptyArray(argument) {
    if(!this.isArray(argument)) {
      throw new Error('Argument is not an array');
    } else {
      return argument.length === 0;
    }
  }

  isArrayOfEmptyArrays(argument) {
    if(!this.isArray(argument)) {
      throw new Error('Argument is not an array');
    } else {
      let isEmpty = a => Array.isArray(a) && a.every(isEmpty);
      return isEmpty(argument);
    }
  }

  getType(argument) {
    if(Number.isNaN(argument)) {
      return 'NaN';
    }
    return Object.prototype.toString.call(argument).split(' ')[1].slice(0,-1).toLowerCase();
  }
}

module.exports = Checker;