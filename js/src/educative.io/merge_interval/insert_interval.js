class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
}

const merge = function (intervals) {
    let merged = [];
    
    if (intervals && intervals.length === 1) return intervals[0]

    intervals = intervals.sort((x, y) => x.start - y.start)

    merged.push(intervals[0])

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        const latest = merged[merged.length - 1]

        if (interval.start > latest.end && interval.end > latest.end) {
            merged.push(interval);
        } else {
            latest.end = Math.max(interval.end, latest.end);
        }

    }

    return merged;
};

const insert_interval = function(intervals, new_interval) {
  return merge([...intervals, new_interval]);
}

module.exports = {Interval, insert_interval}