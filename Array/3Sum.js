/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Two pointer approach
const threeSum = function(nums) {
  nums = nums.sort((a,b) => a-b )
  const output = []
  
  //loop through the array
  for (let i = 0; i < nums.length - 2; i++){
      const base = nums[i]
      if (base > 0) break
      
      const target = 0 - base
      let l = i + 1
      let r = nums.length - 1
      
      while (l<r){
          const right = nums[r]
          const left = nums[l]
          const localSum = right + left
          
          //check output condition
          if (localSum === target) output.push([base, left, right])
          
          
          //move pointers
          if (localSum < target) l++
          else { 
              //detect duplicate r values
              while (right === nums[--r]) {}
          }
      }
      
      //detect duplicate left values
      while (base === nums[i+1]) i++
  }
          
  return output
}
