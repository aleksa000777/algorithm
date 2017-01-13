// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
//
// Example:
// Given a = 1 and b = 2, return 3.

var getSum = function(a, b) {
  var result = a ^ b; // + without carry 0+0=0, 0+1=1+0=1, 1+1=0
    var carry = (a & b) << 1; // 1+1=2
    if (carry !== 0) {
        return getSum(result, carry);
    }
    return result;


};

getSum(2,3)
