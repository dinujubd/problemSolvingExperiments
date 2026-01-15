const sort = function (a) {
  for (let i = 1; i < a.length; i++) {
      let j = i - 1;
      let key = a[i];
      while(j >= 0 && a[j] > key) {
        a[j+1] = a[j];
        j--;
      }
      a[j+1] = key;
  }
  return a;
};

module.exports = sort;
