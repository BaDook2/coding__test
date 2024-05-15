function solution(arr) {
    let answer = arr[arr.length-1]
    const getGCD = (a, b) => {
        if(b === 0) {
            return a;
        }
        return getGCD(b, a % b);
    }
    return arr.reduce((a,b) => (a * b) / getGCD(a,b));
}