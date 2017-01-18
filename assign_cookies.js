// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.
// 
// Note:
// You may assume the greed factor is always positive. 
// You cannot assign more than one cookie to one child.

var findContentChildren = function(g, s) {
  var result=0;
  var x = g.sort(function(a, b){return a - b});;
  var y = s.sort(function(a, b){return a - b});;
  var count=0;
  var temp=0;
  var len = x.length;
  for(var i =0;i<y.length;i++){
    if(temp>=x.length) return result;
    if(y[i]>=x[temp]) {
      result++;
      temp++
    }
  }
  
    return result
};


var findContentChildren2 = function(g, s) {
g.sort(function(a, b){return a - b});
s.sort(function(a, b){return a - b});
var i = 0;
for(var j=0;i<g.length && j<s.length;j++) {
	if(g[i]<=s[j]) i++;
}
return i;
}

findContentChildren2([1,2,3], [1,1])
