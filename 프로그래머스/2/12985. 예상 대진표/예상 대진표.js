function solution(n,a,b)
{
    // let count = 0;
    // const competition = (player1, player2) => {
    //     count++;
    //     const gap = player2 - player1;
    //     if(gap === 1) {
    //         return count;
    //     } else {
    //         const winner1 = Math.ceil(player1 / 2);
    //         const winner2 = Math.ceil(player2 / 2);
    //         return competition(winner1, winner2)
    //     }
    // }
    // return a > b ? competition(b, a) : competition(a, b)
    let count = 0
    while(a !== b) {
        count++;
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);        
    }
    return count
}