module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let notSimple = false;
  for(let i=0; i < arr.length; i++) {
      if(arr[i] === '--discard-next' ||
         arr[i] === '--discard-prev' ||
         arr[i] === '--double-next' ||
         arr[i] === '--double-prev') notSimple = true; break;
  }

  if (arr.length == 0 || !notSimple) return arr;

  let result = [];
  arr.reduce( (deleteNext, current, i) => {
    if (current === '--discard-next' && arr[i + 1])     deleteNext = true;
    else if (current === '--discard-prev' && result[i - 1])  delete result[i - 1];
    else if (current === '--double-next' && arr[i + 1])      result.push(arr[i + 1]);
    else if (current === '--double-prev' && result[i - 1])   result.push(result[i - 1]);
    else {
        switch (current) {
            case '--discard-next':
            case '--discard-prev':
            case '--double-next':   
            case '--double-prev':
                    break;
            default: result.push(current);
        }
    }

    if (deleteNext && result[i]) delete result[i];
  }, 0);

  return result;
};