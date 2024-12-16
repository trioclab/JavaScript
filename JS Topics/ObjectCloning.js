// object cloning by three methods :
// 1: Iteration 
// 2: Assign 
// 3: Spread



// *** clonning through iteration 
let object = {
    Name : "Sania",
    Class : "14",
    Age: 19
}
for(let key in object){
    console.log(object.key);
    
}

// 2nd way using Object and assgin method
let new_object = Object.assgin({}, object);
console.log(new_object);

// *** cloning through spread operator
const originalObject = { name: "Sania", age: 21 };
const clonedObject = { ...originalObject };

console.log(clonedObject); // { name: 'Sania', age: 21 }
clonedObject.age = 22;
console.log(originalObject); // { name: 'Sania', age: 21 } (no change)
console.log(clonedObject);  // { name: 'Sania', age: 22 }
