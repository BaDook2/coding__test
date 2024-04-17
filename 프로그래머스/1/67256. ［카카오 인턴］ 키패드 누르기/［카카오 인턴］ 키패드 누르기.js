function solution(numbers, hand) {
    const thumbPosition = {
        left: 10,
        right: 12
    };
    const answer = [];
    const useLeftHand = (num) => {
        answer.push("L");
        thumbPosition.left = num;
    }
    const useRightHand = (num) => {
        answer.push("R");
        thumbPosition.right = num;
    }
    numbers.forEach((number, index) => {
        if(number % 3 === 1) {
            useLeftHand(number);
            
        } else if(number % 3 === 0 && number !== 0) {
            useRightHand(number);
            
        } else {
            if(number === 0) {
                number = 11;
            }
            let leftGap = Math.abs(number - thumbPosition.left);
            let rightGap = Math.abs(number - thumbPosition.right);
            leftGap = Math.floor(leftGap / 3) + leftGap % 3;
            rightGap = Math.floor(rightGap / 3) + rightGap % 3;
   

            if(leftGap === rightGap) {
                if(hand === "left") {
                    useLeftHand(number);
                } else {
                    useRightHand(number);
                }
            } else if(leftGap > rightGap) {
                useRightHand(number);
            } else {
                useLeftHand(number);
            }
        }
    })

    return answer.join("");
}