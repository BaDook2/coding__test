function solution(brown, yellow) {
    const total = brown + yellow;
    
    for(let height = 3; height <= Math.sqrt(total); height++) {
        const remainder = total % height;
        
        if(remainder !== 0) continue;
        
        const width = total / height;
        if((height - 2) * (width - 2) === yellow) {return[width, height]}
    }
}