// tsc Linked_List/Singly_LinkedList
// node Linked_List/Singly_LinkedList

class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList<T>{
    head: ListNode<T> | null = null;

    insertAtEnd(value: T): void{
        const newListNode = new ListNode(value)
        if(!this.head){
            this.head = newListNode
        } else {
            let currentNode = this.head
            while(currentNode.next !== null){
                currentNode = currentNode.next
            }     
            currentNode.next = newListNode 
        }  
    } 

    insertInBetween(value: T, referenceValue: T){
        const newListNode = new ListNode(value)
        if(!this.head) console.error("Can't add the value because reference value isn't found.");
        else {
            let currentNode = this.head
            while(currentNode.value !== referenceValue){
                if(!currentNode.next) console.error("Can't add the value because reference value isn't found.");
                else currentNode = currentNode.next;                
            }
            newListNode.next = currentNode.next
            currentNode.next = newListNode
        }
    }   
    
    traverseList(){
        if(!this.head) console.error("Nothing Found!");
        else{
            let currentNode = this.head
            while(currentNode){
                process.stdout.write(`${currentNode.value} -> `)
                if(currentNode.next) currentNode = currentNode.next;
                else break;
            }
            process.stdout.write(`null\n`)
        }
    }

    deleteNode(value: T){
        if(!this.head) console.log("Nothing Found!");
        else if(this.head === value) {
            this.head = this.head.next
            console.log("Value deleted successfully.")
            return
        } else {
            let currentNode = this.head
            while(currentNode.next?.value !== value){
                if(currentNode.next) currentNode = currentNode.next                                               
            }
            currentNode.next = currentNode.next.next 
            console.log("Value deleted successfully.")
        }
    }
}

const list = new SinglyLinkedList<number>()
list.insertAtEnd(25)
list.insertAtEnd(27)
list.insertAtEnd(15)
list.insertAtEnd(43)
list.insertAtEnd(57)
list.traverseList()
list.insertInBetween(92, 15)
list.traverseList()
list.deleteNode(92)
list.traverseList()

