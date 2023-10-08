const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operate = (x, operator, y) => {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return y === 0 ? "Cannot divide by 0" : divide(x, y);
    default:
      return "Invalid Operator";
  }
};

let buttons = document.querySelector(".buttons-grid").children;
buttons = [...buttons];

const display = document.querySelector(".display");
display.textContent = "";

let x, operator, y;
let displayText = "";

buttons.forEach((button) => {
  if (button.className === "clear") {
    button.addEventListener("click", (e) => {
      display.textContent = "";
      x = undefined;
      y = undefined;
      operator = undefined;
      displayText = "";
    });
  } else if (button.className === "operator") {
    button.addEventListener("click", (e) => {
      console.log(x);

      if (x == undefined) {
        x = Number(display.textContent);
      } else {
        y = Number(display.textContent);
        x = operate(x, operator, y);
        display.textContent = x;
      }
      operator = e.target.textContent;

      displayText = "";
    });
  } else if (button.className == "equals") {
    button.addEventListener("click", (e) => {
      y = Number(display.textContent);
      display.textContent = operate(x, operator, y);
    });
  } else {
    button.addEventListener("click", (e) => {
      displayText += e.target.textContent;
      display.textContent = displayText;
      console.log(x, operator, y);
    });
  }
});
