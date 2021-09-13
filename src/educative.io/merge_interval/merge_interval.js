class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

const merge = function (inv) {
    let merged = [];
    
    if (inv && inv.length === 1) return [inv[0]]

    inv = inv.sort((x, y) => x.start - y.start);
    
    merged.push(inv[0]);

    for(let i = 1; i < inv.length; i++) {
        const prev = merged[merged.length - 1];
        const cur = inv[i];
        if(cur.start > prev.end) {
            merged.push(cur);
        } else {
            prev.end = Math.max(prev.end, cur.end)
        }
    }

    return merged;
};

module.exports = {
    Interval,
    merge,
}
