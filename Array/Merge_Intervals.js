/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort(( a, b ) => { return a[0] - b[0] })
    const outputArray = []

    let i = 0
    while (i<intervals.length) {
        let start = intervals[i][0]
        let end = intervals[i][1]
        
        while (i<intervals.length-1 && (end >= intervals[i+1][0])){
            
            start = Math.min(start, intervals[i+1][0])
            end = Math.max(end, intervals[i+1][1])
            i++
        }
        
        outputArray.push([start, end])
        i++
    }
    return outputArray
};   