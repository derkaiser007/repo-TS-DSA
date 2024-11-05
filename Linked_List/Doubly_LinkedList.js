// tsc Linked_List/Doubly_LinkedList
// node Linked_List/Doubly_LinkedList
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
        this.size = 0;
    }
    DoublyLinkedList.prototype.insertAtEnd = function (value) {
        var newListNode = new ListNode(value);
        if (!this.head)
            this.head = newListNode;
        else {
            var currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newListNode;
            newListNode.prev = currentNode;
        }
        this.size++;
        return "".concat(newListNode.value, " added successfully!");
    };
    DoublyLinkedList.prototype.insertAtHead = function (value) {
        var newListNode = new ListNode(value);
        if (!this.head)
            this.head = newListNode;
        else {
            this.head.prev = newListNode;
            newListNode.next = this.head;
            this.head = newListNode;
        }
        this.size++;
        return "".concat(newListNode.value, " added successfully!");
    };
    DoublyLinkedList.prototype.insertAtNext = function (value, referenceValue) {
        var newListNode = new ListNode(value);
        if (!this.head)
            return "Empty List!";
        else {
            var currentNode = this.head;
            while (currentNode.value !== referenceValue) {
                if (currentNode.next)
                    currentNode = currentNode.next;
                else
                    return "".concat(referenceValue, " isn't in the list!");
            }
            newListNode.next = currentNode.next;
            newListNode.prev = currentNode;
            if (newListNode.next)
                newListNode.next.prev = newListNode;
            currentNode.next = newListNode;
        }
        this.size++;
        return "".concat(newListNode.value, " added successfully!");
    };
    DoublyLinkedList.prototype.insertAtPrev = function (value, referenceValue) {
        var _a;
        var newListNode = new ListNode(value);
        if (!this.head)
            return "Empty List!";
        else if (this.head.value === referenceValue)
            return this.insertAtHead(value);
        else {
            var currentNode = this.head;
            while (((_a = currentNode.next) === null || _a === void 0 ? void 0 : _a.value) !== referenceValue) {
                if (currentNode.next)
                    currentNode = currentNode.next;
                else
                    return "".concat(referenceValue, " isn't in the list!");
            }
            newListNode.next = currentNode.next;
            currentNode.next.prev = newListNode;
            currentNode.next = newListNode;
            newListNode.prev = currentNode;
        }
        this.size++;
        return "".concat(newListNode.value, " added successfully!");
    };
    DoublyLinkedList.prototype.searchingNode = function (value) {
        if (!this.head)
            return "Empty List!";
        else {
            var currentNode = this.head;
            while (currentNode.value !== value) {
                if (currentNode.next)
                    currentNode = currentNode.next;
                else
                    return "".concat(value, " isn't in the list!");
            }
            return "".concat(value, " found successfully!");
        }
    };
    DoublyLinkedList.prototype.deleteNode = function (value) {
        var _a, _b;
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
            var currentNode = this.head;
            while (((_a = currentNode.next) === null || _a === void 0 ? void 0 : _a.value) !== value) {
                if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.next)
                    currentNode = currentNode.next;
                else
                    return "".concat(value, " isn't in the list!");
            }
            currentNode.next = currentNode.next.next;
            if ((_b = currentNode.next) === null || _b === void 0 ? void 0 : _b.prev)
                currentNode.next.prev = currentNode;
        }
        this.size--;
        return "".concat(value, " deleted successfully!");
    };
    DoublyLinkedList.prototype.traverseList = function () {
        if (!this.head)
            return "Empty List!";
        else {
            var currentNode = this.head;
            while (currentNode) {
                process.stdout.write("".concat(currentNode.value, " <-> "));
                if (currentNode.next)
                    currentNode = currentNode.next;
                else
                    break;
            }
            process.stdout.write("null\n");
        }
    };
    DoublyLinkedList.prototype.sizeOfList = function () {
        return "Size: ".concat(this.size);
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
