const max_sub_array_of_size_k = function(k, arr) {
    k = Math.min(k, arr.length);
    let res = 0;

    // calculate initial sum
    for(let i = 0; i<k; i++) {
        res += arr[i];
    }

    let max = res;
    
    // Start from the next slide
    let i = 1;
    let j = k;

    // Calculate upto last slide and compare with the max
    while(j<arr.length) {
        res = res - arr[i-1] + arr[j];
        max = Math.max(max, res);
        i++;
        j++;
    } 

    return max;
  };

  module.exports = max_sub_array_of_size_k;