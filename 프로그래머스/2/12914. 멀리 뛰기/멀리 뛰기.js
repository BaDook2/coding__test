function solution(n) {
    // let f0 = 1;
    // let f1 = 1;
    // let count = 2;
    // if(n === 1) {
    //     return 1;
    // }
    // const fibonacci = () => {
    //     if(count === n) {
    //         return (f0 + f1) %1234567
    //     }
    //     count++;
    //     const temp = f0;
    //     f0 = f1;
    //     f1 += temp;
    //     return fibonacci();
    // }
    // return fibonacci()
    const dp = [1, 1];
    for(let i = 2; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    return dp[n]
}