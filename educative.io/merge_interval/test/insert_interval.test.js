const { Interval, insert_interval } = require("../insert_interval");

describe('insert_interval: ', () => {
    it('should instert and merge properly', () => {
        expect(insert_interval([
            new Interval(1, 3),
            new Interval(5, 7),
            new Interval(8, 12),
        ], new Interval(4, 6)))
            .toStrictEqual([new Interval(1, 3), new Interval(4, 7), new Interval(8, 12)]);

        expect(insert_interval([
            new Interval(1, 3),
            new Interval(5, 7),
            new Interval(8, 12),
        ], new Interval(4, 10)))
            .toStrictEqual([new Interval(1, 3), new Interval(4, 12)]);


        expect(insert_interval([
            new Interval(2, 3),
            new Interval(5, 7),
        ], new Interval(1, 4)))
            .toStrictEqual([new Interval(1, 4), new Interval(5, 7)]);

    });

});