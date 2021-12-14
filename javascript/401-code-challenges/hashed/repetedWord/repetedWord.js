'use strict';
const HashTable = require('./hashtable');

function repeatedWord(string) {
  let words = string.toLowerCase().split(' ');
  let hashtabele = new HashTable(words.length);
  for (let i = 0; i < words.length; i++) {
    if (!hashtabele.contain(words[i])) {
      hashtabele.add(words[i], words[i]);
    } else {
      return words[i];
    }
  }
  return null;
}
module.exports = repeatedWord;
