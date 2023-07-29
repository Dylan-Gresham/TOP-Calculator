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

let firstNum; // The number that will be `numA` in the math functions above
let operator; // This will be set to the name of the function to be called
let secondNum; // The number that will be the `numA` in the math functions above

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

buttonClear.addEventListener('click', (event) => {
    displayText = '0';
    display.textContent = displayText;

    event.stopPropagation();
});

buttonSign.addEventListener('click', (event) => {
    if(displayText.length === 12) {
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
    if(displayText.length === 12) {
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
    if(displayText.length === 12) {
        event.stopPropagation();
        return;
    }
    
    displayText += '.';
    display.textContent = displayText;

    event.stopPropagation();
});

buttonOne.addEventListener('click', (event) => {
    if(displayText.length === 12) {
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
    if(displayText.length === 12) {
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
    if(displayText.length === 12) {
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
    if(displayText.length === 12) {
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
    if(displayText.length === 12) {
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
    if(displayText.length === 12) {
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
    if(displayText.length === 12) {
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
    if(displayText.length === 12) {
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
    if(displayText.length === 12) {
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