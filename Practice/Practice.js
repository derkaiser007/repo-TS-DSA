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
var ListNode = /** @class */ (function () {
    function ListNode(key, value) {
        this.next = null;
        this.key = key;
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var HashMap = /** @class */ (function () {
    function HashMap() {
        this.size = 5;
        this.storage = new Array(this.size).fill(null);
    }
    HashMap.prototype.hashing = function (key) {
        var val = String(key).length % this.size;
        return val;
    };
    HashMap.prototype.set = function (key, value) {
        var node = new ListNode(key, value);
        var index = this.hashing(key);
        if (!this.storage[index]) {
            this.storage[index] = node;
            return "Key: ".concat(key, " & Value: ").concat(value, " added successfully!");
        }
        else {
            var current = this.storage[index];
            while (current && current.key !== key) {
                if (current.next)
                    current = current.next;
                else {
                    current.next = node;
                    return "Key: ".concat(key, " & Value: ").concat(value, " added successfully!");
                }
            }
            if (current && current.key === key)
                current.value = value;
            return "Key: ".concat(key, " & Value: ").concat(value, " added successfully!");
        }
    };
    HashMap.prototype.get = function (key) {
        var index = this.hashing(key);
        var bucket = this.storage[index];
        var current = bucket;
        while (current && current.key !== key) {
            if (current.next)
                current = current.next;
            else
                return "".concat(key, " is not in the table!");
        }
        return "Key: ".concat(key, " & Value: ").concat(current === null || current === void 0 ? void 0 : current.value);
    };
    HashMap.prototype.delete = function (key) {
        var _a;
        var index = this.hashing(key);
        var bucket = this.storage[index];
        if (!bucket)
            return "".concat(key, " isn't in the table!");
        else if (bucket.key === key && !bucket.next)
            bucket = null;
        else if (bucket.key === key && bucket.next)
            bucket = bucket.next;
        else {
            var current = bucket;
            while (current.next && current.next.key !== key) {
                if (current.next.next)
                    current = current.next;
                else
                    return "".concat(key, " isn't in the table!");
            }
            if ((_a = current.next) === null || _a === void 0 ? void 0 : _a.next)
                current.next = current.next.next;
            else
                current.next = null;
            return "".concat(key, " and corresponding value deleted successfully!");
        }
    };
    return HashMap;
}());
var hashmap = new HashMap();
console.log(hashmap.set("567", "niraj"));
console.log(hashmap.set(567, "neer"));
console.log(hashmap.set("chhajer", "harshi"));
console.log(hashmap.set("juhu", "vile parle"));
console.log(hashmap.set(786, "786"));
console.log(hashmap);
console.log(hashmap.get(567));
console.log(hashmap.set(567, "shri"));
console.log(hashmap.get(567));
console.log(hashmap.get("567"));
console.log(hashmap.get("niraj"));
console.log(hashmap.delete(567));
console.log(hashmap.delete(786));
console.log(hashmap.delete("niraj"));
console.log(hashmap.get(567));
console.log(hashmap);
