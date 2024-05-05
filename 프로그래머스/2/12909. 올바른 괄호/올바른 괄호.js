function solution(s){
    const sArr = s.split("");
    let answer = 0;
    for(let i = 0, max = s.length; i < max ; i++) {
        if(answer < 0) {
            break;
        }
        else if(sArr[0] === ")") {
            answer += 1;
            break;
        } else if(sArr[i] === "(") {
            answer += 1;
        } else {
            answer -= 1;
        }
        
    }
    return answer ? false : true;
}