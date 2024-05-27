function solution(n, left, right) {
    const arr = [];
    
    // for(let i = 0; i < n; i++) {
    //     for(let j = 0; j < n; j++) {
    //         const num = i >= j ? i + 1 : j + 1;
    //         arr.push(num)
    //     }
    // }
    for(let i = left; i <= right; i++) {
        const num1 = parseInt(i / n);
        const num2 = i % n;
        arr.push(Math.max(num1, num2) + 1);
    }
    return arr
}