function sumOfNumsWithinARange(nums, start, end) {
  let count = 0;

  for(let i = start; i <= end; i++)
  {
    if(nums[i] === i)
    {
      count++;
    }
  }
  return count;


}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;