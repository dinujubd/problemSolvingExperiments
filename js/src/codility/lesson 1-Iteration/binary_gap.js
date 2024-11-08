const binaryGap = (num) => {
    if (num === 0) return 0
    let max = 0;
    let cur = 0;
    let isOpen = false;

    while (num > 0) {
        if (num % 2 === 1) {
            isOpen = !isOpen;
            if (isOpen === false) {
                max = Math.max(cur, max);
                cur = 0;
                continue;
            }
        } else {
            if (isOpen) cur++;
        }

        num >>= 1;
    }
    return max;
}

module.exports = binaryGap;