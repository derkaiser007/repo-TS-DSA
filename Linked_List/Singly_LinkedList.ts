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

    insertAtEnd(value: T){
        const newListNode = new ListNode(value)
        if(!this.head) this.head = newListNode;
        else {
            let currentNode = this.head
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = newListNode
        } 
        return `${newListNode.value} added successfully!`  
    } 

    insertAtHead(value:T){
        const newListNode = new ListNode(value)
        if(!this.head) this.head = newListNode;
        else {
            newListNode.next = this.head
            this.head = newListNode
        }
        return `${newListNode.value} added successfully!` 
    }

    insertBefore(value: T, referenceValue: T){
        const newListNode = new ListNode(value)

        if(!this.head) return "Empty List!";
        else if(this.head.value === referenceValue) return this.insertAtHead(newListNode.value);
        else{
            let current = this.head
            while(current.next && current.next.value !== referenceValue){
                if(current.next.next) current = current.next;
                else return `${referenceValue} isn't available!`;
            }
            newListNode.next = current.next
            current.next = newListNode
        }
        return `${newListNode.value} added successfully!` 
    } 
    
    insertAfter(value: T, referenceValue: T){
        const newListNode = new ListNode(value)
        if(!this.head) return `Empty List!`;
        else {
            let currentNode = this.head
            while(currentNode.value !== referenceValue){
                if(!currentNode.next) return `${referenceValue} isn't available!`;
                else currentNode = currentNode.next;                
            }
            newListNode.next = currentNode.next
            currentNode.next = newListNode
        }
        return `${newListNode.value} added successfully!` 
    }

    searchingNode(value: T){
        if(!this.head) return `Empty List!`;
        else{
            let currentNode = this.head
            while(currentNode.value !== value){
                if(currentNode?.next) currentNode = currentNode.next;
                else return `${value} isn't in the list!`;
            }
            return `${value} found successfully!`
        }
    }

    deleteNode(value: T){
        if(!this.head) return `Empty List!`;
        else if(this.head.value === value){
            if(this.head.next) this.head = this.head.next;
            else this.head = null;
        }
        else{
            let currentNode = this.head
            while(currentNode.next?.value !== value){
                if(currentNode.next?.next) currentNode = currentNode.next;
                else return `${value} isn't in the list!`;
            }
            if(!currentNode.next?.next) currentNode.next = null;
            else currentNode.next = currentNode.next.next
        }
        return `${value} is deleted successfully!`;
    }
    
    traverseList(){
        if(!this.head) return `Empty List!`;
        else{
            let currentNode = this.head
            while(currentNode){
                process.stdout.write(`${currentNode.value} -> `)
                if(currentNode.next) currentNode = currentNode.next;
                else{
                    process.stdout.write(`null\n`)
                    break
                }
            }
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
                else break;
            }
        }
        return `Size: ${size}`
    }
}

let list = new SinglyLinkedList<number | string | boolean>()
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
console.log(list.insertAfter("samay", 123))
console.log(list.insertAfter("harshi", "samay"))
console.log(list.insertAfter(786, "samar"))
list.traverseList()
console.log(list.insertBefore(6789, "harshi"))
console.log(list.insertBefore(1234, 6789))
console.log(list.insertBefore("wxyz", false))
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

