function solution(board, moves) {
    const stack = [];
    let count = 0;
  
    moves.forEach(item => {
        for(let i = 0, max = board.length; i < max; i++) {
            // console.log("stack before pop : " + stack);
            if(board[i][item-1]) {
                if(board[i][item-1] === stack[stack.length-1]) {
                    stack.pop();
                    count++;
                } else {
                    stack.push(board[i][item-1]);
                }
                board[i][item-1] = 0;
                break;
            }
        }
      })
    return count * 2;
}
