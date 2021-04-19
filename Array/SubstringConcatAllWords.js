/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    //create fast, slow pointers, output
    let fast = 0, slow = 0, output = []
    let wordLength = words[0].length
    let hashLength = words.length
    
    
    
    
    //hash words
    let wHash = {}
    for (let word of words) {
        if (wHash[word]) wHash[word]++
        else wHash[word] = 1
    }
    
    
    //get wordlength, hashlength
   
    
    //loop slow 1 by 1
    while (slow<=s.length-wordLength*hashLength) {
        
        //move fast  ahead wordlength
        let fast = slow+wordLength
        let chunk = s.substring(slow, fast)
       
        //check hash table, if chunk found:
        if (wHash[chunk]){
            //create counter, localHash
            let counter = 0, lHash = {}
          
            //loop while chunk in local hash <= chunk in main hash && chunk is in main hash
           
            
            while (wHash[chunk] && lHash[chunk] !== wHash[chunk]){
                counter++
                
                if (lHash[chunk]) lHash[chunk]++
                else lHash[chunk] = 1
                chunk = s.substring(fast, fast+=wordLength)
            }
            
            if (counter === hashLength) output.push(slow)
        }
            
        slow += 1
    }
    return output
};