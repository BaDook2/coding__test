function solution(clothes) {
    const clothesObj = {};
    const countClothesArr = [];
    let answer = 1;
    clothes.forEach((item) => {
        if(clothesObj[item[1]] === undefined) {
            clothesObj[item[1]] = 1;
        } else {
            clothesObj[item[1]] += 1;
        }
    })
    
    for(const i in clothesObj) {
        answer *= (clothesObj[i] + 1);    
    }
    return answer - 1
}