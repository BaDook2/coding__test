// 1. s를 반복문에 넣는다.
// 2. s의 각 char의 index번째까지 문자를 새로운 배열에 넣는다.
// 3. 새로운 배열에 skip의 문자가 있다면 있는 갯수만큼 index+1을 더한다.
// 4. alphabetArr.indexOf(str) + index의 결과를 result에 더한다.

function solution(s, skip, index) {
    let answer = "";
    const alphabetArr = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ].filter(char => !skip.includes(char));
    return s.split("").map(char => alphabetArr[(alphabetArr.indexOf(char) + index) % alphabetArr.length]).join("")   
}