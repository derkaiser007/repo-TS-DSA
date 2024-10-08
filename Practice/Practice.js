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
var StackNode = /** @class */ (function () {
    function StackNode(value) {
        this.next = null;
        this.value = value;
        this.next = null;
    }
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.head = null;
        this.size = 0;
    }
    Stack.prototype.push = function (value) {
        var node = new StackNode(value);
        if (!this.head)
            this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        return "".concat(value, " added successfully!");
    };
    Stack.prototype.pop = function () {
        var _a;
        var val = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
        if (!this.head)
            return "Empty Stack!";
        else if (!this.head.next)
            this.head = null;
        else
            this.head = this.head.next;
        this.size--;
        return "".concat(val, " removed successfully!");
    };
    Stack.prototype.peek = function () {
        if (!this.head)
            return "Empty Stack!";
        else
            return this.head.value;
    };
    Stack.prototype.isEmpty = function () {
        if (!this.head)
            return "Yes, Stack is empty!";
        else
            return "No, Stack isn't empty!";
    };
    Stack.prototype.stackSize = function () {
        return "Stack Size: ".concat(this.size);
    };
    return Stack;
}());
var stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.push(true));
console.log(stack.stackSize());
console.log(stack.push(34));
console.log(stack.stackSize());
console.log(stack.push("niraj"));
console.log(stack.stackSize());
console.log(stack.push(false));
console.log(stack.stackSize());
console.log(stack.push(786));
console.log(stack.stackSize());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.stackSize());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.stackSize());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.stackSize());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.stackSize());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.stackSize());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.stackSize());
console.log(stack.isEmpty());
