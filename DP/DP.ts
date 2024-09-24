// tsc DP/DP
// node DP/DP

// Top-Down (Memoization) Approach:

/*
function fibonacci(n: number, memo: Record<number, number> = {}): number {
    if(n === 0) return 0;
    if(n === 1) return 1;

    if(memo[n]) return memo[n];
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)

    return memo[n]
}
console.log(fibonacci(10))
*/




// Bottom-Up (Tabulation) Approach:

/*
function fibonacci(n: number): number {
    const dp = new Array(n+1)
    dp[0] = 0
    dp[1] = 1

    for(let i = 2; i < n+1; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}
console.log(fibonacci(10))
*/