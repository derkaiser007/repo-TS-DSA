// tsc Stack_Queue/Stack
// node Stack_Queue/Stack
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
        this.top = null;
        this.size = 0;
    }
    Stack.prototype.push = function (value) {
        var newStackNode = new StackNode(value);
        if (!this.top)
            this.top = newStackNode;
        else {
            newStackNode.next = this.top;
            this.top = newStackNode;
        }
        this.size++;
        return "".concat(value, " added successfully");
    };
    Stack.prototype.pop = function () {
        var _a;
        var value = (_a = this.top) === null || _a === void 0 ? void 0 : _a.value;
        if (!this.top)
            return "Empty Stack!";
        else if (!this.top.next)
            this.top = null;
        else
            this.top = this.top.next;
        this.size--;
        return "".concat(value, " removed successfully!");
    };
    Stack.prototype.peek = function () {
        if (!this.top)
            return "Empty Stack!";
        else
            return this.top.value;
    };
    Stack.prototype.isEmpty = function () {
        if (!this.top)
            return "Empty Stack!";
        else
            return "Stack isn't empty!";
    };
    Stack.prototype.stackSize = function () {
        return this.size;
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
