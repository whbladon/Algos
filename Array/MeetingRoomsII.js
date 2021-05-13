function minMeetingRooms(intervals) {

    if (intervals==null || intervals.length==0){
        return 0
    }
    if (intervals.length==1){
        return 1
    }
    
    const start = intervals.sort((a, b) => a[0] - b[0])
    
    const end = intervals.slice().sort((a, b) => a[1] - b[1])
    
    let s = 0
    let e = 0
    let output = 0
    
    
    while (s < start.length){
        
        if (start[s][0] < end[e][1]) {
            output++
            
        } else e++
        
        s++
    }
    
    return output
    
}