function solution(participant, completion) {
    const hashMap = new Map();
    for(let i = 0 ; i < participant.length; i++) {
        let user = participant[i];
        let winner = completion[i];
        hashMap.set(user, (hashMap.get(user) || 0) +1);
        hashMap.set(winner, (hashMap.get(winner) || 0) -1);
    }
    
    for(let [user, num] of hashMap){
        if(num === 1){
            return user
        }
    }
}