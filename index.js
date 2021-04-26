// step 2: create a class
// a class like to create a new object; it can store all the information for what's number currently typed and what operation is it;
// then we should to set properties the calculator need to store;

class Calculator {

  constructor(previousOperandTextElement, currentOperandTextElement) {  // to store all the numbers and functions;

    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    // set text elements inside of the calculator class;
    this.clear()
    // we want to clear all the information as soon as we create the calculator;

  }

  clear() {
    this.currentOperand = "";  // clear to an empty string;
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {

  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes("."))
    return
    this.currentOperand = number.currentOperand.toString() + number.toString();  // turn the number into string; because we want our number to be appended not added;
  }


  chooseOperation(operation) {

  }

  compute() {

  }
  // 计算


  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
  // update the values inside the output;

}


// step 1: define the element we would use in the JS;

const numberButtons = document.querySelectorAll("[data-number]");  // select data attribute must inside the [];
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");



// step 3:  hooking up all the different variables;



// define a class by "new classname" and then pass all the thing in the "constructor" into it;
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// means when everytiom click the number button, will trigger "appendNumber" and "updateDisplay" these two function;


numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);  // use one of the object from the "calculator class"
    calculator.updateDisplay();  // show on the output area to show which number and operator we clicked;
  })
})
