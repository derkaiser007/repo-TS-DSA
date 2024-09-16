// tsc Sorting/Quick_Sort
// node Sorting/Quick_Sort

function quick_sort(arr: number[], low : number = 0, high : number = arr.length-1): number[]{
    if(low < high){
        const pivotIndex : number = partition(arr, low, high)
        quick_sort(arr, low, high = pivotIndex-1)
        quick_sort(arr, low = pivotIndex+1, high)    
    }    
    return arr
}

function partition(arr: number[], low : number, high : number): number{
    let i : number = low + 1
    let j : number = low + 1
    while(i <= high){
        if(arr[low] > arr[i]){
            i += 1
            j += 1
            if(i !== j){
                let temp : number = arr[i-1]
                arr[i-1] = arr[j-1]
                arr[j-1] = temp
            }            
        } else {
            i += 1
        }
    }
    let temp : number = arr[low]
    arr[low] = arr[j-1]
    arr[j-1] = temp

    return j-1
}

const arr5: number[] = [567, 43, 89, 46578, 1, -987]
console.log(quick_sort(arr5))