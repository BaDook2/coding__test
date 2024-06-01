function solution(priorities, location) {
    const answer = [];
    let count = 0;
    let maxPriority = Math.max(...priorities);
    while(true) {
        const targetPriority = priorities.shift();
        if(targetPriority === maxPriority) {
            count++;
            if(location === 0) {
                return count;
            }
            maxPriority = Math.max(...priorities);
        } else {
            priorities.push(targetPriority);            
        }
        location = location === 0 ? priorities.length - 1 : location - 1;
    }
    
    return answer;
}