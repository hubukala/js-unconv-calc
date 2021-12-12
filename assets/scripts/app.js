const deafultResult = 0;
let currentResult = deafultResult;

function getNumberInput() {
    return parseInt(userInput.value);
}

function showOutput(operator, resultBefore, calcNumber) {
    const calcShow = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcShow)
}

function sumNumbers() {
    const numberInput = getNumberInput();
    const initialREesult = currentResult;
    currentResult = currentResult + numberInput;
    showOutput('+', initialREesult, numberInput);
}

function substractNumbers() {
    const numberInput = getNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - numberInput;
    showOutput('-', initialResult, numberInput);
}

function multiplyNumbers() {
    const numberInput = getNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * numberInput;
    showOutput('*', initialResult, numberInput);
}

function divideNumbers() {

}

addBtn.addEventListener('click', sumNumbers);
subtractBtn.addEventListener('click', substractNumbers);
multiplyBtn.addEventListener('click', multiplyNumbers)