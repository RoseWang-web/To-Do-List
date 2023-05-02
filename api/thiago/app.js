function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function changeCase(str) {
    return str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase();
}

function length(str) {
    return str.length;
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function largest(arr) {
    return Math.max(...arr);
}

function smallest(arr) {
    return Math.min(...arr);
}
