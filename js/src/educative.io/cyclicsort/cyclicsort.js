const sort = (arr) => {
    let i = 0;

    while(i < arr.length) {
        const j = arr[i] - 1;
        if(arr[i] !== arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]]
        else i++;
    }

    return arr
}

module.exports = sort
