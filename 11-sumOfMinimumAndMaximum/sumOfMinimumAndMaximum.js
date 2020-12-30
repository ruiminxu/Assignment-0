function sumOfMinimumAndMaximum(nums) {

    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for(let i = 0; i < nums.length; i++)
    {
      if(nums[i] < min)
      {
         min = nums[i];
      }else if(nums[i] > max)
      {
         max = nums[i];
      }
    }
    return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;