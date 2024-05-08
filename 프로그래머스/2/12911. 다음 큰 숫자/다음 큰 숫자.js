function solution(n) {
    const binaryN = n.toString(2);
    let nextNum = n + 1;
    const calcNextNum = (num) => {
        const binaryNextNum = num.toString(2);
        if(binaryNextNum.split("1").length === binaryN.split("1").length) return num;
        return calcNextNum(num + 1);
    }
    return calcNextNum(nextNum)
}