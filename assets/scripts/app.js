const deafultResult = 0;
let currentResult = deafultResult;
let dataEntries = [];

function getNumberInput() {
    return parseInt(userInput.value);
}

function showOutput(operator, resultBefore, calcNumber) {
    const calcShow = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcShow);
}

function dataEntered(operationVal, prevnumVal, numVal, resultVal) {
    entries = {
        operation: operationVal,
        prevnum: prevnumVal,
        num: numVal,
        result: resultVal
    };
    dataEntries.push(entries);
    console.log(dataEntries);
}

// function makeCalculations(operation) {
//     const numberInput = getNumberInput();
//     if (
//         operation !== '+' &&
//         operation !== '-' &&
//         operation !== '*' &&
//         operation !== '/' ||
//         !numberInput
//     ) {
//         return;
//     }
//     const initialResult = currentResult;
//     if (operation === '+') {
//         currentResult +=  numberInput;
//     } else if (operation === '-') {
//         currentResult -=  numberInput;
//     } else if (operation === '*') {
//         currentResult *=  numberInput;
//     } else if (operation === '/') {
//         currentResult /=  numberInput;
//     }
//     showOutput(operation, initialResult, numberInput);
//     dataEntered(operation, initialResult, numberInput, currentResult);
// }

// function sumNumbers() {
//     makeCalculations('+')
// }

// function substractNumbers() {
//     makeCalculations('-')
// }

// function multiplyNumbers() {
//     makeCalculations('*')
// }

// function divideNumbers() {
//     makeCalculations('/')
// }

function calculate(operation) {
    const numberInput = getNumberInput();
    const initialResult = currentResult;
    if(operation === "+"){
        currentResult +=  numberInput;
    } else if(operation === "-"){
        currentResult -=  numberInput;
    } else if(operation === "*"){
        currentResult *=  numberInput;
    } else if(operation === "/"){
        currentResult /=  numberInput;
    }
    dataEntered(operation, initialResult, numberInput, currentResult);
    showOutput(operation, initialResult, numberInput);
}

addBtn.addEventListener('click', calculate.bind(this, "+"));
subtractBtn.addEventListener('click', calculate.bind(this, "-"));
multiplyBtn.addEventListener('click', calculate.bind(this, "*"));
divideBtn.addEventListener('click', calculate.bind(this, "/"));