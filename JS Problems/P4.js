// Write a constructor function called Person that takes the following:
// name (string)
// age (number)
// The object should have:
// A greet method that says, "Hello, my name is [name], and I am [age] years old."
// Add a hobby property dynamically after the object is created and then delete it using the delete keyword.


function Person(name, age) {
    this.name = name; // Assigning to the instance
    this.age = age;
    this.greet = function() { // Method to greet
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
    };
}
// Getting input from the user
let name = prompt("Enter your name: ");
let age = Number(prompt("Enter your age: "));
// Creating an instance of Person
let person = new Person(name, age);
// Calling the greet method
person.greet();
