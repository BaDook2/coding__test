function solution(cacheSize, cities) {
    const cache = [];
    let time = 0;
    for(let i = 0, max = cities.length; i < max; i++) {
        const target = cities[i].toLowerCase();
        const targetIndex = cache.indexOf(target);
        cache.push(target);
        if(targetIndex !== -1) {
            cache.splice(targetIndex, 1);
            time += 1;
            continue;
        } else if(cache.length > cacheSize) {
            cache.shift();
        }
        time += 5;
    }
    return time;
}