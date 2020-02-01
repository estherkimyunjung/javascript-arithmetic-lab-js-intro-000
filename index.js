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
 
function makeInt(n, 10) {
  var a = parseInt('n', 10);
  
  if (isNaN(a)) { return 0 }
  return a * 100;
}

function preserveDecimal(n) {
  return parseFloat(n) * 2.0 * Math.PI;
}
