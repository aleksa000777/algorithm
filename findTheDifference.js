// Given two strings s and t which consist of only lowercase letters.
//
// String t is generated by random shuffling string s and then add one more letter at a random position.
//
// Find the letter that was added in t.
var findTheDifference = function(s, t) {
    for(var i = 0; i<s.length;i++){
    t=t.slice(0,t.indexOf(s[i])) + t.slice(t.indexOf(s[i])+1)
  }
  return t;
};