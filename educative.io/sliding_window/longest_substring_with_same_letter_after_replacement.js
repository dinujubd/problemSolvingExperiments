const longest_substring_with_same_letter_after_replacement = function(str, k) {
    if(!str || k > str.length) return 0;

    let minWindow = 0, maxLen = 0, maxFrequency = 0;
    let charMap = {}

    for(let maxWindow = 0; maxWindow < str.length; maxWindow++) {
        const cur = str[maxWindow];
        if(!(cur in charMap)) charMap[cur] = 0;
        charMap[cur]++;
        maxFrequency = Math.max(maxFrequency, charMap[cur]);

        while(maxWindow - minWindow + 1 - maxFrequency > k) {
            charMap[str[minWindow]]--;
            minWindow++;
        }

        maxLen = Math.max(maxLen, maxWindow - minWindow + 1);

    }

    return maxLen;

}

module.exports = longest_substring_with_same_letter_after_replacement