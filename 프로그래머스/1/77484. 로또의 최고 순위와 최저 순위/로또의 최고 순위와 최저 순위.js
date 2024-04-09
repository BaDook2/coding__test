// 1. lottos와 win_nums의 겹치는 번호 갯수가 최저 순위
// 2. Case 1.과 lottos의 0을 합친 갯수가 최고 순위

function solution(lottos, win_nums) {
    const answer = [];
    let winningCount = 0;
    let zeroCount = 0;
    lottos.forEach(num => {
        if(num === 0){
            zeroCount++;
        } else if(win_nums.includes(num)){
            winningCount++;
        }
    })

    answer.push(7-winningCount >= 6 ? 6 : 7-winningCount)
    answer.push(7-(winningCount+zeroCount) >= 6? 6 : 7-(winningCount+zeroCount))
    answer.sort((a,b)=>a-b)
    return answer;
}