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
        if (!this.head) {
            this.head = newListNode;
        }
        else {
            var currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newListNode;
        }
    };
    SinglyLinkedList.prototype.insertInBetween = function (value, referenceValue) {
        var newListNode = new ListNode(value);
        if (!this.head)
            console.error("Can't add the value because reference value isn't found.");
        else {
            var currentNode = this.head;
            while (currentNode.value !== referenceValue) {
                if (!currentNode.next)
                    console.error("Can't add the value because reference value isn't found.");
                else
                    currentNode = currentNode.next;
            }
            newListNode.next = currentNode.next;
            currentNode.next = newListNode;
        }
    };
    SinglyLinkedList.prototype.traverseList = function () {
        if (!this.head)
            console.error("Nothing Found!");
        else {
            var currentNode = this.head;
            while (currentNode) {
                process.stdout.write("".concat(currentNode.value, " -> "));
                if (currentNode.next)
                    currentNode = currentNode.next;
                else
                    break;
            }
            process.stdout.write("null\n");
        }
    };
    SinglyLinkedList.prototype.deleteNode = function (value) {
        var _a;
        if (!this.head)
            console.log("Nothing Found!");
        else if (this.head === value) {
            this.head = this.head.next;
            console.log("Value deleted successfully.");
            return;
        }
        else {
            var currentNode = this.head;
            while (((_a = currentNode.next) === null || _a === void 0 ? void 0 : _a.value) !== value) {
                if (currentNode.next)
                    currentNode = currentNode.next;
            }
            currentNode.next = currentNode.next.next;
            console.log("Value deleted successfully.");
        }
    };
    return SinglyLinkedList;
}());
var list = new SinglyLinkedList();
list.insertAtEnd(25);
list.insertAtEnd(27);
list.insertAtEnd(15);
list.insertAtEnd(43);
list.insertAtEnd(57);
list.traverseList();
list.insertInBetween(92, 15);
list.traverseList();
list.deleteNode(92);
list.traverseList();
