// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, calculate the Hamming distance.
// Note:
// 0 ≤ x, y < 231.


var hammingDistance = function(x, y) {
  var xor = x ^ y, count = 0;
  for (var i=0;i<32;i++) count += (xor >> i) & 1;
  return count;
};
