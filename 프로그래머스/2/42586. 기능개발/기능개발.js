function solution(progresses, speeds) {
    const answer = [];
    while(progresses.length !== 0) {
        let count = 0;
        for(let i = 0; i < progresses.length; i++){
            progresses[i] += speeds[i];
            if(progresses[0] >= 100) {
                i--;
                count++;
                progresses.shift();
                speeds.shift();            
            }
        }
        if(count !== 0) {
            answer.push(count);
        }
    }
    return answer;
}