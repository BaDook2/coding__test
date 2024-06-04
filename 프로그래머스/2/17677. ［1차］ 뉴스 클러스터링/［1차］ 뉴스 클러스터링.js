function solution(str1, str2) {
    const splittedStr1 = [];
    const splittedStr2 = [];
    let intersection = [];
    let union = [];
    const regExp = /^[a-zA-Z]+$/;
    for(let i = 0, max = str1.length; i < max - 1; i++) {
        const slice = str1.slice(i, i+2).toLowerCase();
        if(regExp.test(slice)) {
            splittedStr1.push(slice);
        }
    }
    for(let i = 0, max = str2.length; i < max - 1; i++) {
        const slice = str2.slice(i, i+2).toLowerCase();
        if(regExp.test(slice)) {
            splittedStr2.push(slice);
        }
    }

    for(let i =0; i < splittedStr1.length ; i++) {
        const target = splittedStr2.indexOf(splittedStr1[i]);
        if(target !== -1) {
            intersection.push(...splittedStr2.splice(target,1));
        }
        union.push(splittedStr1[i]);
    }
    
    for(let i = 0, max = splittedStr2.length; i < max; i++) {
        union.push(splittedStr2[i]);
    }
    
    if(union.length === 0) {
        return 65536
    }
    return Math.floor(intersection.length / union.length * 65536);
}