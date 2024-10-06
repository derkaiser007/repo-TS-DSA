// tsc Sorting/Insertion_Sort
// node Sorting/Insertion_Sort

// Time Complexity: O(n^2)
// Auxiliary Space Complexity: O(1)
function insertion_sort(arr: number[]): number[]{
    for(let i = 1; i < arr.length; i++){
        while(i >= 0){
            if(arr[i-1] > arr[i]){
                let temp : number = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = temp
                i --
            }
            else break;
        }
    }
    return arr
}
const array3 : number[] = [567, 43, 89, -87, 1, -987]
console.log(insertion_sort(array3))
console.log(insertion_sort([123,23,45,6,145,65,27,56,89,7890]))