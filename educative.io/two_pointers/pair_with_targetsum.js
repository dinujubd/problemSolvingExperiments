const pair_with_targetsum = function(arr, target_sum) {
    let i = 0, j = arr.length - 1;
   
    while(i<j) {
      const sum = arr[i] + arr[j];
      if(sum === target_sum) return [i, j];
      if(sum < target_sum) {
        i++;
      } else {
        j--;
      }
    }

    return [-1, -1];
}

module.exports = pair_with_targetsum;
  