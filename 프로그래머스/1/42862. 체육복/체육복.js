// 1. 1~n번까지의 배열
// 2. lost 배열과 reserve 배열 각각 겹치는 숫자를 제외(realLost, realReserve)
// 3. n-reaLost + realReserve(가능한 realLost 수만큼) 

function solution(n, lost, reserve) {
    const realLost = lost.filter(clothing => !reserve.includes(clothing))
    let realReserve = reserve.filter(clothing => !lost.includes(clothing))
    
    let answer = n - realLost.length;
    realLost.sort((a,b) => a-b);
    realLost.forEach(clothing => {
        if(realReserve.length === 0){
            return;
        }
        if(realReserve.includes(clothing-1)){
           realReserve = realReserve.filter(removeTarget => !(removeTarget === clothing-1))
           answer++;
           }
        else if(realReserve.includes(clothing+1)){
           realReserve = realReserve.filter(removeTarget => !(removeTarget === clothing+1))
           answer++;
           }
    })
    return answer;
}