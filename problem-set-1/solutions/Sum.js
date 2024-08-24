function sumOfDigits(number) {
    let sum = 0;

    while (number > 0) {
        sum += number % 10;  //gives us the  last digit of number greater than 10
        number = Math.floor(number / 10); //removed the previous digit from number being processed
    }
    return sum;
}

console.log(sumOfDigits(624));   //  Expected Output: 12

