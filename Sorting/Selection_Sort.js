// tsc Sorting/Selection_Sort
// node Sorting/Selection_Sort
function selection_sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var j = i;
        var k = i;
        while (j < arr.length - 1) {
            if (arr[k] > arr[j + 1]) {
                k = j + 1;
                j += 1;
            }
            else {
                j += 1;
            }
        }
        if (k !== i) {
            var temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
        }
    }
    return arr;
}
var arr = [567, 43, 89, 46578, 1, -987];
console.log(selection_sort(arr));
