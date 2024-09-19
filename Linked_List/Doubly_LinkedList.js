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
    };
    DoublyLinkedList.prototype.insertAtNext = function (value, referenceValue) {
        var newListNode = new ListNode(value);
        if (!this.head)
            console.error("Can't add the value beacuse reference value isn't found.");
        else {
            var currentNode = this.head;
            while (currentNode.value !== referenceValue) {
                if (!currentNode.next) {
                    console.error("Can't add the value beacuse reference value isn't found.");
                    return;
                }
                else
                    currentNode = currentNode.next;
            }
            newListNode.next = currentNode.next;
            newListNode.prev = currentNode;
            if (newListNode.next) {
                newListNode.next.prev = newListNode;
            }
            currentNode.next = newListNode;
        }
    };
    DoublyLinkedList.prototype.insertAtPrev = function (value, referenceValue) {
        var _a;
        var newListNode = new ListNode(value);
        if (!this.head)
            console.error("Can't add the value beacuse reference value isn't found.");
        else if (this.head.value === referenceValue) {
            this.head.prev = newListNode;
            newListNode.next = this.head;
            this.head = newListNode;
        }
        else {
            var currentNode = this.head;
            while (((_a = currentNode.next) === null || _a === void 0 ? void 0 : _a.value) !== referenceValue) {
                if (currentNode.next)
                    currentNode = currentNode.next;
                else {
                    console.error("Can't add the value beacuse reference value isn't found.");
                    return;
                }
            }
            newListNode.next = currentNode.next;
            newListNode.prev = currentNode;
            if (newListNode.next) {
                newListNode.next.prev = newListNode;
            }
            currentNode.next = newListNode;
        }
    };
    DoublyLinkedList.prototype.traverseNode = function () {
        if (!this.head) {
            console.log("No data found.");
            return;
        }
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
    DoublyLinkedList.prototype.deleteNode = function (value) {
        var _a;
        if (!this.head)
            console.error("Can't find any value.");
        else if (this.head.value === value) {
            if (!this.head.next) {
                console.error("null");
            }
            else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        }
        else {
            var currentNode = this.head.next;
            while (((_a = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) === null || _a === void 0 ? void 0 : _a.value) !== value) {
                if (!(currentNode === null || currentNode === void 0 ? void 0 : currentNode.next)) {
                    console.error("Can't find any value.");
                    return;
                }
                else
                    currentNode = currentNode.next;
            }
            if (currentNode.next.next) {
                currentNode.next = currentNode.next.next;
                currentNode.next.prev = currentNode;
            }
            else {
                currentNode.next = null;
            }
        }
    };
    return DoublyLinkedList;
}());
var list = new DoublyLinkedList();
list.insertAtEnd(25);
list.insertAtEnd(37);
list.insertAtEnd(45);
list.insertAtEnd(12);
list.insertAtEnd(23);
list.traverseNode();
list.insertAtHead(91);
list.traverseNode();
list.insertAtNext(67, 45);
list.traverseNode();
list.insertAtPrev(89, 91);
list.traverseNode();
list.insertAtPrev(111, 45);
list.traverseNode();
list.insertAtPrev(125, 145);
list.traverseNode();
list.deleteNode(89);
list.traverseNode();
list.deleteNode(23);
list.traverseNode();
list.deleteNode(111);
list.traverseNode();
