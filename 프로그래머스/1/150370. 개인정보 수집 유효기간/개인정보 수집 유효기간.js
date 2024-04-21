function solution(today, terms, privacies) {
    const answer = [];
    const termsObj = {};
    terms.forEach(term => {
        const [alphabet, month] = term.split(" ");
        termsObj[alphabet] = +month;
    })
    privacies.forEach((privacy, i) => {
        const [date, alphabet] = privacy.split(" ");
        const days = (+today.split(".")[0] - +date.split(".")[0]) * 12 * 28 +
              (+today.split(".")[1] - +date.split(".")[1]) * 28 +
              (+today.split(".")[2] - +date.split(".")[2]);
        if(termsObj[alphabet] * 28-1 < days) {
            answer.push(i+1);
        }
    })
    return answer;
}