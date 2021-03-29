function HashTable() {
    this.SIZE = 16;
  
    //Storage instantiated as array with specified size
    this.storage = new Array(this.SIZE);
  }
  
  
  HashTable.prototype.set = function(key, value) {
    //now we have index token
    let index = hashCode(key, this.SIZE)
    
    //run hash function on key, get output
    //if storage at index is null (has not yet been visited)
    if (!this.storage[index]){
      //create a new array 
      let newArr = []
      this.storage[index] = newArr
      //push key val pair into array
      newArr.push([key, value])
    } else {
      //if already visited (collision)
      //push a new array with key/val pair into the value located at index
      this.storage[index].push([key, value])
    }
  };
  
  // return a previously stored value
  HashTable.prototype.get = function(key) {
    // get key and run through hashCode function
    // create var index = evaluated result of calling hashCode passing in key
    let index = hashCode(key, this.SIZE);
    // create a var bucket = this.storage[index]
    let bucket = this.storage[index];
    // loop through bucket
    for (let array of bucket) {
      // bool to check the first el of array and checks if equal to key
      // if key is found, return array
      if (array[0] === key) return array[1]
    } 
    // return "Not found"  
    return "Not found!"
  };
  
  // returns and removes a key from the hash table
  HashTable.prototype.remove = function(key) {
    
    // create index variable and pass in key into hashcode fxn 
    let index = hashCode(key, this.SIZE); 
    
    // declare bucket variable and set it to index of this.storage[index]
    let bucket = this.storage[index]; 
    
    // iterate through bucket   
    for(let array of bucket){
      if(array[0] === key){
        // remove key and return
        return array.pop(); 
      }
    }
  
    return 'Not found!'; 
  };
  
  // let newHashTable = new HashTable()
  // newHashTable.set("green", '#008000')
  // newHashTable.set("blue", '#008000')
  // console.log(newHashTable.storage)
  // newHashTable.get("green")
  
  // returns a number between 0 and size that is unique* and generated from the the inputted string
  function hashCode(string, size){
    let hash = 0;
    if (string.length == 0) return hash;
    for (let i = 0; i < string.length; i++) {
      const letter = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + letter;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash) % size ;
  }
  