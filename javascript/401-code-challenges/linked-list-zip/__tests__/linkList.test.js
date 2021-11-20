'use strict';

const LinkedList = require('../lib/linked-list');

describe('Linked list zip', () => {
  it('1. Can handle empty list inputs', () => {
    let ll = new LinkedList();
    expect(ll.zipLists(ll)).toBe('empty lists');
  });
  
  it('2. Can successfully zip lists of length 1', () => {
    let ll_1 = new LinkedList();
    let ll_2 = new LinkedList();
    ll_1.append(1);
    ll_2.append(2);
    expect(ll_1.zipLists(ll_1, ll_2)).toBe('head -> 1 -> 2 -> NULL');
  });
  it('3. Can successfully zip lists sharing the same length', () => {
    let ll_1 = new LinkedList();
    let ll_2 = new LinkedList();
    ll_1.append(1);
    ll_2.append(3);
    ll_1.append(2);
    ll_2.append(4);
    expect(ll_1.zipLists(ll_1, ll_2)).toBe('head -> 1 -> 3 -> 2 -> 4 -> NULL');
  });
  it('4. Can successfully zip lists of different lengths - list 1', () => {
    let ll_1 = new LinkedList();
    let ll_2 = new LinkedList();
    ll_1.append(1);
    ll_2.append(4);
    ll_1.append(2);
    ll_1.append(3);
    expect(ll_1.zipLists(ll_1, ll_2)).toBe('head -> 1 -> 4 -> 2 -> 3 -> NULL');
  });
});
