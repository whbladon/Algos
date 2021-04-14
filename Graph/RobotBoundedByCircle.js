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
        north : { L: 'west', R: 'east', G: () => y++ },
        south : { L: 'east', R: 'west', G: () => y-- },
        east : { L: 'north', R: 'south', G: () => x++ },
        west : { L: 'south', R: 'north', G: () => x-- }
    }
    
    //loop through instructions
    for (let j=0;j<4;j++){
        for (let i=0;i<instructions.length;i++){
        
            const command = instructions[i]
        
            //move command
            if (command === 'G') controlMap[direction][command]()
        
            //turn command
            else direction = controlMap[direction][command]
            
            //if we ever return to origin after an instruction sequence, return true
            if (i == instructions.length-1 && x == 0 && y == 0) return true
        }
    }
   
    return false
};