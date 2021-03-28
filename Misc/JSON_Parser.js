//Dispatch function
function JSONParser(string) {
    if (string === "true" || string === "false") return parseBool(string);
    if (string === "null") return parseNull();
    if (string[0] === '"') return parseString(string);
    if (string[0] === "{" || string[0] === "[") return partitionData(string);
    else return parseNum(string);
  }
  
  function parseString(string) {
    return string.slice(1, -1).replaceAll("\\", "");
  }
  
  function parseBool(string) {
    return string === "true";
  }
  
  function parseNum(string) {
    return Number(string);
  }
  
  function parseNull() {
    return null;
  }
  
  function partitionData(string) {
    const bracketDict = { "[": "]", "{": "}" };
    const bracketStack = [];
    const chunks = [];
    let currChunk = "";
  
    //Loop through string (minus initial brackets)
    for (let i = 1; i < string.length - 1; i++) {
      //If a string is found, add to chunk until string resolves
      if (string[i] === '"') {
        currChunk += string[i++];
        while (string[i] !== '"' && string[i - 1] !== "\\") {
          currChunk += string[i++];
        }
      }
  
      //If opening bracket is found, push the bracket onto stack
      if (string[i] in bracketDict) {
        bracketStack.push(string[i]);
      }
  
      //If we hit a closing bracket, pop it off the stack
      else if (string[i] === bracketDict[bracketStack[bracketStack.length - 1]]) {
        bracketStack.pop();
      }
  
      //If we hit a comma, and we are not inside an array or object
      //Push the current chunk into chunks, reset chunk, continue loop
      else if (string[i] === "," && bracketStack.length === 0) {
        chunks.push(currChunk);
        currChunk = "";
        continue;
      }
  
      //After all conditionals run, add element to chunk
      currChunk += string[i];
  
      //If this is the last element, push your current chunk into chunks
      if (i === string.length - 2) {
        chunks.push(currChunk);
      }
    }
  
    //Route chunks to parseArray or parseObj
    if (string[0] === "[") return parseArray(chunks);
    return parseObj(chunks);
  }
  
  function parseArray(chunks) {
    return chunks.map((chunk) => JSONParser(chunk));
  }
  
  function parseObj(chunks) {
    const outputObj = {};
  
    for (let chunk of chunks) {
      let key = "";
      let val = "";
  
      //Loop to populate key and val
      for (let i = 1; i < chunk.length; i++) {
  
        //Add elements to key until string resolves
        if (chunk[i] !== '"' && chunk[i-1] !== "\\") {
          key += chunk[i]
  
        //Once string resolves, add remaining elements to value
        } else {
          val = chunk.slice(i+2)
          break
        }
      }
      
      //Add key/val pairs to output object
      outputObj[key] = JSONParser(val);
    }
    return outputObj;
  }
  