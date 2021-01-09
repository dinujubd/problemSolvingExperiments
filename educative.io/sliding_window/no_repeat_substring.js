const no_repeat_substring = function (str) {
    let maxSubstr = -1;
    if (!str) return maxSubstr;
    let minWindow = 0;
    let setOfChars = new Set();

    for (let maxWindow = 0; maxWindow < str.length; maxWindow++) {
        if (setOfChars.has(str[maxWindow])) {
            minWindow++;
            maxSubstr = Math.max(maxSubstr, maxWindow - minWindow + 1);
        } else {
            setOfChars.add(str[maxWindow])

        }
    }

    return maxSubstr;
}

module.exports = no_repeat_substring