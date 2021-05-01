function knightDialer(N) {
    
    //plot all edges of graph
        //index is number, array is potential moves
  let moves = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [2, 4]];
    
    //dp is an array that will be re-assigned constantly
    //start with 1s because if n = 1 then 1 move per square
  let dp = new Array(10).fill(1);
    
    
    //each iteration decreases n by 1
  while (N > 1) {
      
      //instantiate local array with zeros
    let next = new Array(10).fill(0);
      
      //loop through each cel of dp
    for (let i = 0; i < dp.length; i++) {
        
        //loop through each potential move from cel
      for (let neighbor of moves[i]) {
          
          //add potential permutations from each edge to cel in new local array
        next[i] += dp[neighbor];
          //mod it
        next[i] %= (Math.pow(10, 9) + 7);
      }
    }
    N--;
      
      
    dp = next;
  }
    
    //calculate total cels by looping through and adding them up
  return dp.reduce((acc, val) => acc + val, 0) % (Math.pow(10, 9) + 7);
};