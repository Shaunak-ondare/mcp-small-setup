function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b; // ⚠️ no zero check (Sonar issue)
}

module.exports = { add, divide };