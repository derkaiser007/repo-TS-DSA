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
function quickSort(arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length - 1; }
    if (start < end) {
        var pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
    return arr;
}
function pivot(arr, start, end) {
    var i = start + 1;
    var j = start + 1;
    var temp;
    while (i <= end) {
        if (arr[start] > arr[i]) {
            if (i !== j) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            j++;
        }
        i++;
    }
    temp = arr[j - 1];
    arr[j - 1] = arr[start];
    arr[start] = temp;
    return j - 1;
}
console.log(quickSort([123, 27, 23, 56, 45, 6, 145, 65, 27, 56, 89, 23, 7890]));
console.log(quickSort([567, 43, 89, 46578, 1, -987]));
