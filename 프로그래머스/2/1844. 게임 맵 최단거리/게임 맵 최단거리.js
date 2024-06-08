function solution(maps) {
    const row = maps.length;
    const column = maps[0].length;
    const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const position = [[0, 0, 1]];
    const bfs = () => {
        maps[0][0] = 0;
        while(position.length > 0) {
            const [x, y, count] = position.shift();
            if(x === row - 1 && y === column - 1) {
                return count;
            }
            for (let [moveX, moveY] of move) {
                const newX = moveX + x;
                const newY = moveY + y;
                if(newX >= 0 && newX < row  && newY >= 0 && newY < column && maps[newX][newY] === 1) {
                    position.push([newX, newY, count + 1]);
                    maps[newX][newY] = 0;
                }
            }
        }
        return -1;
    }
    
     return bfs();
}