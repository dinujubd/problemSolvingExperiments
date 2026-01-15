function findMaxSlidingWindow(windowSize, nums) {
  const dq = []
  const result = []

  for (let i = 0; i < nums.length; i++) {
    while (dq.length && dq[0] <= i - windowSize) dq.shift()
    while (dq.length && nums[i] >= nums[dq[dq.length - 1]]) dq.pop()
    dq.push(i)
    if (i >= windowSize - 1) result.push(nums[dq[0]])
  }

  return result
}

module.exports = findMaxSlidingWindow
