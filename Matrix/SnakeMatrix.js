function snakeMatrix(rows, cols){
    let down = true, count = 1
  
    //create empty matrix
    const board = Array(rows).fill().map(()=> Array(cols).fill(0))
    
    //move columns
    for (let col = 0; col < cols; col++){
  
      //move up by row
      if (down) {
        for (let row = 0; row<rows;row++){
          board[row][col] = count++
        }
  
      //move down by row
      } else {
        for (let row = rows-1; row >= 0;row--){
          board[row][col] = count++
        }
      }
  
      //flip direction
      down = !down
    }
    
    return board
  }
  
  console.log(snakeMatrix(4, 5))