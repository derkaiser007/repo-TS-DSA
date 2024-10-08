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
        return `${newListNode.value} added successfully!`
    }

    insertAtHead(value: T){
        const newListNode = new ListNode(value)
        if(!this.head) this.head = newListNode;
        else {
            this.head.prev = newListNode
            newListNode.next = this.head
            this.head = newListNode
        }
        return `${newListNode.value} added successfully!`
    }

    insertAtNext(value: T, referenceValue: T){
        const newListNode = new ListNode(value)
        if(!this.head) return `Empty List!`;
        else {
            let currentNode = this.head
            while(currentNode.value !== referenceValue){
                if(currentNode.next) currentNode = currentNode.next;
                else return `${referenceValue} isn't in the list!`
            }
            newListNode.next = currentNode.next
            newListNode.prev = currentNode
            if(newListNode.next) newListNode.next.prev = newListNode;
            currentNode.next = newListNode             
        }
        return `${newListNode.value} added successfully!`;
    }

    insertAtPrev(value: T, referenceValue: T){
        const newListNode = new ListNode(value)
        if(!this.head) return `Empty List!`;
        else if(this.head.value === referenceValue) return this.insertAtHead(newListNode.value);
        else {
            let currentNode = this.head
            while(currentNode.next?.value !== referenceValue){
                if(currentNode.next) currentNode = currentNode.next;
                else return `${referenceValue} isn't in the list!`
            }
            newListNode.next = currentNode.next
            currentNode.next.prev = newListNode
            currentNode.next = newListNode
            newListNode.prev = currentNode
        }
        return `${newListNode.value} added successfully!`
    }

    searchingNode(value: T){
        if(!this.head) return `Empty List!`;
        else {
            let currentNode = this.head
            while(currentNode.value !== value){
                if(currentNode.next) currentNode = currentNode.next;
                else return `${value} isn't in the list!`;                                
            }
            return `${value} found successfully!`
        }
    }

    deleteNode(value: T){
        if(!this.head) return `Empty List!`;
        else if(this.head.value === value){
            if(this.head.next) {
                this.head = this.head.next
                this.head.prev = null 
            }
            else this.head = null;       
        }
        else{
            let currentNode = this.head
            while(currentNode.next?.value !== value){
                if(currentNode?.next) currentNode = currentNode.next;
                else return `${value} isn't in the list!`                 
            }
            currentNode.next = currentNode.next.next
            if(currentNode.next?.prev) currentNode.next.prev = currentNode;   
        }
        return `${value} deleted successfully!`
    }

    traverseList(){
        if(!this.head) return `Empty List!`;
        else {
            let currentNode = this.head
            while(currentNode){
                process.stdout.write(`${currentNode.value} <-> `)
                if(currentNode.next) currentNode = currentNode.next;
                else break;
            }
            process.stdout.write(`null\n`)
        }
    }

    sizeOfList(){
        let size: number = 0
        if(!this.head) return `Size: 0`
        else {
            let currentNode = this.head
            while(currentNode){
                size++
                if(currentNode.next) currentNode = currentNode.next;
                else return `Size: ${size}`;
            }
        }   
    }

}

let list = new DoublyLinkedList<number | string | boolean>()
console.log(list.traverseList())
console.log(list.sizeOfList())
console.log(list.insertAtEnd("niraj"))
console.log(list.insertAtEnd(true))
console.log(list.insertAtEnd(123))
console.log(list.insertAtEnd("samar"))
list.traverseList()
console.log(list.insertAtHead(456))
console.log(list.insertAtHead(false))
list.traverseList()
console.log(list.insertAtNext("samay", 123))
console.log(list.insertAtNext("harshi", "samay"))
console.log(list.insertAtNext(786, "samar"))
list.traverseList()
console.log(list.insertAtPrev(6789, "harshi"))
console.log(list.insertAtPrev(1234, 6789))
console.log(list.insertAtPrev("wxyz", false))
list.traverseList()
console.log(list.searchingNode("harshi"))
console.log(list.searchingNode("wxyz"))
console.log(list.searchingNode(786))
console.log(list.deleteNode("samay"))
console.log(list.deleteNode(786))
console.log(list.deleteNode("wxyz"))
list.traverseList()
console.log(list.deleteNode("samar"))
console.log(list.insertAtEnd("neer"))
list.traverseList()
console.log(list.sizeOfList())

