function add(numA, numB) {
    if(arguments.length === 0 || arguments.length === 1) {
        return null;
    }
    
    if(typeof numA === 'number' && typeof numB === 'number') {
        return numA + numB;
    } else {
        return null;
    }
}

function subtract(numA, numB) {
    if(arguments.length === 0 || arguments.length === 1) {
        return null;
    }
    
    if(typeof numA === 'number' && typeof numB === 'number') {
        return numA - numB;
    } else {
        return null;
    }
}

function multiply(numA, numB) {
    if(arguments.length === 0 || arguments.length === 1) {
        return null;
    }
    
    if(typeof numA === 'number' && typeof numB === 'number') {
        return numA * numB;
    } else {
        return null;
    }
}

function divide(numA, numB) {
    if(arguments.length === 0 || arguments.length === 1) {
        return null;
    }
    
    if(typeof numA === 'number' && typeof numB === 'number') {
        return numA / numB;
    } else {
        return null;
    }
}

function operate(operator, numA, numB) {
    if(typeof operator !== 'string' && typeof numA !== 'number' && typeof numB !== 'number') {
        return null;
    }

    if(numB === 0) {
        firstNum = undefined;
        operator = undefined;
        secondNum = undefined;
        displayText = '0';
        display.textContent = '>:(';

        return null;
    }

    if(operator === 'add') {
        return add(numA, numB);
    } else if(operator === 'subtract') {
        return subtract(numA, numB);
    } else if(operator === 'multiply') {
        return multiply(numA, numB);
    } else if(operator === 'divide') {
        return divide(numA, numB);
    } else {
        return null;
    }
}

function clear(event) {
    displayText = '0';
    display.textContent = displayText;
    firstNum = undefined;
    operator = undefined;
    secondNum = undefined;

    event.stopPropagation();
}

let firstNum = undefined; // The number that will be `numA` in the math functions above
let operator = undefined; // This will be set to the name of the function to be called
let secondNum = undefined; // The number that will be the `numA` in the math functions above

const body = document.querySelector('body');
const display = document.querySelector('.display');
const buttonZero = document.querySelector('.zero');
const buttonDecimal = document.querySelector('.dot');
const buttonOne = document.querySelector('.one');
const buttonTwo = document.querySelector('.two');
const buttonThree = document.querySelector('.three');
const buttonFour = document.querySelector('.four');
const buttonFive = document.querySelector('.five');
const buttonSix = document.querySelector('.six');
const buttonSeven = document.querySelector('.seven');
const buttonEight = document.querySelector('.eight');
const buttonNine = document.querySelector('.nine');
const buttonClear = document.querySelector('.clear');
const buttonPercentage = document.querySelector('.percentage');
const buttonSign = document.querySelector('.sign');
const buttonDivide = document.querySelector('.divide');
const buttonMultiply = document.querySelector('.multiply');
const buttonSubtract = document.querySelector('.subtract');
const buttonAdd = document.querySelector('.add');
const buttonEquals = document.querySelector('.equals');

let displayText = '0';
display.textContent = displayText;

buttonClear.addEventListener('click', clear);

buttonSign.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    if(displayText[0] === '-') {
        displayText = displayText.slice(1);
    } else if(displayText[0] !== '0') {
        displayText = '-' + displayText;
    }
    display.textContent = displayText;

    event.stopPropagation();
});

buttonZero.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    if(displayText === '0') {
        event.stopPropagation();
        return;
    } else {  
        displayText += '0';
        display.textContent = displayText;
    
        event.stopPropagation();
    }
});

buttonDecimal.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    } else if(displayText.includes('.')) {
        event.stopPropagation();
        return;
    }
    
    displayText += '.';
    display.textContent = displayText;

    event.stopPropagation();
});

buttonOne.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    if(displayText === '0') {
        displayText = '1';
        display.textContent = displayText;

        event.stopPropagation();
    } else {
        displayText += '1';
        display.textContent = displayText;
    
        event.stopPropagation();
    }
});

buttonTwo.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    if(displayText === '0') {
        displayText = '2';
        display.textContent = displayText;

        event.stopPropagation();
    } else {
        displayText += '2';
        display.textContent = displayText;
    
        event.stopPropagation();
    }
});

buttonThree.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    if(displayText === '0') {
        displayText = '3';
        display.textContent = displayText;

        event.stopPropagation();
    } else {
        displayText += '3';
        display.textContent = displayText;
    
        event.stopPropagation();
    }
});

buttonFour.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    if(displayText === '0') {
        displayText = '4';
        display.textContent = displayText;

        event.stopPropagation();
    } else {
        displayText += '4';
        display.textContent = displayText;
    
        event.stopPropagation();
    }
});

buttonFive.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    if(displayText === '0') {
        displayText = '5';
        display.textContent = displayText;

        event.stopPropagation();
    } else {
        displayText += '5';
        display.textContent = displayText;
    
        event.stopPropagation();
    }
});

buttonSix.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    if(displayText === '0') {
        displayText = '6';
        display.textContent = displayText;

        event.stopPropagation();
    } else {
        displayText += '6';
        display.textContent = displayText;
    
        event.stopPropagation();
    }
});

