// function solution(ingredient) {
//     const complete = "1231"
//     let ingredientArr = ingredient;
//     let ingredientStr = ingredient.join("");
//     let answer = 0;
//     while(ingredientStr.includes(complete)) {
//         ingredientArr.splice(ingredientStr.indexOf(complete), 4);
//         ingredientStr = ingredientArr.join("");
//         answer++;
//     }
    
//     return answer;
// }
// 시간초과가 문제
// 반복문을 여러번 반복하는게 문제인 것 같다.
// 스택을 사용?

function solution(ingredient) {
    const stack = [];
    let answer = 0;
    for(let i = 0, max = ingredient.length; i < max; i++) {
        stack.push(ingredient[i]);
        if(stack.length >= 4) {
            if(stack.slice(-4).join("") === "1231"){
                answer++;
                stack.splice(-4)
            }
        }
        
    }
    return answer;
}
