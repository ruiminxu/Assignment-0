function fizzBuzz(start, end) {
  
  const array = new Array();

  for(let i = start; i <= end; i++)
  {
      if(i % 3 === 0 && i % 5 === 0)
      {
        array.push("FizzBuzz");
      }else if(i % 3 === 0)
      {
        array.push("Fizz");
      }else if(i % 5 === 0)
      {
        array.push("Buzz");
      }else{
        array.push(i);
      }
  }

  return array;

}




// Do not edit this line;
module.exports = fizzBuzz;