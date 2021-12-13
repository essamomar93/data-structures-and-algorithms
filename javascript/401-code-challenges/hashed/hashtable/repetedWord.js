'use strict';

const HashTable = require('./hashtable');

function repeatedWord(string) {
  const hashTable = new HashTable(1024);
  string = string.replace(/[^a-zA-Z0-9 ]/g, '');
  const stringArray = string.toLowerCase().split(' ');
  for (let i = 0; i < stringArray.length; i++) {
    if (hashTable.contains(stringArray[i])) {
      return (stringArray[i]);
    }
    hashTable.add(stringArray[i]);
  }
  return null;
}

const test = repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn know what I was doing in New York...');
console.log(test);

module.exports = repeatedWord;
