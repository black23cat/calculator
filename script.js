const btmScreen = document.querySelector('.btmScreen');
const operandBtn = document.querySelectorAll('.operand');
const operatorBtn = document.querySelectorAll('.operator');
const assignBtn = document.querySelector('.asign');

function operate(number1, number2, operator){
    let a = number1;
    let b = number2;
    num2 = '';
    switch(operator){
      case '+':
        console.log(num1)
        return a + b;
      case '-':
        console.log(num1)
        return a - b;
      case '*':
        console.log(num1)
        return a * b;
      case '/':
        console.log(num1)
        return a / b;
    }
  }
