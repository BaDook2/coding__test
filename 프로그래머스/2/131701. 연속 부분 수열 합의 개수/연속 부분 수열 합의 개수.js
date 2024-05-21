function solution(elements) {
    const set = new Set();
    const circle = [...elements, ...elements.slice(0, elements.length -1)]
    for(let length = 1, lengthMax = elements.length; length <= lengthMax; length++) {
        for(let i = 0, max = lengthMax; i < max; i++) {
            const number = circle.slice(i, i + length).reduce((acc, cur) => acc + cur);
            set.add(number);
        }
    }
    return set.size;
}
