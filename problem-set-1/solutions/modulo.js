function moduloNoModulo(dividend, divisor) {
    // Ensure both dividend and divisor are positive

    while (dividend >= divisor) {  //Check if dividend is >= divisor
        dividend -= divisor;    //If true subtract divisor from dividend
    }

    return dividend;
}

// Test cases
console.log(moduloNoModulo(137, 10)); // Expected Output: 7
console.log(moduloNoModulo(15, 4)); // Expected Output 3

