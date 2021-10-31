'use strict';

function reverseArray(arr) {
    let revArr = [];
    for (let i = arr.length - 1; i >= 0; i--)
        revArr[arr.length - 1 - i] = arr[i];
    return revArr;
};

let newArr=[1,2,3,4];
reverseArray(newArr);