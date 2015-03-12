// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof(obj) === "number" || typeof(obj) === "boolean" || obj === null){
    return String(obj);
  }
  else if (typeof(obj) === "string"){
    return "\"" + obj + "\"";
  }
  else if (Array.isArray(obj)){
    var result = '';
    if (obj.length >= 1){
      result = stringifyJSON(obj[0]);
    }
    for (var i = 1; i < obj.length; i++){
      result += ',' + stringifyJSON(obj[i]);
    }
    return '[' + result + ']';
  }
  else if (typeof(obj) === "object"){
    var result = '';

    var isFirstTime = true;
    for (var key in obj){
      if (obj.hasOwnProperty(key)){
        if (typeof(obj[key]) === "function" || obj[key] === undefined){
          continue
        }
        if (isFirstTime){
          result = result + "\"" + key + "\"" + ":" + stringifyJSON(obj[key]); 
          isFirstTime = false;
        }
        else {
          result = result + ',' + "\"" + key + "\"" + ":" + stringifyJSON(obj[key]); 
        }
      }
    }
    return '{' + result + '}';
  }
};
