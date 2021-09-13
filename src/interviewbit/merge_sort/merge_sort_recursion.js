const merge = require("./merge");
const merge_sort_recursion = (a, l, r) => {
  const m = Math.floor((r - l) / 2);

  if (l === r) return [a[l]];

  const left = merge_sort_recursion(a, l, m);
  const right = merge_sort_recursion(a, m + 1, r);

  return merge(left, right);
};

const merge_sort = function (a) {
  return merge_sort_recursion(a, 0, a.length - 1);
};

module.exports = merge_sort;
