
//Dispatch function
function JSONParser(string){

    if (string === 'true' || string === 'false') return parseBool(string)
    if (string === 'null') return parseNull()
    if (string[0] === '"') return parseString(string)
    if (string[0] === '{' || string[0] === '[') return partitionData(string)
    else return parseNum(string)
}

function parseString(string){
    return string.slice(1, -1).replaceAll("\\", "")
}

function parseBool(string){
    return string === 'true'
}

function parseNum(string){
    return Number(string)
}

function parseNull(){
    return null
}

function partitionData(string){
    const bracketDict = {'[':']', '{':'}'}
    const bracketStack = []
    const chunks = []
    let currChunk = ''

    //Loop through string (minus initial brackets)
    for (let i = 1; i < string.length - 1; i++){

        //If a string is found, add to chunk until string resolves
        if (string[i] === '"'){
            currChunk += string[i++]
            while (string[i] !== '"' && string[i-1] !== '\\') {
                currChunk += string[i++]
            }
        }

        //If opening bracket is found, push the bracket onto stack
        if (string[i] in bracketDict){
            bracketStack.push(string[i])
        }

        //If we hit a closing bracket, pop it off the stack
        else if (string[i] === bracketDict[bracketStack[bracketStack.length-1]]){
            bracketStack.pop()
        }

        //If we hit a comma, and we are not inside an array or object
        //Push the current chunk into chunks, reset chunk, continue loop
        else if (string[i] === ',' && bracketStack.length === 0) {
            chunks.push(currChunk)
            currChunk = ''
            continue
        }

        //After all conditionals run, add element to chunk
        currChunk += string[i]
        
        //If this is the last element, push your current chunk into chunks
        if (i === string.length - 2) {
            chunks.push(currChunk)
        }
    }

    //Route chunks to parseArray or parseObj
    if (string[0] === '[') return parseArray(chunks)
    return parseObj(chunks)
}

function parseArray(chunks){
    return chunks.map(chunk => JSONParser(chunk))
}

function parseObj(chunks){
    const outputObj = {}
    for (let chunk of chunks){
        const bracketDict = {'[':']', '{':'}'}
        const bracketStack = []
        let key = ''
        let val = ''
        let colon = false
        
        for (let i = 0; i < chunk.length; i++){

            //If a string is found, add to key or value until string resolves
            if (chunk[i] === '"'){
                
                //Construct the string until we hit closing quotation
                let foundString = chunk[i++]
                while (chunk[i] !== '"' && chunk[i-1] !== '\\') {
                    foundString += chunk[i++]
                }
                
                //Decide whether to add to the key or the value
                if (!colon) {
                    key += foundString
                } else val += foundString
            }

            //If element is an opening bracket
            else if (chunk[i] in bracketDict) {
                bracketStack.push(chunk[i])
            }

            //If element is last closing bracket on stack, pop it off stack
            //If the stack is now empty, we are outside of composite data
            else if (chunk[i] === bracketDict[bracketStack[bracketStack.length-1]]) {
                bracketStack.pop()
            }

            //If element is a colon
            //Switch on colon, and continue (don't push in chunk)
            else if (chunk[i] === ':' && bracketStack.length === 0){
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
        outputObj[key.slice(1, -1)] = JSONParser(val)
    }
    return outputObj
}


console.log(JSONParser("something"))
console.log(JSONParser('[1,2,3,[1,3,{"a":"b"}]]'))