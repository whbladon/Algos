/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let l = 0, r = 0, output = s
    let outputFound = false
        
    //create hashes
    let sHash = {}
    let tHash = {}
    for (let i = 0; i<t.length;i++){
        if (tHash[t[i]]) tHash[t[i]]++
        else tHash[t[i]] = 1
    }
    
    let tLength = Object.values(tHash).length
    let counter = 0
    
    //sliding window
    while (r < s.length) {
        let right = s[r]
        
        //hash the right element
        if (sHash[right]) sHash[right]++
        else sHash[right] = 1
        
        //if we have enough of right element, update condition count
        if (sHash[right] === tHash[right]) counter++
        
        //if we have a match, restrict window til no match, move l pointer back, then update output
        if (counter === tLength){
            
            while (counter === tLength){
                sHash[s[l]]--
                //if sHash is now missing characters, delete from vHash, minus 1 from counter
                if (sHash[s[l]] < tHash[s[l]]) counter--
                l++
            }
            
            outputFound = true
            
            let testOutput = s.slice(l - 1, r+1)
            if (testOutput.length<output.length) output = testOutput
        }
        r++
    }
    
    if (!outputFound) return ''
    return output
};