function solution(s) {
    const alignedArr = s.split(' ').sort((a,b) => a-b);
    const answer = [];
    answer.push(alignedArr[0], alignedArr[alignedArr.length-1]);
    return answer.join(" ")
}