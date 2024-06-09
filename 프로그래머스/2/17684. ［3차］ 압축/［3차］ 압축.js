function solution(msg) {
    const map = new Map();
    const answer = [];
    let index = 27;
    let temp;
    for(let i = 0, max = msg.length; i < max; i++) {
        let w = msg[i];
        let c = msg[i + 1];
        if(!map.get(w + c)) {
            map.set(w + c, index++);
            answer.push(w.charCodeAt(0) - 64);
        } else {
            while(map.get(w + c)) {
                w += c;
                c = msg[++i + 1];
            }
            map.set(w + c, index++);
            answer.push(map.get(w));
        }
    }
    return answer;
}