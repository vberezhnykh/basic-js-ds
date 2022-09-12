const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this._root = null
  }
  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode;
      return this;
    }
    let current = this._root;
    while (current) {
      if (data === current.data) return undefined;
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    if (!this._root) return null;
    let current = this._root;
    while (current !== null) {
      if (current.data === data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  
  }

  find(data) {
    if (!this._root) return null;
    let current = this._root;
    while (current !== null) {
      if (current.data === data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data) {
    function deleteNode(current, dataToDelete) {
      if (current === null) {
        return current;
      } else if (dataToDelete < current.data) {
        current.left = deleteNode(current.left, dataToDelete);
        return current;
      } else if (dataToDelete > current.data) {
        current.right = deleteNode(current.right, dataToDelete);
        return current;
      } else {
        if (current.left === null && current.right === null) return null;
        else if (current.left === null) return current.right;
        else if (current.right === null) return current.left;
        else {
          let leftSubTree = current.left;
          while (leftSubTree.right !== null) {
            leftSubTree = leftSubTree.right;
          }
          current.data = leftSubTree.data;
          current.left = deleteNode(current.left, leftSubTree.data);
          return current;
        }
      }
    }
    this._root = deleteNode(this._root, data);
  }

  min() {
    if (this._root === null) return null;
    let current = this._root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this._root === null) return null;
    let current = this._root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};