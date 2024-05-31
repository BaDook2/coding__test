function solution(s) {
    const chagedS = s.replaceAll('{{','').replaceAll('}}','').split('},{');
    const sArr = [];
    const answer = [];
    chagedS.forEach((str) => {
        sArr.push(str.split(','));
    })
    sArr.sort((a, b) => {
        if(a.length > b.length) {
            return 1;
        } else {
            return -1;
        }
    })
    for(let i = 0, max = sArr.length; i < max; i++) {
        while(answer.includes(+sArr[i][0])) {
            sArr[i].shift();
        }
        answer.push(+sArr[i][0]);
    }
    return answer
}