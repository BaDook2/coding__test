function solution(n, words) {
    let answer = [0, 0];
    const pass = [words[0]];
    for(let i = 1, max = words.length; i < max; i++) {
        if(pass.includes(words[i])) {
            answer = [i % n + 1, Math.floor(i / n) + 1];
            break;
        }
        if(pass.slice(-1)[0].split('').slice(-1)[0] === words[i].split('')[0]) {
            pass.push(words[i]);
        } else {
            answer = [i % n + 1, Math.floor(i / n) + 1];
            break;
        }
    }
    return answer;
}