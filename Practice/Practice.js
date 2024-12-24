// tsc Practice/Practice
// node Practice/Practice
/*
const nums: number[] = [12, 45, 12, 16]
console.log(nums)
console.log(nums.sort((a, b) => a-b)) //Ascending Order
console.log(nums)
console.log(nums.sort((a, b) => b-a)) //Descending Order
console.log(nums)
*/
/*
const nums: number[] = [12, 45, 12, 16]
const sortedNums = nums.slice().sort((a, b) => a - b);
console.log(nums)
console.log(sortedNums)
*/
/*
const nums: number[] = [3,2,5,1,3]
console.log(nums)
const sortedNums: number[] = nums.slice().sort((a, b) => a-b)
console.log(nums)
console.log(sortedNums)
*/
/*
let nestedArr: number[][] = new Array(10).fill(null).map(() => [])
nestedArr[0].push(123)
nestedArr[9].push(567)
console.log(nestedArr)
*/
/*
// Iteration
function lengthOfLongestPalindromeIteration(str: string): number{
    let i: number = 0.5
    let j: number = 0
    let maxLength: number = 0
    while(i < str.length){
        if(Number.isInteger(i)){
            while(i-j-1 >= 0 && i+j+1 < str.length){
                if(str[i-j-1] === str[i+j+1]) j++;
                else break;
            }
            j = j*2+1;
            if(maxLength < j) maxLength = j;
            j = 0;
            i += 0.5;
        } else {
            while(Math.floor(i-j) >= 0 && Math.ceil(i+j) < str.length){
                if(str[Math.floor(i-j)] === str[Math.ceil(i+j)]) j++;
                else break;
            }
            j *= 2
            if(maxLength < j) maxLength = j;
            j = 0;
            i += 0.5;
        }
    }
    return maxLength;
}

console.log(lengthOfLongestPalindromeIteration("banana"))
console.log(lengthOfLongestPalindromeIteration("malayalam"))
*/
/*
// Recursion
function lengthOfAPalindrome(str: string, left: number, right: number){
    while(left >= 0 && right < str.length && str[left] === str[right]){
        left--;
        right++;
    }
    return right-left-1;
}
function lengthOfLongestPalindromeRecursion(str: string): number{
    let maxLength: number = 0;
    for(let i = 1; i < str.length; i++){
        let length1: number = lengthOfAPalindrome(str, i, i)
        let length2: number = lengthOfAPalindrome(str, i, i+1)
        maxLength = Math.max(maxLength, length1, length2)
    }
    return maxLength;
}

console.log(lengthOfLongestPalindromeRecursion("banana"))
console.log(lengthOfLongestPalindromeRecursion("malayalam"))
*/
/*
// To check if a string or character is alphanumeric:

// Checking a Single Character:
function isAlphanumericChar(char: string): boolean {
    return /^[a-zA-Z0-9]$/.test(char);
}

console.log(isAlphanumericChar("a")); // true
console.log(isAlphanumericChar("1")); // true
console.log(isAlphanumericChar("@")); // false
console.log(isAlphanumericChar(" ")); // false

// Checking an Entire String:
function isAlphanumericString(str: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(str);
}

console.log(isAlphanumericString("abc123")); // true
console.log(isAlphanumericString("abc 123")); // false (contains space)
console.log(isAlphanumericString("abc@123")); // false (contains '@')
*/
/*
let a: string = "abcdefgh";
let b: string[] = [...a]; // Spreading the string 'a' into an array of its characters.
console.log(b); // ["a", "b", "c", "d", "e", "f", "g", "h"]
*/
// tsc Practice/Practice
// node Practice/Practice
function threeSum(nums) {
    nums.sort(function (a, b) { return a - b; });
    var result = [];
    var left;
    var right;
    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1])
            continue;
        left = i + 1;
        right = nums.length - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] < 0)
                left++;
            else if (nums[i] + nums[left] + nums[right] > 0)
                right--;
            else {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1])
                    left++;
                while (nums[right] === nums[right - 1])
                    right--;
                left++;
                right--;
            }
        }
    }
    return result;
}
;
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // -4,-1,-1,0,1,2
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-2, 0, 1, 1, 2]));
