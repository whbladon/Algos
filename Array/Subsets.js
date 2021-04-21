/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const output = []
    
    const recurse = (index = 0, arr = []) => {
        if (index === nums.length){
            output.push(arr)
            return
        }
        
        
        recurse(index + 1, arr.slice())
        
        if (nums[index] !== undefined){
            arr.push(nums[index])
        }
        
        
        recurse(index + 1, arr)
    }
    recurse()
    
    return output
};