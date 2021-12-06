'use strict';

const mergeSort = require('../mergeSort.js');

describe('Merge Sort Test', () => {

  it('Should Sort an array', () => {
    let arr = [8,4,23,42,16,15];

    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
