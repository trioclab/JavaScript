// Arrays



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
console.log(fruitsPrice)