'use strict';

const LinkedList = require('../lib/linked-list');


describe('linked-list-insertions test', () => {

  it("Can successfully add a node to the end of the linked list", () => {
    const ll = new LinkedList();
    ll.append("1");
    ll.append("2");
    ll.append("3");
    ll.append("4");
    expect(ll.head.value).toEqual("1");
    expect(ll.head.next.next.next.value).toEqual("4");
  });

  it("Can successfully add multiple nodes to the end of a linked list", () => {
    const ll = new LinkedList();
    ll.append("1");
    ll.append("2");
    ll.append("3");
    expect(ll.head.value).toBeDefined();
    expect(ll.head.next.value).toBeDefined();
    expect(ll.head.next.next.value).toBeDefined();
  });

  it("Can successfully insert a node before a node located in the middle of a linked list", () => {
    const ll = new LinkedList();
    ll.append("1");
    ll.append("2");
    ll.append("3");
    ll.insertBefore("2", "4");
    expect(ll.head.value).toEqual("1");
    expect(ll.head.next.value).toEqual("4");
    expect(ll.head.next.next.value).toEqual("2");
    expect(ll.head.next.next.next.value).toEqual("3");
  });

  it("Can successfully insert a node before the first node of a linked list", () => {
    const ll = new LinkedList();
    ll.append("1");
    ll.append("2");
    ll.insertBefore("1", "4");
    expect(ll.head.value).toEqual("4");
    expect(ll.head.next.value).toEqual("1");
    expect(ll.head.next.next.next).toEqual(null);
  });

  it("Can successfully insert after a node in the middle of the linked list", () => {
    const ll = new LinkedList();
    ll.append("1");
    ll.append("2");
    ll.append("3");
    ll.insertAfter("2", "4");
    expect(ll.head.next.value).toEqual("2");
    expect(ll.head.next.next.value).toEqual("4");
    expect(ll.head.next.next.next.value).toEqual("3");
  });

  it("Can successfully insert a node after the last node of the linked list", () => {
    const ll = new LinkedList();
    ll.append("1");
    ll.append("2");
    ll.insertAfter("2", "4");
    expect(ll.head.next.value).toEqual("2");
    expect(ll.head.next.next.value).toEqual("4");
    expect(ll.head.next.next.next).toEqual(null);
  });
});
