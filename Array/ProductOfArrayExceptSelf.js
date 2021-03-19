/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
   
    const cache = []
    const output = []
    let product = 1
    
    for (let i=nums.length-2;i>=0;i--){
        product = product * nums[i+1]
        cache.unshift(product)
    }

    product = 1
    output.push(cache[0])

    for (let i=1;i<nums.length - 1;i++){
        product = nums[i-1] * product
        output.push(product*cache[i])
    }

    output.push(product*nums[nums.length-2])
    
    return output
};
