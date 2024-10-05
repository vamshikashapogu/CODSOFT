// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete last character from display
function deleteChar() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Function to calculate and show result
function calculate() {
    let expression = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(expression);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
