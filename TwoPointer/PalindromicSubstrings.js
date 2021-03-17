/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let count = 0
    
    let expand = (a, b = a) => {
        while (s[a] === s[b] && s[a] !== undefined){
            count++
            a--
            b++
        }
    }
    
    for (let i=0;i<s.length;i++){
        if (s[i] === s[i+1]) expand(i, i+1)
        expand(i)
    }
   
    return count
};
