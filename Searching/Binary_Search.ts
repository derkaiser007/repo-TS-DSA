// tsc Searching/Binary_Search
// node Searching/Binary_Search

function binary_search(sorted_arr: number[], val: number, i = 0, j = sorted_arr.length -1): boolean{
    let mid = Math.floor((i + j) / 2)
    if(i < j){
        if(sorted_arr[mid] < val) return binary_search(sorted_arr, val, mid + 1, j);
        else if(sorted_arr[mid] > val) return binary_search(sorted_arr, val, i, mid - 1);
        else return true;
    }
    return false;
}
const sorted_arr: number[] = [1, 2, 3, 4, 5]
const val: number = -10000000000
console.log(binary_search(sorted_arr, val))