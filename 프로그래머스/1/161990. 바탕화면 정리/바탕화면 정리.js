function solution(wallpaper) {
    let answer = [];
    const x = [];
    const y = [];
    for(let i = 0, maxi = wallpaper.length; i < maxi; i++) {
      for(let j = 0, maxj = wallpaper[i].length; j < maxj; j++) {
          const paper = wallpaper[i][j];
          if(paper === "#") {
              x.push(j);
              y.push(i);
          }   
      }  
    }
    x.sort((a,b) => a-b);
    y.sort((a,b) => a-b);
    
    return [y[0], x[0], y[y.length-1] + 1, x[x.length-1] + 1];
}

