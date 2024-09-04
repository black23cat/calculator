let num1 = ''
    ,num2 = ''
    ,operator ='';

const btmScreen = document.querySelector('.btmScreen');
const operandBtn = document.querySelectorAll('.operand');
const operatorBtn = document.querySelectorAll('.operator');
const assignBtn = document.querySelector('.asign');
const topScreen = document.querySelector('.topScreen');

function operate(number1, number2, operator){
    let a = parseFloat(number1);
    let b = parseFloat(number2);
    num2 = '';
		btmScreen.textContent = `${num2}`
    switch(operator){
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
		console.log(num1);
  }

operandBtn.forEach(button =>{
  button.addEventListener('click', ()=>{
		if(num2.length < 9){
			num2 += button.value;
			btmScreen.textContent = `${num2}`;
		}
	});
});

operatorBtn.forEach(e => {
  e.addEventListener('click', () =>{
		if(num1 == '' && num2 == ''){
			btmScreen.textContent = '?????';
		}else if(num1 == ''){
      num1 = num2;
			num2 = ''
      operator = e.value;
    }else if(num2 == ''){
      operator = e.value;
    }else{
    num1 = String(operate(num1, num2, operator));  
		operator = e.value;  
    console.log(num1);
    }
		topScreen.textContent = `${num1} ${operator}`;
  });
});

assignBtn.addEventListener('click', ()=>{
	if(operator == '/' && num2 < '1' && num2 < '-1'){
		btmScreen.textContent = 'LoL XD XD';
		topScreen.textContent = '';
		clearCalculator();
	}else if(num1.length > 0 && num2.length > 0){
		let result = operate(num1, num2, operator);
		btmScreen.textContent = `${result}`;
		topScreen.textContent = '';
		clearCalculator();
	}
});


function clearCalculator(){
	num1 = '';
	num2 = '';
	operator = '';
	input = [];
}