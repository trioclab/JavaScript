// Basic Calculator in JS

// Here are the simple 4 basic operations of the Calculator
// 1: SUM
// 2: SUBSTRACTION
// 3: MULTIPLICATION
// 4: DIVISION


// Here is the some keys points which I learn new in this code
// function and how to call it
// isNaN (is Not a Number) it will check that while the input by the user is the number or not
// || is the and sign
// if else statement 


function Calculator(){
    const num1 = Number(prompt("Enter a Number"));
    const num2 = Number(prompt("Enter a Number"));
    const operator = prompt("Enter the operator + , - , / , *");

if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input. Please enter numbers.");
    return;
  }
}
if (operator === "+"){
    const sum = num1 + num2
    console.log(sum);
}else if(operator === "-"){
    const minus = num2 - num1;
    console.log(minus);
}else if(operator === "*"){
    const multiply = num1 * num2;
    console.log(multiply);
}else if(operator === "/"){
    if(num2 === 0){
        console.log("Division is not possible!");
    }else{
        const divide = num2 / num1 ;
        console.log(divide);
    }
}

Calculator();


// Mathematical Operators using Switch Statement


//  function calculate() {
//   const num1 = Number(prompt("Enter the first number:"));
//   const num2 = Number(prompt("Enter the second number:"));
//   const operator = prompt("Enter the operator (+, -, *, /):");

//   if (isNaN(num1) || isNaN(num2)) {
//     console.log("Invalid input. Please enter numbers.");
//     return;
//   }

//   let result;
//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       if (num2 === 0) {
//         console.log("Division by zero is not allowed.");
//       } else {
//         result = num1 / num2;
//       }
//       break;
//     default:
//       console.log("Invalid operator");
//       return;
//   }

//   console.log(result);
// }

// calculate();
