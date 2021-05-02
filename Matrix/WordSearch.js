/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const width = board[0].length
    const height = board.length
    
    //loop through each cel looking for first element of word
    for (let y = 0; y<height; y++){
        for (let x = 0; x<width; x++){
            
            //send off recurse
            if (searchNeighbor(y, x)) return true
        }
    }
    
    //helper function does dfs
    function searchNeighbor(y, x, index = 0){
        let right = false, left = false, up = false, down = false
        
        //basecases
        if (board[y][x] == '*' || board[y][x] !== word[index]) return false
        if (index === word.length-1 ) return true
        
        //take board state, mark path
        let placeholder = board[y][x]
        board[y][x] = '*'
        
        //traverse each direction
        if (x+1<width) right = searchNeighbor(y, x+1, index+1)
        if (x-1>=0) left = searchNeighbor(y, x-1, index+1)
        if (y+1<height) up = searchNeighbor(y+1, x, index+1)
        if (y-1>=0) down = searchNeighbor(y-1, x, index+1)
            
        //clean board
        board[y][x] = placeholder
        
        //if any direction is valid, bubble up true
        return right || left || up || down
    }
    
    return false
};
