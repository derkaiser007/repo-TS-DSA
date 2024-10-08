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

class ListNode<T>{
    value: T
    prev: ListNode<T> | null = null
    next: ListNode<T> | null = null

    constructor(value: T){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList<T>{
    head: ListNode<T> | null = null

    insertAtEnd(value: T){
        let node = new ListNode(value)

        if(!this.head) this.head = node;
        else {
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
            node.prev = current
        }
        return `${node.value} added successfully!`
    }

    insertAtHead(value: T){
        let node = new ListNode(value)

        if(!this.head) this.head = node;
        else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        return `${node.value} added successfully!`
    }

    insertAtNext(value: T, referenceValue: T){
        let node = new ListNode(value)

        if(!this.head) return `Empty List!`;
        else {
            let current = this.head
            while(current.value !== referenceValue){
                if(current.next) current = current.next;
                else return `${referenceValue} isn't in the list!`
            }
            node.next = current.next
            if(current.next) current.next.prev = node;
            current.next = node
            node.prev = current
        }
        return `${node.value} added successfully!`;
    }

    insertAtPrev(value: T, referenceValue: T){
        let node = new ListNode(value)

        if(!this.head) return `Empty List!`;
        else if(this.head.value === referenceValue) return this.insertAtHead(node.value);
        else {
            let current = this.head
            while(current.next?.value !== referenceValue){
                if(current.next?.next) current = current.next;
                else return `${referenceValue} isn't in the list!`
            }
            node.next = current.next
            current.next.prev = node
            current.next = node
            node.prev = current
        }
        return `${node.value} added successfully!`
    }

    searchingNode(value: T){
        if(!this.head) return `Empty List!`;
        else {
            let current = this.head
            while(current.value !== value){
                if(current.next) current = current.next;
                else return `${value} isn't in the list!`                                
            }
            return `${value} found successfully!`
        }
    }

    deleteNode(value: T){
        if(!this.head) return `Empty List!`;
        else if(this.head.value === value){
            if(this.head.next){
                this.head = this.head.next
                this.head.prev = null
            } 
            else this.head = null;
        }
        else {
            let current = this.head
            while(current.next?.value !== value){
                if(current.next?.next) current = current.next;
                else return `${value} isn't in the list!`
            }
            current.next = current.next.next
            if(current.next?.prev) current.next.prev = current;
        }
        return `${value} deleted successfully!`
    }

    traverseList(){
        if(!this.head) return `Empty List!`;
        else {
            let current = this.head
            while(current){
                process.stdout.write(`${current.value} <-> `)
                if(current.next) current = current.next;
                else break;
            }
            process.stdout.write(`null\n`)             
        }
    }

    sizeOfList(){
        let size: number = 0
        if(!this.head) return `Size: 0`
        else {
            let current = this.head
            while(current){
                size++
                if(current.next) current = current.next;
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

