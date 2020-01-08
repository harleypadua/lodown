'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to return the value that is entered into the function
 * 
 * @param {Any Value} value: Any value
 * @return {Any Value}: The input value unchanged
 * 
 */
 
 function identity(value) {
     return value;
 }
 module.exports.identity = identity;
 
 
 /**
  * typeOf: Designed to return the type of value as a string, 
  * accounting for if value is an array, object, null, or Date.
  * 
  * @param {Any Value} value: Any Value
  * @return {String}: The string of the type of value
  */
  
 function typeOf(value) {
        if (value === null){
        return "null";
    } else if (Array.isArray(value)){
        return "array";
    } else if (value instanceof Date){
        return "date";
    } else if (typeof value === 'object'){ 
       return "object";
   } else { return typeof value }
}
module.exports.typeOf = typeOf;


/**
 * first: Designed to return an array at the zeroeth element of the array, 
 * or an element starting at the beginging until the given number. If the 
 * collection passed into the function is not an array, the function returns an
 * empty array. If no number is given or it is NaN, the first element of the 
 * array is returned.
 * 
 * @param {Array} array: Any Array
 * @param {Number} number: Any Number
 * @return {Array}: An array with the element of the array at the zeroeth index,
 * or elements of the array starting at the beginning to the number given
 */
 
 function first(array, number) {
    if (!Array.isArray(array)) {
        return [];
    } 
    if (number < 0) {
        return [];
    }
    if (number > array.length) {
    return array;
    }
    if (number > 0) {
       return array.splice(0, number);
    }
    return array[0];
}
module.exports.first = first;


/**
 * last: Designed to return an array at the last element of the array, 
 * or an element starting at the given number until the end of the array. If the
 * collection passed into the function is not an array, the function returns an
 * empty array. If no number is given or is NaN, the last element of the array
 * is returned.
 * 
 * @param {Array} array: Any Array
 * @param {Number} number: Any Number
 * @return {Array}: An array with the last element of the array, 
 * or elements of the array starting at the number given to the end of the array
 */
 
function last(array, number) {
    if (!Array.isArray(array)) {
        return [];
    } 
    if (number < 0){
        return [];
    }
    if (number > array.length) {
        return array;
    }
    if (number > 0) {
        return array.splice(array.length - number, number);
    }
    return array[array.length -1];
}
module.exports.last = last;


/**
 * indexOf: Designed to check if the array has a value and 
 * returns the index of the given value that can be found in the array.
 * 
 * @param {Array} array: Any Array
 * @param {Any Value} value: Any Value
 * @return {Number}: Index of Value if it is in the array, or if the value is 
 * not in the array, returns -1
 */
 
 function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
        
    }
    return -1;
}
module.exports.indexOf = indexOf;


/**
 * contains: Designed to take a value from a list one by one and 
 * search for the given value in the list. After the required value is found in 
 * the list, it ends and the answer is true, otherwise answer is false.
 * 
 * @param {Array} array: Any Array
 * @param {Any Value} value: Any Value
 * @return {Boolean}: If value is found in array, return true. 
 * Otherwise returns false
 */
 
 function contains(array, value) {
    return indexOf(array, value) === -1 ? false : true;
}
module.exports.contains = contains;


/**
 * unique: Designed to take an array and remove any duplicates, 
 * returning a new array.
 * 
 * @param {Array} array: Any Array
 * @return {Array}: New Array with duplicates removed
 */
 
 function unique(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (indexOf(newArray, array[i]) === -1){
             newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports.unique = unique;


/**
 * filter: Designed to create a new array with all elements that pass the test 
 * implemented by the provided function.
 * 
 * @param {Array} array: Any Array
 * @param{Function} func: A Function to test array
 * @return {Array}: New Array with elements that returned true when the 
 * function was called on them
 */
 
 function filter(array, func){
    let trueArr = [];
    each(array, function(element, index, array){
        if(func(element, index, array) === true){
            trueArr.push(element);
        }
    });
    return trueArr;
}
module.exports.filter = filter;


/**
 * reject: Designed to create a new array with all elements that fail the test 
 * implemented by the provided function.
 * 
 * @param {Array} array: Any Array
 * @param {Function} func: A Function to test array
 * @return {Array}: New Array with elements that returned false when the 
 * function was called on them
 */
 
 function reject(array, func){
    var filterResult = array.filter(function(element, index, array){
        if(func(element, index, array) === false){
            return element;
        }
    });
    return filterResult;
}
module.exports.reject = reject;


/**
 * partition: Designed to return an array of two arrays containing truthy 
 * elements and falsy elements when a function is called on elements of a given 
 * array
 * 
 * @param {Array} array: Any Array
 * @param {Function} func: A Function to call on array
 * @return {Array}: An Array with an Array of truthy elements and another 
 * Array with falsy elements
 */
 
 function partition(array, func){
    let truthy = [];
    let falsy = [];
    let arrays = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array) === false){
            falsy.push(array[i]);
        }
        
    }
    for (let i = 0; i < array.length; i++){
        if(func(array[i], i, array) === true){
            truthy.push(array[i]);
        }
    }
    arrays.push(truthy);
    arrays.push(falsy);
    return arrays;
    
}
module.exports.partition = partition;


