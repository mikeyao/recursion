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
    var isExist = false;
    var classList = node.classList;

    if (classList != undefined) {
      for (var i = 0; i < classList.length; i++){
        if (className === classList[i]){
          isExist = true;
          break;
        }
      }
      if (isExist) {
        // console.log(node);
        result.push(node);
      }
    }
    
    if (node.hasChildNodes()) {
      var children = node.childNodes;
      for (var i = 0; i < children.length; i++){
        helpFun(children[i]);
      }
    }

  };
  helpFun(document.body);

  return result;
};
