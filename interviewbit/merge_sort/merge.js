const merge = function (a, b) {
  let merged = [];
  let [i, j] = [0, 0];

  while (i < a.length && j < b.length) {
    const [l, r] = [a[i], b[j]];
    if (l < r) {
      merged.push(l);
      i++;
    } else {
      merged.push(r);
      j++;
    }
  }

  const restOfA = a.slice(i);
  const restOfB = b.slice(j);

  return [...merged, ...restOfA, ...restOfB];
};

module.exports = merge;