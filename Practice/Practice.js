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
function mergeSort(arr) {
    if (arr.length <= 1)
        return arr;
    var mid = Math.ceil(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    var newArr = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            newArr.push(left[i]);
            i++;
        }
        else {
            newArr.push(right[j]);
            j++;
        }
    }
    if (i < left.length)
        newArr.push.apply(newArr, left.splice(i));
    else if (j < right.length)
        newArr.push.apply(newArr, right.splice(j));
    return newArr;
}
console.log(mergeSort([123, 23, 45, 6, 145, 65, 22, 27, 56, 89, 6, 7890, 23]));
