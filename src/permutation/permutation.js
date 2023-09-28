const permutationRec = (res, arr, start) => {
  if (start >= arr.length) {
    res.push([...arr])
  }

  for (let i = start; i < arr.length; i++) {
    [arr[i], arr[start]] = [arr[start], arr[i]]
    permutationRec(res, arr, start + 1) // Start Remaining Values Permuation with already swapped values
    [arr[i], arr[start]] = [arr[start], arr[i]]
  }
}

const permutation = (arr) => {
  const res = []
  permutationRec(res, arr, 0)
  return res
}

module.exports = permutation
