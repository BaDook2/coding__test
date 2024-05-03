function solution(friends, gifts) {
    const arrLength = friends.length;
    const nameObj = new Object();
    const fromToList = new Array(arrLength).fill(0).map(_ => new Array(arrLength).fill(0));
    const giftIndex = new Array(arrLength).fill(0);
    const nextMonth = new Array(arrLength).fill(0);
    
    friends.forEach((friend, idx) => {
        nameObj[friend] = idx;
    })
    
    gifts.forEach((list) => {
        const [from, to] = list.split(" ");
        fromToList[nameObj[from]][nameObj[to]]++;
    })
    
    // fromToList.forEach((Item, index) => {
    //     giftIndex[index] = Item.reduce((acc, cur) => acc + cur, 0);
    // })
    
    for(let i = 0, max = friends.length; i < max; i++) {
        giftIndex[i] = fromToList[i].reduce((acc, cur) => acc + cur, 0);
        for(let j = 0 ; j < max; j++) {
            // giftIndex[i] += fromToList[i][j];
            giftIndex[i] -= fromToList[j][i];
        }
    }
    console.log(fromToList)
    console.log(giftIndex)
    for(let i = 0, max = friends.length; i < max; i++) {
        for(let j = i + 1 ; j < max; j++) {
            
            if(fromToList[i][j] > fromToList[j][i]) nextMonth[i]++;
            if(fromToList[i][j] < fromToList[j][i]) nextMonth[j]++;
            if(fromToList[i][j] === fromToList[j][i])  {
                if(giftIndex[i] > giftIndex[j]) nextMonth[i]++;
                if(giftIndex[i] < giftIndex[j]) nextMonth[j]++;
            }
        }
    }
    
    return Math.max(...nextMonth)
}