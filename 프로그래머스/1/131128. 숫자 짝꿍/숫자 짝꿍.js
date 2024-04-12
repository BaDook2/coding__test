function solution(X, Y) {
    let answer = "";
    X = X.split("");
    Y = Y.split("");    
    for(let i = 0 ; i <= 9 ; i++){
        const filteredX = X.filter(num => Number(num) === i).length;
        const filteredY = Y.filter(num => Number(num) === i).length;
        
        answer += String(i).repeat(Math.min(filteredX, filteredY));
    }
    if(answer ==='') return "-1"
    if(Number(answer) === 0) return "0"
    return answer.split('').sort((a,b) => b-a).join("")

    

}