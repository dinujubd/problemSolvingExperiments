const generate_suffix_array = (str, arr, ind) => {
    if (str === '') return;
    if (arr.findIndex(x => x.str === str) === -1)
        arr.push({ str: str, ind: ind })
    generate_suffix_array(str.substring(1), arr, ind + 1)
}

const lcp_array = (str) => {
    let arr = [];
    generate_suffix_array(str, arr, 0);

    arr.sort((a, b) => a.str.localeCompare(b.str));

    arr[0].lcp = 0;

    for (let i = 1; i < arr.length; i++) {
        let counter = 0;
        while (arr[i].str.charAt(counter) === arr[i - 1].str.charAt(counter)) counter++;
        arr[i].lcp = counter;
    }

    return arr
}

module.exports = lcp_array
