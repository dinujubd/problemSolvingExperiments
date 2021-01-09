const longest_substring_with_k_distinct = function(str, k) {
    let res = Number.NEGATIVE_INFINITY;
    let minWindow = 0;
    let s = new Set();

    for(let maxWindow = 0; maxWindow < str.length; maxWindow++) {
        s.add(str[maxWindow]);

        while(s.size > k) {
            s.delete(str[minWindow])
            res = Math.max(res, maxWindow - minWindow);
            minWindow++;
        }
    }

    return res;
  };
  
  module.exports = longest_substring_with_k_distinct;