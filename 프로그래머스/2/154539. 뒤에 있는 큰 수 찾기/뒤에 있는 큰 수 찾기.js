function solution(numbers) {
    const result = new Array(numbers.length).fill(-1);
    const stack = [];
    for(let i = 0, max = numbers.length; i < max; i++) {
        while(numbers[i] > numbers[stack.at(-1)]) {
            const index = stack.pop();
            result[index] = numbers[i];
        }
        stack.push(i);
    }
    return result
}