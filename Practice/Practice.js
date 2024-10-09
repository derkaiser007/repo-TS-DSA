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
var QueueNode = /** @class */ (function () {
    function QueueNode(value) {
        this.next = null;
        this.value = value;
        this.next = null;
    }
    return QueueNode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    Queue.prototype.enqueue = function (value) {
        var node = new QueueNode(value);
        if (!this.head)
            this.head = this.tail = node;
        else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return "".concat(value, " added successfully!");
    };
    Queue.prototype.dequeue = function () {
        var _a;
        var val = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
        if (!this.head)
            return "Empty Queue!";
        else if (!this.head.next)
            this.head = this.tail = null;
        else
            this.head = this.head.next;
        this.size--;
        return "".concat(val, " removed successfully!");
    };
    Queue.prototype.frontElement = function () {
        if (!this.head)
            return "Empty Queue!";
        else
            return this.head.value;
    };
    Queue.prototype.isEmpty = function () {
        if (!this.head)
            return "Yes, Queue is empty!";
        else
            return "No, Queue isn't empty!";
    };
    Queue.prototype.queueSize = function () {
        return "Size: ".concat(this.size);
    };
    return Queue;
}());
var queue = new Queue();
console.log(queue.isEmpty());
console.log(queue.queueSize());
console.log(queue.enqueue(true));
console.log(queue.queueSize());
console.log(queue.enqueue("niraj"));
console.log(queue.queueSize());
console.log(queue.enqueue(786));
console.log(queue.queueSize());
console.log(queue.enqueue(456));
console.log(queue.queueSize());
console.log(queue.isEmpty());
console.log(queue.frontElement());
console.log(queue.dequeue());
console.log(queue.queueSize());
console.log(queue.frontElement());
console.log(queue.dequeue());
console.log(queue.queueSize());
console.log(queue.frontElement());
console.log(queue.dequeue());
console.log(queue.queueSize());
console.log(queue.frontElement());
console.log(queue.dequeue());
console.log(queue.queueSize());
console.log(queue.frontElement());
console.log(queue.dequeue());
console.log(queue.queueSize());
console.log(queue.isEmpty());
