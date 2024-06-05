function solution(phone_book) {
    const hashTable = {};
    
    for(let i = 0, max = phone_book.length; i < max; i++) {
        hashTable[phone_book[i]] = true;
    }
    for(let i = 0, max = phone_book.length; i < max; i++) {
        for(let j =0, jMax = phone_book[i].length; j < jMax; j++) {
            const prefix = phone_book[i].slice(0,j);
            if(hashTable[prefix]) return false;
        }
    }
    return true;
}