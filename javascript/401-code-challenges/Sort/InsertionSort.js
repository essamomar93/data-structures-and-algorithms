'use strict';

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let array = arr[i];
    while (j >= 0 && array < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
      arr[j + 1] = array;
    }
  }
  return arr;
}

module.exports = insertionSort;
