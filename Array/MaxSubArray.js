/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Kadane's algo


 const maxSubArray = (array) => { 
    let maxSum = -Infinity;
    let currentSum = 0; 
  
    for (let i = 0; i < array.length; i++) { 
        currentSum = currentSum + array[i]; 
        
        if (maxSum < currentSum) 
            maxSum = currentSum; 
  
        if (currentSum < 0) 
            currentSum = 0; 
    } 
    return maxSum; 
} 