// functions in Java Script 

// ******Basic function 

let func = function hello(){
    console.log("This is the basic function!!!");
}
hello();   // calling the function 

// ************* return 
function addNumbers(a, b) {
    return a + b; // yahan par return statement sum wapas karega
}
let sum = addNumbers(5, 3); // function call ho raha hai aur sum ko variable mein store kar rahe hain
console.log(sum); // Output: 8

function greet(name) {
    return "Hello, " + name; // Value wapas ho rahi hai
}

let message = greet("Sania"); // Ab ye function return kar raha hai string ko, jo message mein store hogi
console.log(message); // Output: "Hello, Sania"



// ****** Fat arrow function in ES6
let fatFunc = ()=>{
    console.log("This is the basic fat arrow function.");
    return 0 ;
}
fatFunc();

// *******Fat arrow function with one parameter , parameter is the value which we pass in the function 
let paraFunc = (val1 , val2)=>{
     console.log(`The addition of ${val1} and ${val2} is ${val1 + val2}.`)
}
// here 12 and 17 are the parameters of the function name paraFunc
paraFunc(12 , 17);

let oneParam = para=>{
    console.log(`If we get the one parameter in the function then we can remove the fat of the function (). So here is the parameter is ${para}`)
}
oneParam(12);

//******* Fat arrow function with implicit return
let returnFunc = para=> 122;
console.log(returnFunc()); //return the 122 

// *******first class function where a function is going to another function by the variable a
function abcd(a){
   a();
}
abcd(function(){
    console.log("This is a first class function.");
});
console.log(typeof abcd);

// Create a function using the "function" keyword that takes a Array as an argument & returns the number of vowels in the string

let english = ["a", "b", "c", "d", "e"];

function vowels() {
    for (let i = 0; i < english.length; i++) {
        if (["a", "e", "i", "o", "u"].includes(english[i])) {
            console.log("vowel");
        } else {
            console.log("not vowels there");
        }
    }
}
vowels();
console.log(typeof vowels);


// Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string

function countVowel(str){
    for(let count of str){
        if(count === "a" ||count === "e" ||count === "i" ||count === "o" ||count === "u"){
            console.log(`${count} is vowel letter.`);
        }else{
            console.log(`${count} is consonent   letter.`);
        }
    }
}

countVowel("ApnaCollege");
console.log(typeof countVowel);

// for in 
// fat arrow fun with implicit return 
// fat arrow fun with one param
let kk =function(){
    let a = 99;
    return function jj(eee){
        console.log(a*eee);
    }
}

kk();


// rest operator    
let restOpeartor = (...args)=>{
    // let e = 0;
    // e = e + args
    console.log(e);
    args.forEach(e => {
        e =+ e
        console.log(e);
        
    });     
};
restOpeartor(1, 2, 3 , 4 ,7)