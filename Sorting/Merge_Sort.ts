// tsc Sorting/Merge_Sort
// node Sorting/Merge_Sort

// Time Complexity: O(n log n), Dividing the array: log n, Merging the subarrays: n
// Auxiliary Space Complexity: O(n)
function merge_sort(arr: number[]): number[]{
    if(arr.length <= 1) return arr;
    
    const mid : number = Math.ceil(arr.length / 2)    
    let left = merge_sort(arr.slice(0, mid))
    let right = merge_sort(arr.slice(mid))
    
    return merge(left, right)
}

function merge(left: number[], right: number[]): number[]{
    let i : number = 0
    let j : number = 0
    let sorted_arr : number[] = []
    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            sorted_arr.push(left[i])
            i += 1
        } else {
            sorted_arr.push(right[j])
            j += 1
        }
    }
    if(i < left.length) sorted_arr.push(...left.slice(i));
    else if(j < right.length) sorted_arr.push(...right.slice(j));
    return sorted_arr   
}

const array4 : number [] = [567, 43, 89, 46578, 1, -987]
console.log(merge_sort(array4))
console.log(merge_sort([123,23,45,6,145,65,22,27,56,89,6,7890,23]))