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

class ListNode<K, V>{
    key: K
    value: V
    next: ListNode<K, V> | null = null

    constructor(key: K, value: V){
        this.key = key
        this.value = value
        this.next = null
    }
}

class HashMap<K, V>{
    private storage: Array<ListNode<K, V> | null>;
    private size: number = 5

    constructor(){
        this.storage = new Array(this.size).fill(null)
    }

    private hashing(key: K): number{
        let val: number = String(key).length % this.size
        return val
    }

    set(key: K, value: V): string{
        let node = new ListNode(key, value)
        const index = this.hashing(key)
        if(!this.storage[index]) this.storage[index] = node;
        else {
            let current = this.storage[index]
            while(current && current.key !== key){
                if(current.next) current = current.next;
                else{
                    current.next = node
                    break
                }
            }
            if(current && current.key === key) current.value = value;
        }
        return `Key: ${key} & Value: ${value} added successfully!`
    }

    get(key: K): string{
        const index = this.hashing(key)
        let current = this.storage[index]
        while(current && current.key !== key){
            if(current.next) current = current.next;
            else return `${key} isn't in the table!`;
        }
        return `Key: ${key} & Value: ${current?.value}`;
    }

    delete(key: K){
        const index = this.hashing(key)
        let bucket: ListNode<K, V> | null = this.storage[index]
        if(!bucket) return `${key} isn't in the table!`;
        else if(bucket.key === key && !bucket.next) bucket = null;
        else if(bucket.key === key && bucket.next) bucket = bucket.next;
        else{
            let current = bucket
            while(current.next && current.next.key !== key){
                if(current.next.next) current = current.next;
                else return `${key} isn't in the table!`;                 
            }
            if(current.next?.next) current.next = current.next.next;
            else current.next = null;
            return `${key} and corresponding value deleted successfully!`
        }
    }
}

let hashmap = new HashMap<number | string, string>()
console.log(hashmap.set("567", "niraj"))
console.log(hashmap.set(567, "neer"))
console.log(hashmap.set("chhajer", "harshi"))
console.log(hashmap.set("juhu", "vile parle"))
console.log(hashmap.set(786, "786"))
console.log(hashmap)
console.log(hashmap.get(567))
console.log(hashmap.set(567, "shri"))
console.log(hashmap.get(567))
console.log(hashmap.get("567"))
console.log(hashmap.get("niraj"))
console.log(hashmap.delete(567))
console.log(hashmap.delete(786))
console.log(hashmap.delete("niraj"))
console.log(hashmap.get(567))
console.log(hashmap)


