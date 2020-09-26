const generate_suffix_array = (str, arr, ind) => {
    if (str === '') return;
    arr.push({ str: str, ind: ind })
    generate_suffix_array(str.substring(1), arr, ind + 1)
}

const suffix_array = (str) => {
    let arr = [];
    generate_suffix_array(str, arr, 0);
    return arr.sort((a, b) => a.str.localeCompare(b.str));
}

module.exports = suffix_array
