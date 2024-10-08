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
    tail: ListNode<T> | null = null

    insertAtEnd(value: T){
        let node = new ListNode(value)

        if(!this.head) this.head = this.tail = node;
        else if(this.tail){
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        return `${node.value} added successfully!`
    }

    insertAtHead(value: T){
        let node = new ListNode(value)

        if(!this.head) this.head = this.tail = node;
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
        else if(this.tail?.value === referenceValue) return this.insertAtEnd(node.value);
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
                else return `${value} found successfully!`                                
            }
            return `${value} isn't in the list!`
        }
    }

    deleteNode(value: T){
        if(!this.head) return `Empty List!`;
        else if(this.head.value === value){
            if(this.head.next){
                this.head = this.head.next
                this.head.prev = null
            } 
            else {
                
            }
        }
        else {
            let curr
        }
    }
}