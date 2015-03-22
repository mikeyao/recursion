// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof(obj) === 'number' || 
      obj === null || 
      typeof(obj) === 'boolean'
      ) {
    return String(obj);
  }

  else if (typeof(obj) === 'string') {
    return "\"" + obj + "\"";
  }

  else if (Array.isArray(obj)) {
    // var result = '[';
    // for (var i = 0; i < obj.length - 1; i++) {
    //   result += stringifyJSON(obj[i]) + ',';
    // }
    // if (obj.length) {
    //   result += stringifyJSON(obj[i]);
    // }
    // result += ']';
    // return result;

    var result = '';
    _.each(obj, function(x){
      result += stringifyJSON(x) + ',';
    });
    if (obj.length){
      result = result.slice(0, result.length - 1);
    }
    return '[' + result + ']';
  }

  else if (typeof(obj) === 'object') {
    var result = '';

    for (var key in obj) {

      if (typeof(obj[key]) === 'function' || obj[key] === undefined) {
        continue;
      } else {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    result = result.slice(0, result.length - 1);
    
    return '{' + result + '}';
  }
  
};
