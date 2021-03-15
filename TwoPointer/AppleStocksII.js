/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    
    let maxProfit = 0
    
    //track all positive differences between subsequent nodes
    for (let i = 0; i < prices.length; i++){
        if (prices[i] > prices[i-1]){
            maxProfit += prices[i] - prices[i-1]
        }
    }
    
    return maxProfit
};