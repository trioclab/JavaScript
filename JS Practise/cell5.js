// functions in Java Script 

// ******Basic function 

let func = function hello(){
    console.log("This is the basic function!!!");
}
hello();   // calling the function 

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

// 

