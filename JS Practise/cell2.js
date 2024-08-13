// Loops in JavaScript 
// 1: For loop 

let country = "Pakistan";
for ( let i = 0 ; i >= 100 ; i++ ){
    console.log(country);
}

// Write a JavaScript program to calculate the sum of all numbers from 1 to 100 using a for loop.
let number = 0;
let updater = 0;
for(number = 0 ; number <=100 ; number++){
    updater += number;
    console.log(updater)
}

// Statement: Write a JavaScript program to find all prime numbers between 1 and 50 using a for loop.
for(i = 0 ; i<=50 ; i++){
    let j = i % 2;
    if(j === 0){
        console.log(i);
    }
}


// Statement: Write a JavaScript program to find all odd numbers between 1 and 50 using a for loop.
for(i = 0 ; i<=50 ; i++){
    let j = i % 2;
    if(j !== 0){
        console.log(i);
    }
}

// Write a program to square of the numbers from 0 to 10.
let num = 0;
for (let i = 0; i <= 10 ; i++){
    num = i * i ;
    console.log(num);
}


let marks = [12 , 16 , 18 , 19];
let subjects = ["Maths", "Urdu", "English"];
let entered_subject = prompt("Enter your Subject = ")
for(let i = 0; i < subjects.length ; i++){
    if(entered_subject == subjects[i]){
        console.log(`Your ${entered_subject} marks is ${marks[i]}`)
    }else if(entered_subject != subjects[i]){
        console.log("You've entered invalid subject!")
    }
}





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