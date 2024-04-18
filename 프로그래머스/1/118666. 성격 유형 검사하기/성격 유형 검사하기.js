function solution(survey, choices) {
    const personalityType = "AJCRTFMN";
    const typeObj = {};
    personalityType.split("").forEach(item => typeObj[item] = 0)
    let answer = '';
    
    for (let i = 0, max = choices.length; i < max; i++) {
        const score = choices[i] - 4
        if(score > 0) {
            typeObj[survey[i][1]] += score;
        } else{
            typeObj[survey[i][0]] += Math.abs(score);
        }
    }
    answer += typeObj.R >= typeObj.T ? "R" : "T";
    answer += typeObj.C >= typeObj.F ? "C" : "F"; 
    answer += typeObj.J >= typeObj.M ? "J" : "M"; 
    answer += typeObj.A >= typeObj.N ? "A" : "N"; 
        
    return answer;
}