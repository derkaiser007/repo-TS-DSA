// tsc Sorting/Bubble_Sort
// node Sorting/Bubble_Sort
function bubble_sort(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var arr = [567, 43, 89, -87, 1, -987];
console.log(bubble_sort(arr));
