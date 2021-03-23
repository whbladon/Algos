/**
 * @param {string} s
 * @return {boolean}
 */

 var isValid = function(string) {
    let stack = []
     let dict = {"{":"}", "[": "]","(": ")"}
     
     for (let i=0;i<string.length;i++){
         let s = string[i]
        
         if (s === "{" || s === "(" || s=== "[") {
             stack.push(dict[s])
         } else {
             if (s !== stack.pop()) return false
         }
     }
     
     return stack.length === 0
 };
 