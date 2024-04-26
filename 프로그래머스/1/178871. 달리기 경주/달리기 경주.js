// function solution(players, callings) {
//     let answer;
//     for(let i of callings) {
//         const move = players.indexOf(i);
//         const front = players.slice(0, move-1);
//         const back = players.slice(move+1);
//         players[move] = players[move-1];
//         players[move-1] = i;
//         answer = [...front, players[move-1], players[move], ...back];
//     }
//     return answer;
// }
// 시간 초과 발생

function solution(players, callings) {
    const playerPos = new Map();
    for(let i = 0, max = players.length; i < max; i++) {
        playerPos[players[i]] =  i;
    }
    for(let i = 0, max = callings.length; i < max; i++) {
        const winnerIdx = playerPos[callings[i]];
        const Loser = players[winnerIdx-1];
        
        players[winnerIdx-1] = callings[i];
        players[winnerIdx] = Loser;
        playerPos[callings[i]] = winnerIdx-1;
        playerPos[Loser] = winnerIdx;
    }
    
    return players;
}
