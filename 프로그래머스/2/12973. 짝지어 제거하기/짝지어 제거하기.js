// function solution(s)
// {
//     const stack = [];
//     s.split("").map(char => {
//         if(stack[stack.length - 1] === char) {
//             stack.pop();
//         } else {
//             stack.push(char);
//         }
//     })
//     return stack.length ? 0 : 1
// }
function solution(s)
{
    const stk = []
    
    for (const word of s) {
        if (stk[stk.length-1] === word) stk.pop()
        else stk.push(word)
    }
    return stk.length ? 0 : 1
}