// 1. 겹치는 글자를 세는 count = 0과 매번 바뀌는 fixedChar를 선언해둔다.
// 2. 겹친다면 count++, 겹치지 않는다면 count--를 하여 count === 0이라면 answerArr.push(fixedChar)
function solution(s) {
    let count = 0;
    let fixedChar;
    let answer = "";
    const answerArr = [];
    s = s.split("")
    s.forEach(char => {
        if(count === 0){
            answerArr.push(answer);
            answer = "";
            fixedChar = char;
            count++;
        } else if(fixedChar === char) {
            count++;
        } else if(fixedChar !== char) {
            count--;
        }

        answer += char;
    })
    console.log(answerArr)
    
    return answerArr.length;
}