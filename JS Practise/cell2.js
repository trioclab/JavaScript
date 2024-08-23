// Loops in JavaScript
// 1: For loop

let country = "Pakistan";
for (let i = 0; i >= 100; i++) {
  console.log(country);
}

// Write a JavaScript program to calculate the sum of all numbers from 1 to 100 using a for loop.
let number = 0;
let updater = 0;
for (number = 0; number <= 100; number++) {
  updater += number;
  console.log(updater);
}

// Statement: Write a JavaScript program to find all prime numbers between 1 and 50 using a for loop.
for (i = 0; i <= 50; i++) {
  let j = i % 2;
  if (j === 0) {
    console.log(i);
  }
}

// Statement: Write a JavaScript program to find all odd numbers between 1 and 50 using a for loop.
for (i = 0; i <= 50; i++) {
  let j = i % 2;
  if (j !== 0) {
    console.log(i);
  }
}

// Write a program to square of the numbers from 0 to 10.
let num = 0;
for (let i = 0; i <= 10; i++) {
  num = i * i;
  console.log(num);
}

// Program will take the subject name from the user and then it will match any from the array of the subject array then it will give the number of the corresponding subject
let marks = [12, 16, 18, 19];
let subjects = ["Maths", "Urdu", "English"];
let entered_subject = prompt("Enter your Subject = ");
for (let i = 0; i < subjects.length; i++) {
  if (entered_subject == subjects[i]) {
    console.log(`Your ${entered_subject} marks is ${marks[i]}`);
  } else if (entered_subject != subjects[i]) {
    console.log("You've entered invalid subject!");
  }
}

// for of loop

let ali = "He is a Good Boy.";
let size = 0;
for (let i of ali) {
  console.log(i);
  size++;
}
console.log(size);

let String = "He is angry.";
size = 0;
for (let val of String) {
  console.log(val);
  size++;
}
console.log(size);
marks = [12, 23, 67, 34, 89];
let sum = 0;
for (let average of marks) {
  sum = sum + average;
}
let ave = sum / marks.length;
console.log(`Your average marks is ${ave}.`);

// for in loop

let object1 = {
  name: "Sania",
  class: "14",
  rollno: 26,
};

for (let key in object1) {
  console.log(key, object1[key]);
}
// For each Loop
// for each loop is only for arrays 

let array = [12 , 23, 93, 34 , 45, 78];
let add = 0;
array.forEach(function(val){
    console.log(add += val);
})

// second example of forEach Loop

array = [12 , 23, 93, 34 , 45, 78];
add = 0;
array.forEach(function(val){
    console.log(add += val);
})




// While LOOP
let arr = ["Sania KIran", "Sabeen Shehzadi", "Taha Ali"];
let firstName = prompt("Enter You First Name");
let lastName = prompt("Enter You Last Name");
while (true) {
  if ((firstName, lastName)) {
  }
}

// Do While LOOP

do {
  let number = prompt("Enter a number: ");
  if (number % 5 == 0) {
    console.log("The number is the multiple of Five.");
    break;
  } else {
    console.log("It is not the multiple of the five.");
  }
} while (true);
