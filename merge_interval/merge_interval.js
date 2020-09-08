class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }
}


const merge = function (intervals) {
    merged = []


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

merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
    result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)
