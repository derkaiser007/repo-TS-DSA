// tsc Searching/Binary_Search
// node Searching/Binary_Search
// Time Complexity: O(log n)
// Auxiliary Space Complexity: O(log n)
function binarySearch(arr, val, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length - 1; }
    if (start <= end) {
        var mid = Math.floor((start + end) / 2);
        console.log(start, end, mid);
        if (arr[mid] === val)
            return true;
        else if (arr[mid] > val)
            return binarySearch(arr, val, start, mid - 1);
        else
            return binarySearch(arr, val, mid + 1, end);
    }
    return false;
}
console.log(binarySearch([4, 12, 23, 34, 45, 56, 67, 78, 89, 90, 101, 111, 122, 132, 143, 156, 163], 163));
