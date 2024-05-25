function solution(citations) {
    let count = 0;
    citations.sort((a, b) => b - a);
    for(let i = 0, max = citations.length; i < max; i++){
        if(citations[i] > i) {
            count++;
        } else{
            break;
        }
    }
    return count
}