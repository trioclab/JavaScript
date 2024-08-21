// Conditional Statements
//  1: If statement
//  2: If else If statement
//  3: Switch Statement

// * : Login Validation:
// Create a function that takes a username and password as input.
// Use conditional statements to check if the credentials match predefined values.
// Return appropriate messages for successful login, incorrect password, or invalid username.
let user_01 = {
    Name : "Ali",
    Pass : "123"
}

function detail(){
    let username = prompt("Enter your username : ")
    let password = prompt("Enter your password : ")
    if( username == user_01.Name && password == user_01.Pass){
        alert("Successfully login!");
    }else{
        alert("Wrong Credientials!");
    }
}

detail()

// * : FizzBuzz Game:
// Write a program that prints numbers from 1 to 100.
// For multiples of 3, print "Fizz" instead of the number.
// For multiples of 5, print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

let number = 1;
for(number ; number <= 100 ; number++){
    // console.log(number);
    if( (number % 3 || number % 5) == 0){
        console.log(`${number} FizzBuzz`);
    }
    else if (number % 5 == 0){
        console.log(`${number} Buzz`);
    }else if(number % 3 == 0){
        console.log(`${number} Fizz`);
    } else{
        console.log(number);
    }
}

// Mixed Concepts:
// Shopping Cart:
// Create an array of objects representing products in a shopping cart.
// Write functions to add items to the cart, remove items, update quantities, and calculate the total price.
// Use conditional statements to handle cases like adding an item that's already in the cart or trying to remove an item that's not there.

let list = [];

let product1, product2, product3;
let products = [
  (product1 = {
    Name: "Pepsi",
    Price: 70,
  }),
  (product2 = {
    Name: "Dew",
    Price: 90,
  }),
  (product3 = {
    Name: "Fanta",
    Price: 80,
  }),
];

console.log("Welcome to the Shop");
console.log("Here are the products: \n 1: Pepsi \n 2: Dew \n 3: Fanta");

let cartproduct = prompt("Enter the product you want to order : ");


