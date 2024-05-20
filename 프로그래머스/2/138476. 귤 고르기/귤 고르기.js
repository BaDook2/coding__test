function solution(k, tangerine) {
    let tangerineCount = [];
    let answerCount = 0;
    tangerine.sort((a, b) => a - b);
    tangerine.forEach(value => {
        if(!tangerineCount[value]) {
            tangerineCount[value] = 1;
        } else {
            tangerineCount[value]++;
        }
    })
    tangerineCount.sort((a, b) => b - a)
    for(let i = 0, max = tangerineCount.length; i < max; i++) {
        answerCount += tangerineCount[i];
        if(k <= answerCount) {
            return i+1
        }
    }
}