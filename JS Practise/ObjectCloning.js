// *** clonning through iteration 
let object = {
    Name : "Sania",
    Class : "14",
    Age: 19
}
for(let key in object){
    console.log(object.key);
    
}

// *** cloning through spread operator
const originalObject = { name: "Sania", age: 21 };
const clonedObject = { ...originalObject };

console.log(clonedObject); // { name: 'Sania', age: 21 }
clonedObject.age = 22;
console.log(originalObject); // { name: 'Sania', age: 21 } (no change)
console.log(clonedObject);  // { name: 'Sania', age: 22 }
