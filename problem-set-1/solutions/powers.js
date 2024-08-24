function power(base, exponent) {
    let result = 1;  // Had to change to 1 from 0 as 0 returned 0, now we mult by 1 to get result

    for (let i = 0; i < exponent; i++) {
        result *= base; // Handles as 1 * base, then base * base then result *base
    }

    return result;
}

console.log(power(5, 2)); // Expected Output: 25
