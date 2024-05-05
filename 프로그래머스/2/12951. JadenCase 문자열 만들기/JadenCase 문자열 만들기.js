function solution(s) {
    const strArr = s.split("");
    strArr[0] = strArr[0].toUpperCase();
    for(let i = 0, max = strArr.length; i < max-1; i++) {
        if(strArr[i] === " ") {
            strArr[i+1] = strArr[i+1].toUpperCase();
        } else {
            strArr[i+1] = strArr[i+1].toLowerCase();
        }
    }
    return strArr.join("");
}