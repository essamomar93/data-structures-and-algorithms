'use strict';
const Node = require('../lib/node');
const binaryTree = require('../lib/binaryTree');
const binarySerchTree = require('../lib/binarySerchTree');

describe('Trees test', () => {
  const bTree = new binaryTree();
  const bSTree = new binarySerchTree();

  it('Can successfully instantiate an empty tree', ()=>{
    expect(bTree.root).toBe(null);
    expect(bSTree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let node = new Node(1);
    bTree.root = node;
    expect(bTree.root.value).toEqual(1);
    expect(bTree.root.left).toBeNull();
    expect(bTree.root.right).toBeNull();
  });

  it('Can successfully add a left child and right child to a single root node', ()=>{
    bTree.root.left= new Node(4);
    bTree.root.right = new Node(5);
    expect(bTree.root.left.value).toEqual(4);
    expect(bTree.root.right.value).toEqual(5);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    bTree.root.left= new Node(6);
    bTree.root.right = new Node(7);
    bTree.root.left= new Node(10);
    bTree.root.right = new Node(12);
    expect(bTree.preOrder()).toEqual([1, 4, 6, 7, 5,10,12]);

  });

  it('Can successfully return a collection from an inorder traversal', () => {
    expect(bTree.inOrder()).toEqual([6, 4, 7, 1, 10, 5, 12]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    expect(bTree.postOrder()).toEqual([6, 7, 4, 10, 12, 5, 1]);
  });

});
