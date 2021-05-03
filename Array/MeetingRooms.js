/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
 var canAttendMeetings = function(intervals) {
    intervals = intervals.sort((a, b) => a[0]-b[0])
    
    for (let i = 1; i<intervals.length; i++){
        
        //if a start is ever less than the previous end, we have an overlap
        if (intervals[i-1][1] > intervals[i][0]) return false
    }
    
    return true
};