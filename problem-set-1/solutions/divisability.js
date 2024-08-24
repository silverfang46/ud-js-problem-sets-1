function findDivisibleNumbers(start, end, ...divisors) { // The ...is to create a table
    const result = [];

    for (let i = start; i <= end; i++) {
        if (divisors.every(divisor => i % divisor === 0)) {  //every is to execute a function within the array
            result.push(i);  //push adds the new item to the end of the array/table
        }
    }

    return result;
}

const start = 1500; //Allows user to set the start of the range
const end = 2700; //Allows users to set the end of the range
const divisors = [7, 5]; //Numbers to check for divisibility

console.log(findDivisibleNumbers(start, end, ...divisors));
