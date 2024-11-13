// tsc BST/BST
// node BST/BST


class TreeNode<V> {
    value: V;
    left: TreeNode<V> | null = null;
    right: TreeNode<V> | null = null;
    freq: number = 1

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
                else{
                    currentNode.freq++
                    break
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
            let tempPre: TreeNode<V> | null = null
            while(currentNode.value !== value){
                if(currentNode.value < value && currentNode.right){
                    tempPre = currentNode
                    currentNode = currentNode.right
                }
                else if(currentNode.value > value && currentNode.left) currentNode = currentNode.left;
                else return null;
            }
            if(currentNode.left) currentNode = currentNode.left;
            else return tempPre ? tempPre : null;
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
            let tempSucc: TreeNode<V> | null = null
            while(currentNode.value !== value){
                if(currentNode.value < value && currentNode.right) currentNode = currentNode.right;
                else if(currentNode.value > value && currentNode.left){
                    tempSucc = currentNode
                    currentNode = currentNode.left
                }
                else return null;
            }
            if(currentNode.right) currentNode = currentNode.right;
            else return tempSucc ? tempSucc : null;
            while(currentNode.left){
                currentNode = currentNode.left
            }
        }
        return currentNode;
    }

    deleteIteration(value: V): string{
        let currentNode: TreeNode<V> | null = this.root; 
        let parentNode: TreeNode<V> | null = null;
        let successorNode: TreeNode<V> | null = null;
        let preSuccessorNode: TreeNode<V> | null = null;
        if(!this.root) return `Empty BST!`;
        else{
            while(currentNode!.value !== value){
                parentNode = currentNode
                if(currentNode!.value > value && currentNode!.left) currentNode = currentNode!.left;
                else if(currentNode!.value < value && currentNode!.right) currentNode = currentNode!.right;
                else return `${value} isn't in BST!`;              
            }
            if(currentNode!.freq > 1) currentNode!.freq--;
            else if(!currentNode?.left && !currentNode?.right){
                if(currentNode === this.root) this.root = null;
                else parentNode!.left === currentNode ? parentNode!.left = null : parentNode!.right = null;
            }
            else if(currentNode.left && !currentNode.right) currentNode = currentNode.left;
            else if(!currentNode.left && currentNode.right) currentNode = currentNode.right;
            else{
                preSuccessorNode = currentNode
                successorNode = currentNode.right
                while(successorNode!.left){
                    preSuccessorNode = successorNode
                    successorNode = successorNode!.left
                }
                currentNode!.value = successorNode!.value
                currentNode!.freq = successorNode!.freq
                if(preSuccessorNode!.left === successorNode) preSuccessorNode!.left = successorNode!.right;
                else if(preSuccessorNode!.right === successorNode) preSuccessorNode!.right = successorNode!.right;                 
            }
        }        
        return `${value} deleted successfully!`
    }

    deleteRecursion(value: V): string {
        this.root = this.deleteNode(this.root, value)
        // This line ensures that any changes to the root (or any other part of the tree) are reflected back in the 
        // main tree structure.
        return `${value} deleted successfully!`
    }
    
    private deleteNode(node: TreeNode<V> | null, value: V): TreeNode<V> | null {
        if(!node) return null;
        else if(node.value > value) node.left = this.deleteNode(node.left, value);
        else if(node.value < value) node.right = this.deleteNode(node.right, value);
        else{
            if(node.freq > 1) node!.freq--;
            else if(!node.left && !node.right) return null;
            else if(node.left && !node.right) return node.left;
            else if(!node.left && node.right) return node.right;
            else{
                let succ = this.successor(node.value)
                node.value = succ!.value
                node.freq = succ!.freq
                node.right = this.deleteNode(node.right, succ!.value)
            }
        }
        return node;
    }

    bfsTraverse(){
        if(!this.root) return [];
        let temp: TreeNode<V>[] = [this.root]
        let result: { value: V; freq: number }[] = []
        while(temp.length !== 0){
            let node = temp.shift()!
            result.push({ value: node.value, freq: node.freq })
            if(node?.left) temp.push(node?.left);
            if(node?.right) temp.push(node?.right);
        }   
        return result;
    }

    preOrderTraverse(node: TreeNode<V> | null = this.root, result: { value: V; freq: number }[] = []): { value: V; freq: number }[] {
        if(node){
            result.push({ value: node.value, freq: node.freq })
            this.preOrderTraverse(node.left, result)
            this.preOrderTraverse(node.right, result)
        }
        return result;
    }

    inOrderTraverse(node: TreeNode<V> | null = this.root, result: { value: V; freq: number }[] = []): { value: V; freq: number }[] {
        if(node){
            this.inOrderTraverse(node.left, result)
            result.push({ value: node.value, freq: node.freq })
            this.inOrderTraverse(node.right, result)
        }
        return result
    }

    postOrderTraverse(node: TreeNode<V> | null = this.root, result: { value: V; freq: number }[] = []): { value: V; freq: number }[] {
        if(node){
            this.postOrderTraverse(node.left, result)
            this.postOrderTraverse(node.right, result)
            result.push({ value: node.value, freq: node.freq })
        }
        return result
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

console.log(bst.inOrderTraverse())
console.log(bst.preOrderTraverse())
console.log(bst.postOrderTraverse())

console.log(bst.insert(9))
console.log(bst.inOrderTraverse())

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



