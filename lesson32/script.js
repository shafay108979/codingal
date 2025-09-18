const numberButton = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('.display');

console.log(numberButton);
console.log(operatorButtons);

let currentInput = '';
let previousInput = '';
let operator = null;

const updateDisplay = (value) => {
    display.innerHTML = value;
}

numberButton.forEach(b=>{
    b.addEventListener('click', () => {
        currentInput = currentInput + b.id;
        updateDisplay(currentInput);
    });
});

const calculate = (p,c,o) => {
    switch(o) {
        case 'divide':
            return p / c;
        case 'multiply':
            return p * c;
        case 'subtract':
            return p - c;
        case 'addition':
            return p + c;
        default:
            return '';
    }
}

operatorButtons.forEach(button =>{
    button.addEventListener("click", () => {
        const id = button.id;
        
        switch(id) {
        case 'clear':
            currentInput = ''
            previousInput = ''
            operator = null
            updateDisplay("")
            break;
        case 'backspace':
            currentInput = currentInput.slice(0, -1)
            updateDisplay(currentInput)
            break;
        case 'divide':
        case 'multiply':
        case 'subtract':
        case 'addition':
            if (currentInput) {
                if (previousInput && operator){
                    const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator)

                    previousInput = result.toString()
                    updateDisplay(result);
                } 
                else {
                    previousInput = currentInput;
                }
                    
                currentInput = ''
                operator = id;
            }

            break;
        case 'equals':
            if (operator && currentInput && previousInput) {
                const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator)
                updateDisplay(result.toString());
                currentInput = result.toString()
                previousInput = ''
                operator = null
            }
    })
})