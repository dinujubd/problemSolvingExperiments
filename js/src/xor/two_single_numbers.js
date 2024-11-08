const two_single_numbers = (nums) => {
    let n1xn2 = nums.reduce((prev, curr) => prev ^ curr, 0)

    let rightmost_set_bit = 1;

    while ((rightmost_set_bit & n1xn2) === 0) {
        rightmost_set_bit = rightmost_set_bit << 1;
    }

    let num1 = 0, num2 = 0;

    // The diff between two numbers are at least one bit
    // we will xor the numbers who has that bit set in one group
    // and another group who doesn't have set. In that way we will
    // eliminate the duplicate ones and both group will have one left

    nums.forEach((num) => {
        if ((num & rightmost_set_bit) !== 0) // the bit is set
            num1 ^= num;
        else // the bit is not set
            num2 ^= num;
    });

    return [num1, num2];
}


//console.log(two_single_numbers([1, 4, 2, 1, 3, 2, 3]));

module.exports = two_single_numbers