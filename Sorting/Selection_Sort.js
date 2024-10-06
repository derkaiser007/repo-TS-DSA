// tsc Sorting/Selection_Sort
// node Sorting/Selection_Sort
// Time Complexity: O(n^2)
// Auxiliary Space Complexity: O(1)
function selection_sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var least = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[least] > arr[j])
                least = j;
        }
        if (least !== i) {
            var temp = arr[i];
            arr[i] = arr[least];
            arr[least] = temp;
        }
    }
    return arr;
}
var arr2 = [567, 43, 89, 46578, 1, -987];
console.log(selection_sort(arr2));
console.log(selection_sort([123, 23, 45, 6, 145, 65, 27, 56, 89, 7890]));
