// ******* new Keyword
// The new keyword is used to create an instance of an object from a constructor function. It does the following:
// Creates a new empty object: {}.
// Binds this to the new object.
// Returns the new object.



// **** Delete keyword
const user = {
    name: "Faizan",
    age: 22
};
console.log(user.age); // 22
delete user.age; // Deletes the 'age' property
console.log(user.age); // undefined





// ******* Factory Functions 
// its return the object 
//here we return the object created in the function
function createObject(){
    return reactangle = {
        length : 2,
        width : 3,
        cal: function calculation(){
            console.log("Here the calculation happened.")
        }
    }
}
// now here the object of the class 
let rec1 = createObject();
rec1.cal();
console.log(rec1.length);

//******* Constructor Functions
// A constructor function is a special type of function designed to create objects. It uses the new keyword to initialize an object. 
//We didn't create any object use this keyword to refer the values to the empty object created by new keyword
function hello(){
    this.Name = Name;
    this.Age = Age;
    this.greet = function(){
        console.log("Hello");
    }
}

let std1 = new hello("Munib", 19);
std1.greet();