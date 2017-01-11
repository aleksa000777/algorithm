// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements of [1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.


var findDisappearedNumbers = function(nums) {
   var res=[];
    var n = nums.length;
    for(var i = 0; i < nums.length; i++ ) nums[(nums[i]-1) % n] += n;
    for (var j = 0; j < nums.length; j ++) if (nums[j] <= n) res.push(j+1);
    return res;
};
