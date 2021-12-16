
'use strict';

const HashTable = require('../hashtable');

describe('HashTable Works Super Fine', () => {

  it('Adding a key/value to your hashtable results in the value being in the data structure ', () => {
    let hashtable = new HashTable(1024);
    let expected = 'essam';
    hashtable.add('name', 'essam');

    expect(hashtable.contain('name')).toBe(true);
    expect(hashtable.get('name')).toEqual('essam');
  });

  it('Retrieving based on a key returns the value stored', () => {
    let hashtable = new HashTable(1024);
    let expected = 'essam';
    hashtable.add('name', 'essam');
    expect(hashtable.contain('name')).toBe(true);
    expect(hashtable.get('name')).toEqual(expected);
  });

  it('Successfully hash a key to an in-range value',()=>{
    let hashtable = new HashTable(8);
    let min=1;
    let max=10;
    let key='essam';
    expect(hashtable.hash(key)).toBeGreaterThanOrEqual(min);
    expect(hashtable.hash(key)).toBeLessThanOrEqual(max);
  });
});
