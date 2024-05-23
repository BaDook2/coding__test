function solution(want, number, discount) {
    let answer = 0;
    discount.forEach((value, index) => {
        const copy = discount.slice(index, index + 10);
        let count = 0;
        for(let j = 0, max = want.length; j < max; j++) {
            if(copy.filter((item) => item === want[j]).length === number[j]) {
                count++;
            }
        }
        if(count === number.length) {
            answer++;
        }
    })
    return answer;
}