const words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax"];
const string1 = "ctay";
const string2 = "bcanihjsrrrferet";
const string3 = "tbaykkjlga";
const string4 = "bbbblkkjbaby";
const string5 = "dad";
const string6 = "breadmaking";

const findWord = (string)=>{
  
  let array = string.split('')
  
  for(let x=0;x<words.length;x++){
   let wordArray = words[x].split('')
   let testArray = []
   let newArray = [...array]
   
   for(let y = 0;y<wordArray.length;y++){
     
     if(newArray.includes(wordArray[y])){
       
       testArray.push(wordArray[y])
      let letter = (element)=> element === wordArray[y]
      let index = array.findIndex(letter)
      newArray.splice(index,1)
     }
   }
  let string1 = testArray.toString()
  let string2 = wordArray.toString()
  if(string1 === string2){
    return words[x]
  }
  }return '-'
}

console.log(findWord(string1))
