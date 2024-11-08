const smallest_subarray_with_given_sum = function(s, arr) {
    var minLength = Infinity;
    let windowStart = 0;
    let curSum = 0;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      curSum += arr[windowEnd];
      while(curSum >= s) {
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        curSum -= arr[windowStart];
        windowStart++;
      }
    }

    if(minLength === Infinity) {
      return 0;
    }

    return minLength;
  };  
  

  module.exports = smallest_subarray_with_given_sum;