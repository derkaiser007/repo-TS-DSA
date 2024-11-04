// tsc Sorting/Bubble_Sort
// node Sorting/Bubble_Sort
// Time Complexity: O(n^2)
// Auxiliary Space Complexity: O(1)
function bubble_sort(arr) {
    var swap = false;
    var temp;
    for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }
        if (swap === false)
            break;
        swap = false;
    }
    return arr;
}
var array1 = [567, 43, 89, -87, 1, -987];
console.log(bubble_sort(array1));
console.log(bubble_sort([123, 23, 45, 6, 145, 65, 27, 56, 89, 7890]));
console.log(bubble_sort([12, 20, 15, 13]));
