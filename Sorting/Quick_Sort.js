// tsc Sorting/Quick_Sort
// node Sorting/Quick_Sort
function quick_sort(arr, low, high) {
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = arr.length - 1; }
    if (low < high) {
        var pivotIndex = partition(arr, low, high);
        quick_sort(arr, low, high = pivotIndex - 1);
        quick_sort(arr, low = pivotIndex + 1, high);
    }
    return arr;
}
function partition(arr, low, high) {
    var i = low + 1;
    var j = low + 1;
    while (i <= high) {
        if (arr[low] > arr[i]) {
            i += 1;
            j += 1;
            if (i !== j) {
                var temp_1 = arr[i - 1];
                arr[i - 1] = arr[j - 1];
                arr[j - 1] = temp_1;
            }
        }
        else {
            i += 1;
        }
    }
    var temp = arr[low];
    arr[low] = arr[j - 1];
    arr[j - 1] = temp;
    return j - 1;
}
var arr5 = [567, 43, 89, 46578, 1, -987];
console.log(quick_sort(arr5));
