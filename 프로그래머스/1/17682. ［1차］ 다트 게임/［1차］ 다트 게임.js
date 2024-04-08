// 1. 숫자 앞까지 자른다. [1S, 2D*, 3T]
// 2. 반복문과 switch문을 통해 지수 연산자를 사용하여, 제곱 연산을 실시한다.
// 3. *이 있을 경우 해당하는 index, index-1에 *2를 실시한다.
// 4. #이 있을 경우 -1을 곱한다.

function solution(dartResult) {
    const regex = /(\d+[SDT][*#]?)/g;
    const dartResultArr = [];
    let resultArr = [];
    while((match = regex.exec(dartResult)) !== null){
        dartResultArr.push(match[0]);
    }
    
    dartResultArr.forEach((item,index) => {
        const num = parseInt(item);
        const char = item.match(/[SDT]/,'')[0];
        const specialChar = item.replace(/\d+[A-Z]+/g,'')
        
        switch(char){
            case 'S':
                resultArr.push(+num);
                break;
            case 'D':
                resultArr.push(num**2);
                break;
            case 'T':
                resultArr.push(num**3);
                break;
        }
        
        switch(specialChar){
            case '*':
                resultArr[index] *= 2;
                if(resultArr[index-1]){
                    resultArr[index-1] *= 2;
                }
                break;
            case '#':
                resultArr[index] *= (-1);
                break;
        }
    })
    return resultArr.reduce((acc,cur) => acc + cur, 0)
}