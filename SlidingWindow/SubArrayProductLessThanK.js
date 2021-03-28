/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
    let l = 0, r = 0, product = 1, output = 0, chunk = 0
    
    while (r<nums.length){
        chunk++
        product = product * nums[r]
        
        while(product>=k && chunk){
            product /= nums[l]
            chunk--
            l++
        }
        
        if (product<k) output += chunk
        r++
    }
    return output
};