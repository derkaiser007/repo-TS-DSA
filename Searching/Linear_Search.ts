// tsc Searching/Linear_Search
// node Searching/Linear_Search

function linear_search(arr: any[], val: any): boolean{
    for(let i = 0; i < arr.length; i++){
       if(arr[i] === val) {
        return true
       }
    }
    return false
}
const arr: any[] = [1, 2, 3, 4, 5]
const val: any = "niraj"
console.log(linear_search(arr, val))