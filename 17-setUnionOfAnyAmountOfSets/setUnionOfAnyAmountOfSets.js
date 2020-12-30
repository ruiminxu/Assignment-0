function setUnionOfAnyAmountOfSets(...args) {
  let set = new Set();
  
  for(let i = 0; i < args.length; i++)
  {
    let tempSet = new Set(); 
    tempSet = args[i];
    
    tempSet.forEach(elements => set.add(elements));
    

  }

  
  
  return set;

}

let setA = new Set([10,20]);
let setB = new Set([30,40]);

console.log(setUnionOfAnyAmountOfSets(setA, setB));
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;