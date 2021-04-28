/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums == null || nums.length == 0) return -1
    
    let l = 0
    let r = nums.length - 1
    
    while (l < r){
        let m = Math.floor((l+r)/2)
        
        if (nums[m] > nums[r]) l = m+1
        else r = m
    }
    
    let midpoint = l
    r = nums.length - 1
    l = 0
    
    if (target >= nums[midpoint] && target <= nums[r]){
        l = midpoint
    } else r = midpoint
    
    while (l<=r){
        let m = Math.floor((l+r)/2)
        if (nums[m] === target) return m
        
        if (nums[m]> target) r = m-1
        else l = m+1
    }
     
    return -1
    
};