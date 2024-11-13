// tsc Practice/Practice
// node Practice/Practice
/*
const nums: number[] = [12, 45, 12, 16]
console.log(nums)
console.log(nums.sort((a, b) => a-b)) //Ascending Order
console.log(nums)
console.log(nums.sort((a, b) => b-a)) //Descending Order
console.log(nums)
*/
/*
const nums: number[] = [12, 45, 12, 16]
const sortedNums = nums.slice().sort((a, b) => a - b);
console.log(nums)
console.log(sortedNums)
*/
/*
const nums: number[] = [3,2,5,1,3]
console.log(nums)
const sortedNums: number[] = nums.slice().sort((a, b) => a-b)
console.log(nums)
console.log(sortedNums)
*/
/*
let nestedArr: number[][] = new Array(10).fill(null).map(() => [])
nestedArr[0].push(123)
nestedArr[9].push(567)
console.log(nestedArr)
*/
/*
// Iteration
function lengthOfLongestPalindromeIteration(str: string): number{
    let i: number = 0.5
    let j: number = 0
    let maxLength: number = 0
    while(i < str.length){
        if(Number.isInteger(i)){
            while(i-j-1 >= 0 && i+j+1 < str.length){
                if(str[i-j-1] === str[i+j+1]) j++;
                else break;
            }
            j = j*2+1;
            if(maxLength < j) maxLength = j;
            j = 0;
            i += 0.5;
        } else {
            while(Math.floor(i-j) >= 0 && Math.ceil(i+j) < str.length){
                if(str[Math.floor(i-j)] === str[Math.ceil(i+j)]) j++;
                else break;
            }
            j *= 2
            if(maxLength < j) maxLength = j;
            j = 0;
            i += 0.5;
        }
    }
    return maxLength;
}

console.log(lengthOfLongestPalindromeIteration("banana"))
console.log(lengthOfLongestPalindromeIteration("malayalam"))
*/
/*
// Recursion
function lengthOfAPalindrome(str: string, left: number, right: number){
    while(left >= 0 && right < str.length && str[left] === str[right]){
        left--;
        right++;
    }
    return right-left-1;
}
function lengthOfLongestPalindromeRecursion(str: string): number{
    let maxLength: number = 0;
    for(let i = 1; i < str.length; i++){
        let length1: number = lengthOfAPalindrome(str, i, i)
        let length2: number = lengthOfAPalindrome(str, i, i+1)
        maxLength = Math.max(maxLength, length1, length2)
    }
    return maxLength;
}

console.log(lengthOfLongestPalindromeRecursion("banana"))
console.log(lengthOfLongestPalindromeRecursion("malayalam"))
*/
/*
// To check if a string or character is alphanumeric:

// Checking a Single Character:
function isAlphanumericChar(char: string): boolean {
    return /^[a-zA-Z0-9]$/.test(char);
}

console.log(isAlphanumericChar("a")); // true
console.log(isAlphanumericChar("1")); // true
console.log(isAlphanumericChar("@")); // false
console.log(isAlphanumericChar(" ")); // false

// Checking an Entire String:
function isAlphanumericString(str: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(str);
}

console.log(isAlphanumericString("abc123")); // true
console.log(isAlphanumericString("abc 123")); // false (contains space)
console.log(isAlphanumericString("abc@123")); // false (contains '@')
*/
/*
function shiftLetterWithWraparound(str: string, shift: number): string{
    let result: string = ''
    let code: number
    let newCode: number
    for(let i = 0; i < str.length; i++){
        code = str.charCodeAt(i)
        if(code + shift < 97) newCode = code + shift + 26;
        else if(code + shift > 122) newCode = code + shift - 26;
        else newCode = code + shift;
        result += String.fromCharCode(newCode)
    }
    return result
}

console.log(shiftLetterWithWraparound("wxyz", 2))
console.log(shiftLetterWithWraparound("abcd", -4))
*/
/*
let weights: number[] = [10,12,16]
let values: number[] = [100,300,400]
const items = weights
        .map((weight, index) => ({ weight, value: values[index] }))
        .sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

console.log(items)
*/
/*
function binarySearch(lis: number[], num: number){

    return -1
}

function lengthOfLIS(nums: number[]): number {
    let lis: number[] = []
    lis[0] = nums[0]

    for(let i = 0; i < nums.length; i++){
        
    }
    return lis.length
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
console.log(lengthOfLIS([0,1,0,3,2,3]))
console.log(lengthOfLIS([7,7,7,7,7,7,7]))
console.log(lengthOfLIS([5,10,1,2,3,4]))
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]))
console.log(lengthOfLIS([10,11,12,13,14,15,2,3,4,5,6,7,8,19]))
*/
/*
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let result = new ListNode(0)
    let list: ListNode = result
    let count: number = 0
    let current: ListNode | null = head
    while(current?.next){
        if(current.val === current.next.val) count++;
        else if(current.val !== current.next.val && count !== 0) count = 0;
        else if(current.val !== current.next.val && count === 0){
            list.next = current
            list = list.next
        }
        current = current.next;
    }
    if(count === 0 && current) list.next = current;
    return result.next;
};
// 1 2 3 3 4 4 5
// 1 2 2
*/
// tsc Practice/Practice
// node Practice/Practice
var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.left = null;
        this.right = null;
        this.freq = 1;
        this.value = val;
    }
    return TreeNode;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.insert = function (val) {
        var node = new TreeNode(val);
        if (!this.root)
            this.root = node;
        else {
            var current = this.root;
            while (current) {
                if (current.value < val) {
                    if (current.right)
                        current = current.right;
                    else {
                        current.right = node;
                        break;
                    }
                }
                else if (current.value > val) {
                    if (current.left)
                        current = current.left;
                    else {
                        current.left = node;
                        break;
                    }
                }
                else {
                    current.freq++;
                    break;
                }
            }
        }
        return "".concat(val, " added successfully!");
    };
    BST.prototype.search = function (val) {
        if (!this.root)
            return "Empty BST!";
        else {
            var current = this.root;
            while (current) {
                if (current.value < val) {
                    if (current.right)
                        current = current.right;
                    else
                        return "".concat(val, " isn't in BST!");
                }
                else if (current.value > val) {
                    if (current.left)
                        current = current.left;
                    else
                        return "".concat(val, " isn't in BST!");
                }
                else
                    return "".concat(val, " found successfully in BST!");
            }
        }
        return "";
    };
    BST.prototype.predecessor = function (val) {
        if (!this.root)
            return null;
        else {
            var current = this.root;
            var tempPre = null;
            while (current.value !== val) {
                if (current.value < val && current.right) {
                    tempPre = current;
                    current = current.right;
                }
                else if (current.value > val && current.left)
                    current = current.left;
                else
                    return null;
            }
            if (current.left)
                current = current.left;
            else
                return tempPre ? tempPre : null;
            while (current.right)
                current = current.right;
            return current;
        }
    };
    BST.prototype.successor = function (val) {
        if (!this.root)
            return null;
        else {
            var current = this.root;
            var tempSucc = null;
            while (current.value !== val) {
                if (current.value < val && current.right)
                    current = current.right;
                else if (current.value > val && current.left) {
                    tempSucc = current;
                    current = current.left;
                }
                else
                    return null;
            }
            if (current.right)
                current = current.right;
            else
                return tempSucc ? tempSucc : null;
            while (current.left)
                current = current.left;
            return current;
        }
    };
    BST.prototype.deleteIteration = function (val) {
        var current = this.root;
        var parent = null;
        if (!this.root)
            return "Empty BST!";
        while (current.value !== val) {
            parent = current;
            if (current.value > val && current.left)
                current = current.left;
            else if (current.value < val && current.right)
                current = current.right;
            else
                return "".concat(val, " isn't in BST!");
        }
        if (current.freq > 1)
            current.freq--;
        else if (!current.left && !current.right) {
            if (current === this.root)
                this.root = null;
            else
                parent.left === current ? parent.left = null : parent.right = null;
        }
        else if (current.left && !current.right)
            current = current.left;
        else if (!current.left && current.right)
            current = current.right;
        else {
            var succ = null;
            var presucc = null;
            presucc = current;
            succ = current.right;
            while (succ.left) {
                presucc = succ;
                succ = succ.left;
            }
            current.value = succ.value;
            current.freq = succ.freq;
            if (presucc.left === succ)
                presucc.left = succ.right;
            else if (presucc.right === succ)
                presucc.right = succ.right;
        }
        return "".concat(val, " deleted successfully!");
    };
    BST.prototype.deleteRecursion = function (val) {
        this.root = this.deleteNodeRecursion(this.root, val);
        return "".concat(val, " deleted successfully!");
    };
    BST.prototype.deleteNodeRecursion = function (node, val) {
        if (!node)
            return null;
        else if (node.value > val)
            node.left = this.deleteNodeRecursion(node.left, val);
        else if (node.value < val)
            node.right = this.deleteNodeRecursion(node.right, val);
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
                node.right = this.deleteNodeRecursion(node.right, succ.value);
            }
        }
        return node;
    };
    BST.prototype.bfsTraverse = function () {
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
    BST.prototype.preOrderTraverse = function (node, result) {
        if (node === void 0) { node = this.root; }
        if (result === void 0) { result = []; }
        if (node) {
            result.push({ value: node.value, freq: node.freq });
            this.preOrderTraverse(node.left, result);
            this.preOrderTraverse(node.right, result);
        }
        return result;
    };
    BST.prototype.inOrderTraverse = function (node, result) {
        if (node === void 0) { node = this.root; }
        if (result === void 0) { result = []; }
        if (node) {
            this.inOrderTraverse(node.left, result);
            result.push({ value: node.value, freq: node.freq });
            this.inOrderTraverse(node.right, result);
        }
        return result;
    };
    BST.prototype.postOrderTraverse = function (node, result) {
        if (node === void 0) { node = this.root; }
        if (result === void 0) { result = []; }
        if (node) {
            this.postOrderTraverse(node.left, result);
            this.postOrderTraverse(node.right, result);
            result.push({ value: node.value, freq: node.freq });
        }
        return result;
    };
    return BST;
}());
var bst = new BST();
console.log(bst.insert(15));
console.log(bst.insert(23));
console.log(bst.insert(21));
console.log(bst.insert(27));
console.log(bst.insert(9));
console.log(bst.insert(6));
console.log(bst.insert(12));
console.log(bst);
// console.log(bst.inOrderTraverse())
// console.log(bst.preOrderTraverse())
// console.log(bst.postOrderTraverse())
console.log(bst.insert(9));
// console.log(bst.inOrderTraverse())
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
console.log(bst.deleteIteration(9));
console.log(bst.inOrderTraverse());
console.log(bst.deleteIteration(15));
console.log(bst.inOrderTraverse());
// tsc Practice/Practice
// node Practice/Practice
