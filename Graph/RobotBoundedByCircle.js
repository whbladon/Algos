/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
    
    //track position based on x and y coordinates
    let x = 0
    let y = 0
    let direction = 'north'
    
    //create directional hash
    const controlMap = {
        
        //contains cases for changing direction based on
        n : {"L": 'west', "R": 'east', "G": ()=>{y++}},
        s : {"L": 'east', "R": 'west', "G": ()=>{y--}},
        e : {"L": 'north', "R": 'south', "G": ()=>{x++}},
        w : {"L": 'south', "R": 'north', "G": ()=>{x--}}
    }
    
    
    
    
};