














//Naive backtracking 


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    
    //construct adjacency list
    const adjList = {}
    for (let [edgeStart, edgeEnd]  of prerequisites){
        if (!adjList[edgeStart]) adjList[edgeStart] = {}
        adjList[edgeStart][edgeEnd] = true
    }
    
    var DFS = (vertex, prevVertex = null) => {
        
        //if we reach a dead end
        if (!adjList[vertex]) return false
        
        for (let edgeEnd of Object.keys(adjList[vertex])){
            
            //if already visited, cycle detected, bubble it up
            if (!adjList[vertex][edgeEnd]) return true
            
            //otherwise, mark vertex, send off recursive call, then clean up
            adjList[vertex][edgeEnd] = false
            if (DFS(edgeEnd)) return true
            adjList[vertex][edgeEnd] = true
        }
        
        return false
    }
    
     //send off recurse for every vertex with outgoing edges
    for (let edgeStart of Object.keys(adjList)){
        if (DFS(edgeStart)) return false
    }
    
    
    return true
};




