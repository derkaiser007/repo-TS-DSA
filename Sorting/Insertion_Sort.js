// tsc Sorting/Insertion_Sort
// node Sorting/Insertion_Sort
function insertion_sort(arr) {
    for (var i = 1; i < arr.length; i++) {
        while (i >= 0) {
            if (arr[i - 1] > arr[i]) {
                var temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                i -= 1;
            }
            else
                break;
        }
    }
    return arr;
}
var array3 = [567, 43, 89, -87, 1, -987];
console.log(insertion_sort(array3));