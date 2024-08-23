function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
}
console.log(multiply(2, 10)); //change a and or b