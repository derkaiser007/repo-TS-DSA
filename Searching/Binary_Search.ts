// tsc Searching/Binary_Search
// node Searching/Binary_Search

/*
// Time Complexity: O(log n)
// Auxiliary Space Complexity: O(1)
function binarySearch(arr: number[], val: number): boolean{
    let start: number = 0
    let end: number = arr.length-1
    while(start <= end){
        let mid: number = Math.floor((start+end)/2)
        if(arr[mid] === val) return true;
        else if(arr[mid] < val) start = mid+1;
        else end = mid-1;
    }
    return false;
}
*/

// Time Complexity: O(log n)
// Auxiliary Space Complexity: O(log n)
function binarySearch(arr: number[], val: number, start: number = 0, end: number = arr.length-1): boolean {
    if(start <= end){
        let mid: number = Math.floor((start+end)/2);
        console.log(start, end, mid);
        if(arr[mid] === val) return true;
        else if(arr[mid] > val) return binarySearch(arr, val, start, mid-1);
        else return binarySearch(arr, val, mid+1, end);         
    }
    return false;
}

console.log(binarySearch([4, 12, 23, 34, 45, 56, 67, 78, 89, 90, 101, 111, 122, 132, 143, 156, 163], 163))