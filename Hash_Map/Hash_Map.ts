// tsc Hash_Map/Hash_Map
// node Hash_Map/Hash_Map

// ####Hash Map with Objects#### //

// let hashMap: { [key: string]: number } = {};
// hashMap["apple"] = 5;
// hashMap["banana"] = 25;
// console.log(hashMap);
// console.log(hashMap["apple"]);

// let hashMap: { [key: symbol]: number } = {};
// let appleSymbol: symbol = Symbol("apple")
// hashMap[appleSymbol] = 5;
// let bananaSymbol: symbol = Symbol("banana")
// hashMap[bananaSymbol] = 25;
// console.log(hashMap);
// console.log(hashMap[appleSymbol]);



// ####Map Class#### //

// let map: Map<string, number> = new Map();
// map.set("apple", 5);
// map.set("banana", 25);
// console.log(map)
// console.log(map.get("apple"));
// console.log(map.get("guava"));
// console.log(map.has("banana"))
// console.log(map.has("guava"))
// console.log(map.delete("banana"))
// console.log(map)

// let map: Map<symbol, number> = new Map();
// let appleSymbol : symbol = Symbol("apple")
// map.set(appleSymbol, 5);
// let bananaSymbol : symbol = Symbol("banana")
// map.set(bananaSymbol, 25);
// console.log(map)
// console.log(map.get(appleSymbol));
// console.log(map.has(bananaSymbol))
// console.log(map.delete(bananaSymbol))
// console.log(map)



// ####Collision handling via separate chaining(Nested arrays in each bucket array)#### //

/*
class SimpleHashMap<K, V> {
    private storage: Array<[K, V][]>;
    private size: number = 5; // Size of the underlying storage array

    constructor() {
        this.storage = new Array(this.size).fill(null).map(() => []); // [[], [], [], [], [], ...]
        // this.storage = new Array(this.size).map(() => []); // [ <100 empty slots> ]
    }

    private hash(key: K): number {
        let hash = 0;
        const keyString = String(key);
        for (let i = 0; i < keyString.length; i++) {
            hash = (hash << 5) - hash + keyString.charCodeAt(i); 
            // hash = (hash × 31) + keyString.charCodeAt(i)
            // Multiplying by 31 is known to produce good distribution properties for hash functions because 
            // it helps spread the values across a wide range, minimizing collisions.
            hash |= 0; 
            // Convert to 32-bit integer value from 64-bit floating-point value
        }
        return Math.abs(hash) % this.size; 
        // Map to an array index
    }

    set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.storage[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update value if key already exists
                return;
            }
        }
        bucket.push([key, value]); // Insert new key-value pair
    }

    get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.storage[index];
        for (const [storedKey, storedValue] of bucket) {
            if (storedKey === key) {
                return storedValue;
            }
        }
        return undefined; // Key not found
    }

    delete(key: K): void {
        const index = this.hash(key);
        const bucket = this.storage[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return;
            }
        }
    }
}

// Usage
const simple_hash_map = new SimpleHashMap<string, number>()
simple_hash_map.set("apple", 5)
simple_hash_map.set("banana", 25)
console.log(simple_hash_map)
console.log(simple_hash_map.get("apple"))
console.log(simple_hash_map.delete("apple"))
console.log(simple_hash_map)
*/



// ####Collision handling via separate chaining(linked lists in each array bucket)#### //

/*
class HashNode<K, V> {
    key: K;
    value: V;
    next: HashNode<K, V> | null;

    constructor(key: K, value: V, next: HashNode<K, V> | null = null){
        this.key = key
        this.value = value
        this.next = next        
    }    
}

class SimpleHashMap<K, V> {
    private storage: Array<HashNode<K, V> | null> 
    private size: number = 5

    constructor(){
        this.storage = new Array(this.size).fill(null)
    }

    private hash(key: K): number {
        let hash: number = 0

        for(let i = 0; i < String(key).length; i++){
            hash = (hash << 5) - hash + String(key).charCodeAt(i)
            hash |= 0
        }

        return Math.abs(hash) % this.size
    }

    set(key: K, value: V): string {
        const newHashNode = new HashNode(key, value)
        const index: number = this.hash(key)
        if(!this.storage[index]){
            this.storage[index] = newHashNode           
        } else {
            let currentNode = this.storage[index]
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = newHashNode            
        }
        return "Successfully Added!"
    }

    get(key: K): V | string {
        const index = this.hash(key)
        if(this.storage[index] && this.storage[index].key === key) return this.storage[index].value;
        else {
            let currentNode = this.storage[index]
            while(currentNode && currentNode.next){
                currentNode = currentNode.next
                if(currentNode.key === key) return currentNode.value
            }
            return "Key, Value pair didn't found."
        }
    }

    delete(key: K): string {
        const index = this.hash(key)
        if(!this.storage[index]){
            return "Empty bucket!"
        } else if(this.storage[index].key === key) {
            if(this.storage[index].next){
                this.storage[index] = this.storage[index].next
                return "Successfully deleted!"
            } else {
                this.storage[index] = null                
            }
        } else {
            let currentNode = this.storage[index]
            while(currentNode.next && currentNode.next.key !== key){
                currentNode = currentNode.next                
            }
            if(!currentNode.next){
                return "Didn't find Key, Value pair."
            }
            currentNode.next = currentNode.next.next
        }
        return "Successfully deleted!"
    }
}

const simple_hash_map = new SimpleHashMap<string, number>()
console.log(simple_hash_map)
console.log(simple_hash_map.set("apple", 5))
console.log(simple_hash_map.set("banana", 25))
console.log(simple_hash_map.set("guava", 125))
console.log(simple_hash_map)
console.log(simple_hash_map.get("apple"))
console.log(simple_hash_map.get("guava"))
console.log(simple_hash_map.get("onion"))
console.log(simple_hash_map.delete("banana"))
console.log(simple_hash_map)
console.log(simple_hash_map.delete("guava"))
console.log(simple_hash_map)
console.log(simple_hash_map.delete("apple"))
console.log(simple_hash_map)
console.log(simple_hash_map.delete("onion"))
console.log(simple_hash_map)
*/



// ####Open Addressing Hashing via Linear Probing#### //

/*
class LinearProbingHashMap<K, V> {
    private storage: Array<[K, V] | null>;
    private size: number = 100;

    constructor() {
        this.storage = new Array(this.size).fill(null);
    }

    private hash(key: K): number {
        let hash = 0;
        const keyString = String(key);
        for (let i = 0; i < keyString.length; i++) {
            hash = (hash << 5) - hash + keyString.charCodeAt(i);
            hash |= 0; 
        }
        return Math.abs(hash) % this.size;
    }

    set(key: K, value: V): void {
        let index = this.hash(key);
        while (this.storage[index] !== null) {
            index = (index + 1) % this.size; // Linear probing
        }
        this.storage[index] = [key, value];
    }

    get(key: K): V | undefined {
        let index = this.hash(key);
        while (this.storage[index] !== null) {
            if (this.storage[index]![0] === key) {
                return this.storage[index]![1];
            }
            index = (index + 1) % this.size;
        }
        return undefined;
    }

    delete(key: K): void {
        let index = this.hash(key);
        while (this.storage[index] !== null) {
            if (this.storage[index]![0] === key) {
                this.storage[index] = null;
                return;
            }
            index = (index + 1) % this.size;
        }
    }
}
*/



// ####Open Addressing Hashing via Quadratic Probing#### //



// ####Open Addressing Hashing via Double Hashing#### //















