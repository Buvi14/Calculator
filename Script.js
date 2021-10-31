var firstValue = "";
var secondValue = "";
var operand = "";
var ans;
var regexp = /^[0-9]$/;
var result = document.querySelector(".show-output");

function setNumber(x) {
  if (result.innerHTML === "0") {
    result.innerHTML = "";
  }
  if (ans !== undefined) {
    ans = undefined;
    result.innerHTML = "";
  }
  if (x === "+" || x === "-" || x === "*" || x === "/" || x === "%") {
    operand = x;
  } else if (regexp.test(x) && operand === "") {
    firstValue += x.toString();
  } else {
    secondValue += x.toString();
  }
  result.innerHTML += x;
}

function answer() {
  result.innerHTML = "";
  if (operand === "+") {
    ans = parseInt(firstValue) + parseInt(secondValue);
  }
  if (operand === "-") {
    ans = parseInt(firstValue) - parseInt(secondValue);
  }
  if (operand === "*") {
    ans = parseInt(firstValue) * parseInt(secondValue);
  }
  if (operand === "/") {
    ans = parseInt(firstValue) / parseInt(secondValue);
  }
  if (operand === "%") {
    ans = parseInt(firstValue) % parseInt(secondValue);
  }
  result.innerHTML = ans ? ans : 0;
  firstValue = "";
  secondValue = "";
  operand = "";
}
