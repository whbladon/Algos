
var findCircleNum = function(isConnected) {
    
    const visited = {}
    let counter = 0
    
    //loop through each vertex
    for (let row = 0; row < isConnected.length; row++) {
        //if vertex hasn't yet been marked, run a DFS on it
        if (!visited[row]){
            DFS(row)
            counter++
        }
    }
        
    
    function DFS(row) {
        //loop through each edge
        for (let col = 0; col < isConnected.length; col++) {
            //if connected edge exists and vertex is not yet visited, run DFS on it and mark it
            if (isConnected[row][col] === 1 && !visited[col]){
                visited[col] = true
                DFS(col)
            }
        }
    }

    return counter
};