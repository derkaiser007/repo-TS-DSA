// tsc Searching/Binary_Search
// node Searching/Binary_Search
function binary_search(sorted_arr, val, i, j) {
    if (i === void 0) { i = 0; }
    if (j === void 0) { j = sorted_arr.length - 1; }
    var mid = Math.floor((i + j) / 2);
    if (i < j) {
        if (sorted_arr[mid] < val)
            return binary_search(sorted_arr, val, mid + 1, j);
        else if (sorted_arr[mid] > val)
            return binary_search(sorted_arr, val, i, mid - 1);
        else
            return true;
    }
    return false;
}
var sorted_arr = [1, 2, 3, 4, 5];
var val = -10000000000;
console.log(binary_search(sorted_arr, val));
