// tsc Stack_Queue/Queue
// node Stack_Queue/Queue
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
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    Queue.prototype.enqueue = function (value) {
        var newQueueNode = new QueueNode(value);
        if (!this.front)
            this.front = this.rear = newQueueNode;
        else {
            if (this.rear) {
                this.rear.next = newQueueNode;
                this.rear = newQueueNode;
            }
        }
        this.size++;
        return "".concat(value, " added successfully!.");
    };
    Queue.prototype.dequeue = function () {
        var _a, _b, _c;
        var value = (_a = this.front) === null || _a === void 0 ? void 0 : _a.value;
        if (!this.front && !this.rear)
            return "Empty Queue!";
        else if (this.front === this.rear) {
            this.front = this.rear = null;
        }
        else {
            if ((_b = this.front) === null || _b === void 0 ? void 0 : _b.next)
                this.front = (_c = this.front) === null || _c === void 0 ? void 0 : _c.next;
        }
        this.size--;
        return "".concat(value, " removed successfully!");
    };
    Queue.prototype.frontElement = function () {
        if (!this.front)
            return "Empty Queue!";
        return "".concat(this.front.value);
    };
    Queue.prototype.isEmpty = function () {
        if (this.size === 0)
            return "Queue Empty!";
        return "Queue isn't empty!";
    };
    Queue.prototype.queueSize = function () {
        return this.size;
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
