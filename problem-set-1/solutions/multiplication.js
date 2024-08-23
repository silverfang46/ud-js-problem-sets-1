function multiply(a, b) {
    let result = 0;

    for (let i = 0; i < b; i++) {
        result += a;
    }

    return result;
}

// Example usage
console.log(multiply(2, 10)); //change a and or b