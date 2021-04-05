/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let l = 0
    let r = nums.length - 1
    
    if (nums.length<3){return Math.min(nums[l], nums[r])}
    if (nums[l] < nums[r]) return nums[l]
    
    while (l < r){
        let m = Math.ceil((l+r)/2)
        
        if (m>0 && nums[m]<nums[m-1]) return nums[m]
        
        if (nums[l] <= nums[m]) l = m
        else  r = m
    }
    
    return nums[l]
};