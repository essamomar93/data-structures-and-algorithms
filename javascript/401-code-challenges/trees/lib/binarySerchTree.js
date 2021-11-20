'use strict';

const Node = require('./node');

class BinarySearchTree {

  constructor() {
    this.root = null;
  }
  add(value) {
    this.count++;
    let newNode = new Node(value);
    const searchTree = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        }
        else {
          searchTree(node.left);
        }
      }
      else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        }
        else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }
  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

}

module.exports = BinarySearchTree;
