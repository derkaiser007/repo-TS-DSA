// tsc Linked_List/Singly_LinkedList
// node Linked_List/Singly_LinkedList
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
    }
    SinglyLinkedList.prototype.insertAtEnd = function (value) {
        var newListNode = new ListNode(value);
        if (!this.head)
            this.head = newListNode;
        else {
            var currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newListNode;
        }
        return "".concat(newListNode.value, " added successfully!");
    };
    SinglyLinkedList.prototype.insertAtHead = function (value) {
        var newListNode = new ListNode(value);
        if (!this.head)
            this.head = newListNode;
        else {
            newListNode.next = this.head;
            this.head = newListNode;
        }
        return "".concat(newListNode.value, " added successfully!");
    };
    SinglyLinkedList.prototype.insertBefore = function (value, referenceValue) {
        var newListNode = new ListNode(value);
        if (!this.head)
            return "Empty List!";
        else if (this.head.value === referenceValue)
            return this.insertAtHead(newListNode.value);
        else {
            var current = this.head;
            while (current.next && current.next.value !== referenceValue) {
                if (current.next.next)
                    current = current.next;
                else
                    return "".concat(referenceValue, " isn't available!");
            }
            newListNode.next = current.next;
            current.next = newListNode;
        }
        return "".concat(newListNode.value, " added successfully!");
    };
    SinglyLinkedList.prototype.insertAfter = function (value, referenceValue) {
        var newListNode = new ListNode(value);
        if (!this.head)
            return "Empty List!";
        else {
            var currentNode = this.head;
            while (currentNode.value !== referenceValue) {
                if (!currentNode.next)
                    return "".concat(referenceValue, " isn't available!");
                else
                    currentNode = currentNode.next;
            }
            newListNode.next = currentNode.next;
            currentNode.next = newListNode;
        }
        return "".concat(newListNode.value, " added successfully!");
    };
    SinglyLinkedList.prototype.searchingNode = function (value) {
        if (!this.head)
            return "Empty List!";
        else {
            var currentNode = this.head;
            while (currentNode.value !== value) {
                if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.next)
                    currentNode = currentNode.next;
                else
                    return "".concat(value, " isn't in the list!");
            }
            return "".concat(value, " found successfully!");
        }
    };
    SinglyLinkedList.prototype.deleteNode = function (value) {
        var _a, _b, _c;
        if (!this.head)
            return "Empty List!";
        else if (this.head.value === value)
            this.head = this.head.next;
        else {
            var currentNode = this.head;
            while (((_a = currentNode.next) === null || _a === void 0 ? void 0 : _a.value) !== value) {
                if ((_b = currentNode.next) === null || _b === void 0 ? void 0 : _b.next)
                    currentNode = currentNode.next;
                else
                    return "".concat(value, " isn't in the list!");
            }
            if (!((_c = currentNode.next) === null || _c === void 0 ? void 0 : _c.next))
                currentNode.next = null;
            else
                currentNode.next = currentNode.next.next;
        }
        return "".concat(value, " is deleted successfully!");
    };
    SinglyLinkedList.prototype.traverseList = function () {
        if (!this.head)
            return "Empty List!";
        else {
            var currentNode = this.head;
            while (currentNode) {
                process.stdout.write("".concat(currentNode.value, " -> "));
                if (currentNode.next)
                    currentNode = currentNode.next;
                else {
                    process.stdout.write("null\n");
                    break;
                }
            }
        }
    };
    SinglyLinkedList.prototype.sizeOfList = function () {
        var size = 0;
        if (!this.head)
            return "Size: 0";
        else {
            var currentNode = this.head;
            while (currentNode) {
                size++;
                if (currentNode.next)
                    currentNode = currentNode.next;
                else
                    break;
            }
        }
        return "Size: ".concat(size);
    };
    return SinglyLinkedList;
}());
var list = new SinglyLinkedList();
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
console.log(list.insertAfter("samay", 123));
console.log(list.insertAfter("harshi", "samay"));
console.log(list.insertAfter(786, "samar"));
list.traverseList();
console.log(list.insertBefore(6789, "harshi"));
console.log(list.insertBefore(1234, 6789));
console.log(list.insertBefore("wxyz", false));
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
