/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  // Your code here
  var i = start;
  var arr = [];
  for(var i = 0; i <= end; i++){
    arr.push(i);
  }

  return arr;
}

function sum(array) {
  // Your code here
  var i = 0;
  var total = 0;
  for(var i = 0; i < array.length; i++){
    total = total + i;
  }
  
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var newarr = [];

  for (var i = array.length - 1; i >= 0; i--)
    newarr.push(arr[i]);

  return newarr;
}

function reverseArrayInPlace(array) {
  // Your code here
  var temp;
  var i = 0;
  var j = array.length - 1;

  while (j > i){
    temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      j--;
      i++;
  }

  return array;
}
}

// Problem 3: A List
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest:list};
  return list;
  // Your code here
}

function listToArray(list) {
  // Your code here
  var arr = [];
  for (var node = lst; node; node = node.rest){
    arr.push(node.value)
  }
  return arr;
}

function nth(list, position) {
  // Your code here
}

function prepend(element, list) {
  // Your code here
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
