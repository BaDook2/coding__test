function solution(n) {
    let f0 = 1;
    let f1 = 1;
    let answer;
    for(let i = 3; i <= n; i++) {
        answer = (f0 + f1) %1234567;
        f0 = f1;
        f1 = answer;
    }
    return answer
}