//Dispatcher function
//Identifies datatype, routes to parsing function
function jsonParser(string){
    
    if (string === 'true' || string === 'false') return parseBool(string)
    else if (string === 'null') return parseNull(string)
    else if (string[0] === '"') return parseString(string.slice(1, -1))
    else if (string[0] === '{' || string[0] === '[') return partitionData(string)
    else return parseNum(string)
}

//
function parseString(string){
    return string
}

function parseBool(string){
    if (string === true) return true
    else return false
}

function parseNum(string){
    return parseInt(string)
}

function parseNull(string){
    return null
}

function parseObj(chunks){
    const outputObj = {}
    for (let chunk of chunks){
        const bracketDict = { '"': '"', '[':']', '{':'}'}
        const bracketStack = []
        let key = ''
        let val = ''
        let inObjectOrArray = false
        let colon = false
        
        for (let i = 0; i < chunk.length; i++){

            //if element is an opening bracket
            if (chunk[i] in bracketDict) {
                bracketStack.push(chunk[i])
                inObjectOrArray = true
            }

            //if element is last closing bracket on stack, pop it off stack
            //if the stack is now empty, we are outside of composite data
            if (chunk[i] === bracketDict[bracketStack[bracketStack.length-1]]){
                bracketStack.pop()
                if (bracketStack.length === 0) inObjectOrArray = false
            }

            //if element is a colon
            //Switch on colon, and continue (don't push in chunk)
            if (chunk[i] === ':' && !inObjectOrArray){
                colon = true
                continue
            }

            //If colon hasn't yet been hit, add to key
            //If colon has been hit, add to value
            if (!colon) {
                key += chunk[i]
            } else val += chunk[i]
        }

        //Parse all values
        obj[key.slice[1, -1]] = jsonParser(val)
    }
    return obj
}

function parseArray(chunks){
    return chunks.map(chunk => jsonParser(chunk))
}

function partitionData(string){
    const bracketDict = { '"': '"', '[':']', '{':'}'}
    const bracketStack = []
    const quoteStack = []
    const chunks = []
    let currChunk = ''

    //Loop through string (minus initial brackets)
    for (let i = 1; i < string.length - 1; i++){

        //if quote is found (without escape char)
        if (string[i] === '"' && string[i-1] !== '\\'){
            //if we are currently in string
            if (quoteStack.length === 1) {
                inString = false
                quoteStack.pop()

            //if we are not currently in string
            } else {
                inString = true
                quoteStack.push(string[i])
            }
        }

        //If nested array is found
        if (string[i] in bracketDict && !inString){
            bracketStack.push(string[i])
            inObjectOrArray = true
        }

        //if we hit a closing bracket AND we aren't inside a string
        //Pop element off bracketstack, if stack is empty, we are outside obj or array now
        if (string[i] === bracketDict[bracketStack[bracketStack.length-1]] && !inString ){
            bracketStack.pop()
            if (bracketStack.length === 0) inObjectOrArray = false
        }

        //if we hit a comma, and we are not inside a string or an array
        //Push the current chunk into chunks, continue loop
        if (string[i] === ',' && !inString && !inObjectOrArray) {
            chunks.push(currChunk)
            currChunk = ''
            continue
        }

        //After all conditionals run, add element to chunk
        currChunk += string[i]
        
        //If this is the last element, push your current chunk into chunks
        if (i === string.length - 1) {
            chunks.push(currChunk)
        }
    }

    //If we started with an array, pass chunks into parseArray
    //Otherwise we started with an object, so pass chunks into parseObj
    if (string[0] === '[') return parseArray(chunks)
    return parseObj(chunks)
}


