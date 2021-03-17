/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if (prices.length < 1) return 0
    
    let min = prices[0]
    let max = prices[0]
    let maxProfit = 0
   
    for (let i=0; i < prices.length; i++){
        let ele = prices[i]
        
        if (ele > max) max = ele
       
        if (ele < min) {
            max = ele
            min = ele
        }
        maxProfit = Math.max(max - min, maxProfit)
    }
   
    
    return maxProfit
};