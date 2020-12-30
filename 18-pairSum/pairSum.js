function pairSum(nums, target) {
  
  let paired = false;
  
  if(nums.length <= 1)
  {
    throw "too low";
  }else{
    
    
    for(let i = 0; i < nums.length - 1; i++)
    {
      for(let j = i + 1; j < nums.length; j++)
      {
        if((nums[i] + nums[j]) == target)
        {
          paired = true;
          
        }
      }
    }
  }

  return paired;

}


// Do not edit this line;
module.exports = pairSum;