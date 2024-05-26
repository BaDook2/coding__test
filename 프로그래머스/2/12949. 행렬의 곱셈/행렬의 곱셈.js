function solution(arr1, arr2) {
    let answer = [];
    for(let i = 0, max = arr1.length; i < max; i++) {
        const arr = [];
        for(let j = 0, jmax = arr2[0].length; j < jmax; j++) {
            let num = 0;
            for(let k = 0, kmax = arr2.length; k < kmax; k++) {
                num += arr1[i][k] * arr2[k][j];
            }
            arr.push(num);
        }
        answer.push(arr)
        
    }
    return answer;
}