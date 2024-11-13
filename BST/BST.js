// tsc BST/BST
// node BST/BST
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.left = null;
        this.right = null;
        this.freq = 1;
        this.value = value;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newTreeNode = new TreeNode(value);
        if (!this.root)
            this.root = newTreeNode;
        else {
            var currentNode = this.root;
            while (currentNode) {
                if (currentNode.value < value) {
                    if (currentNode.right)
                        currentNode = currentNode.right;
                    else {
                        currentNode.right = newTreeNode;
                        break;
                    }
                }
                else if (currentNode.value > value) {
                    if (currentNode.left)
                        currentNode = currentNode.left;
                    else {
                        currentNode.left = newTreeNode;
                        break;
                    }
                }
                else {
                    currentNode.freq++;
                    break;
                }
            }
        }
        return "".concat(value, " added successfully!");
    };
    BinarySearchTree.prototype.search = function (value) {
        if (!this.root)
            return "Empty BST!";
        else {
            var currentNode = this.root;
            while (currentNode) {
                if (currentNode.value < value) {
                    if (currentNode.right)
                        currentNode = currentNode.right;
                    else
                        return "".concat(value, " isn't in BST!");
                }
                else if (currentNode.value > value) {
                    if (currentNode.left)
                        currentNode = currentNode.left;
                    else
                        return "".concat(value, " isn't in BST!");
                }
                else
                    return "".concat(value, " is in BST!");
            }
        }
        return "";
    };
    BinarySearchTree.prototype.predecessor = function (value) {
        var currentNode;
        if (!this.root)
            return null;
        else {
            currentNode = this.root;
            var tempPre = null;
            while (currentNode.value !== value) {
                if (currentNode.value < value && currentNode.right) {
                    tempPre = currentNode;
                    currentNode = currentNode.right;
                }
                else if (currentNode.value > value && currentNode.left)
                    currentNode = currentNode.left;
                else
                    return null;
            }
            if (currentNode.left)
                currentNode = currentNode.left;
            else
                return tempPre ? tempPre : null;
            while (currentNode.right) {
                currentNode = currentNode.right;
            }
        }
        return currentNode;
    };
    BinarySearchTree.prototype.successor = function (value) {
        var currentNode;
        if (!this.root)
            return null;
        else {
            currentNode = this.root;
            var tempSucc = null;
            while (currentNode.value !== value) {
                if (currentNode.value < value && currentNode.right)
                    currentNode = currentNode.right;
                else if (currentNode.value > value && currentNode.left) {
                    tempSucc = currentNode;
                    currentNode = currentNode.left;
                }
                else
                    return null;
            }
            if (currentNode.right)
                currentNode = currentNode.right;
            else
                return tempSucc ? tempSucc : null;
            while (currentNode.left) {
                currentNode = currentNode.left;
            }
        }
        return currentNode;
    };
    BinarySearchTree.prototype.deleteIteration = function (value) {
        var currentNode = this.root;
        var parentNode = null;
        var successorNode = null;
        var preSuccessorNode = null;
        if (!this.root)
            return "Empty BST!";
        else {
            while (currentNode.value !== value) {
                parentNode = currentNode;
                if (currentNode.value > value && currentNode.left)
                    currentNode = currentNode.left;
                else if (currentNode.value < value && currentNode.right)
                    currentNode = currentNode.right;
                else
                    return "".concat(value, " isn't in BST!");
            }
            if (currentNode.freq > 1)
                currentNode.freq--;
            else if (!(currentNode === null || currentNode === void 0 ? void 0 : currentNode.left) && !(currentNode === null || currentNode === void 0 ? void 0 : currentNode.right)) {
                if (currentNode === this.root)
                    this.root = null;
                else
                    parentNode.left === currentNode ? parentNode.left = null : parentNode.right = null;
            }
            else if (currentNode.left && !currentNode.right)
                currentNode = currentNode.left;
            else if (!currentNode.left && currentNode.right)
                currentNode = currentNode.right;
            else {
                preSuccessorNode = currentNode;
                successorNode = currentNode.right;
                while (successorNode.left) {
                    preSuccessorNode = successorNode;
                    successorNode = successorNode.left;
                }
                currentNode.value = successorNode.value;
                currentNode.freq = successorNode.freq;
                if (preSuccessorNode.left === successorNode)
                    preSuccessorNode.left = successorNode.right;
                else if (preSuccessorNode.right === successorNode)
                    preSuccessorNode.right = successorNode.right;
            }
        }
        return "".concat(value, " deleted successfully!");
    };
    BinarySearchTree.prototype.deleteRecursion = function (value) {
        this.root = this.deleteNode(this.root, value);
        // This line ensures that any changes to the root (or any other part of the tree) are reflected back in the 
        // main tree structure.
        return "".concat(value, " deleted successfully!");
    };
    BinarySearchTree.prototype.deleteNode = function (node, value) {
        if (!node)
            return null;
        else if (node.value > value)
            node.left = this.deleteNode(node.left, value);
        else if (node.value < value)
            node.right = this.deleteNode(node.right, value);
        else {
            if (node.freq > 1)
                node.freq--;
            else if (!node.left && !node.right)
                return null;
            else if (node.left && !node.right)
                return node.left;
            else if (!node.left && node.right)
                return node.right;
            else {
                var succ = this.successor(node.value);
                node.value = succ.value;
                node.freq = succ.freq;
                node.right = this.deleteNode(node.right, succ.value);
            }
        }
        return node;
    };
    BinarySearchTree.prototype.bfsTraverse = function () {
        if (!this.root)
            return [];
        var temp = [this.root];
        var result = [];
        while (temp.length !== 0) {
            var node = temp.shift();
            result.push({ value: node.value, freq: node.freq });
            if (node === null || node === void 0 ? void 0 : node.left)
                temp.push(node === null || node === void 0 ? void 0 : node.left);
            if (node === null || node === void 0 ? void 0 : node.right)
                temp.push(node === null || node === void 0 ? void 0 : node.right);
        }
        return result;
    };
    BinarySearchTree.prototype.preOrderTraverse = function (node, result) {
        if (node === void 0) { node = this.root; }
        if (result === void 0) { result = []; }
        if (node) {
            result.push({ value: node.value, freq: node.freq });
            this.preOrderTraverse(node.left, result);
            this.preOrderTraverse(node.right, result);
        }
        return result;
    };
    BinarySearchTree.prototype.inOrderTraverse = function (node, result) {
        if (node === void 0) { node = this.root; }
        if (result === void 0) { result = []; }
        if (node) {
            this.inOrderTraverse(node.left, result);
            result.push({ value: node.value, freq: node.freq });
            this.inOrderTraverse(node.right, result);
        }
        return result;
    };
    BinarySearchTree.prototype.postOrderTraverse = function (node, result) {
        if (node === void 0) { node = this.root; }
        if (result === void 0) { result = []; }
        if (node) {
            this.postOrderTraverse(node.left, result);
            this.postOrderTraverse(node.right, result);
            result.push({ value: node.value, freq: node.freq });
        }
        return result;
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree();
console.log(bst.insert(15));
console.log(bst.insert(23));
console.log(bst.insert(21));
console.log(bst.insert(27));
console.log(bst.insert(9));
console.log(bst.insert(6));
console.log(bst.insert(12));
console.log(bst);
console.log(bst.inOrderTraverse());
console.log(bst.preOrderTraverse());
console.log(bst.postOrderTraverse());
console.log(bst.insert(9));
console.log(bst.inOrderTraverse());
// console.log(bst.search(9))
// console.log(bst.search(23))
// console.log(bst.search(678))
// console.log(bst.predecessor(15))
// console.log(bst.predecessor(23))
// console.log(bst.predecessor(21))
// console.log(bst.predecessor(6))
// console.log(bst.successor(15))
// console.log(bst.successor(23))
// console.log(bst.successor(12))
// console.log(bst.successor(27))
// console.log(bst.deleteRecursion(9))
// console.log(bst.inOrderTraverse())
// console.log(bst.deleteRecursion(15))
// console.log(bst.inOrderTraverse())
// console.log(bst.deleteIteration(9))
// console.log(bst.inOrderTraverse())
// console.log(bst.deleteIteration(15))
// console.log(bst.inOrderTraverse())
