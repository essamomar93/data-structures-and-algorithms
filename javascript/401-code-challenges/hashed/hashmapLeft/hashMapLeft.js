"use strict";


function hashMapLeft(hash1, hash2) {
  let hashMapLeft = [];
  let result = [];

  for (let i = 0; i < hash1.map.length; i++) {
    result = [];
    if (hash1.map[i]) {
      const lKey = Object.keys(hash1.map[i].head.value);
      const lvalue = Object.values(hash1.map[i].head.value);
      result = result.concat(lKey);
      result = result.concat(lvalue);
      if (hash2.map[i]) {
        const rKey = Object.keys(hash2.map[i].head.value);
        const rvalue = Object.values(hash2.map[i].head.value);
        if (rKey[0] === lKey[0]) {
          result = result.concat(rvalue);
        }
      } else {
        result.push("");
      }
      hashMapLeft.push(result);
    }
  }
  return hashMapLeft;
}

module.exports = hashMapLeft;
