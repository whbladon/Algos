/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

//kahn's topo sort
 var findOrder = function(numCourses, prerequisites) {
    //create output, queue, indegree
    const output = []
    const queue = []
    const indegree = Array(numCourses).fill(0)
    
    
    //create adjacency list
    //fill inbounds list
    const adj = new Map()
    for (const [u, v] of prerequisites){
        if (adj.has(v)) adj.get(v).push(u)
        else adj.set(v, [u])
        indegree[u]++
    }
    
    
    //add nodes with 0 inbounds to queue
    for (let i = 0; i<numCourses; i++){
        if (indegree[i] === 0) queue.push(i)
    }
    
    
    //loop through queue, push each vertex to output
    while (queue.length > 0){
        const vertex = queue.shift()
        const edges = adj.get(vertex) || 0
        output.push(vertex)
        
        //decrement inbounds for every outgoing edge, if zero, add to queue
        for (let i = 0; i < edges.length; i++){
            indegree[edges[i]]--
            if (indegree[edges[i]] === 0) queue.push(edges[i])
        }
    }
    
    
    //if output order is less than numCourses, return empty array
    //otherwise return array
    if (output.length<numCourses) return []
    else return output
};