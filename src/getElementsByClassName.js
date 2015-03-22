// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var result = [];

  var helpFun = function(node){
    // Check if the className belongs to the current element
    if (_.contains(node.classList, className)) {
      result.push(node);
    }

    //Recursive calling on childNodes of the element
    if (node.hasChildNodes()) {
      _.each(node.childNodes, helpFun);
    }
  };

  helpFun(document.body);
  return result;
  
};
