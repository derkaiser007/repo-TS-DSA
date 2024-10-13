// tsc BST/BST
// node BST/BST
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.left = null;
        this.right = null;
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
            while (currentNode.value !== value) {
                if (currentNode.value < value && currentNode.right)
                    currentNode = currentNode.right;
                else if (currentNode.value > value && currentNode.left)
                    currentNode = currentNode.left;
                else
                    return null;
            }
            if (currentNode.left)
                currentNode = currentNode.left;
            else
                return null;
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
            while (currentNode.value !== value) {
                if (currentNode.value < value && currentNode.right)
                    currentNode = currentNode.right;
                else if (currentNode.value > value && currentNode.left)
                    currentNode = currentNode.left;
                else
                    return null;
            }
            if (currentNode.right)
                currentNode = currentNode.right;
            else
                return null;
            while (currentNode.left) {
                currentNode = currentNode.left;
            }
        }
        return currentNode;
    };
    BinarySearchTree.prototype.deleteIteration = function (value) {
        var currentNode = this.root;
        var preCurrentNode = null;
        var successorNode = null;
        var preSuccessorNode = null;
        if (!this.root)
            return "Empty BST!";
        else {
            while (currentNode) {
                if (currentNode.value < value) {
                    if (currentNode.right) {
                        preCurrentNode = currentNode;
                        currentNode = currentNode.right;
                    }
                    else
                        return "".concat(value, " isn't in BST!");
                }
                else if (currentNode.value > value) {
                    if (currentNode.left) {
                        preCurrentNode = currentNode;
                        currentNode = currentNode.left;
                    }
                    else
                        return "".concat(value, " isn't in BST!");
                }
                else
                    break;
            }
            if (!(currentNode === null || currentNode === void 0 ? void 0 : currentNode.left) && !(currentNode === null || currentNode === void 0 ? void 0 : currentNode.right)) {
                if (currentNode === this.root)
                    this.root = null;
                else {
                    if (preCurrentNode.left === currentNode)
                        preCurrentNode.left = null;
                    else
                        preCurrentNode.right === null;
                }
            }
            else if (currentNode.left && !currentNode.right)
                currentNode = currentNode.left;
            else if (!currentNode.left && currentNode.right)
                currentNode = currentNode.right;
            else {
                successorNode = currentNode.right;
                while (successorNode.left) {
                    preSuccessorNode = successorNode;
                    successorNode = successorNode.left;
                }
                if (currentNode && successorNode)
                    currentNode.value = successorNode.value;
                if (preSuccessorNode.left === successorNode)
                    preSuccessorNode.left = successorNode.right;
                else
                    preSuccessorNode.right = successorNode.right;
            }
        }
        return "".concat(value, " deleted successfully!");
    };
    BinarySearchTree.prototype.deleteRecursion = function (value) {
        this.root = this.deleteNode(this.root, value);
    };
    BinarySearchTree.prototype.deleteNode = function (node, value) {
        if (!node)
            return null;
        else if (node.value < value) {
            node.right = this.deleteNode(node.right, value);
        }
        else if (node.value > value) {
            node.left = this.deleteNode(node.left, value);
        }
        else {
            if (!node.left && !node.right)
                return null;
            else if (node.left && !node.right)
                return node.left;
            else if (!node.left && node.right)
                return node.right;
            else {
                var succ = this.successor(node.value);
                node.value = succ.value;
                succ = this.deleteNode(this.root, succ.value);
            }
        }
        return node;
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
console.log(bst.search(9));
console.log(bst.search(23));
console.log(bst.search(678));
console.log(bst.predecessor(15));
console.log(bst.predecessor(23));
console.log(bst.predecessor(9));
console.log(bst.predecessor(6));
console.log(bst.successor(15));
console.log(bst.successor(23));
console.log(bst.successor(9));
console.log(bst.successor(6));
console.log(bst.deleteIteration(15));
console.log(bst.search(15));
console.log(bst.deleteRecursion(23));
console.log(bst.search(23));
