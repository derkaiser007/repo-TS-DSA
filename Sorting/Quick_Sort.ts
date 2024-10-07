// tsc Sorting/Quick_Sort
// node Sorting/Quick_Sort

// Time Complexity: O(n log n)/O(n^2)
// Auxiliary Space Complexity: O(log n)/O(n)
function quick_sort(arr: number[], low : number = 0, high : number = arr.length-1): number[]{
    if(arr.length <= 1) return arr;
    
    if(low < high){
        const pivotIndex : number = partition(arr, low, high)
        quick_sort(arr, low, pivotIndex-1)
        quick_sort(arr, pivotIndex+1, high)    
    }    
    return arr
}

function partition(arr: number[], low : number, high : number): number{
    let i : number = low + 1
    let j : number = low + 1
    let temp : number
    while(i <= high){
        if(arr[low] > arr[i]){
            if(i !== j){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            } 
            j++;          
        }
        i++;
    }
    temp = arr[low]
    arr[low] = arr[j-1]
    arr[j-1] = temp

    return j-1
}

const arr5: number[] = [567, 43, 89, 46578, 1, -987]
console.log(quick_sort(arr5))
console.log(quick_sort([123,27,23,56,45,6,145,65,27,56,89,23,7890]))