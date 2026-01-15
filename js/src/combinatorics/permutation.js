const permutationRec = (res, arr, start) => {
  if (start >= arr.length) {
    res.push([...arr])
    return
  }

  for (let i = start; i < arr.length; i++) {
    let temp = arr[i]
    arr[i] = arr[start]
    arr[start] = temp
    permutationRec(res, arr, start + 1)
    temp = arr[i]
    arr[i] = arr[start]
    arr[start] = temp
  }
}

const permutation = (arr) => {
  const res = []
  permutationRec(res, arr, 0)
  return res
}

module.exports = permutation
