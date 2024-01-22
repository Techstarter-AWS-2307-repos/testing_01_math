function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error("Division against Zero is not allowed.");
  }
  return a / b;
}

module.exports = { add, sub, div, mult };
