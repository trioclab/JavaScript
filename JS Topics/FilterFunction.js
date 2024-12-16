// ******* Filter Function 

let arr = [1 ,3 , 4 , -9 , -8 , -6 , 4 , 7 , 10];

let negative = arr.filter((value)=>{
    return value < 0;
})

console.log(negative);


// ******* Problem 
// Filter Problems**********
//1:  Given an array of strings, filter out strings that have a length less than 5.
string = ["Sania", "Mira", "Zainab", "Muskan"];

let filtered = string.filter((e)=>{
    return e.length < 5;
})
console.log(filtered);

//2: From an array of objects representing students (each object has name, age, and grade), filter out students who scored less than 50 in their grade.
let student = [
    {
        name: "Haider",
        age: 17,
        grade : 70
    },
    {
        name: "Haider",
        age: 17,
        grade : 20
    },
    {
        name: "Haider",
        age: 17,
        grade : 45
    },
    {
        name: "Haider",
        age: 17,
        grade : 10
    },
    {
        name: "Haider",
        age: 17,
        grade : 90
    }
]
let failStd = student.filter((value)=>{
    return value.grade < 50;
});
console.log(failStd);

//3: You have an array of words. Filter out all words that don’t start with the letter "A".
let strings = [ "Ali", "Salman", "Mozam", "Siyam", "Abid", "Shehzad", "Talha"];
let filter = strings.filter((value)=>{
    return value.startsWith("A")
})
console.log(filter);


//4: Create a function that filters out products from an array of product objects based on a price greater than 500.
let products = [
    {
        name: "Juice",
        price: 50
    },
    {
        name: "CocaCola",
        price: 500
    },
    {
        name: "Dairy Milk",
        price: 700
    },
    {
        name: "Biscuits",
        price: 600
    },
    {
        name: "Lays",
        price: 900
    },
    {
        name: "Cake",
        price: 1000
    },
    {
        name: "Cream",
        price: 500
    },
    {
        name: "Fruits",
        price: 800
    },
    {
        name: "Noodles",
        price: 100
    }
];
let expensive = products.filter((e)=>{
    if(e.price > 500){
        return e; 
    }
})

console.log(expensive);

