function solution(s) {
    let stack = [];
    let answer = 0;
    const sArr = s.split('');
    const confirm = (arr) => {
        stack = [];
        for(let i = 0, max = arr.length; i < max; i++) {
            stack.push(arr[i]);
            if(stack[stack.length-2] === "[" && stack[stack.length-1] === "]" ||  
               stack[stack.length-2] === "{" && stack[stack.length-1] === "}" || 
               stack[stack.length-2] === "(" && stack[stack.length-1] === ")") {
                stack.pop();
                stack.pop();
                if(stack.length === 0 && i === max - 1) answer++;
            }
        }
        
    }
    for(let i = 0, max = s.length; i < max; i++) {
        confirm(sArr);
        const char = sArr.splice(0,1);
        sArr.splice(sArr.length, 0, ...char);
    }
    return answer;
}