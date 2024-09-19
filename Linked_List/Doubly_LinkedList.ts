// tsc Linked_List/Doubly_LinkedList
// node Linked_List/Doubly_LinkedList

class ListNode<T> {
    value: T;
    prev: ListNode<T> | null = null;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
        this.prev = null
        this.next = null;
    }
}

class DoublyLinkedList<T>{
    head: ListNode<T> | null = null;

    insertAtEnd(value: T){
        const newListNode = new ListNode(value)
        if(!this.head) this.head = newListNode;
        else {
            let currentNode = this.head
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = newListNode
            newListNode.prev = currentNode        
        }
    }

    insertAtHead(value: T){
        const newListNode = new ListNode(value)
        if(!this.head) this.head = newListNode;
        else {
            this.head.prev = newListNode
            newListNode.next = this.head
            this.head = newListNode
        }
    }

    insertAtNext(value: T, referenceValue: T){
        const newListNode = new ListNode(value)
        if(!this.head) console.error("Can't add the value beacuse reference value isn't found.");
        else {
            let currentNode = this.head
            while(currentNode.value !== referenceValue){
                if(!currentNode.next){
                    console.error("Can't add the value beacuse reference value isn't found.");
                    return
                }
                else currentNode = currentNode.next;
            }
            newListNode.next = currentNode.next
            newListNode.prev = currentNode
            if(newListNode.next){
                newListNode.next.prev = newListNode
            }
            currentNode.next = newListNode             
        }
    }

    insertAtPrev(value: T, referenceValue: T){
        const newListNode = new ListNode(value)
        if(!this.head) console.error("Can't add the value beacuse reference value isn't found.");
        else if(this.head.value === referenceValue) {
            this.head.prev = newListNode
            newListNode.next = this.head
            this.head = newListNode
        }
        else {
            let currentNode = this.head
            while(currentNode.next?.value !== referenceValue){
                if(currentNode.next) currentNode = currentNode.next;
                else {
                    console.error("Can't add the value beacuse reference value isn't found.");
                    return
                }
            }
            newListNode.next = currentNode.next
            newListNode.prev = currentNode
            if(newListNode.next){
                newListNode.next.prev = newListNode
            }
            currentNode.next = newListNode
        }
    }

    traverseNode(){
        if(!this.head){
            console.log("No data found.")
            return
        } else {
            let currentNode = this.head
            while(currentNode){
                process.stdout.write(`${currentNode.value} <-> `)
                if(currentNode.next) currentNode = currentNode.next;
                else break;
            }
            process.stdout.write(`null\n`)
        }
    }

    deleteNode(value: T){
        if(!this.head) console.error("Can't find any value.");
        else if(this.head.value === value) {
            if(!this.head.next) {
                console.error("null")
            }
            else {
                this.head = this.head.next
                this.head.prev = null            
            }           
        }
        else{
            let currentNode = this.head.next
            while(currentNode?.next?.value !== value){
                if(!currentNode?.next){
                    console.error("Can't find any value.");
                    return
                }
                else currentNode = currentNode.next                
            }
            if(currentNode.next.next){
                currentNode.next = currentNode.next.next
                currentNode.next.prev = currentNode
            } else {
                currentNode.next = null
            }            
        }
    }
}

const list = new DoublyLinkedList<number>()
list.insertAtEnd(25)
list.insertAtEnd(37)
list.insertAtEnd(45)
list.insertAtEnd(12)
list.insertAtEnd(23)
list.traverseNode()
list.insertAtHead(91)
list.traverseNode()
list.insertAtNext(67, 45)
list.traverseNode()
list.insertAtPrev(89, 91)
list.traverseNode()
list.insertAtPrev(111, 45)
list.traverseNode()
list.insertAtPrev(125, 145)
list.traverseNode()
list.deleteNode(89)
list.traverseNode()
list.deleteNode(23)
list.traverseNode()
list.deleteNode(111)
list.traverseNode()