function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function changeCase(str) {
  return str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase();
}

function findStringLength(str) {
  return str.length;
}

function findSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function findLargest(arr) {
  return Math.max(...arr);
}

function findSmallest(arr) {
  return Math.min(...arr);
}