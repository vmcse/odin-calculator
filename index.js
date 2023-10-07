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
      return divide(x, y);
    default:
      return "Invalid Operator";
  }
};

let buttons = document.querySelector(".buttons-grid").children;
buttons = [...buttons];

const display = document.querySelector(".display");
display.textContent = "";

buttons.forEach((button) => {
  console.log(button);
  if (button.className === "clear") {
    button.addEventListener("click", (e) => {
      display.textContent = "";
    });
  } else if (button.className == "equals") {
  } else {
    button.addEventListener("click", (e) => {
      display.textContent += e.target.textContent;
    });
  }
});
