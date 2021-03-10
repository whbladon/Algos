/**
 * @param {character[][]} grid
 * @return {number}
 */
 const numIslands = grid => {
  
 
    //island count var
    let counter = 0
  
    //DFS on element
            //if element is 0 or if visited, exit
            //mark visited in obj
            //recurse to r,l,u,d
    
    const dfs = (y, x) => {
      if (grid[y][x] === "0" ) return
      grid[y][x] = "0"
      if (y+1<grid.length) dfs(y+1, x)
      if (y-1>=0) dfs(y-1, x)
      if (x+1<grid[0].length)dfs(y, x+1)
      if (x-1>=0) dfs(y, x-1)
    }
  
    //outer loop through rows
    for (let y=0;y<grid.length;y++){
      //inner loops through columns
      for (let x=0;x<grid[0].length;x++){
        
          //if island, DFS it
        if (grid[y][x] === "1"){
          counter++
          dfs(y, x)
        }
      }
    }
    return counter
  };