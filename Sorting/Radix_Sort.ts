// tsc Sorting/Radix_Sort
// node Sorting/Radix_Sort

// let nestedArr: number[][] = new Array(10).fill(null).map(() => [])

// Time Complexity: O(number of digits in highest number * (length of array + base system))
// Auxiliary Space Complexity: O(length of array + base system)
function radix_sort(arr: number[]): number[] {
    let length: number = String(Math.max(...arr)).length
    for(let i = 0; i < length; i++){
        let nestedBucket: number[][] = Array.from({ length: 10 }, () => []);
        for(let j = 0; j < arr.length; j++){
            let index: number = Math.floor(arr[j] / 10**i) % 10
            nestedBucket[index].push(arr[j])
        }
        arr = nestedBucket.flat() // Time Complexity: O(n)
    }
    return arr
}

console.log(radix_sort([1234,23,456,23456,7890,54,345789,123,4567,2389,7890]))














