// tsc Sorting/Bubble_Sort
// node Sorting/Bubble_Sort

function bubble_sort(arr: number[]): number[]{
    for(let i = arr.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j + 1]){
                let temp: number = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
const array1: number[] = [567, 43, 89, -87, 1, -987]
console.log(bubble_sort(array1))