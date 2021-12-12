
'use strict';

const HashTable = require('../hashtable');

describe('HashTable Works Super Fine', () => {
  let hashTable;
  beforeEach(() => {
    hashTable = new HashTable(1024);
    hashTable.set('one', '1');
  });

  test(' handles collision', () => {
    hashTable.set('melon', 'water');
    hashTable.set('lemon', 'not-water');
    const index = hashTable.hash('melon');
    expect(hashTable.table[index].root.value).toEqual({'melon': 'water'});
    expect(hashTable.table[index].root.next.value).toEqual({'lemon': 'not-water'});
  });


  test(' returns values of keys in case of collision', () => {
    hashTable.set('melon', 'water');
    hashTable.set('lemon', 'not-water');

    expect(hashTable.get('melon')).toEqual('water');
    expect(hashTable.get('lemon')).toEqual('not-water');
  });


  test(' returns true if keys exist in case of collision', () => {
    hashTable.set('melon', 'water');
    hashTable.set('lemon', 'not-water');
    hashTable.set('molen', 'not-a-word');

    expect(hashTable.includes('melon')).toEqual(true);
    expect(hashTable.includes('lemon')).toEqual(true);
    expect(hashTable.includes('molen')).toEqual(true);
  });
});

