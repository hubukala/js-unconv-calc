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

function sumNumbers() {
    const numberInput = getNumberInput();
    const initialResult = currentResult;
    currentResult +=  numberInput;
    showOutput('+', initialResult, numberInput);
    dataEntered("ADD", initialResult, numberInput, currentResult);
}

function substractNumbers() {
    const numberInput = getNumberInput();
    const initialResult = currentResult;
    currentResult -= numberInput;
    showOutput('-', initialResult, numberInput);
    dataEntered("SUBSTRACT", initialResult, numberInput, currentResult);
}

function multiplyNumbers() {
    const numberInput = getNumberInput();
    const initialResult = currentResult;
    currentResult *=  numberInput;
    showOutput('*', initialResult, numberInput);
    dataEntered("MULTIPLY", initialResult, numberInput, currentResult);
}

function divideNumbers() {
    const numberInput = getNumberInput();
    const initialResult = currentResult;
    currentResult /= numberInput;
    showOutput('/', initialResult, numberInput);
    dataEntered("DIVIDE", initialResult, numberInput, currentResult);
}

addBtn.addEventListener('click', sumNumbers);
subtractBtn.addEventListener('click', substractNumbers);
multiplyBtn.addEventListener('click', multiplyNumbers);
divideBtn.addEventListener('click', divideNumbers);