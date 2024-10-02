// Console.log()
console.log("This is the first thing I learn in the JS.")

// Alert 
alert("Your website is Hacked now 🤓")

// Mathematical Operations in JS

// Sum of the numbers
const num1 = 12;
const num2 = 97;
const sum = num1 + num2 ;
console.log(sum);

// Substraction of numbers
const num01 = 89;
const num02 = 80;
const sub = num02 - num01;
console.log(sub);

// Multiplication 
const Multiply = num1 * num2;
console.log(Multiply);

// Division 
const Division = num1 / 2 ;
console.log(Division);

// Reminder or Module
const Reminder = 17 % 2;
console.log(Reminder);

// Equality and if else statment in JS 
if(num1 === 12){
    console.log("num1 is strictly equal to number 12.")
}else if(num1 == 12){
    console.log("num1 is equal to 12.")
}else{
    console.log("They are not equal duh!")
}

let enteredClass = 12;

// Object 
let fruits = {
    fruit1 : "Apple",
    fruit2 : "Banana",
    fruit3 : "Date",
    fruit4 : "Mango"
}

console.log(fruits.fruit3)
console.log(fruits.fruit2)
console.log(fruits.fruit1)
console.log(fruits.fruit4)


let Class = {
    student : 30,
    class : function(){
        if (enteredClass > 10){
            console.log("You are in the Class");
        }else{
            console.log("You are not in the Class");
        }
    }
    
}
// for getting the value of the function we will call the method as the function such as class()
console.log(Class.class())




console.log("This is what I first learn about JavaScript");
alert("This is the second thing I learn about JavaScript");
