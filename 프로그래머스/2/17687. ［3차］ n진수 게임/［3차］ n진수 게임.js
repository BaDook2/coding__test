function solution(n, t, m, p) {
    const answer = [];
    const nums = [];
    for(let i = 0, max = t * m; i < max; i++) {
        const countToNArr = i.toString(n).split('');
        nums.push(...countToNArr);
    }
    for(let i = 0, max = nums.length; i < max; i++) {
        if(i % m === p - 1) {
            answer.push(nums[i].toUpperCase());
        }
        if(answer.length === t) {
            break;
        }
    }
    return answer.join('');
}