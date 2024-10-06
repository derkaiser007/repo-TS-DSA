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
function selectionSort(arr) {
    var temp;
    for (var i = 0; i < arr.length - 1; i++) {
        var k = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[k] > arr[j])
                k = j;
        }
        if (k !== i) {
            temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([123, 23, 45, 6, 145, 65, 27, 56, 89, 7890]));
console.log(selectionSort([567, 43, 89, -87, 1, -987]));