/**
 * map: Designed to return a new array of elements when a function is called on 
 * each of either an array or object.
 * 
 * @param {Array or Object} collection: Any Array or Object
 * @param {Function} func: A Function called on array or object
 * @return {Array}: An Array containing changed elements as a result of function 
 * callback
 */
 
function map(collection, func){
    let newArray = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
           newArray.push(func(collection[i], i, collection));
        }
    } else {
        for(var key in collection) {
            newArray.push(func(collection[key], key, collection));
        }
    }
    return newArray;
}
module.exports.map = map;


/**
 * pluck: Designed to extract a list of a given property. 
 * 
 * @param {Array} array: Any Array
 * @param {String} property: A property in an Object
 * @return {Array}: An Array containing the properties for every element in the 
 * given Array
 */
 
 function pluck(array, property){
    return array.map(function(element, index, array){
        return element[property];
    });
}
module.exports.pluck = pluck;


/**
 * every: Designed to test if all elements of an array pass a test implemented 
 * by the given function and returns a Boolean value. If a function is not 
 * provided, return true if every element is truthy, else return false.
 * 
 * @param {Array} collection: Any Array
 * @param {Function} func: A Function to test the array
 * @retrun {Boolean}: If collection fails tests, returns false, 
 * else returns true
 */
 
 function every(collection, func) {
    if (!func) {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i] === false) {
                return false;
            }
        }
        return true;
    }
    if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++) {
        if (func(collection[i], i, collection) === false) {
            return false;
        } 
    } 
    return true; 
    }
    for (let key in collection) {
        if (func(collection[key], key, collection) === false) {
            return false;
        } 
    }
    return true;
}
module.exports.every = every;


/**
 * some: Designed to test if at least one element passes a test implemented by 
 * the given function and returns a Boolean value. If a function is not 
 * provided return true if at least one element is truthy, else return false
 * 
 * @param {Array} collection: Any Array
 * @param {Function} func: A Function to check Array
 * @return {Boolean} If collection passes tests, return true, else return false.
 */
 
 function some(collection, func) {
    if (!func) {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i] === true) {
                return true;
            }
        }
        return false;
}
    if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++) {
        if (func(collection[i], i, collection) === true) {
            return true;
        } 
    } 
    return false; 
    }
    for (let key in collection) {
        if (func(collection[key], key, collection) === true) {
            return true;
        } 
    }
    return false;
}
module.exports.some = some;


/**
 * reduce: Designed to reduce an array to a single value.
 * 
 * @param {Array} array: Any Array
 * @param {Function} func: Reducer Function to act on array
 * @param {Value} seed: Accumulator 
 * @return {Value} seed: Accumulated value of the callback function's return 
 * values
 */
 
 function reduce(array, func, seed){
    if (seed !== undefined) {
        for (let i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i, array);
        }
    } else { 
    seed = array[0];
    for (let i = 1; i < array.length; i++) {
        seed = func(seed, array[i], i, array); 
    }
    }
   return seed;
}
module.exports.reduce = reduce;


/**
 * extend: Designed to copy every property of the source objects into the first
 * object, returning the updated first object.
 * 
 * @param {Object} obj1: Any Object
 * @param {Object}: Any Objects that may be added on
 * @return {Object}: Updated object with properties from every other object 
 * passed into the function
 */
 
 function extend(obj1, ...objArgs) {
let updatedObj1 = Object.assign(obj1, ...objArgs);
   return updatedObj1;
}
module.exports.extend = extend;