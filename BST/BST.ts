// tsc BST/BST
// node BST/BST


class TreeNode<V> {
    value: V;
    left: TreeNode<V> | null = null;
    right: TreeNode<V> | null = null;

    constructor(value: V){
        this.value = value
    }
}

class BinarySearchTree<V> {
    root: TreeNode<V> | null = null

    insert(value: V): string{
        const newTreeNode = new TreeNode(value)
        if(!this.root) this.root = newTreeNode;
        else {
            let currentNode = this.root;
            while(currentNode){
                if(currentNode.value < value){
                    if(currentNode.right) currentNode = currentNode.right;
                    else{
                        currentNode.right = newTreeNode
                        break
                    }
                } 
                else if(currentNode.value > value){
                    if(currentNode.left) currentNode = currentNode.left;
                    else{
                        currentNode.left = newTreeNode
                        break
                    }                    
                }
            }
        }        
        return `${value} added successfully!`
    }

    search(value: V): string{
        if(!this.root) return `Empty BST!`;
        else{
            let currentNode = this.root
            while(currentNode){
                if(currentNode.value < value){
                    if(currentNode.right) currentNode = currentNode.right;
                    else return `${value} isn't in BST!`;
                } 
                else if(currentNode.value > value){
                    if(currentNode.left) currentNode = currentNode.left;
                    else return `${value} isn't in BST!`;                   
                }
                else return `${value} is in BST!`;
            }
        }
        return ``;
    }

    predecessor(value: V): TreeNode<V> | null {
        let currentNode: TreeNode<V> | null; 
        if(!this.root) return null;
        else{
            currentNode = this.root
            while(currentNode.value !== value){
                if(currentNode.value < value && currentNode.right) currentNode = currentNode.right;
                else if(currentNode.value > value && currentNode.left) currentNode = currentNode.left;
                else return null;
            }
            if(currentNode.left) currentNode = currentNode.left;
            else return null;
            while(currentNode.right){
                currentNode = currentNode.right
            }
        }
        return currentNode;        
    }

    successor(value: V): TreeNode<V> | null {
        let currentNode: TreeNode<V> | null;
        if(!this.root) return null;
        else{
            currentNode = this.root
            while(currentNode.value !== value){
                if(currentNode.value < value && currentNode.right) currentNode = currentNode.right;
                else if(currentNode.value > value && currentNode.left) currentNode = currentNode.left;
                else return null;
            }
            if(currentNode.right) currentNode = currentNode.right;
            else return null;
            while(currentNode.left){
                currentNode = currentNode.left
            }
        }
        return currentNode;
    }

    deleteIteration(value: V): string{
        let currentNode: TreeNode<V> | null = this.root; 
        let preCurrentNode: TreeNode<V> | null = null;
        let successorNode: TreeNode<V> | null = null;
        let preSuccessorNode: TreeNode<V> | null = null;
        if(!this.root) return `Empty BST!`;
        else{
            while(currentNode){
                if(currentNode.value < value){
                    if(currentNode.right){
                        preCurrentNode = currentNode
                        currentNode = currentNode.right
                    }
                    else return `${value} isn't in BST!`;
                }
                else if(currentNode.value > value){
                    if(currentNode.left){
                        preCurrentNode = currentNode
                        currentNode = currentNode.left
                    }
                    else return `${value} isn't in BST!`;
                }
                else break;
            }
            if(!currentNode?.left && !currentNode?.right){
                if(currentNode === this.root) this.root = null;
                else{
                    if(preCurrentNode!.left === currentNode) preCurrentNode!.left = null;
                    else preCurrentNode!.right === null;
                }
            }
            else if(currentNode.left && !currentNode.right) currentNode = currentNode.left;
            else if(!currentNode.left && currentNode.right) currentNode = currentNode.right;
            else{
                successorNode = currentNode.right
                while(successorNode!.left){
                    preSuccessorNode = successorNode
                    successorNode = successorNode!.left
                }
                if(currentNode && successorNode) currentNode.value = successorNode.value;
                if(preSuccessorNode!.left === successorNode) preSuccessorNode!.left = successorNode!.right;
                else preSuccessorNode!.right = successorNode!.right;                 
            }
        }        
        return `${value} deleted successfully!`
    }

    deleteRecursion(value: V){
        this.root = this.deleteNode(this.root, value)
    }
    
    private deleteNode(node: TreeNode<V> | null, value: V): TreeNode<V> | null {
        if(!node) return null;
        else if(node.value < value){
            node.right = this.deleteNode(node.right, value)
        }
        else if(node.value > value){
            node.left = this.deleteNode(node.left, value)
        }
        else{
            if(!node.left && !node.right) return null;
            else if(node.left && !node.right) return node.left;
            else if(!node.left && node.right) return node.right;
            else{
                let succ = this.successor(node.value)
                node.value = succ!.value
                succ = this.deleteNode(this.root, succ!.value)
            }
        }
        return node;
    }
}

let bst = new BinarySearchTree<number>()
console.log(bst.insert(15))
console.log(bst.insert(23))
console.log(bst.insert(21))
console.log(bst.insert(27))
console.log(bst.insert(9))
console.log(bst.insert(6))
console.log(bst.insert(12))
console.log(bst)
console.log(bst.search(9))
console.log(bst.search(23))
console.log(bst.search(678))
console.log(bst.predecessor(15))
console.log(bst.predecessor(23))
console.log(bst.predecessor(9))
console.log(bst.predecessor(6))
console.log(bst.successor(15))
console.log(bst.successor(23))
console.log(bst.successor(9))
console.log(bst.successor(6))
console.log(bst.deleteIteration(15))
console.log(bst.search(15))
console.log(bst.deleteRecursion(23))
console.log(bst.search(23))




