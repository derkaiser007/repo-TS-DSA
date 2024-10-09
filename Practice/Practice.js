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
var HashMap = /** @class */ (function () {
    function HashMap() {
        this.size = 5;
        this.storage = new Array(this.size).fill(null).map(function () { return []; });
    }
    HashMap.prototype.hashing = function (key) {
        var val = String(key).length % this.size;
        return val;
    };
    HashMap.prototype.set = function (key, value) {
        var index = this.hashing(key);
        var bucket = this.storage[index];
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key)
                bucket[i][1] = value;
        }
        bucket.push([key, value]);
        return "[".concat(key, ", ").concat(value, "] added successfully!");
    };
    HashMap.prototype.get = function (key) {
        var index = this.hashing(key);
        var bucket = this.storage[index];
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key)
                return "".concat(bucket[i][1]);
        }
        return "Value for Key: ".concat(key, " doesn't find!");
    };
    HashMap.prototype.delete = function (key) {
        var index = this.hashing(key);
        var bucket = this.storage[index];
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return "".concat(key, " and corresponding value deleted successfully!");
            }
        }
        return "".concat(key, " isn't found!");
    };
    return HashMap;
}());
var hashmap = new HashMap();
console.log(hashmap.set("samay", "raina"));
console.log(hashmap.set(25, "vikram"));
console.log(hashmap.set("naman", "5678"));
console.log(hashmap.set("chhajer", "harshi"));
console.log(hashmap);
console.log(hashmap.get("samay"));
console.log(hashmap.get("25"));
console.log(hashmap.get("niraj"));
console.log(hashmap.delete("samay"));
console.log(hashmap.delete("niraj"));
console.log(hashmap);
