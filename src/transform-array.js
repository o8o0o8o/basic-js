module.exports = function transform(arr) {
  
  if (!Array.isArray(arr)) throw new Error();

  let result = [];
  
  //main idea: skip flags, concentrate on elements and what's them surround
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':
      case '--discard-prev':
      case '--double-next':
      case '--double-prev':
        continue;
    }

    result.push(arr[i]);

    switch(arr[i+1]) {
      case '--double-prev':
        result.push(arr[i]);
        break;
      case '--discard-prev':
        result.splice(result.length-1,1);
        break;
    }

    switch(arr[i-1]) {
      case '--double-next':
        result.push(arr[i]);
        break;
      case '--discard-next':
        result.splice(result.length-1,1);
        break;
    }
  }

  return result;

};