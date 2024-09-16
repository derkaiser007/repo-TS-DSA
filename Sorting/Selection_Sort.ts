// tsc Sorting/Selection_Sort
// node Sorting/Selection_Sort

function selection_sort(arr: number[]): number[]{
    for(let i = 0; i < arr.length-1; i++){
        let j: number = i
        let k: number = i
        while(j < arr.length-1){
            if(arr[k] > arr[j+1]){
                k = j+1
                j += 1
            } else {
                j += 1
            }           
        }
        if(k !== i){
            let temp : number = arr[i]
            arr[i] = arr[k]
            arr[k] = temp
        }        
    }
    return arr
}

const arr2: number[] = [567, 43, 89, 46578, 1, -987]
console.log(selection_sort(arr2))