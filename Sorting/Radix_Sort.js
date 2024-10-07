// tsc Sorting/Radix_Sort
// node Sorting/Radix_Sort
// Time Complexity: O(number of digits in highest number * (length of array + base system))
// Auxiliary Space Complexity: O(length of array + base system)
function radix_sort(arr) {
    var length = String(Math.max.apply(Math, arr)).length;
    for (var i = 0; i < length; i++) {
        // let nestedArr: number[][] = new Array(10).fill(null).map(() => [])
        var nestedBucket = Array.from({ length: 10 }, function () { return []; });
        for (var j = 0; j < arr.length; j++) {
            var index = Math.floor(arr[j] / Math.pow(10, i)) % 10;
            nestedBucket[index].push(arr[j]);
        }
        arr = nestedBucket.flat();
    }
    return arr;
}
console.log(radix_sort([1234, 23, 456, 23456, 7890, 54, 345789, 123, 4567, 2389, 7890]));
