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

/*
// Iteration
function lengthOfLongestPalindromeIteration(str: string): number{
    let i: number = 0.5
    let j: number = 0
    let maxLength: number = 0
    while(i < str.length){
        if(Number.isInteger(i)){
            while(i-j-1 >= 0 && i+j+1 < str.length){
                if(str[i-j-1] === str[i+j+1]) j++;
                else break;
            }
            j = j*2+1;
            if(maxLength < j) maxLength = j;
            j = 0;
            i += 0.5;
        } else {
            while(Math.floor(i-j) >= 0 && Math.ceil(i+j) < str.length){
                if(str[Math.floor(i-j)] === str[Math.ceil(i+j)]) j++;
                else break;
            }       
            j *= 2     
            if(maxLength < j) maxLength = j;
            j = 0;
            i += 0.5;
        }
    }
    return maxLength;
}

console.log(lengthOfLongestPalindromeIteration("banana"))
console.log(lengthOfLongestPalindromeIteration("malayalam"))
*/

/*
// Recursion
function lengthOfAPalindrome(str: string, left: number, right: number){
    while(left >= 0 && right < str.length && str[left] === str[right]){
        left--;
        right++;
    }
    return right-left-1;
}
function lengthOfLongestPalindromeRecursion(str: string): number{
    let maxLength: number = 0;
    for(let i = 1; i < str.length; i++){
        let length1: number = lengthOfAPalindrome(str, i, i)
        let length2: number = lengthOfAPalindrome(str, i, i+1)
        maxLength = Math.max(maxLength, length1, length2)
    }
    return maxLength;
}

console.log(lengthOfLongestPalindromeRecursion("banana"))
console.log(lengthOfLongestPalindromeRecursion("malayalam"))
*/

/*
// To check if a string or character is alphanumeric:

// Checking a Single Character:
function isAlphanumericChar(char: string): boolean {
    return /^[a-zA-Z0-9]$/.test(char);
}

console.log(isAlphanumericChar("a")); // true
console.log(isAlphanumericChar("1")); // true
console.log(isAlphanumericChar("@")); // false
console.log(isAlphanumericChar(" ")); // false

// Checking an Entire String:
function isAlphanumericString(str: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(str);
}

console.log(isAlphanumericString("abc123")); // true
console.log(isAlphanumericString("abc 123")); // false (contains space)
console.log(isAlphanumericString("abc@123")); // false (contains '@')
*/

/*
function shiftLetterWithWraparound(str: string, shift: number): string{
    let result: string = ''
    let code: number
    let newCode: number
    for(let i = 0; i < str.length; i++){
        code = str.charCodeAt(i)
        if(code + shift < 97) newCode = code + shift + 26;
        else if(code + shift > 122) newCode = code + shift - 26;
        else newCode = code + shift;
        result += String.fromCharCode(newCode)
    }
    return result
}

console.log(shiftLetterWithWraparound("wxyz", 2))
console.log(shiftLetterWithWraparound("abcd", -4))
*/

/*
let weights: number[] = [10,12,16]
let values: number[] = [100,300,400]
const items = weights
        .map((weight, index) => ({ weight, value: values[index] }))
        .sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

console.log(items)
*/

/*
function binarySearch(lis: number[], num: number){

    return -1
}

function lengthOfLIS(nums: number[]): number {
    let lis: number[] = []
    lis[0] = nums[0]

    for(let i = 0; i < nums.length; i++){
        
    }
    return lis.length
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])) 
console.log(lengthOfLIS([0,1,0,3,2,3])) 
console.log(lengthOfLIS([7,7,7,7,7,7,7])) 
console.log(lengthOfLIS([5,10,1,2,3,4])) 
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]))
console.log(lengthOfLIS([10,11,12,13,14,15,2,3,4,5,6,7,8,19])) 
*/

// tsc Practice/Practice
// node Practice/Practice

class ListNode<T>{
    value: T
    prev: ListNode<T> | null = null
    next: ListNode<T> | null = null

    constructor(val: T){
        this.value = val
    }
}

class DoublyLinkedList<T>{
    head: ListNode<T> | null = null
    size: number = 0

    insertAtEnd(val: T): string {
        const node = new ListNode(val)
        if(!this.head) this.head = node;
        else{
            let current = this.head
            while(current.next) current = current.next;
            current.next = node
            node.prev = current
        }
        this.size++
        return `${val} added successfully!`
    }

    insertAtHead(val: T): string{
        const node = new ListNode(val)
        if(!this.head) this.head = node;
        else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++        
        return `${val} added successfully!`
    }

    insertBefore(val: T, reference: T): string {
        const node = new ListNode(val)
        if(!this.head) return `${reference} isn't in the list!`;
        else if(this.head.value === reference) return this.insertAtHead(val);
        else{
            let current = this.head
            while(current.next && current.next.value !== reference) current = current.next;
            if(!current.next) return `${reference} isn't in the list!`;
            else{
                node.next = current.next
                current.next.prev = node
                current.next = node
                node.prev = current
            }
        }     
        this.size++    
        return `${val} added successfully!`
    }

    insertAfter(val: T, reference: T): string {
        const node = new ListNode(val)
        if(!this.head) return `${reference} isn't in the list!`;
        else{
            let current = this.head
            while(current.value !== reference && current.next) current = current.next;
            if(current.value !== reference && !current.next) return `${reference} isn't in the list!`;
            else if(current.value === reference && !current.next){
                current.next = node
                node.prev = current
            }
            else if(current.value === reference && current.next){
                node.next = current.next
                current.next.prev = node
                current.next = node
                node.prev = current
            }
        }      
        this.size++   
        return `${val} added successfully!`
    }

    searchingNode(val: T): string {
        if(!this.head) return `${val} isn't in the list!`;
        else{
            let current = this.head
            while(current.value !== val && current.next) current = current.next;
            if(current.value !== val && !current.next) return `${val} isn't in the list!`;
        }        
        return `${val} found successfully!`
    }

    deleteNode(val: T): string {
        if(!this.head) return `${val} isn't in the list!`;
        else if(this.head.value === val){
            if(this.head.next){
                this.head = this.head.next
                this.head.prev = null
            }
            else this.head = null;
        }
        else{
            let current = this.head
            while(current.next?.value !== val && current.next?.next) current = current.next;
            if(current.next?.value !== val && !current.next?.next) return `${val} isn't in the list!`;
            else if(current.next?.value === val && !current.next?.next) current.next = null;
            else if(current.next?.value === val && current.next?.next){
                current.next = current.next.next
                current.next.prev = current
            } 
        }
        this.size--
        return `${val} deleted successfully!`
    }

    traverseList(){
        if(!this.head) return null;
        else{
            let current = this.head
            while(current){
                process.stdout.write(`${current.value} <-> `)
                if(current.next) current = current.next;
                else{
                    process.stdout.write(`null\n`)
                    break
                }
            }
        }        
    }

    sizeOfList(){
        return this.size;
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



