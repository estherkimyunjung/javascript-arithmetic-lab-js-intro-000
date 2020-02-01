function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function inc(n) {
  return n + 1
}

function dec(n) {
  return n - 1
}

var b = 10; 
function makeInt(n, b) {
  var a = parseInt('n', b);
  
  if (isNaN(a)) { return NaN }
  return a * 100;
}

function preserveDecimal(n) {
  return parseFloat(n) * 2.0 * Math.PI;
}