buttonSeven.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    if(displayText === '0') {
        displayText = '7';
        display.textContent = displayText;

        event.stopPropagation();
    } else {
        displayText += '7';
        display.textContent = displayText;
    
        event.stopPropagation();
    }
});

buttonEight.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    if(displayText === '0') {
        displayText = '8';
        display.textContent = displayText;

        event.stopPropagation();
    } else {
        displayText += '8';
        display.textContent = displayText;
    
        event.stopPropagation();
    }
});

buttonNine.addEventListener('click', (event) => {
    if(displayText === null) {
        clear(event);
    } else if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    if(displayText === '0') {
        displayText = '9';
        display.textContent = displayText;

        event.stopPropagation();
    } else {
        displayText += '9';
        display.textContent = displayText;
    
        event.stopPropagation();
    }
});

buttonDivide.addEventListener('click', (event) => {
    if(operator !== undefined) {
        if(displayText !== '0') {
            secondNum = +displayText;
            let result = operate(operator, firstNum, secondNum);
            firstNum = result;
            
            displayText = '0';
            display.textContent = displayText;
            
            operator = 'divide';
            
            event.stopPropagation();
            return;
        } else {
            operator = 'divide';
        }

        event.stopPropagation();
        return;
    }

    if(displayText === null) {
        firstNum = 0;
    } else {
        firstNum = +displayText;
    }

    operator = 'divide';

    displayText = '0';
    display.textContent = displayText;
    event.stopPropagation();
});

buttonMultiply.addEventListener('click', (event) => {
    if(operator !== undefined) {
        if(displayText !== '0') {
            secondNum = +displayText;
            let result = operate(operator, firstNum, secondNum);
            firstNum = result;
            
            displayText = '0';
            display.textContent = displayText;
            
            operator = 'multiply';
            
            event.stopPropagation();
            return;
        } else {
            operator = 'multiply';
        }
    }

    if(displayText === null) {
        firstNum = 0;
    } else {
        firstNum = +displayText;
    }

    operator = 'multiply';

    displayText = '0';
    display.textContent = displayText;
    event.stopPropagation();
});

buttonSubtract.addEventListener('click', (event) => {
    if(operator !== undefined) {
        if(displayText !== '0') {
            secondNum = +displayText;
            let result = operate(operator, firstNum, secondNum);
            firstNum = result;
            
            displayText = '0';
            display.textContent = displayText;
            
            operator = 'subtract';
            
            event.stopPropagation();
            return;
        } else {
            operator = 'subtract';
        }
    }

    if(displayText === null) {
        firstNum = 0;
    } else {
        firstNum = +displayText;
    }

    operator = 'subtract';

    displayText = '0';
    display.textContent = displayText;
    event.stopPropagation();
});

buttonAdd.addEventListener('click', (event) => {
    if(operator !== undefined) {
        if(displayText !== '0') {
            secondNum = +displayText;
            let result = operate(operator, firstNum, secondNum);
            firstNum = result;
            
            displayText = '0';
            display.textContent = displayText;
            
            operator = 'add';
            
            event.stopPropagation();
            return;
        } else {
            operator = 'add';
        }
    }

    if(displayText === null) {
        firstNum = 0;
    } else {
        firstNum = +displayText;
    }

    operator = 'add';

    displayText = '0';
    display.textContent = displayText;
    event.stopPropagation();
});

buttonEquals.addEventListener('click', (event) => {
    secondNum = +displayText;
    displayText = operate(operator, firstNum, secondNum);
    if(displayText === null) {
        event.stopPropagation();
        return;
    } else {
        displayText = displayText.toString();
    }
    
    if(displayText.length > 12) {
        displayText = 'Too large!';
    }

    display.textContent = displayText;

    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    event.stopPropagation();
});

body.addEventListener('keypress', (event) => {
    event.preventDefault();
    
    if(event.key === '1') {
        buttonOne.click();
    } else if(event.key === '2') {
        buttonTwo.click();
    } else if(event.key === '3') {
        buttonThree.click();
    } else if(event.key === '4') {
        buttonFour.click();
    } else if(event.key === '5') {
        buttonFive.click();
    } else if(event.key === '6') {
        buttonSix.click();
    } else if(event.key === '7') {
        buttonSeven.click();
    } else if(event.key === '8') {
        buttonEight.click();
    } else if(event.key === '9') {
        buttonNine.click();
    } else if(event.key === '0') {
        buttonZero.click();
    } else if(event.key === '-') {
        buttonSubtract.click();
    } else if(event.key === '+') {
        buttonAdd.click();
    } else if(event.key === '*') {
        buttonMultiply.click();
    } else if(event.key === 'x') {
        buttonMultiply.click();
    } else if(event.key === '/') {
        buttonDivide.click();
    } else if(event.key === '=') {
        buttonEquals.click();
    }  else if(event.key === 'Enter') {
        buttonEquals.click();
    } else if(event.key === '.') {
        buttonDecimal.click();
    }

    event.stopPropagation();
    return;
});