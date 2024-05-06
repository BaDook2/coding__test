function solution(s) {
    let changeCount = 0;
    let zeroCount = 0;
    const deleteZero = (arr) => {
        const afterDelete = arr.filter(item => item !== "0").length;
        const newArr = afterDelete.toString(2).split("");
        changeCount += 1;
        zeroCount += arr.length - afterDelete;
        if(newArr.length !== 1 && newArr[0] === "1") {
            deleteZero(newArr);   
        }
    }
    deleteZero(s.split(""));
    return [changeCount, zeroCount];
}