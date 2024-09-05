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
const backspace = document.querySelector('.backspace');
const minusBtn = document.querySelector('.minus');
updateScreen();

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
        updateScreen();
      }else{
        num2 += button.value;
        updateScreen(num2);
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
			num2 = '';
      operator = e.value;
      updateScreen();
    }else if(num2 == ''){
      operator = e.value;
    }else{
      num1 = operate(num1, num2, operator);  
      operator = e.value; 
      num2 = '';
      updateScreen();
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
		updateScreen(result);
	}
});

comma.addEventListener('click', ()=>{
	if(num2.length == 0 && !(num2.includes('.'))){
		num2 += `0${comma.value}`;
		updateScreen(num2);
	}else if(num2.length > 0 && !(num2.includes('.'))){
		num2 += comma.value;
		updateScreen(num2);
	}
});

allClearBtn.addEventListener('click', ()=> {
	clearCalculator();
});

backspace.addEventListener('click', ()=>{
  if(num2.length > 0){
    num2 = num2.slice(0, -1);
    updateScreen(num2);
    if(num2.length == 0){
      updateScreen();
    }else if(num2.length < 2 && num2.charAt(0) == '0'){
      num2 = '';
      updateScreen();
    }
  }
});

minusBtn.addEventListener('click', ()=>{
  if(num2.includes('-')){
    num2 = num2.slice(1);
    updateScreen(num2);
  }else{
    num2 = `-${num2}`;
    updateScreen(num2);
  }
});

function clearCalculator(){
	num1 = '';
	num2 = '';
	operator = '';
	topScreen.textContent = '';
  updateScreen();
}
 
function updateScreen(variable = 0){
  btmScreen.textContent = `${variable}`;
}