const no_repeat_substring = function (str) {
    let maxSubstr = -1;
    if (!str) return maxSubstr;
    let minWindow = 0;
    let setOfChars = {};

    for (let maxWindow = 0; maxWindow < str.length; maxWindow++) {
        if (str[maxWindow] in setOfChars) {
            minWindow = Math.max(minWindow, setOfChars[str[maxWindow]] + 1);
        }
        setOfChars[str[maxWindow]] = maxWindow;
        maxSubstr = Math.max(maxSubstr, maxWindow - minWindow + 1);
    }

    return maxSubstr;
}

module.exports = no_repeat_substring