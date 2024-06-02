function solution(k, dungeons) {
    let answer = 0;
    const visited = new Array(dungeons.length).fill(0);
    const DFS = (hp, count) => {
        for(let i = 0, max = dungeons.length; i < max; i++) {
            if(!visited[i] && hp >= dungeons[i][0]) {
                visited[i] = true;
                DFS(hp - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, count);
    }
    DFS(k, 0);
    
    return answer;
}