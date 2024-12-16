// Sort Problems
let numbers = [12, 89 , 56 , 1 , 0 , 86, 87, 34];
let ascending = numbers.sort();
console.log(ascending);

//1: Sort an array of numbers in descending order.
let descending = numbers.sort((a, b) =>{
    return b - a;
});
console.log(descending);

//2: Given an array of names, sort them alphabetically.
let names = ["Ali", "Salman", "Mozam", "Siyam", "Abid", "Shehzad", "Talha"];
let arranged = names.sort()
console.log(arranged);

//3: Write a function to sort an array of objects representing books (each book has title and pages) by the number of pages in ascending order.
let books = [
    {
        title : "The 48 Laws of power",
        pages: 400
    },      
    {
        title : "The 40 Laws of love",
        pages: 200
    },
    {
        title : "Meditation",
        pages: 800
    },
    {
        title : "Tai Chen",
        pages: 150
    },
    {
        title : "How to Read a person like a Book",
        pages: 350
    },
    {
        title : "Body Language mastery",
        pages: 560
    },
    {
        title : "Islmaic Ways of living",
        pages: 100
    }
];
let ascendingOrder = books.sort((a, b)=>{
    return a.pages - b.pages;
});
console.log(ascendingOrder);


//4: Sort an array of strings based on their lengths, from shortest to longest.
let string = ["Ali", "Salman", "Mozam", "Siyam", "Abid", "Shehzad", "Talha"];
let lengthBased = string.sort((a , b)=>{
    return a.length - b.length;
})
console.log(lengthBased);


//5: Given an array of dates as strings, sort them in chronological order.
