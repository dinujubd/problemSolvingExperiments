class Interval {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
}

const merge = function (inv) {
  let merged = []

  if (inv && inv.length === 1) return [inv[0]]

  inv = inv.sort((x, y) => x.start - y.start)

  merged.push(inv[0])

  for (let i = 1; i < inv.length; i++) {
    const prev = merged[merged.length - 1]
    const cur = inv[i]
    if (cur.start > prev.end) {
      merged.push(cur)
    } else {
      prev.end = Math.max(prev.end, cur.end)
    }
  }

  return merged
}

const merge2 = function (intervals) {
  let merged = []

  intervals = intervals.sort((x, y) => x[0] - y[0])

  merged.push(intervals[0])

  for (let i = 1; i < intervals.length; i++) {
    const prev = merged[merged.length - 1]
    const cur = intervals[i]
    if (cur[0] > prev[1]) {
      merged.push(cur)
    } else {
      prev[1] = Math.max(prev[1], cur[1])
    }
  }

  return merged
}

module.exports = {
  Interval,
  merge,
  merge2,
}
