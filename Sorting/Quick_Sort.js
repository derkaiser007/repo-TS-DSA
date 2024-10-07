// tsc Sorting/Quick_Sort
// node Sorting/Quick_Sort
function quick_sort(arr, low, high) {
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = arr.length - 1; }
    if (low < high) {
        var pivotIndex = partition(arr, low, high);
        quick_sort(arr, low, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, high);
    }
    return arr;
}
function partition(arr, low, high) {
    var i = low + 1;
    var j = low + 1;
    var temp;
    while (i <= high) {
        if (arr[low] > arr[i]) {
            if (i !== j) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
        i++;
    }
    temp = arr[low];
    arr[low] = arr[j - 1];
    arr[j - 1] = temp;
    return j - 1;
}
var arr5 = [567, 43, 89, 46578, 1, -987];
console.log(quick_sort(arr5));
console.log(quick_sort([123, 27, 23, 56, 45, 6, 145, 65, 27, 56, 89, 23, 7890]));
