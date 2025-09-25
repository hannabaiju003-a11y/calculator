const resultInput = document.getElementById('result');

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    resultInput.value += operator;
}

function calculateResult() {
    try {
        const result = eval(resultInput.value);
        resultInput.value = result;
    } catch (error) {
        resultInput.value = 'Error';
    }
}

function clearResult() {
    resultInput.value = '';
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}
