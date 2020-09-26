const generateSuffixArray = (str, arr, ind) => {
    if (str === '') return;
    arr.push({ str: str, ind: ind })
    generateSuffixArray(str.substring(1), arr, ind + 1)
}

const suffixArray = (str) => {
    let arr = [];
    generateSuffixArray(str, arr, 0);
    return arr.sort((a, b) => a.str.localeCompare(b.str));
}

module.exports = suffixArray
