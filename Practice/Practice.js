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
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    return ListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
    }
    DoublyLinkedList.prototype.insertAtEnd = function (value) {
        var node = new ListNode(value);
        if (!this.head)
            this.head = node;
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
        }
        return "".concat(node.value, " added successfully!");
    };
    DoublyLinkedList.prototype.insertAtHead = function (value) {
        var node = new ListNode(value);
        if (!this.head)
            this.head = node;
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return "".concat(node.value, " added successfully!");
    };
    DoublyLinkedList.prototype.insertAtNext = function (value, referenceValue) {
        var node = new ListNode(value);
        if (!this.head)
            return "Empty List!";
        else {
            var current = this.head;
            while (current.value !== referenceValue) {
                if (current.next)
                    current = current.next;
                else
                    return "".concat(referenceValue, " isn't in the list!");
            }
            node.next = current.next;
            if (current.next)
                current.next.prev = node;
            current.next = node;
            node.prev = current;
        }
        return "".concat(node.value, " added successfully!");
    };
    DoublyLinkedList.prototype.insertAtPrev = function (value, referenceValue) {
        var _a, _b;
        var node = new ListNode(value);
        if (!this.head)
            return "Empty List!";
        else if (this.head.value === referenceValue)
            return this.insertAtHead(node.value);
        else {
            var current = this.head;
            while (((_a = current.next) === null || _a === void 0 ? void 0 : _a.value) !== referenceValue) {
                if ((_b = current.next) === null || _b === void 0 ? void 0 : _b.next)
                    current = current.next;
                else
                    return "".concat(referenceValue, " isn't in the list!");
            }
            node.next = current.next;
            current.next.prev = node;
            current.next = node;
            node.prev = current;
        }
        return "".concat(node.value, " added successfully!");
    };
    DoublyLinkedList.prototype.searchingNode = function (value) {
        if (!this.head)
            return "Empty List!";
        else {
            var current = this.head;
            while (current.value !== value) {
                if (current.next)
                    current = current.next;
                else
                    return "".concat(value, " found successfully!");
            }
            return "".concat(value, " isn't in the list!");
        }
    };
    DoublyLinkedList.prototype.deleteNode = function (value) {
        var _a, _b, _c;
        if (!this.head)
            return "Empty List!";
        else if (this.head.value === value) {
            if (this.head.next) {
                this.head = this.head.next;
                this.head.prev = null;
            }
            else
                this.head = null;
        }
        else {
            var current = this.head;
            while (((_a = current.next) === null || _a === void 0 ? void 0 : _a.value) !== value) {
                if ((_b = current.next) === null || _b === void 0 ? void 0 : _b.next)
                    current = current.next;
                else
                    return "".concat(value, " isn't in the list!");
            }
            current.next = current.next.next;
            if ((_c = current.next) === null || _c === void 0 ? void 0 : _c.prev)
                current.next.prev = current;
        }
        return "".concat(value, " deleted successfully!");
    };
    DoublyLinkedList.prototype.traverseList = function () {
        if (!this.head)
            return "Empty List!";
        else {
            var current = this.head;
            while (current) {
                process.stdout.write("".concat(current.value, " <-> "));
                if (current.next)
                    current = current.next;
                else
                    break;
            }
            process.stdout.write("null\n");
        }
    };
    DoublyLinkedList.prototype.sizeOfList = function () {
        var size = 0;
        if (!this.head)
            return "Size: 0";
        else {
            var current = this.head;
            while (current) {
                size++;
                if (current.next)
                    current = current.next;
                else
                    return "Size: ".concat(size);
            }
        }
    };
    return DoublyLinkedList;
}());
var list = new DoublyLinkedList();
console.log(list.traverseList());
console.log(list.sizeOfList());
console.log(list.insertAtEnd("niraj"));
console.log(list.insertAtEnd(true));
console.log(list.insertAtEnd(123));
console.log(list.insertAtEnd("samar"));
list.traverseList();
console.log(list.insertAtHead(456));
console.log(list.insertAtHead(false));
list.traverseList();
console.log(list.insertAtNext("samay", 123));
console.log(list.insertAtNext("harshi", "samay"));
console.log(list.insertAtNext(786, "samar"));
list.traverseList();
console.log(list.insertAtPrev(6789, "harshi"));
console.log(list.insertAtPrev(1234, 6789));
console.log(list.insertAtPrev("wxyz", false));
list.traverseList();
console.log(list.searchingNode("harshi"));
console.log(list.searchingNode("wxyz"));
console.log(list.searchingNode(786));
console.log(list.deleteNode("samay"));
console.log(list.deleteNode(786));
console.log(list.deleteNode("wxyz"));
list.traverseList();
console.log(list.deleteNode("samar"));
console.log(list.insertAtEnd("neer"));
list.traverseList();
console.log(list.sizeOfList());
