function divide(a, b) {
    if (b === 0) {
        console.log("Division by zero"); // bad practice
    }
    return a / b;
}

var x = 10; // use 'var' (code smell)