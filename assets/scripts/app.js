const deafultResult = 0;
let currentResult = deafultResult;

function sumNumbers(num1, num2){
    const result = num1 + num2;
    return result;
}

sumNumbers()

currentResult = currentResult + 10 * 3;

let calculationDescription = ` ${deafultResult} + 10 * 3`;

outputResult(currentResult, calculationDescription);