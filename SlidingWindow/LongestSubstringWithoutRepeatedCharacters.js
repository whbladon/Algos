/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let l = 0, r = 0, output = 0, localLen = 0
    
    let hash = {}
    
    while (r < s.length){
        localLen++
        let right = s[r]
        
        //add right to hashmap
        while (hash[right]) {
            let left = s[l]
            delete hash[left]
            localLen--
            l++
        }

        hash[right] = true
        
        output = Math.max(localLen, output)
        r++
    }
    return output //an integer
};