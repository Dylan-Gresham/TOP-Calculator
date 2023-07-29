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
