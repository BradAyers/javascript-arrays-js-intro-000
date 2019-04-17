var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(curArray, element) {
  var newArray;
  newArray = [element, ...curArray];
  return newArray;
};

function destructivelyAddElementToBeginningOfArray(curArray, element) {
  curArray.unshift(element);
  return curArray;
};

function addElementToEndOfArray(curArray, element) {
  var newArray;
  newArray = [...curArray, element];
  return newArray;
};

function destructivelyAddElementToEndOfArray(curArray, element) {
  curArray.push(element);
  return curArray;
};

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}
