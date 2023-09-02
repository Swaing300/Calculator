let currentInput = '';
let result = document.getElementById('result');

function appendToDisplay(value) {
    currentInput += value;
    result.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    result.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        result.value = currentInput;
    } catch (error) {
        result.value = 'Error';
    }
}
