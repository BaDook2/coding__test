function solution(people, limit) {
    let count = 0;
    let i = 0;
    let max = people.length - 1;
    people.sort((a, b) => a - b)
    while(i<=max) {
        if(people[i] + people[max] <= limit) {
            i++;
        }
        max--;
        count++;
    }
    return count;
}