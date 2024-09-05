let num1 = ''
    ,num2 = ''
    ,operator ='';

const btmScreen = document.querySelector('.btmScreen');
const operandBtn = document.querySelectorAll('.operand');
const operatorBtn = document.querySelectorAll('.operator');
const assignBtn = document.querySelector('.asign');
const topScreen = document.querySelector('.topScreen');
const comma = document.querySelector('.comma');
const allClearBtn = document.querySelector('.clear');
defaultScreen();

function operate(number1, number2, operator){
    let result;
    switch(operator){
      case '+':
        result = parseFloat(number1) + parseFloat(number2);
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
    }
    return (result %1 !== 0)? `${result.toFixed(1)}`
          :(String(result).length > 11)? `${result.toExponential(6)}`
          :`${result}`;

  }

operandBtn.forEach(button =>{
  button.addEventListener('click', ()=>{
		if(num2.length <= 10){
      if(button.value == '0' && num1.length == 0){
        defaultScreen()
      }else{
        num2 += button.value;
        btmScreen.textContent = `${num2}`;
      }
		}
	});
});

operatorBtn.forEach(e => {
  e.addEventListener('click', () =>{
		if(num1.length == 0 && num2.length == 0){
			btmScreen.textContent = '??????????';
		}else if(num1 == ''){
      num1 = num2;
			num2 = ''
      operator = e.value;
      defaultScreen()
    }else if(num2 == ''){
      operator = e.value;
    }else{
      num1 = operate(num1, num2, operator);  
      operator = e.value; 
      num2 = '';
      defaultScreen()
    }
		topScreen.textContent = `${num1} ${operator}`;
  });
});

assignBtn.addEventListener('click', ()=>{
	if(operator == '/' && num2 < '1' && num2 > '-1'){
		clearCalculator();
    btmScreen.textContent = 'LoL XD XD';
  }else if(num1.length > 0 && num2.length > 0){
		let result = operate(num1, num2, operator);
		clearCalculator();
		btmScreen.textContent = `${result}`;
	}
});

comma.addEventListener('click', ()=>{
	if(num2.length == 0 && !(num2.includes('.'))){
		num2 += `0${comma.value}`;
		btmScreen.textContent = `${num2}`
	}else if(num2.length > 0 && !(num2.includes('.'))){
		num2 += comma.value;
		btmScreen.textContent = `${num2}`
	}
});

allClearBtn.addEventListener('click', ()=> {
	clearCalculator();
});

function clearCalculator(){
	num1 = '';
	num2 = '';
	operator = '';
	topScreen.textContent = '';
  defaultScreen();
}

function defaultScreen(){
  btmScreen.textContent = '0';
}