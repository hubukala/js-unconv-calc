const deafultResult = 0;
let currentResult = deafultResult;

function sumNumbers() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, ' ');
}

addBtn.addEventListener('click', sumNumbers);