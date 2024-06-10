function solution(word) {
    const charArr = ['A', 'E', 'I', 'O', 'U'];
    const dictionary = [];
    
    const dfs = (cur, len) => {
        if(len > 5) return;
        dictionary.push(cur);    
        for(let i = 0, max = charArr.length; i < max; i++) {
            dfs(cur + charArr[i], len + 1);
        }
    }
    dfs("", 0);
    
    return dictionary.indexOf(word);
}