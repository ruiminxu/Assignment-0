function frequencyCounter(word) {
  
  const w = new Object();
  
  for(let i = 0; i < word.length; i++)
  {
    let holder = word.charAt(i);

    if(w[holder] ===  undefined)
    {
      w[holder] = 1;
    }else{
      w[holder] = w[holder] + 1;
    }

  }

  return w;
 

}

// Do not edit this line;
module.exports = frequencyCounter;