var groupAnagrams = function(strs) {
    let map = new Map
    let temp
    
    for (let str of strs){
        temp = str.split('').sort().join('')
        
        if (map.has(temp)){
            map.get(temp).push(str)
        } else {
            map.set(temp, [str])
        }
    }
    
    return Array.from(map.values())
};