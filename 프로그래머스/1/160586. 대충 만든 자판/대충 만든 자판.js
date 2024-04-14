function solution(keymap, targets) {
   const map = new Map();
    
    for(let i = 0, max1 = keymap.length; i < max1; i++) {
        for(let j = 0, max2 = keymap[i].length; j < max2; j++) {
            if(map.has(keymap[i][j])) {
                map.set(keymap[i][j], j < map.get(keymap[i][j]) ? j + 1 : map.get(keymap[i][j]));
            }
            else {
                map.set(keymap[i][j], j+1);
            }
        }
    }
    
    let resultArr = [];
    for(let i = 0, max1 = targets.length; i < max1; i++) {
        let result = 0;
        for(let j = 0, max2 = targets[i].length; j < max2; j++) {
            if(!map.has(targets[i][j])) {
                result = -1;
                break;
            }
            result += map.get(targets[i][j]);
        }
        resultArr.push(result);
    }
    return resultArr
}