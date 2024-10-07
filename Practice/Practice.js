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
// Time Complexity: O(number of digits in maximum number * (length of array + base system))
function radix_sort(arr) {
    var length = String(Math.max.apply(Math, arr)).length;
    for (var i = 1; i <= length; i++) {
        // let nestedArr: number[][] = new Array(10).fill(null).map(() => [])
        var nestedArr = Array.from({ length: 10 }, function () { return []; });
        for (var j = 0; j < arr.length; j++) {
            var index = Math.floor(arr[j] / Math.pow(10, (i - 1))) % 10;
            nestedArr[index].push(arr[j]);
        }
        arr = nestedArr.flat();
    }
    return arr;
}
console.log(radix_sort([1234, 23, 456, 23456, 7890, 54, 345789, 123, 4567, 2389, 7890]));
