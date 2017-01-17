// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
//
// For example:
//
// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
//
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

var addDigits = function(num) {
    if(num===0) return 0;
    if(num <10) return num;
    return num-9*Math.floor((num-1)/9)
};

var addDigits2 = function(num) {
 return 1 + (num - 1) % 9;
}
