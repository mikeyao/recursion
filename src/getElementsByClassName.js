// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var results = [];

  function helperFun(node){
    if (_.contains(node.classList, className)){
      results.push(node);
    }
    _.each(node.childNodes, helperFun);
  }

  helperFun(document.body);
  return results;

};
