// Arrays

const { CloseButton } = require("react-bootstrap");
const { Prev } = require("react-bootstrap/esm/PageItem");



// ***********  arrays and its method

let numbers = [12 , 67 , 49 , 38];
numbers = numbers.toString()
console.log(numbers);

// concatination of the arrays as in the strings

let moods = ["happy", "sad" , "chill"];
let moodMarks = [ 10, 5 , 2];
// it will give the new array meanwhile the moods and moodmarks doesn't change
let mood = moods.concat(moodMarks)
console.log(mood);

// unshift and shift method

moods = ["happy", "sad" , "chill"];
moods.unshift("angry");
console.log(moods);

moodMarks = [ 10, 5 , 2];
let shiftMoodMarks = moodMarks.shift();
console.log(shiftMoodMarks);

// Slice and Splice method 
// slice(startingIndex , EndingIndex)   , it doesn't change the original array
let number = [12 , 34 ,45 ,56 ,67];
number = number.slice(0 , 3);
console.log(number)

// splice(startingIndex , for deleting the value in the arrat , if want to add the new value in the array)   , it will change the original array
// it used for add , remove or replace the values in the array

let fruitsPrice = [ 12 , 34 , 45 , 5 , 90 ,78];
fruitsPrice = fruitsPrice.splice(1 , 4 , 74 , 56);
console.log(fruitsPrice);
console.log(typeof fruitsPrice);


// Push method in array
let array = [12 , 23 ,45 ,67 ,78];
array = array.push(67);
console.log(array);
console.log(typeof array)

// Map method it is similar to forEach loop , difference is that map returns a new array
// arr.map(callbackfunc , index , array)
let cities = ["karachi" , "lahore" , "Islamabad"];
cities.map((i) =>{
    return i;
})

// Filter Method 
let numbrs = [12 , 34 ,45 ,66, 78 , 95];
let evenNumbrs = numbrs.filter((value)=>{
    value = value % 2 === 0; //for even numbers
    console.log(value);
    return value ;
})
console.log(evenNumbrs);

// Reduce method
// It is used when there will be alot of input but just have single output such as for addition or finding the average
// array.reduce(previousValue , currentValue)
let add = [12 , 34 ,56 , 67];
let sum = add.reduce((preVal , val)=>{
    return preVal + val;
})
console.log(sum)

// for finding the maximum number in the array by using reduce method
let ginti = [23 ,345 ,78 ,87 , 56];
let bigNUm = ginti.reduce((pre , val)=>{
    return pre > val ? pre : val ; //for maximum in the array
    // return pre < val ? pre : val ; for minimum number in the array
})
console.log(bigNUm);