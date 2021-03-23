/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let hash = {}
    
    for (let i of s){
        hash[i] ? hash[i]++ : hash[i] = 1
    }
    console.log(hash)
    for (let i of t){
       if (hash[i]) {
         hash[i]--
         if (hash[i]<1) { delete hash[i] }
       } else {
           return false
       }
    }
   
    return Object.values(hash).length === 0
};