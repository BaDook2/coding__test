function solution(n)
{
    let count = 0;
    let useBattery = (number) => {
        count += number%2;
        if(number !== 0) {
            useBattery(Math.floor(number/2));
        }
    }
    useBattery(n)
    return count;
}