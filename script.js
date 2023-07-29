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