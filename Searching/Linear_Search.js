// tsc Searching/Linear_Search
// node Searching/Linear_Search
function linear_search(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}
var arr = [1, 2, 3, 4, 5];
var val = "niraj";
console.log(linear_search(arr, val));
