function isHappyNumber(n) {
  const getSquareSum = (num) => {
    let sum = 0
    while (num > 0) {
      const digit = num % 10
      num = Math.floor(num / 10)
      sum += digit ** 2
    }
    return sum
  }

  let slowPointer = n
  let fastPointer = getSquareSum(n)

  while (fastPointer != 1 && fastPointer != slowPointer) {
    fastPointer = getSquareSum(getSquareSum(fastPointer))
    slowPointer = getSquareSum(slowPointer)
  }

  return fastPointer === 1
}

module.exports = isHappyNumber
