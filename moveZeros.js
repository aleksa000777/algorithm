// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// 
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
// 
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
   for(var i = nums.length; i--;){
    if(nums[i]===0){
      nums.push(nums.splice(i,1)[0])
    }
  }
};

var moveZeroes2 = function(nums) {
   var numZerosSoFar = 0;
    var currNum;
    for(var i = 0; i < nums.length; i++) {
        currNum = nums[i];
        if(currNum == 0) numZerosSoFar++;
        else nums[i - numZerosSoFar] = currNum; 
    }
    for(var i = nums.length - 1; numZerosSoFar > 0; i--, numZerosSoFar--) {
        nums[i] = 0;
    }

};
