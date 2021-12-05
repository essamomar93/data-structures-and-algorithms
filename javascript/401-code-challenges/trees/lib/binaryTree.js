'use strict';

// const node = require('./node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let arrayOfReadNodes = [];
    const _walk = (node) => {
      arrayOfReadNodes.push(node.value);
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
    };

    _walk(this.root);
    return arrayOfReadNodes;
  }
  inOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {
      if (node.left) { _walk(node.left); }
      arrayOfReadNodes.push(node.value);
      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);
    return arrayOfReadNodes;
  }
  postOrder() {
    let arrayOfReadNodes = [];
    const _walk = (node) => {
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
      arrayOfReadNodes.push(node.value);
    };

    _walk(this.root);
    return arrayOfReadNodes;
  }
  maximumValue() {
    let max = this.root.value;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      max = node.value > max ? node.value : max;
    };
    traverse(this.root);

    return max;
  }
  treeBreadthFirst() {
    let result = [];
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }

}
module.exports = BinaryTree;

