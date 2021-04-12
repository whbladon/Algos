/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */




/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.

exe:
maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]);
returns 18 from subarray [3, 10, -4, 7, 2]

maxSubarray([15, 20, -5, 10]); 
// returns 40 from subarray [15, 20, -5, 10]
*/

 const maxSubArray = (array) => { 
    let maxSum = -Infinity;
    let currentSum = 0; 
  
    for (let i = 0; i < array.length; i++) { 

        //Add current element to currentSum
        currentSum = currentSum + array[i]; 
        
        //If currentSum is greater than max sum, re-assign maxSum
        if (currentSum > maxSum) 
            maxSum = currentSum; 
  
        //If currentSum drops below zero, reset currentSum
        if (currentSum < 0) 
            currentSum = 0; 
    } 
    return maxSum; 
} 







