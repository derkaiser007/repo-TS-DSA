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
function shiftLetterWithWraparound(str: string, shift: number): string{
    let result: string = ''
    let code: number
    let newCode: number
    for(let i = 0; i < str.length; i++){
        code = str.charCodeAt(i)
        if(code + shift < 97) newCode = code + shift + 26;
        else if(code + shift > 122) newCode = code + shift - 26;
        else newCode = code + shift;
        result += String.fromCharCode(newCode)
    }
    return result
}

console.log(shiftLetterWithWraparound("wxyz", 2))
console.log(shiftLetterWithWraparound("abcd", -4))
*/

// tsc Practice/Practice
// node Practice/Practice

function letterCombinations(digits: string): string[] {
    let result: string[] = []
    
    return result    
};

console.log(letterCombinations(""))
console.log(letterCombinations("2"))
console.log(letterCombinations("34"))
console.log(letterCombinations("6789"))

// 2-abc 3-def 4-ghi 5-jkl 6-mno 7-pqrs 8-tuv 9-wxyz