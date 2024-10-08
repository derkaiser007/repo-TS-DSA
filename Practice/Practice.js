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
        this.next = null;
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    SinglyLinkedList.prototype.insertAtHead = function (value) {
        var node = new ListNode(value);
        if (!this.head)
            this.head = this.tail = node;
        else {
            node.next = this.head;
            this.head = node;
        }
        return "".concat(node.value, " added successfully!");
    };
    SinglyLinkedList.prototype.insertAtEnd = function (value) {
        var node = new ListNode(value);
        if (!this.head)
            this.head = this.tail = node;
        else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }
        return "".concat(node.value, " added successfully!");
    };
    SinglyLinkedList.prototype.insertBefore = function (value, referenceValue) {
        var node = new ListNode(value);
        if (!this.head)
            return "Empty List!";
        else if (this.head.value === referenceValue)
            return this.insertAtHead(node.value);
        else {
            var current = this.head;
            while (current.next && current.next.value !== referenceValue) {
                if (current.next.next)
                    current = current.next;
                else
                    return "".concat(referenceValue, " isn't available!");
            }
            node.next = current.next;
            current.next = node;
        }
        return "".concat(node.value, " added successfully!");
    };
    SinglyLinkedList.prototype.insertAfter = function (value, referenceValue) {
        var node = new ListNode(value);
        if (!this.head)
            return "Empty List!";
        else {
            var current = this.head;
            while (current.value !== referenceValue) {
                if (current.next)
                    current = current.next;
                else
                    return "".concat(referenceValue, " isn't available!");
            }
            if (!current.next)
                return this.insertAtEnd(node.value);
            else {
                node.next = current.next;
                current.next = node;
            }
        }
        return "".concat(node.value, " added successfully!");
    };
    SinglyLinkedList.prototype.searchingValue = function (value) {
        if (!this.head)
            return "Empty List!";
        else {
            var current = this.head;
            while (current.value !== value) {
                if (current === null || current === void 0 ? void 0 : current.next)
                    current = current.next;
                else
                    return "".concat(value, " isn't in the list!");
            }
            return "".concat(value, " found successfully!");
        }
    };
    SinglyLinkedList.prototype.deleteValue = function (value) {
        var _a, _b, _c;
        if (!this.head)
            return "Empty List!";
        else if (this.head.value === value)
            this.head = this.head.next;
        else {
            var current = this.head;
            while (((_a = current.next) === null || _a === void 0 ? void 0 : _a.value) !== value) {
                if ((_b = current.next) === null || _b === void 0 ? void 0 : _b.next)
                    current = current.next;
                else
                    return "".concat(value, " isn't in the list!");
            }
            if (!((_c = current.next) === null || _c === void 0 ? void 0 : _c.next))
                current.next = null;
            else
                current.next = current.next.next;
        }
        return "".concat(value, " is deleted successfully!");
    };
    SinglyLinkedList.prototype.traverseList = function () {
        if (!this.head)
            return "Empty List!";
        else {
            var current = this.head;
            while (current) {
                process.stdout.write("".concat(current.value, " -> "));
                if (current.next)
                    current = current.next;
                else {
                    process.stdout.write("null\n");
                    break;
                }
            }
        }
    };
    return SinglyLinkedList;
}());
var list = new SinglyLinkedList();
console.log(list.insertAtEnd("niraj"));
console.log(list.insertAtEnd(true));
console.log(list.insertAtEnd(123));
console.log(list.insertAtEnd("samar"));
list.traverseList();
console.log(list.insertAtHead(456));
console.log(list.insertAtHead(false));
list.traverseList();
console.log(list.insertAfter("samay", 123));
console.log(list.insertAfter("harshi", "samay"));
console.log(list.insertAfter(786, "samar"));
list.traverseList();
console.log(list.insertBefore(6789, "harshi"));
console.log(list.insertBefore(1234, 6789));
console.log(list.insertBefore("wxyz", false));
list.traverseList();
console.log(list.searchingValue("harshi"));
console.log(list.searchingValue("wxyz"));
console.log(list.searchingValue(786));
console.log(list.deleteValue("samay"));
console.log(list.deleteValue(786));
console.log(list.deleteValue("wxyz"));
list.traverseList();
