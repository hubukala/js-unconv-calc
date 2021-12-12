const deafultResult = 0;
let currentResult = deafultResult;

function getNumberInput() {
    return parseInt(userInput.value);
}

function sumNumbers() {
    const numberInput = getNumberInput();
    const calcShow = `${currentResult} + ${numberInput}`;
    currentResult = currentResult + numberInput;
    outputResult(currentResult, calcShow);
}

function substractNumbers() {
    const numberInput = getNumberInput();
    const calcShow = `${currentResult} - ${numberInput}`;
    currentResult = currentResult - numberInput;
    outputResult(currentResult, calcShow);
}

function multiplyNumbers() {
    return
}

function divideNumbers() {

}

addBtn.addEventListener('click', sumNumbers);
subtractBtn.addEventListener('click', substractNumbers);