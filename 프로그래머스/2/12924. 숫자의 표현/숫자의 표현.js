function solution(n) {
    let answer = 0;
    for(let i = 1, max = Math.ceil(n/2); i <= max; i++) {
        let sum = 0;
        for(let j = i; j <= max; j++) {
            sum += j;
            if(sum === n) {
                answer++;
                break;
            }
            if(sum > n) break;
        }
    }
    return n === 1 ? 1 : answer + 1
}

// function solution(n) {
//     let answer = 0;
//     const calcDivisionCount = (num, sum) => {
//         if(sum > n) return false;
//         if(sum === n) return true;
//         return calcDivisionCount(num+1, sum + num);
//     }
//     for(let i = 1, max = Math.ceil(n/2); i <= max; i++) {
//         if(calcDivisionCount(i, 0)) answer++;
//     }
//     return answer+1
// }