/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    if (nums.length<1) return 0
    
    let maxLen = 1
    let localLen = 1
    
    for (let i=1;i<nums.length;i++){
        if (nums[i-1]< nums[i]){
            localLen++
        } else localLen = 1
       
        maxLen = Math.max(localLen, maxLen)
    }
        
    
    return maxLen
};