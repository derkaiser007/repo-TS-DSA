// tsc Hash_Map/Hash_Map
// node Hash_Map/Hash_Map
// ####Hash Map with Objects#### //
// let HashMap: {[key: number]: string} = {}
// HashMap[5] = "apple"
// HashMap[25] = "banana"
// console.log(HashMap)
// console.log(HashMap[5])
// console.log(HashMap[35])
// console.log(delete HashMap[5])  // true
// console.log(delete HashMap[15]) // true -> showing same result
// console.log(HashMap)
// HashMap[5] = "guava"
// console.log(HashMap)
// let HashMap: { [key: symbol]: number } = {};
// let appleSymbol: symbol = Symbol("apple")
// HashMap[appleSymbol] = 5;
// let bananaSymbol: symbol = Symbol("banana")
// HashMap[bananaSymbol] = 25;
// console.log(HashMap);
// console.log(HashMap[appleSymbol]);
// console.log(HashMap["guavaSymbol"])
// console.log(delete HashMap[appleSymbol])  // true
// console.log(delete HashMap["guavaSymbol"]) // true -> showing same result
// console.log(HashMap);
// HashMap[appleSymbol] = 125;
// console.log(HashMap);
// ####Map Class#### //
// let HashMap: Map<number, string> = new Map()
// console.log(HashMap.set(5, "apple"))
// console.log(HashMap.set(15, "banana"))
// console.log(HashMap.set(25, "guava"))
// console.log(HashMap)
// console.log(HashMap.get(25))
// console.log(HashMap.get(35))
// console.log(HashMap.keys())
// console.log(HashMap.values())
// console.log(HashMap.size)
// console.log(HashMap.delete(5))  // true
// console.log(HashMap.delete(35)) //false
// console.log(HashMap)
// let HashMap: Map<symbol, number> = new Map();
// let appleSymbol : symbol = Symbol("apple")
// HashMap.set(appleSymbol, 5);
// let bananaSymbol : symbol = Symbol("banana")
// HashMap.set(bananaSymbol, 25);
// console.log(HashMap)
// console.log(HashMap.get(appleSymbol));
// console.log(HashMap.has(bananaSymbol))
// console.log(HashMap.delete(bananaSymbol))
// console.log(HashMap)
// ####Collision handling via separate chaining(Arrays in bucket array)#### //
var SimpleHashMap = /** @class */ (function () {
    function SimpleHashMap() {
        this.size = 5; // Size of the underlying storage array
        this.storage = new Array(this.size).fill(null).map(function () { return []; }); // [[], [], [], [], [], ...]
        // this.storage = new Array(this.size).map(() => []); // [ <5 empty slots> ]
    }
    SimpleHashMap.prototype.hash = function (key) {
        var hash = 0;
        var keyString = String(key);
        for (var i = 0; i < keyString.length; i++) {
            hash = (hash << 5) - hash + keyString.charCodeAt(i);
            // hash = (hash × 31) + keyString.charCodeAt(i)
            // Multiplying by 31 is known to produce good distribution properties for hash functions because 
            // it helps spread the values across a wide range, minimizing collisions.
            hash |= 0;
            // Convert to 32-bit integer value from 64-bit floating-point value
        }
        return Math.abs(hash) % this.size;
        // Map to an array index
    };
    SimpleHashMap.prototype.set = function (key, value) {
        var index = this.hash(key);
        var bucket = this.storage[index];
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update value if key already exists
                return "[".concat(key, ", ").concat(value, "] added successfully!");
            }
        }
        bucket.push([key, value]); // Insert new key-value pair
        return "[".concat(key, ", ").concat(value, "] added successfully!");
    };
    SimpleHashMap.prototype.get = function (key) {
        var index = this.hash(key);
        var bucket = this.storage[index];
        for (var _i = 0, bucket_1 = bucket; _i < bucket_1.length; _i++) {
            var _a = bucket_1[_i], storedKey = _a[0], storedValue = _a[1];
            if (storedKey === key)
                return storedValue;
        }
        return "Value for Key: ".concat(key, " doesn't find!"); // Key not found
    };
    SimpleHashMap.prototype.delete = function (key) {
        var index = this.hash(key);
        var bucket = this.storage[index];
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return "".concat(key, " and corresponding value deleted successfully!");
            }
        }
        return "".concat(key, " isn't found!");
    };
    return SimpleHashMap;
}());
var simple_hash_map = new SimpleHashMap();
console.log(simple_hash_map.set("samay", "raina"));
console.log(simple_hash_map.set(25, "vikram"));
console.log(simple_hash_map.set("naman", "5678"));
console.log(simple_hash_map.set("chhajer", "harshi"));
console.log(simple_hash_map);
console.log(simple_hash_map.get("samay"));
console.log(simple_hash_map.get(25));
console.log(simple_hash_map.get("25"));
console.log(simple_hash_map.get("niraj"));
console.log(simple_hash_map.delete("samay"));
console.log(simple_hash_map.delete(25));
console.log(simple_hash_map.delete("25"));
console.log(simple_hash_map.delete("niraj"));
console.log(simple_hash_map);
console.log(simple_hash_map.get("samay"));
console.log(simple_hash_map.get("25"));
// ####Collision handling via separate chaining(Linked lists in array bucket)#### //
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
