// normel fibonacci function using recursion
const fib = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}


// Dynamic programming Fibonacci function
const Dynamicfib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n < 2) return n;
    memo[n] = Dynamicfib(n - 1, memo) + Dynamicfib(n - 2, memo);
    return memo[n];
}

// Dynamic programming Fibonacci function using tabulation

const Dynamicfib2 = (n) => {
    const memo = [0, 1];
    for (let i = 2; i <= n; i++) {
        memo.push(memo[i - 1] + memo[i - 2]);
    }
    return memo[n];
}

console.log(Dynamicfib2(6));