// maps each element of array to something else
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  let fullName = persons.map((item)=> {
    return [item.firstname,item.lastname].join(" ");
  });
  console.log(fullName);
  
// Map Problems
// Given an array of numbers, return a new array with each number squared.

// Create a function that takes an array of names and returns a new array with the names in uppercase.
// Given an array of objects representing employees (each object has name and salary), return a new array with their names and double their salaries.
// Write a function that takes an array of numbers and returns a new array where each number is increased by 10.
// You have an array of words. Create a new array that contains the length of each word.
