// ******** Try and Catch Exception *******
let value = (value)=>{
    if (typeof value !== "string"){
        throw new Error("This is not a string");
    }
};
try{
    value(45)
}
catch(e){
    alert(e);
}


// ************* Using throw Statement
// The throw statement lets you create custom errors.
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be at least 18.");
    }
    return "Access granted";
}

try {
    console.log(checkAge(16)); // Will throw an error
} catch (error) {
    console.error(error.message); // Output: Age must be at least 18.
}

// ************  finally block (optional)
// The finally block always executes, whether an error occurs or not.
// It’s used for cleanup tasks (e.g., closing files, clearing intervals, etc.).
// Regardless of whether there’s an error or not:
// The finally block executes.
try {
    let user = JSON.parse('Invalid JSON'); // This will throw an error
    console.log("User's name is:", user.name);
} catch (error) {
    console.log("Error parsing JSON:", error.message);
} finally {
    console.log("Finished attempting to parse JSON.");
}







// *******************  Handling Asynchronous Errors
// When dealing with asynchronous code (e.g., Promises, async/await), error handling requires special techniques.
// Using .catch() with Promises
fetch("invalid-url")
    .then(response => response.json())
    .catch(error => {
        console.error("Fetch failed:", error.message);
    });

// Try and Catch with Asyc await
async function fetchData() {
        try {
            let response = await fetch("invalid-url");
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("An error occurred:", error.message);
        }
    }
    
fetchData();
