const { merge, Interval } = require("../merge_interval");

describe('merge Interval: ', () => {
    it('should perform the possible merge of the intervals', () => {
        expect(merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]))
            .toStrictEqual([new Interval(2, 4), new Interval(5, 9)]);

        expect(merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]))
            .toStrictEqual([new Interval(1, 5), new Interval(7, 9)]);

        expect(merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]))
            .toStrictEqual([new Interval(1, 6)]);

        expect(merge([new Interval(1, 4)]))
            .toStrictEqual([new Interval(1, 4)]);

        expect(merge([new Interval(1, 4), new Interval(0, 2), new Interval(3, 5)]))
            .toStrictEqual([new Interval(0, 5)]);
    });
});