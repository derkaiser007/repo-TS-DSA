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
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
            else
                break;
        }
    }
    return arr;
}
console.log(insertionSort([567, 43, 89, 46578, 1, -987]));
console.log(insertionSort([123, 23, 45, 6, 145, 65, 27, 56, 89, 7890]));
